import React from "react";

export default function JavaFinalKeyword() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java <code>final</code> Keyword
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, the <code>final</code> keyword is used to define constants. It can be applied to <a href="/docs/java/topics/Java-Fundamentals/Java-variables-and-Literals" className="text-blue-600 ">variables</a>, <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">methods</a>, and <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">classes</a>. Once declared, a final entity cannot be changed:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Final variable: cannot be reassigned</li>
        <li>Final method: cannot be <a href="/docs/java/topics/oop2/method-overriding" className="text-blue-600 ">overridden</a> </li>
        <li>Final class: cannot be extended</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        1. Final Variable
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  public static void main(String[] args) {
    // create a final variable
    final int AGE = 32;

    // Uncommenting the next line will cause a compilation error
    // AGE = 45;

    System.out.println("Age: " + AGE);
  }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Once a final variable is assigned, its value cannot be changed. By convention, final variables are written in uppercase.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        2. Final Method
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class FinalDemo {
    public final void display() {
      System.out.println("This is a final method.");
    }
}

class Main extends FinalDemo {
    // Uncommenting the next method will cause a compilation error
    // public final void display() {
    //     System.out.println("Overriding final method");
    // }

    public static void main(String[] args) {
        Main obj = new Main();
        obj.display();
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        A final method cannot be overridden by a subclass. It ensures that the method’s behavior remains unchanged.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        3. Final Class
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// final class
final class FinalClass {
    public void display() {
        System.out.println("This is a method in a final class.");
    }
}

// Uncommenting the next class will cause a compilation error
// class Main extends FinalClass {
//     public void display() {
//         System.out.println("Attempting to override final class");
//     }
// }

public class Test {
    public static void main(String[] args) {
        FinalClass obj = new FinalClass();
        obj.display();
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        A final class cannot be extended. It ensures that the implementation of the class is complete and cannot be modified.
      </p>

      <p className="text-gray-700 mt-6">
        The <code>final</code> keyword is commonly used for constants, immutable classes, and methods that should not be changed by subclasses.
      </p>
    </div>
  );
}
