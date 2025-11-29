import React from "react";

export default function Javatrywithresources() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java try-with-resources
      </h1>

      <p className="text-gray-700">
        The try-with-resources statement automatically closes all resources at
        the end of execution. A resource is any object that must be closed after
        use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Syntax</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`try (resource declaration) {
  // use of the resource
} catch (ExceptionType e1) {
  // catch block
}`}</pre>

      <p className="text-gray-700">A try-with-resources statement works by:</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Declaring and instantiating resources inside the try clause.</li>
        <li>
          Automatically closing all resources that implement{" "}
          <code>AutoCloseable</code>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Example 1: try-with-resources
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`import java.io.*;

class Main {
  public static void main(String[] args) {
    String line;
    try(BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
      while ((line = br.readLine()) != null) {
        System.out.println("Line =>"+line);
      }
    } catch (IOException e) {
      System.out.println("IOException in try block =>" + e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Output (file not found)
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`IOException in try-with-resources block =>test.txt (No such file or directory)`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Output (file exists)
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Entering try-with-resources block
Line =>test line`}</pre>

      <p className="text-gray-700">
        Resources declared inside try are automatically closed, whether
        execution completes normally or with an exception.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Suppressed Exceptions
      </h2>
      <p className="text-gray-700">
        If exceptions occur in both the try block and in resource closing, the
        exception from the try block is thrown, and the close exception becomes
        a <strong>suppressed exception</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Retrieving suppressed exceptions
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`catch(IOException e) {
  System.out.println("Thrown exception=>" + e.getMessage());
  Throwable[] suppressedExceptions = e.getSuppressed();
  for (int i = 0; i < suppressedExceptions.length; i++) {
    System.out.println("Suppressed exception=>" + suppressedExceptions[i]);
  }
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Advantages of try-with-resources
      </h2>
      <h3 className="text-xl font-semibold mt-4 text-black">
        1. No need for finally block
      </h3>
      <p className="text-gray-700">
        Before Java 7, resources needed to be closed manually inside a finally
        block, making code more complex.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Example 2: closing resource using finally block
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`import java.io.*;

class Main {
  public static void main(String[] args) {
    BufferedReader br = null;
    String line;

    try {
      System.out.println("Entering try block");
      br = new BufferedReader(new FileReader("test.txt"));
      while ((line = br.readLine()) != null) {
        System.out.println("Line =>"+line);
      }
    } catch (IOException e) {
      System.out.println("IOException in try block =>" + e.getMessage());
    } finally {
      System.out.println("Entering finally block");
      try {
        if (br != null) {
          br.close();
        }
      } catch (IOException e) {
        System.out.println("IOException in finally block =>" + e.getMessage());
      }
    }
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Entering try block
Line =>line from test.txt file
Entering finally block`}</pre>

      <p className="text-gray-700">
        Using try-with-resources improves readability and reduces boilerplate.
      </p>

      <h3 className="text-xl font-semibold mt-8 text-black">
        2. try-with-resources with multiple resources
      </h3>
      <p className="text-gray-700">
        Multiple resources can be declared by separating them with a semicolon.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Example 3: multiple resources
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`import java.io.*;
import java.util.*;

class Main {
  public static void main(String[] args) throws IOException {
    try (Scanner scanner = new Scanner(new File("testRead.txt"));
         PrintWriter writer = new PrintWriter(new File("testWrite.txt"))) {
      while (scanner.hasNext()) {
        writer.print(scanner.nextLine());
      }
    }
  }
}`}</pre>

      <p className="text-gray-700">
        When multiple resources are declared, they are closed in{" "}
        <strong>reverse order</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Java 9 enhancement
      </h2>
      <p className="text-gray-700">
        Java 9 allows passing already-declared resources to try-with-resources,
        as long as they are effectively final.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Scanner scanner = new Scanner(new File("testRead.txt"));
try (scanner) {
  // code
}`}</pre>

      <p className="text-gray-700">
        This code now works without errors starting from Java 9.
      </p>
    </div>
  );
}
