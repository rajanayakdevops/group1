'use client'; // required for useState and useEffect in Next.js

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function JavaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openParent, setOpenParent] = useState<string | null>('introduction'); // default parent
  const [activeLink, setActiveLink] = useState<string>('/docs/java/introduction/get-started'); // default active link

  // Automatically set the parent and active link on page load
  useEffect(() => {
    if (pathname) setActiveLink(pathname);

    if (pathname?.startsWith('/docs/java/introduction')) setOpenParent('introduction');
    else if (pathname?.startsWith('/docs/java/topics')) setOpenParent('fundamentals');
    else if (pathname?.startsWith('/docs/java/flow')) setOpenParent('flow');
    else if (pathname?.startsWith('/docs/java/arrays')) setOpenParent('arrays');
    else if (pathname?.startsWith('/docs/java/oop')) setOpenParent('oop');
  }, [pathname]);

  const toggleParent = (parent: string) => {
    setOpenParent(prev => (prev === parent ? null : parent));
  };

const linkClass = (link: string) =>
  `ml-4 mt-2 block hover:text-[#4a0080] ${
    activeLink === link ? 'text-[#4a0080] font-semibold' : 'text-black'
  }`;

  const buttonClass = (parent: string) =>
    `w-full text-left p-3 rounded-md shadow-sm flex justify-between items-center mb-1 ${
      openParent === parent ? 'bg-[#4a0080] text-white' : 'bg-white text-black'
    }`;

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* SIDEBAR */}
      <aside className="w-72 border-r border-gray-300 p-6">
        <h2 className="text-xl font-semibold mb-6 text-black">Java Documentation</h2>

        <nav className="flex flex-col gap-2 text-sm">

          {/* Java Introduction */}
          <div>
            <button
              className={buttonClass('introduction')}
              onClick={() => toggleParent('introduction')}
            >
              Java Introduction
              <span className={`ml-2 transition-transform duration-200 ${openParent === 'introduction' ? 'rotate-90' : 'rotate-0'}`}>
                ›
              </span>
            </button>
            {openParent === 'introduction' && (
              <div>
                <a
                  href="/docs/java/introduction/get-started"
                  className={linkClass('/docs/java/introduction/get-started')}
                  onClick={() => setActiveLink('/docs/java/introduction/get-started')}
                >
                  Get Started With Java
                </a>
                <a
                  href="/docs/java/introduction/first-program"
                  className={linkClass('/docs/java/introduction/first-program')}
                  onClick={() => setActiveLink('/docs/java/introduction/first-program')}
                >
                  Your First Java Program
                </a>
                <a
                  href="/docs/java/introduction/comments"
                  className={linkClass('/docs/java/introduction/comments')}
                  onClick={() => setActiveLink('/docs/java/introduction/comments')}
                >
                  Java Comments
                </a>
              </div>
            )}
          </div>

          {/* Java Fundamentals */}
          <div>
            <button
              className={buttonClass('fundamentals')}
              onClick={() => toggleParent('fundamentals')}
            >
              Java Fundamentals
              <span className={`ml-2 transition-transform duration-200 ${openParent === 'fundamentals' ? 'rotate-90' : 'rotate-0'}`}>
                ›
              </span>
            </button>
            {openParent === 'fundamentals' && (
              <div>
                <a
                  href="/docs/java/topics/variables"
                  className={linkClass('/docs/java/topics/variables')}
                  onClick={() => setActiveLink('/docs/java/topics/variables')}
                >
                  Variables
                </a>
                <a
                  href="/docs/java/topics/loops"
                  className={linkClass('/docs/java/topics/loops')}
                  onClick={() => setActiveLink('/docs/java/topics/loops')}
                >
                  Loops
                </a>
              </div>
            )}
          </div>

          {/* Flow Control */}
          <div>
            <button
              className={buttonClass('flow')}
              onClick={() => toggleParent('flow')}
            >
              Java Flow Control
              <span className={`ml-2 transition-transform duration-200 ${openParent === 'flow' ? 'rotate-90' : 'rotate-0'}`}>
                ›
              </span>
            </button>
            {openParent === 'flow' && (
              <div>
                <a
                  href="/docs/java/flow/if-else"
                  className={linkClass('/docs/java/flow/if-else')}
                  onClick={() => setActiveLink('/docs/java/flow/if-else')}
                >
                  If-Else
                </a>
                <a
                  href="/docs/java/flow/switch"
                  className={linkClass('/docs/java/flow/switch')}
                  onClick={() => setActiveLink('/docs/java/flow/switch')}
                >
                  Switch
                </a>
                <a
                  href="/docs/java/flow/loops"
                  className={linkClass('/docs/java/flow/loops')}
                  onClick={() => setActiveLink('/docs/java/flow/loops')}
                >
                  Loops
                </a>
              </div>
            )}
          </div>

          {/* Arrays */}
          <div>
            <button
              className={buttonClass('arrays')}
              onClick={() => toggleParent('arrays')}
            >
              Java Arrays
              <span className={`ml-2 transition-transform duration-200 ${openParent === 'arrays' ? 'rotate-90' : 'rotate-0'}`}>
                ›
              </span>
            </button>
            {openParent === 'arrays' && (
              <div>
                <a
                  href="/docs/java/arrays/intro"
                  className={linkClass('/docs/java/arrays/intro')}
                  onClick={() => setActiveLink('/docs/java/arrays/intro')}
                >
                  What are Arrays?
                </a>
                <a
                  href="/docs/java/arrays/types"
                  className={linkClass('/docs/java/arrays/types')}
                  onClick={() => setActiveLink('/docs/java/arrays/types')}
                >
                  Types of Arrays
                </a>
                <a
                  href="/docs/java/arrays/multidimensional"
                  className={linkClass('/docs/java/arrays/multidimensional')}
                  onClick={() => setActiveLink('/docs/java/arrays/multidimensional')}
                >
                  Multidimensional Arrays
                </a>
              </div>
            )}
          </div>

          {/* OOP Section */}
          <div>
            <button
              className={buttonClass('oop')}
              onClick={() => toggleParent('oop')}
            >
              Java OOP (I)
              <span className={`ml-2 transition-transform duration-200 ${openParent === 'oop' ? 'rotate-90' : 'rotate-0'}`}>
                ›
              </span>
            </button>
            {openParent === 'oop' && (
              <div>
                <a
                  href="/docs/java/oop/classes"
                  className={linkClass('/docs/java/oop/classes')}
                  onClick={() => setActiveLink('/docs/java/oop/classes')}
                >
                  Classes & Objects
                </a>
                <a
                  href="/docs/java/oop/inheritance"
                  className={linkClass('/docs/java/oop/inheritance')}
                  onClick={() => setActiveLink('/docs/java/oop/inheritance')}
                >
                  Inheritance
                </a>
                <a
                  href="/docs/java/oop/polymorphism"
                  className={linkClass('/docs/java/oop/polymorphism')}
                  onClick={() => setActiveLink('/docs/java/oop/polymorphism')}
                >
                  Polymorphism
                </a>
                <a
                  href="/docs/java/oop/abstraction"
                  className={linkClass('/docs/java/oop/abstraction')}
                  onClick={() => setActiveLink('/docs/java/oop/abstraction')}
                >
                  Abstraction
                </a>
                <a
                  href="/docs/java/oop/encapsulation"
                  className={linkClass('/docs/java/oop/encapsulation')}
                  onClick={() => setActiveLink('/docs/java/oop/encapsulation')}
                >
                  Encapsulation
                </a>
              </div>
            )}
          </div>

        </nav>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
