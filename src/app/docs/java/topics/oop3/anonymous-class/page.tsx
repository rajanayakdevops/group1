"use client";
import React from "react";

export default function AnonymousClassPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Anonymous Class
      </h1>

      <p className="text-gray-700">
        In Java, a class can contain another class known as a nested class. It is
        possible to create a nested class without giving it a name. Such a class is
        known as an <strong>anonymous class</strong>.
      </p>

      <p className="text-gray-700">
        An anonymous class must be defined inside another class. Hence, it is also
        known as an <strong>anonymous inner class</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Syntax</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class OuterClass {

    // defining anonymous class
    object1 = new Type(parameterList) {
        // body of the anonymous class
    };
}`}</pre>

      <p className="text-gray-700">Here, <code>Type</code> can be:</p>

      <ul className="list-disc ml-6 text-gray-700">
        <li>A superclass that the anonymous class extends</li>
        <li>An interface that the anonymous class implements</li>
      </ul>

      <p className="text-gray-700">
        Anonymous classes are defined inside an expression, which is why a semicolon
        is required at the end.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Example 1: Anonymous Class Extending a Class
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Polygon {
    public void display() {
        System.out.println("Inside the Polygon class");
    }
}

class AnonymousDemo {
    public void createClass() {

        // creation of anonymous class extending class Polygon
        Polygon p1 = new Polygon() {
            public void display() {
                System.out.println("Inside an anonymous class.");
            }
        };
        p1.display();
    }
}

class Main {
    public static void main(String[] args) {
        AnonymousDemo an = new AnonymousDemo();
        an.createClass();
    }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Inside an anonymous class.`}</pre>

      <p className="text-gray-700">
        In this example, the anonymous class overrides the{" "}
        <code>display()</code> method of the <code>Polygon</code> class.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Example 2: Anonymous Class Implementing an Interface
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`interface Polygon {
    public void display();
}

class AnonymousDemo {
    public void createClass() {

        // anonymous class implementing interface
        Polygon p1 = new Polygon() {
            public void display() {
                System.out.println("Inside an anonymous class.");
            }
        };
        p1.display();
    }
}

class Main {
    public static void main(String[] args) {
        AnonymousDemo an = new AnonymousDemo();
        an.createClass();
    }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Inside an anonymous class.`}</pre>

      <p className="text-gray-700">
        Here, the anonymous class implements the <code>Polygon</code> interface and
        provides its own implementation of the <code>display()</code> method.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Advantages of Anonymous Classes
      </h2>

      <ul className="list-decimal ml-6 text-gray-700">
        <li><a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">Objects</a> are created only when needed.</li>
        <li>Useful for performing small tasks without creating separate <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">classes</a>.</li>
        <li>Makes the code concise and readable.</li>
      </ul>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700 mt-4">{`Object obj = new Example() {
    public void display() {
        System.out.println("Anonymous class overrides the method display().");
    }
};`}</pre>

      <p className="text-gray-700">
        This dynamically creates an anonymous class object to override{" "}
        <code>display()</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Also Read</h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="/docs/java/topics/oop3/nested-and-inner-class" className="text-blue-600 ">Java Nested and Inner Class </a></li>
        <li><a href="/docs/java/topics/oop3/nested-static-class" className="text-blue-600 ">Java Nested Static Class </a></li>
      </ul>
    </div>
  );
}
