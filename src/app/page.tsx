import { redirect } from 'next/navigation';

// 这个页面组件现在只负责重定向到默认语言的主页
export default function RootPage() {
  redirect('/en/about'); // 重定向到英文的 About 页面
  // 注意：redirect() 会抛出一个 NEXT_REDIRECT 错误，这是 Next.js 内部处理重定向的方式
  // 因此不需要在此之后返回任何 JSX
}
