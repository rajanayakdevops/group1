import React from "react";

export default function JavaSortedSetInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java SortedSet Interface</h1>

      <p className="mb-4">
         The <code>SortedSet</code> interface is used to store elements with a specific order in a set.
      </p>

      <p className="mb-4">
         It extends the Java Set interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="classes" className="text-2xl font-semibold mt-6 mb-2">Class that implements SortedSet</h2>

      <p className="mb-4">
         Since <code>SortedSet</code> is an interface, we use the <code>TreeSet</code> class to implement its functionalities.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use SortedSet?</h2>

      <p className="mb-4">
         To use <code>SortedSet</code>, we must import the <code>java.util.SortedSet</code> package.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// SortedSet implementation by TreeSet class
SortedSet<String> animals = new TreeSet<>();`}</code>
      </pre>

      <p className="mb-4">
         We created a sorted set called animals using the <code>TreeSet</code> class.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of SortedSet</h2>

      <p className="mb-4">
         The <code>SortedSet</code> interface inherits all methods of the Set interface.
      </p>

      <p className="mb-4">
         Additional methods included in the <code>SortedSet</code> interface are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>comparator() - returns the comparator used to order elements (or null if natural ordering).</li>
        <li>first() - returns the lowest element in the set.</li>
        <li>last() - returns the highest element in the set.</li>
        <li>headSet(element) - returns all elements strictly before the specified element.</li>
        <li>tailSet(element) - returns all elements greater than or equal to the specified element.</li>
        <li>subSet(element1, element2) - returns all elements between element1 (inclusive) and element2 (exclusive).</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of SortedSet in TreeSet Class</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.SortedSet;
import java.util.TreeSet;

class Main {

    public static void main(String[] args) {
        // Creating SortedSet using the TreeSet
        SortedSet<Integer> numbers = new TreeSet<>();

        // Insert elements to the set
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("SortedSet: " + numbers);

        // Access the element
        int firstNumber = numbers.first();
        System.out.println("First Number: " + firstNumber);

        int lastNumber = numbers.last();
        System.out.println("Last Number: " + lastNumber);

        // Remove elements
        boolean result = numbers.remove(2);
        System.out.println("Is the number 2 removed? " + result);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`SortedSet: [1, 2, 3, 4]
First Number: 1
Last Number: 4
Is the number 2 removed? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4">
         Now that we know about the <code>SortedSet</code> interface, we will learn about its implementation using the <code>TreeSet</code> class in detail.
      </p>
    </div>
  );
}