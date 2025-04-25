'use client';

import { useState, useEffect } from 'react';

export default function ClientOnlyWrapper({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // 或者返回一个占位符
  }

  return <>{children}</>;
} 