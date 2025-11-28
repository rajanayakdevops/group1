import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java Catch Multiple Exceptions</h1>

      <p className="text-gray-700 dark:text-gray-300">Before Java 7, we had to write multiple exception handling blocks for different types of exceptions, even when they contained duplicate code.</p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">Example 1: Multiple catch blocks</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (ArithmeticException e) {
      System.out.println(e.getMessage());
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto border border-gray-700">/ by zero</pre>

      <p className="text-gray-700 dark:text-gray-300">Two exceptions may occur here:</p>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        <li><strong>ArithmeticException:</strong> dividing a number by zero.</li>
        <li><strong>ArrayIndexOutOfBoundsException:</strong> accessing index 10 in an array of size 10.</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300">The expression is evaluated right to left, so <code>ArithmeticException</code> is thrown first.</p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Handle Multiple Exceptions in one catch block</h2>
      <p className="text-gray-700 dark:text-gray-300">Starting from Java 7, you can catch multiple exceptions in a single catch block using the <code>|</code> symbol.</p>

      <h3 className="text-xl font-semibold mt-4">Example 2: Multi-catch block</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto border border-gray-700">/ by zero</pre>

      <p className="text-gray-700 dark:text-gray-300">This method reduces code duplication and produces smaller bytecode.</p>
      <p className="text-gray-700 dark:text-gray-300">Note: A multi-catch parameter is implicitly <strong>final</strong>.</p>


      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Catching Base Exception</h2>
      <p className="text-gray-700 dark:text-gray-300">If exception types have a parent-child relationship, catching the base exception alone is allowed.</p>

      <h3 className="text-xl font-semibold mt-4">Example 3: Catching base exception</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto border border-gray-700">/ by zero</pre>

      <p className="text-gray-700 dark:text-gray-300">All exceptions inherit from <code>Exception</code>, so catching the base class handles them all.</p>


      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Invalid Multi-catch: Base + Child</h2>
      <p className="text-gray-700 dark:text-gray-300">Java does not allow catching a superclass and its subclass in the same multi-catch block.</p>

      <h3 className="text-xl font-semibold mt-4">Example 4: Base + child (Invalid)</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (Exception | ArithmeticException | ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-red-400">Output (Compilation Error)</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto border border-gray-700">Main.java:6: error: Alternatives in a multi-catch statement cannot be related by subclassing</pre>

      <p className="text-gray-700 dark:text-gray-300">Since both <code>ArithmeticException</code> and <code>ArrayIndexOutOfBoundsException</code> are subclasses of <code>Exception</code>, this code is invalid.</p>

      <h3 className="text-xl font-semibold mt-8 text-black">Also Read:</h3>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        <li>Java Exception Handling</li>
        <li>Java try...catch</li>
      </ul>
    </div>
  );
}