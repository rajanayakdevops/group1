import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java throw and throws</h1>

      <p>
        In Java, exceptions can be categorized into two types:
      </p>

      <ul className="list-disc ml-6">
        <li>
          <strong>Unchecked Exceptions:</strong> Not checked at compile-time but at runtime.
          Examples: <code>ArithmeticException</code>, <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>.
        </li>
        <li>
          <strong>Checked Exceptions:</strong> Checked at compile-time. Examples: <code>IOException</code>, <code>InterruptedException</code>.
        </li>
      </ul>

      <p>Unchecked exceptions usually do not need to be handled — fix the programming errors instead.</p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3">Java <code>throws</code> Keyword</h2>
      <p>
        The <code>throws</code> keyword is used in a method declaration to specify exceptions that might occur within it.
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
    } catch(IOException e) {
      System.out.println(e);
    }
  }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`java.io.FileNotFoundException: test.txt (No such file or directory)`}</pre>

      <p>
        You can also declare multiple exceptions with <code>throws</code>:
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`import java.io.*;

class Main {
  public static void findFile() throws NullPointerException, IOException, InvalidClassException {
    // code that may throw exceptions
  }

  public static void main(String[] args) {
    try {
      findFile();
    } catch(IOException e1) {
      System.out.println(e1.getMessage());
    } catch(InvalidClassException e2) {
      System.out.println(e2.getMessage());
    }
  }
}`}</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3">Java <code>throw</code> Keyword</h2>
      <p>
        The <code>throw</code> keyword is used to explicitly throw a single exception.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
  public static void divideByZero() {
    throw new ArithmeticException("Trying to divide by 0");
  }

  public static void main(String[] args) {
    divideByZero();
  }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`Exception in thread "main" java.lang.ArithmeticException: Trying to divide by 0
    at Main.divideByZero(Main.java:3)
    at Main.main(Main.java:7)`}</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3">Throwing Checked Exception</h2>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`import java.io.*;

class Main {
  public static void findFile() throws IOException {
    throw new IOException("File not found");
  }

  public static void main(String[] args) {
    try {
      findFile();
      System.out.println("Rest of code in try block");
    } catch (IOException e) {
      System.out.println(e.getMessage());
    }
  }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-semibold mt-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`File not found`}</pre>

      <p>
        In the above example, the checked exception <code>IOException</code> must be declared with <code>throws</code> and handled with a <code>try...catch</code> block.
      </p>
    </div>
  );
}