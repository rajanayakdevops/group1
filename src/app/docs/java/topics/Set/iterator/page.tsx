import React from "react";

export default function JavaIteratorInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Iterator Interface</h1>

      <p className="mb-4">
        The <code>Iterator</code> interface of the Java collections framework allows us to access elements of a collection. It has a subinterface <code>ListIterator</code>.
      </p>

      <figure className="my-6">
        
      </figure>

      <p className="mb-4">
        All the Java collections include an <code>iterator()</code> method. This method returns an instance of iterator used to iterate over elements of collections.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of Iterator</h2>

      <p className="mb-4">
        The <code>Iterator</code> interface provides 4 methods that can be used to perform various operations on elements of collections:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>hasNext()</code> - returns <code>true</code> if there exists a next element in the collection.</li>
        <li><code>next()</code> - returns the next element of the collection.</li>
        <li><code>remove()</code> - removes the last element returned by the <code>next()</code> method.</li>
        <li><code>forEachRemaining()</code> - performs the specified action for each remaining element of the collection.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="example" className="text-2xl font-semibold mt-6 mb-2">Example: Implementation of Iterator</h2>

      <p className="mb-4">
        In the example below, we implement the <code>hasNext()</code>, <code>next()</code>, <code>remove()</code>, and <code>forEachRemaining()</code> methods in an ArrayList.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(3);
        numbers.add(2);
        System.out.println("ArrayList: " + numbers);

        // Creating an instance of Iterator
        Iterator<Integer> iterate = numbers.iterator();

        // Using the next() method
        int number = iterate.next();
        System.out.println("Accessed Element: " + number);

        // Using the remove() method
        iterate.remove();
        System.out.println("Removed Element: " + number);

        System.out.print("Updated ArrayList: ");

        // Using the hasNext() method
        while(iterate.hasNext()) {
            // Using the forEachRemaining() method
            iterate.forEachRemaining((value) -> System.out.print(value + ", "));
        }
    }
}
`}</code>
        </pre>
       
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [1, 3, 2]
Accessed Element: 1
Removed Element: 1
Updated ArrayList: 3, 2,
`}</code>
      </pre>

      <p className="mb-4">
        Notice the statement:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`iterate.forEachRemaining((value) -> System.out.print(value + ", "));`}</code>
      </pre>

      <p className="mb-4">
        Here, we have passed a lambda expression as an argument of the <code>forEachRemaining()</code> method.
      </p>

      <p className="mb-4">
        The method prints all the remaining elements of the array list after the initial removal.
      </p>
    </div>
  );
}