import React from "react";

export default function JavaInstanceof() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java <code>instanceof</code> Operator
      </h1>

      <p className="text-gray-700 mb-4">
        The <code>instanceof</code> <a href="/docs/java/topics/Java-Fundamentals/Java-Operators" className="text-blue-600 ">operator</a> in Java is used to check whether an object is an instance of a particular <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">class</a> or <a href="/docs/java/topics/oop2/interface" className="text-blue-600 ">interface</a>. It returns <strong>true</strong> if the object is an instance of the specified type, otherwise <strong>false</strong>.
      </p>

      <p className="text-gray-700 mb-4">
        Syntax:
      </p>
      <pre className="bg-black-100 text-gray-900 p-3 rounded-md mb-4 border border-gray-300 overflow-x-auto">
objectName instanceof className;
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 1: Basic Usage
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
    public static void main(String[] args) {
        String name = "Programiz";
        boolean result1 = name instanceof String;
        System.out.println("name is an instance of String: " + result1);

        Main obj = new Main();
        boolean result2 = obj instanceof Main;
        System.out.println("obj is an instance of Main: " + result2);
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Output:
      </p>
      <pre className="bg-blcak-100 text-gray-900 p-3 rounded-md mb-4 border border-gray-300">
name is an instance of String: true
obj is an instance of Main: true
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 2: During Inheritance
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Animal {}
class Dog extends Animal {}

class Main {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        System.out.println(d1 instanceof Dog);    // true
        System.out.println(d1 instanceof Animal); // true
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Here, <code>d1</code> is an instance of both the subclass <code>Dog</code> and its superclass <code>Animal</code>.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 3: With Interfaces
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`interface Animal {}
class Dog implements Animal {}

class Main {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        System.out.println(d1 instanceof Animal); // true
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        The <code>instanceof</code> operator can also be used to check if an object implements an interface.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Note:
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>All Java <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">classes</a> inherit from <code>Object</code>. So every object is an instance of <code>Object</code>.</li>
        <li>Using <code>instanceof</code> helps in type-checking before casting objects to prevent <code>ClassCastException</code>.</li>
      </ul>
    </div>
  );
}
