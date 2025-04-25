'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'ABOUT', href: '/about' },
  { name: 'EXPERIENCE', href: '/experience' },
  { name: 'EDUCATION', href: '/education' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'RESEARCH', href: '/research' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'PUBLICATIONS', href: '/publications' },
  { name: 'CONTACT', href: '/contact' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export default function NavigationBar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo 和用户信息 */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/site/images/avatar.webp"
                alt="Yuning Gu"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">Yuning Gu</h4>
              <h5 className="text-xs text-gray-600 dark:text-gray-300 leading-tight">谷昱宁</h5>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
              aria-label="菜单"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${lang}${item.href}`}
                className={`text-sm px-2 py-1 rounded transition-colors ${
                  pathname === `/${lang}${item.href}`
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 语言切换 */}
          <div className="hidden md:flex space-x-1.5">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={`/${language.code}${pathname.substring(3) || ''}`}
                className={`text-xs px-2 py-0.5 rounded ${
                  lang === language.code
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {language.code === 'en' ? 'English' : '中文'}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 移动菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 shadow-lg p-4 backdrop-blur-sm">
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${lang}${item.href}`}
                className={`px-3 py-2 rounded transition-colors ${
                  pathname === `/${lang}${item.href}`
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 flex space-x-2">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={`/${language.code}${pathname.substring(3) || ''}`}
                className={`px-3 py-2 rounded flex-1 text-center ${
                  lang === language.code
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {language.code === 'en' ? 'English' : '中文'}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 