import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java try...catch Blocks</h1>

      <p>
        The <strong>try...catch</strong> block in Java is used to handle exceptions
        and prevent the abnormal termination of a program.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Syntax of try...catch</h2>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`try {
  // code
} catch(Exception e) {
  // handle exception
}`}</pre>

      <h3 className="text-xl font-semibold mt-6">Example: Java try...catch block</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void main(String[] args) {
    try {
      int divideByZero = 5 / 0;
      System.out.println("Rest of code in try block");
    } catch (ArithmeticException e) {
      System.out.println("ArithmeticException => " + e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`ArithmeticException => / by zero`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">try...finally Block</h2>
      <p>
        The <strong>finally</strong> block always executes, whether an exception occurs
        or not.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void main(String[] args) {
    try {
      int divideByZero = 5 / 0;
    } finally {
      System.out.println("Finally block is always executed");
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`Finally block is always executed
Exception in thread "main" java.lang.ArithmeticException: / by zero`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">try...catch...finally Block</h2>
      <p>
        You can also use a <strong>finally</strong> block after a try...catch block
        to ensure cleanup code is executed.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`import java.io.*;

class ListOfNumbers {
  private int[] list = {5, 6, 8, 9, 2};

  public void writeList() {
    PrintWriter out = null;
    try {
      System.out.println("Entering try statement");
      out = new PrintWriter(new FileWriter("OutputFile.txt"));
      for (int i = 0; i < 7; i++) {
        out.println("Value at: " + i + " = " + list[i]);
      }
    } catch (Exception e) {
      System.out.println("Exception => " + e.getMessage());
    } finally {
      if (out != null) {
        System.out.println("Closing PrintWriter");
        out.close();
      } else {
        System.out.println("PrintWriter not open");
      }
    }
  }
}

class Main {
  public static void main(String[] args) {
    ListOfNumbers list = new ListOfNumbers();
    list.writeList();
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`Entering try statement
Exception => Index 5 out of bounds for length 5
Closing PrintWriter`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Multiple Catch Blocks</h2>
      <p>
        You can use multiple catch blocks to handle different exceptions differently.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class ListOfNumbers {
  public int[] arr = new int[10];
  public void writeList() {
    try {
      arr[10] = 11;
    } catch (NumberFormatException e1) {
      System.out.println("NumberFormatException => " + e1.getMessage());
    } catch (IndexOutOfBoundsException e2) {
      System.out.println("IndexOutOfBoundsException => " + e2.getMessage());
    }
  }
}

class Main {
  public static void main(String[] args) {
    ListOfNumbers list = new ListOfNumbers();
    list.writeList();
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`IndexOutOfBoundsException => Index 10 out of bounds for length 10`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Catching Multiple Exceptions</h2>
      <p>
        Java SE 7+ allows catching multiple exceptions in a single catch block.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`try {
  // code
} catch (ExceptionType1 | ExceptionType2 ex) {
  // handle multiple exceptions
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Try-with-Resources Statement</h2>
      <p>
        The try-with-resources statement automatically closes resources at the end of
        the statement. This is also called automatic resource management.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`try (PrintWriter out = new PrintWriter(new FileWriter("OutputFile.txt"))) {
  // use the resource
} catch (Exception e) {
  // handle exception
}`}</pre>
    </div>
  );
}