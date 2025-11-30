import React from "react";

export default function JavaMethodsPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Methods
      </h1>

      <p className="text-gray-700 mb-4">
        A <strong>method</strong> is a block of code that performs a specific task. Methods help divide complex problems into smaller chunks, making code easier to understand and reusable.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Declaring a Method
      </h2>
      <p className="text-gray-700 mb-4">
        Syntax of a Java method:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`modifier static returnType methodName(parameter1, parameter2, ...) {
    // method body
}`}
      </pre>

      <p className="text-gray-700 mb-4">
        Example: Method to add two numbers:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  public int addNumbers(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    Main obj = new Main();
    int sum = obj.addNumbers(25, 15);
    System.out.println("Sum is: " + sum);
  }
}`}</pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong> Sum is: 40</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Method Return Type
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`public static int square(int num) {
    return num * num;
}

public static void main(String[] args) {
    int result = square(10);
    System.out.println("Squared value of 10 is: " + result);
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong> Squared value of 10 is: 100</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Method Parameters
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
  public void display1() {
    System.out.println("Method without parameter");
  }

  public void display2(int a) {
    System.out.println("Method with a single parameter: " + a);
  }

  public static void main(String[] args) {
    Main obj = new Main();
    obj.display1();
    obj.display2(24);
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong>
        <br />Method without parameter
        <br />Method with a single parameter: 24
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Standard Library Methods
      </h2>
      <p className="text-gray-700 mb-4">
        Java provides built-in methods like <code>Math.sqrt()</code> or <code>System.out.print()</code>. You can use them without defining your own method.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`public class Main {
  public static void main(String[] args) {
    System.out.print("Square root of 4 is: " + Math.sqrt(4));
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong> Square root of 4 is: 2.0</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Advantages of Methods
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li>Code Reusability: Write once, use multiple times.</li>
        <li>Better readability and easier debugging.</li>
      </ul>

      <p className="text-gray-700 mb-4">Example: Using a method for code reusability:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`public class Main {
  private static int getSquare(int x){
    return x * x;
  }

  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      int result = getSquare(i);
      System.out.println("Square of " + i + " is: " + result);
    }
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        <strong>Output:</strong>
        <br />Square of 1 is: 1
        <br />Square of 2 is: 4
        <br />Square of 3 is: 9
        <br />Square of 4 is: 16
        <br />Square of 5 is: 25
      </p>
    </div>
  );
}
