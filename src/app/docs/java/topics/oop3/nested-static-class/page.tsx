// app/java/nested-static-class/page.tsx
import React from "react";

export default function NestedStaticClassPage() {
  return (
    <div className="editor-contents text-black">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Nested Static Class
      </h1>

      <p className="text-gray-700">
        As learned in previous tutorials, we can have a <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">class</a> inside another class in Java. 
        Such classes are known as <a href="/docs/java/topics/oop3/nested-and-inner-class" className="text-blue-600 ">nested class</a>. In Java, nested classes are of two types:
      </p>

      <ul className="list-disc ml-6 text-gray-700">
        <li>Nested non-static class (Inner class)</li>
        <li>Nested static class</li>
      </ul>

      <p className="text-gray-700">
        In this tutorial, we will learn about nested static classes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
        Java Nested Static Class
      </h2>

      <p className="text-gray-700">
        We use the <code><a href="/docs/java/topics/oop1/static-keyword" className="text-blue-600 ">static</a></code> keyword to make our nested class static.
        Only nested classes can be static in Java. Static nested classes can include both 
        static and non-static fields and <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">methods</a>.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`class Animal {
  static class Mammal {
    // static and non-static members of Mammal
  }
  // members of Animal
}`}
      </pre>

      <p className="text-gray-700">
        Static nested classes are associated with the outer class. 
        We do not need to create an object of the outer class to access the static nested class.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
        Example: Static Nested Class
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`class Animal {

  // inner class
  class Reptile {
    public void displayInfo() {
      System.out.println("I am a reptile.");
    }
  }

  // static class
  static class Mammal {
    public void displayInfo() {
      System.out.println("I am a mammal.");
    }
  }
}

class Main {
  public static void main(String[] args) {
    // object creation of the outer class
    Animal animal = new Animal();

    // object creation of the non-static class
    Animal.Reptile reptile = animal.new Reptile();
    reptile.displayInfo();

    // object creation of the static nested class
    Animal.Mammal mammal = new Animal.Mammal();
    mammal.displayInfo();
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold text-black mt-4">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`I am a reptile.
I am a mammal.`}
      </pre>

      <p className="text-gray-700">
        In the above program, we have two nested classes <strong>Mammal</strong> and 
        <strong> Reptile</strong> inside a class <strong>Animal</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
        Accessing Members of Outer Class
      </h2>

      <p className="text-gray-700">
        Static nested classes are associated with the outer class. 
        That is why they can only access static members of the outer class.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">
        Example: Accessing Non-static Members
      </h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">
{`class Animal {
  static class Mammal {
    public void displayInfo() {
      System.out.println("I am a mammal.");
    }
  }

  class Reptile {
    public void displayInfo() {
      System.out.println("I am a reptile.");
    }
  }

  public void eat() {
    System.out.println("I eat food.");
  }
}

class Main {
  public static void main(String[] args) {
    Animal animal = new Animal();
    Animal.Reptile reptile = animal.new Reptile();
    reptile.displayInfo();

    Animal.Mammal mammal = new Animal.Mammal();
    mammal.displayInfo();
    mammal.eat();   // ERROR
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold text-black mt-4">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`Main.java:28: error: cannot find symbol
    mammal.eat();
          ^
1 error`}
      </pre>

      <p className="text-gray-700">
        The static nested class cannot access non-static fields or methods 
        of the outer class, hence the compiler error.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
        Static Top-level Class
      </h2>

      <p className="text-gray-700">
        Only nested classes can be static. Java does not allow static top-level classes.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`static class Animal {
  public static void displayInfo() {
    System.out.println("I am an animal");
  }
}

class Main {
  public static void main(String[] args) {
    Animal.displayInfo();
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold text-black mt-4">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`Main.java:1: error: modifier static not allowed here
static class Animal {
       ^
1 error`}
      </pre>

      <p className="text-gray-700">
        Since Java does not allow static top-level classes, the compiler throws an error.
      </p>

      <p className="text-gray-700 mt-8">
        <strong>Also Read:</strong> <a href="/docs/java/topics/oop1/static-keyword" className="text-blue-600 ">Java Static Keyword</a>
      </p>
    </div>
  );
}
