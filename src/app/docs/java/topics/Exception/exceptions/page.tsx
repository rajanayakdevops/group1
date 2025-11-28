export default function VariablePage() {
return (
    <div className="prose prose-neutral max-w-none">
      <h1 className="text-3xl font-bold mb-4">Java Exceptions</h1>

      <p>
        An exception is an unexpected event that occurs during the execution of a program.
        It interrupts the normal flow of instructions and may cause the program to terminate abnormally.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why Exceptions Occur</h2>

      <ul className="list-disc pl-6">
        <li>Invalid user input</li>
        <li>Device failure</li>
        <li>Loss of network connection</li>
        <li>Physical limitations (e.g., out of disk space)</li>
        <li>Programming errors</li>
        <li>Trying to open a file that doesn't exist</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Java Exception Hierarchy</h2>

<p>
  The exception hierarchy in Java begins with the <code>Throwable</code> class,
  which is the root of all error and exception types.
</p>

<p>The hierarchy splits into two major branches:</p>

<ul className="list-disc pl-6">
  <li><strong>Error</strong> – represents serious, unrecoverable problems.</li>
  <li><strong>Exception</strong> – represents issues that can be handled in code.</li>
</ul>

<h3 className="text-xl font-semibold mt-4">Errors</h3>

<p>
  Errors indicate situations that are generally outside the control of the programmer.
  These problems are usually severe and should not be handled in application code.
</p>

<ul className="list-disc pl-6">
  <li>JVM Out of Memory</li>
  <li>Memory leaks</li>
  <li>Stack overflow errors</li>
  <li>Library or system incompatibility issues</li>
  <li>Infinite recursion</li>
</ul>

<p>
  Because errors represent critical system-level failures, they should not — and
  typically cannot — be handled by Java programs.
</p>

<h3 className="text-xl font-semibold mt-4">Exceptions</h3>

<p>
  Exceptions represent problems that can be detected and handled during program
  execution. When an exception occurs, Java creates an exception object containing:
</p>

<ul className="list-disc pl-6">
  <li>The name of the exception</li>
  <li>A description of what caused it</li>
  <li>The program state at the moment it occurred</li>
</ul>

<p>
  We will learn how to handle exceptions in the next tutorial. For now, we will
  focus on understanding the types of exceptions in Java.
</p>

      

      <h2 className="text-2xl font-semibold mt-6">Types of Exceptions</h2>

      <h3 className="text-xl font-semibold mt-4">1. RuntimeException (Unchecked Exceptions)</h3>
      <p>
        These are caused by programming mistakes. They are not checked at compile-time.
      </p>

      <ul className="list-disc pl-6">
        <li><code>NullPointerException</code> – using an uninitialized variable</li>
        <li><code>ArrayIndexOutOfBoundsException</code> – accessing invalid array index</li>
        <li><code>ArithmeticException</code> – division by zero</li>
        <li><code>IllegalArgumentException</code> – incorrect API usage</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">2. IOException (Checked Exceptions)</h3>
      <p>
        These must be handled or declared and are checked during compile-time.
      </p>

      <ul className="list-disc pl-6">
        <li><code>FileNotFoundException</code> – file does not exist</li>
        <li>Reading past the end of a file</li>
      </ul>

      <p className="mt-6">
        Up next: how to handle exceptions using <code>try</code>, <code>catch</code>, and <code>finally</code>.
      </p>
    </div>
  );
}