import React from "react";

export default function JavaNavigableSetInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java NavigableSet Interface</h1>

      <p className="mb-4">
         The <code>NavigableSet</code> interface provides features to navigate among the set elements.
      </p>

      <p className="mb-4">
        It is considered a type of SortedSet.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="class" className="text-2xl font-semibold mt-6 mb-2">Class that implements NavigableSet</h2>

      <p className="mb-4">
         We use the <code>TreeSet</code> class to implement the functionalities of the <code>NavigableSet</code> interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use NavigableSet?</h2>

      <p className="mb-4">
       We must import the <code>java.util.NavigableSet</code> package.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// SortedSet implementation by TreeSet class
NavigableSet<String> numbers = new TreeSet<>();`}</code>
      </pre>

      <p className="mb-4">
        We created a navigable set named numbers using the <code>TreeSet</code> class.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of NavigableSet</h2>

      <p className="mb-4">
        <code>NavigableSet</code> extends the <code>SortedSet</code> interface, so all SortedSet methods are available.
      </p>

      <p className="mb-4">
        However, some <code>SortedSet</code> methods (headSet(), tailSet(), and subSet()) are redefined to allow optional inclusion/exclusion of endpoint elements.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">headSet(element, booleanValue)</h3>

      <p className="mb-4">
         Returns all elements before the specified element.
      </p>

      <p className="mb-4">
        booleanValue is optional and defaults to false.
      </p>

      <p className="mb-4">
        If true is passed, the specified element is included in the returned set.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">tailSet(element, booleanValue)</h3>

      <p className="mb-4">
         Returns all elements after the specified element.
      </p>

      <p className="mb-4">
        booleanValue is optional and defaults to true (including the element).
      </p>

      <p className="mb-4">
         If false is passed, the specified element is excluded.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">subSet(e1, bv1, e2, bv2)</h3>

      <p className="mb-4">
         Returns all elements between e1 and e2.
      </p>

      <p className="mb-4">
        bv1 (for e1) defaults to true (inclusive); bv2 (for e2) defaults to false (exclusive).
      </p>

      <p className="mb-4">
         Passing false for bv1 excludes e1.
      </p>

      <p className="mb-4">
         Passing true for bv2 includes e2.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="navigation" className="text-2xl font-semibold mt-6 mb-2">Methods for Navigation</h2>

      <p className="mb-4">
         The <code>NavigableSet</code> provides various methods to navigate over its elements:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>descendingSet() - reverses the order of elements in a set.</li>
        <li>descendingIterator() - returns an iterator to iterate in reverse order.</li>
        <li>ceiling() - returns the lowest element greater than or equal to the specified element.</li>
        <li>floor() - returns the greatest element less than or equal to the specified element.</li>
        <li>higher() - returns the lowest element strictly greater than the specified element.</li>
        <li>lower() - returns the greatest element strictly less than the specified element.</li>
        <li>pollFirst() - returns and removes the first (lowest) element.</li>
        <li>pollLast() - returns and removes the last (highest) element.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of NavigableSet in TreeSet Class</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.NavigableSet;
import java.util.TreeSet;

class Main {

    public static void main(String[] args) {
        // Creating NavigableSet using the TreeSet
        NavigableSet<Integer> numbers = new TreeSet<>();

        // Insert elements to the set
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("NavigableSet: " + numbers);

        // Access the first element
        int firstElement = numbers.first();
        System.out.println("First Number: " + firstElement);

        // Access the last element
        int lastElement = numbers.last();
        System.out.println("Last Element: " + lastElement);

        // Remove the first element
        int number1 = numbers.pollFirst();
        System.out.println("Removed First Element: " + number1);

        // Remove the last element
        int number2 = numbers.pollLast();
        System.out.println("Removed Last Element: " + number2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`NavigableSet: [1, 2, 3]
First Element: 1
Last Element: 3
Removed First Element: 1
Removed Last Element: 3`}</code>
      </pre>

      <p className="mb-4">
         Now that we know about the <code>NavigableSet</code> interface, we will learn about its implementation using the <code>TreeSet</code> class in detail.
      </p>

      <hr className="my-6 border-gray-300" />
      
    
      
    </div>
  );
}