import React from "react";

export default function JavaConstructors() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Constructors
      </h1>

      <p className="text-gray-700 mb-4">
        A constructor in Java is a special method invoked when an object is created. Unlike normal methods, it has the <strong>same name as the class</strong> and has <strong>no return type</strong>.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Test {
  Test() {
    // constructor body
  }
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example: Java Constructor
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  private String name;

  // constructor
  Main() {
    System.out.println("Constructor Called:");
    name = "Programiz";
  }

  public static void main(String[] args) {
    Main obj = new Main();
    System.out.println("The name is " + obj.name);
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Constructor Called:<br />
        The name is Programiz
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Types of Constructors
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li><strong>No-Arg Constructor:</strong> Takes no parameters.</li>
        <li><strong>Parameterized Constructor:</strong> Takes one or more parameters.</li>
        <li><strong>Default Constructor:</strong> Automatically created by the compiler if no constructor is defined.</li>
      </ul>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 text-black">
        No-Arg Constructor Example
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  int i;

  private Main() {
    i = 5;
    System.out.println("Constructor is called");
  }

  public static void main(String[] args) {
    Main obj = new Main();
    System.out.println("Value of i: " + obj.i);
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Constructor is called<br />
        Value of i: 5
      </p>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 text-black">
        Parameterized Constructor Example
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  String language;

  Main(String lang) {
    language = lang;
    System.out.println(language + " Programming Language");
  }

  public static void main(String[] args) {
    Main obj1 = new Main("Java");
    Main obj2 = new Main("Python");
    Main obj3 = new Main("C");
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Java Programming Language<br />
        Python Programming Language<br />
        C Programming Language
      </p>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 text-black">
        Default Constructor Example
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  int a;
  boolean b;

  public static void main(String[] args) {
    Main obj = new Main();
    System.out.println("Default Value:");
    System.out.println("a = " + obj.a);
    System.out.println("b = " + obj.b);
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Default Value:<br />
        a = 0<br />
        b = false
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Constructor Overloading
      </h2>
      <p className="text-gray-700 mb-4">
        Similar to method overloading, constructors can also be overloaded with different parameter lists.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  String language;

  // no-arg constructor
  Main() {
    this.language = "Java";
  }

  // parameterized constructor
  Main(String language) {
    this.language = language;
  }

  public void getName() {
    System.out.println("Programming Language: " + this.language);
  }

  public static void main(String[] args) {
    Main obj1 = new Main();
    Main obj2 = new Main("Python");

    obj1.getName();
    obj2.getName();
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Programming Language: Java<br />
        Programming Language: Python
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Notes:</strong><br />
        Constructors are called automatically when an object is created. They cannot have return types, cannot be abstract, static, or final, and can be overloaded but not overridden.
      </p>
    </div>
  );
}
