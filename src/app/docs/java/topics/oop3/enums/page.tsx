"use client";
import React from "react";

export default function JavaEnumsPage() {
  return (
    <div className="editor-contents text-black">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Enums
      </h1>

      <p className="text-gray-700">
        In Java, an <strong>enum</strong> (short for enumeration) is a type that contains a fixed set of constant values.
        We use the <code>enum</code> keyword to declare enums.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Example Declaration</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`enum Size { 
   SMALL, MEDIUM, LARGE, EXTRALARGE 
}`}
      </pre>

      <p className="text-gray-700">
        Here, we have created an enum named <code>Size</code> with fixed constant values:
        <strong> SMALL, MEDIUM, LARGE, EXTRALARGE</strong>.  
        These values inside braces are called <strong>enum constants</strong>.
      </p>

      <p className="text-gray-700">
        Note: Enum constants are usually written in uppercase.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Example 1: Java Enum</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">
{`enum Size {
   SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Main {
   public static void main(String[] args) {
      System.out.println(Size.SMALL);
      System.out.println(Size.MEDIUM);
   }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`SMALL
MEDIUM`}
      </pre>

      <p className="text-gray-700">
        As shown, enum constants are accessed using the enum name.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">Enum Variables</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700 text-sm overflow-x-auto">
{`Size pizzaSize;

pizzaSize = Size.SMALL;
pizzaSize = Size.MEDIUM;
pizzaSize = Size.LARGE;
pizzaSize = Size.EXTRALARGE;`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Example 2: Enum with switch  statement
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">
{`enum Size {
  SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Test {
  Size pizzaSize;
  
  public Test(Size pizzaSize) {
    this.pizzaSize = pizzaSize;
  }

  public void orderPizza() {
    switch(pizzaSize) {
      case SMALL:
        System.out.println("I ordered a small size pizza.");
        break;
      case MEDIUM:
        System.out.println("I ordered a medium size pizza.");
        break;
      default:
        System.out.println("I don't know which one to order.");
        break;
    }
  }
}

class Main {
  public static void main(String[] args) {
    Test t1 = new Test(Size.MEDIUM);
    t1.orderPizza();
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`I ordered a medium size pizza.`}
      </pre>

      <p className="text-gray-700">
        Based on the enum value passed, the corresponding <code>switch</code> case is executed.
      </p>

      {/* Enum Class */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Enum Class in Java</h2>

      <p className="text-gray-700">
        Enums in Java are treated as special types of classes. They were introduced in Java 5 and can contain
        fields, <a href="/java-programming/if-else-statement" className="text-blue-600 ">methods</a>, and <a href="/java-programming/if-else-statement" className="text-blue-600 ">constructors</a>.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">
{`enum Size {
  SMALL, MEDIUM, LARGE, EXTRALARGE;

  public String getSize() {
    switch(this) {
      case SMALL: return "small";
      case MEDIUM: return "medium";
      case LARGE: return "large";
      case EXTRALARGE: return "extra large";
      default: return null;
    }
  }

  public static void main(String[] args) {
    System.out.println("The size of the pizza is " + Size.SMALL.getSize());
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`The size of the pizza is small`}
      </pre>

      <p className="text-gray-700">
        In this example, each enum constant is treated as an object of the <code>Size</code> enum class.
      </p>

      {/* Predefined methods */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Methods of Java Enum Class
      </h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li><strong>ordinal()</strong> – returns the position of an enum constant.</li>
        <li><strong>compareTo()</strong> – compares enum constants using ordinal values.</li>
        <li><strong>toString()</strong> – returns the constant name as a string.</li>
        <li><strong>name()</strong> – returns the defined name of an enum constant.</li>
        <li><strong>valueOf()</strong> – returns enum constant matching the input string.</li>
        <li><strong>values()</strong> – returns an array of all enum constants.</li>
      </ul>

      {/* Why enums */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Why Java Enums?</h2>

      <p className="text-gray-700">
        Enums replace the need for <code>int</code> constants by offering type safety and more readable code.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">
{`enum Size {
   SMALL, MEDIUM, LARGE, EXTRALARGE
}`}
      </pre>

      <p className="text-gray-700">
        Using enums ensures that only valid values are assigned, avoiding errors and improving clarity.
      </p>

    </div>
  );
}
