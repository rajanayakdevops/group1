import React from "react";

export default function JavaExceptions() {
  return (
    <div className="editor-contents text-black">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Exceptions
      </h1>

      <p className="text-gray-700 mb-4">
        An <strong>exception</strong> is an unexpected event that occurs during program
        execution. It disrupts the normal flow of instructions and can cause programs
        to terminate abnormally.
      </p>

      <p className="text-gray-700 mb-4">Common causes of exceptions include:</p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Invalid user input</li>
        <li>Device failure</li>
        <li>Loss of network connection</li>
        <li>Out of disk memory</li>
        <li>Programming errors</li>
        <li>Opening a file that does not exist</li>
      </ul>

      {/* Section Header */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Java Exception Hierarchy
      </h2>

      <p className="text-gray-700 mb-4">
        The root of the exception hierarchy is the <code>Throwable</code> class. The hierarchy
        splits into two main branches:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Error</strong> – irrecoverable issues (e.g., JVM running out of memory).
        </li>
        <li>
          <strong>Exception</strong> – can be caught and handled.
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Exceptions
      </h2>

      <p className="text-gray-700 mb-4">
        When an exception occurs, Java creates an <strong>exception object</strong> containing
        details such as its name, description, and the program state at the moment it occurred.
      </p>

      <p className="text-gray-700 mb-4">
        There are two major categories of exceptions:
      </p>

      {/* RuntimeException */}
      <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-black">
        1. RuntimeException (Unchecked)
      </h3>

      <p className="text-gray-700 mb-4">
        Runtime exceptions occur due to programmer mistakes. These are <strong>not</strong> checked
        by the compiler.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><code>IllegalArgumentException</code> – improper API use</li>
        <li><code>NullPointerException</code> – accessing null objects</li>
        <li><code>ArrayIndexOutOfBoundsException</code> – invalid array index</li>
        <li><code>ArithmeticException</code> – dividing by zero</li>
      </ul>

      <p className="text-gray-700 mb-4">
        A common way to remember:
        <br />
        <strong>If it is a runtime exception, it is your fault.</strong>
      </p>

      {/* IOException */}
      <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-black">
        2. IOException (Checked)
      </h3>

      <p className="text-gray-700 mb-4">
        Checked exceptions are verified by the compiler. The programmer is required to handle them.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><code>FileNotFoundException</code> – file does not exist</li>
        <li>Attempting to read beyond the end of a file</li>
      </ul>

      {/* Example Code */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Example: Basic Exception Demonstration
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700 overflow-x-auto text-sm sm:text-base mb-6">
{`class Main {
    public static void main(String[] args) {
        try {
            int a = 10 / 0; // triggers ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Exception occurred: " + e.getMessage());
        }

        System.out.println("Program continues...");
    }
}`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
        Output
      </h3>

      <pre className="bg-gray-100 text-gray-900 p-3 rounded-md border border-gray-300 mb-6">
Exception occurred: / by zero
Program continues...
      </pre>

      <p className="text-gray-700">
        Now that you understand exceptions, the next step is learning how to{" "}
        <strong>handle</strong> them using <a href="/docs/java/topics/Exception/try" className="text-blue-600 "><code>try-catch</code></a>, <a href="/docs/java/topics/Exception/exceptions-handling" className="text-blue-600 "><code>finally</code></a>, and{" "}
        <a href="/docs/java/topics/Exception/throw" className="text-blue-600 "><code>throw</code>/<code>throws</code></a>.
      </p>
    </div>
  );
}
