import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java Exception Handling</h1>

      <p>
        In the previous tutorial, we learned about Java exceptions and how they can
        terminate a program unexpectedly. Exception handling allows the program to
        continue execution smoothly even when something goes wrong.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Approaches to Handle Exceptions</h2>
      <ul className="list-disc pl-6">
        <li>try...catch block</li>
        <li>finally block</li>
        <li>throw and throws keyword</li>
      </ul>

      {/* TRY CATCH BLOCK */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">1. Java try...catch Block</h2>
      <p>The try...catch block is the most common way to handle exceptions in Java.</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`try {
  // code that may cause an exception
} catch (Exception e) {
  // code that handles the exception
}`}</pre>

      <h3 className="text-xl font-semibold mt-6">Example: Exception handling using try...catch</h3>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void main(String[] args) {

    try {
      int divideByZero = 5 / 0;
      System.out.println("Rest of code in try block");
    }
    catch (ArithmeticException e) {
      System.out.println("ArithmeticException => " + e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`ArithmeticException => / by zero`}</pre>

      <p>
        Here, Java skips the remaining code in the try block when an exception occurs.
        The catch block handles the exception.
      </p>

      {/* FINALLY BLOCK */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">2. Java finally Block</h2>
      <p>
        The <strong>finally</strong> block always executes—whether an exception occurs
        or not. It is often used for closing files, connections, or cleanup tasks.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`try {
  // code
}
catch (Exception e) {
  // handle exception
}
finally {
  // this block always runs
}`}</pre>

      <h3 className="text-xl font-semibold mt-6">Example: Using finally Block</h3>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void main(String[] args) {
    try {
      int divideByZero = 5 / 0;
    }
    catch (ArithmeticException e) {
      System.out.println("ArithmeticException => " + e.getMessage());
    }
    finally {
      System.out.println("This is the finally block");
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`ArithmeticException => / by zero
This is the finally block`}</pre>

      <p>
        The finally block ensures important code executes regardless of exceptions.
      </p>

      {/* THROW AND THROWS */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">3. Java throw and throws Keyword</h2>

      <h3 className="text-xl font-semibold mt-4">Using throw</h3>
      <p>
        The <code>throw</code> keyword is used to manually throw an exception.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void divideByZero() {
    throw new ArithmeticException("Trying to divide by 0");
  }

  public static void main(String[] args) {
    divideByZero();
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`Exception in thread "main" java.lang.ArithmeticException: Trying to divide by 0`}</pre>

      <h3 className="text-xl font-semibold mt-6">Using throws</h3>
      <p>
        The <code>throws</code> keyword declares the type of exception a method may
        generate.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`import java.io.*;

class Main {
  public static void findFile() throws IOException {
    File newFile = new File("test.txt");
    FileInputStream stream = new FileInputStream(newFile);
  }

  public static void main(String[] args) {
    try {
      findFile();
    }
    catch (IOException e) {
      System.out.println(e);
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`java.io.FileNotFoundException: test.txt (The system cannot find the file specified)`}</pre>

      <p className="mt-6">
        If a method does not handle exceptions internally, it must declare them using
        the <code>throws</code> keyword.
      </p>
    </div>
  );
}