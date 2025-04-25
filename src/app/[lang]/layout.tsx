import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { isValidLocale } from '@/lib/i18n/config'
import { notFound } from 'next/navigation'
// import dynamic from 'next/dynamic' // 不再需要
import NavigationBar from '@/components/common/NavigationBar' // 恢复路径别名
import ClientOnlyWrapper from '@/components/common/ClientOnlyWrapper' // 导入包装器

// const NavigationBar = dynamic(() => import('@/components/common/NavigationBar'), {
//   ssr: false,
// })

const inter = Inter({ subsets: ['latin'] })

// Metadata can still be defined here if needed for specific language routes
// export const metadata: Metadata = { ... }

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isValidLocale(params.lang)) {
    notFound()
  }

  // 返回布局结构，不包含 <html> 或 <body>
  return (
    <div className="min-h-screen relative">
      {/* 使用包装器确保 NavigationBar 只在客户端渲染 */}
      <ClientOnlyWrapper>
        <NavigationBar lang={params.lang} />
      </ClientOnlyWrapper>
      {/* 调整 margin-top 以获得合适的间距 */}
      <main className="mt-36 p-4 md:p-6 lg:p-8">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
} 