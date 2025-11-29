import React from "react";

export default function JavaStaticKeyword() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Static Keyword
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>static</strong> keyword in Java allows class members (<a href="/docs/java/topics/Java-Fundamentals/Java-variables-and-Literals" className="text-blue-600 ">Variables</a>, <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">Method</a>, <a href="/docs/java/topics/Java-Fundamentals/Java-Expressions" className="text-blue-600 ">Blocks</a>) to be accessed without creating an instance of the class.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example: Static Methods and Variables (Math Class)
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`public class Main {
    public static void main(String[] args) {
        System.out.println("Absolute value of -12 = " + Math.abs(-12));
        System.out.println("Value of PI = " + Math.PI);
        System.out.println("2^2 = " + Math.pow(2,2));
    }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong><br />
        Absolute value of -12 = 12<br />
        Value of PI = 3.141592653589793<br />
        2^2 = 4.0
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Static vs Non-Static Methods
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class StaticTest {
    int multiply(int a, int b){
        return a * b;
    }
    static int add(int a, int b){
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        StaticTest st = new StaticTest();
        System.out.println("2 * 2 = " + st.multiply(2,2));
        System.out.println("2 + 3 = " + StaticTest.add(2,3));
    }
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Static vs Non-Static Variables
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Test {
   static int max = 10;
   int min = 5;
}

public class Main {
   public static void main(String[] args) {
       Test obj = new Test();
       System.out.println("min + 1 = " + (obj.min + 1));
       System.out.println("max + 1 = " + (Test.max + 1));
   }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-2">
        <strong>Output:</strong><br />
        min + 1 = 6<br />
        max + 1 = 11
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Static Blocks
      </h2>
      <p className="text-gray-700 mb-4">
        Static blocks are used to initialize static variables. They execute once when the class is loaded.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
   static int a = 23;
   static int b;
   static int max;

   static {
       System.out.println("First Static block.");
       b = a * 4;
   }
   static {
       System.out.println("Second Static block.");
       max = 30;
   }

   static void display() {
       System.out.println("a = " + a);
       System.out.println("b = " + b);
       System.out.println("max = " + max);
   }

   public static void main(String[] args) {
       display();
   }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        <strong>Output:</strong><br />
        First Static block.<br />
        Second Static block.<br />
        a = 23<br />
        b = 92<br />
        max = 30
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Nested Static Class
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class OuterClass {
    static class NestedClass {
        void display() {
            System.out.println("Inside Static Nested Class");
        }
    }

    class InnerClass {
        void display() {
            System.out.println("Inside Non-Static Inner Class");
        }
    }

    public static void main(String[] args) {
        OuterClass.NestedClass nested = new OuterClass.NestedClass();
        nested.display();

        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.display();
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        <strong>Output:</strong><br />
        Inside Static Nested Class<br />
        Inside Non-Static Inner Class
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Key Notes:</strong><br />
        - Static members belong to the class, not instances.<br />
        - Static methods/variables can be accessed without creating an object.<br />
        - Static blocks execute when the class is loaded.<br />
        - Static nested classes do not need an instance of the outer class.
      </p>
    </div>
  );
}
