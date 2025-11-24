'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useJavaContext } from './JavaContext';
import Parent from './Parent';
import { sidebarData } from './sidebarData';

export default function Sidebar() {
  const pathname = usePathname();
  const { setActiveLink, setOpenParent } = useJavaContext();

useEffect(() => {
  if (!pathname) return;

  setActiveLink(pathname);

  if (pathname.startsWith('/docs/java/topics/Java-Introduction'))
    setOpenParent('introduction');

  else if (pathname.startsWith('/docs/java/topics/Java-Fundamentals'))
    setOpenParent('fundamentals');

  else if (pathname.startsWith('/docs/java/topics/flow'))
    setOpenParent('flow');

  else if (pathname.startsWith('/docs/java/topics/arrays'))
    setOpenParent('arrays');

  else if (pathname.startsWith('/docs/java/topics/oop1'))
    setOpenParent('oop');

  else if (pathname.startsWith('/docs/java/topics/oop2'))
    setOpenParent('oop2');

  else if (pathname.startsWith('/docs/java/topics/oop3'))
    setOpenParent('oop3');

  else if (pathname.startsWith('/docs/java/topics/Exception'))
    setOpenParent('Exception');

  else if (pathname.startsWith('/docs/java/topics/List'))
    setOpenParent('List');

  else if (pathname.startsWith('/docs/java/topics/Queue'))
    setOpenParent('Queue');

  else if (pathname.startsWith('/docs/java/topics/Map'))
    setOpenParent('Map');

  else if (pathname.startsWith('/docs/java/topics/Set'))
    setOpenParent('Set');
  
}, [pathname, setActiveLink, setOpenParent]);


  return (
    <aside className="w-72 border-r border-gray-300 p-6">
      <h2 className="text-xl font-semibold mb-6 text-black">Java Documentation</h2>
      <nav className="flex flex-col gap-2 text-sm">
        {sidebarData.map((parent) => (
          <Parent
            key={parent.parent}
            parent={parent.parent}
            label={parent.label}
            childrenLinks={parent.children}
          />
        ))}
      </nav>
    </aside>
  );
}
