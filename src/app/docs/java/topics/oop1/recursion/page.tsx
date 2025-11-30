import React from "react";

export default function JavaRecursion() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Recursion
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, a method that calls itself is known as a <strong>recursive method</strong>. The process of calling a method from itself is called <strong>recursion</strong>.
      </p>

      <p className="text-gray-700 mb-4">
        A real-world analogy would be two mirrors facing each other. Any object between them is reflected recursively.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        How Recursion Works
      </h2>
      <p className="text-gray-700 mb-4">
        In recursion, a function calls itself and typically has a <strong>termination condition</strong> to stop the calls. Without a termination condition, recursion would continue infinitely.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example: Factorial Using Recursion
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Factorial {

    static int factorial(int n) {
        if (n != 0)  // termination condition
            return n * factorial(n-1); // recursive call
        else
            return 1;
    }

    public static void main(String[] args) {
        int number = 4;
        int result = factorial(number);
        System.out.println(number + " factorial = " + result);
    }
}`}
      </pre>
      <p className="text-black-700 mb-4">
        Output:
      </p>
      <pre className="bg-black-100 text-gray-900 p-3 rounded-md mb-4 border border-gray-300">
4 factorial = 24
      </pre>

      <p className="text-gray-700 mb-4">
        In this example, <code>factorial()</code> calls itself with a decremented value of <code>n</code> until it reaches 0, at which point the recursion stops and the results are returned back up the call stack.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Working of Factorial Program
      </h2>
      <p className="text-gray-700 mb-4">
        Each recursive call creates a new stack frame for the variables. When the base case is reached, the stack unwinds, and the final result is computed.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Advantages and Disadvantages of Recursion
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>Advantages:</strong> simpler, easier to write, debug, and maintain.</li>
        <li><strong>Disadvantages:</strong> uses more memory due to stack frames and generally slower than iterative solutions.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Challenge
      </h2>
      <p className="text-gray-700 mb-4">
        Try writing a recursive method to calculate the <strong>sum of all numbers from 1 to N</strong>.
      </p>
    </div>
  );
}
