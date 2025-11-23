export default function JavaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-120px)] bg-background">

      {/* SIDEBAR */}
      <aside className="w-72 border-r border-gray-300 p-6 bg-muted/30">

        <h2 className="text-xl font-semibold mb-6">Java Documentation</h2>

        <nav className="flex flex-col gap-2 text-sm">

          {/* Java Introduction */}
          <details className="group">
            <summary className="cursor-pointer p-3 bg-white rounded-md shadow-sm flex justify-between items-center">
              Java Introduction
              <span>›</span>
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1">
              <a href="/docs/java/introduction/get-started">Get Started With Java</a>
              <a href="/docs/java/introduction/first-program">Your First Java Program</a>
              <a href="/docs/java/introduction/comments">Java Comments</a>
            </div>
          </details>

          {/* Java Fundamentals */}
          <details>
            <summary className="cursor-pointer p-3 bg-white rounded-md shadow-sm flex justify-between items-center">
              Java Fundamentals
              <span>›</span>
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1">
              <a href="/docs/java/topics/variables">Variables</a>
              <a href="/docs/java/topics/loops">Loops</a>
            </div>
          </details>

          {/* Flow Control */}
          <details>
            <summary className="cursor-pointer p-3 bg-white rounded-md shadow-sm flex justify-between items-center">
              Java Flow Control
              <span>›</span>
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1">
              <a href="/docs/java/flow/if-else">If-Else</a>
              <a href="/docs/java/flow/switch">Switch</a>
              <a href="/docs/java/flow/loops">Loops</a>
            </div>
          </details>

          {/* Arrays */}
          <details>
            <summary className="cursor-pointer p-3 bg-white rounded-md shadow-sm flex justify-between items-center">
              Java Arrays
              <span>›</span>
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1">
              <a href="/docs/java/arrays/intro">What are Arrays?</a>
              <a href="/docs/java/arrays/types">Types of Arrays</a>
              <a href="/docs/java/arrays/multidimensional">Multidimensional Arrays</a>
            </div>
          </details>

          {/* OOP Section */}
          <details>
            <summary className="cursor-pointer p-3 bg-white rounded-md shadow-sm flex justify-between items-center">
              Java OOP (I)
              <span>›</span>
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1">
              <a href="/docs/java/oop/classes">Classes & Objects</a>
              <a href="/docs/java/oop/inheritance">Inheritance</a>
              <a href="/docs/java/oop/polymorphism">Polymorphism</a>
              <a href="/docs/java/oop/abstraction">Abstraction</a>
              <a href="/docs/java/oop/encapsulation">Encapsulation</a>
            </div>
          </details>

        </nav>

      </aside>

      {/* RIGHT SIDE CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
