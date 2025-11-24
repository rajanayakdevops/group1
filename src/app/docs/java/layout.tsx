'use client';
import Sidebar from '@/components/java-components/Sidebar';
import { JavaProvider } from '@/components/java-components/JavaContext';

export default function JavaLayout({ children }: { children: React.ReactNode }) {
  return (
    <JavaProvider>
      <div className="flex min-h-[calc(100vh-120px)]">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </JavaProvider>
  );
}
