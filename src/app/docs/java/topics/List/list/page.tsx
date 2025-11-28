import React from "react";

export default function JavaList(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java List</h1>

      <p className="mb-4">
         In Java, the <code>List</code> interface is an ordered collection.
      </p>

      <p className="mb-4">
         It allows us to store and access elements sequentially.
      </p>

      <p className="mb-4">
         It extends the Collection interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation" className="text-2xl font-semibold mt-6 mb-2">Classes that Implement List</h2>

      <p className="mb-4">
         Since <code>List</code> is an interface, we cannot create objects directly from it.
      </p>

      <p className="mb-4">
         We use the following classes to access the functionalities of the <code>List</code> interface:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>ArrayList</li>
        <li>LinkedList</li>
        <li>Vector</li>
        <li>Stack</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <p className="mb-4">
         These classes are defined in the Collections framework and implement the <code>List</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="use-list" className="text-2xl font-semibold mt-6 mb-2">How to use List?</h2>

      <p className="mb-4">
         In Java, we must import the <code>java.util.List</code> package to use the interface.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// ArrayList implementation of List
List<String> list1 = new ArrayList<>();

// LinkedList implementation of List
List<String> list2 = new LinkedList<>();`}</code>
      </pre>

      <p className="mb-4">
         We created objects <var>list1</var> and <var>list2</var> of classes <code>ArrayList</code> and <code>LinkedList</code>.
      </p>

      <p className="mb-4">
         These objects can now use the functionalities defined in the <code>List</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of List</h2>

      <p className="mb-4">
         The <code>List</code> interface includes all the methods of the <code>Collection</code> interface because <code>Collection</code> is its super interface.
      </p>

      <p className="mb-4">
         Some commonly used methods available in the <code>List</code> interface are:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Description</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>add()</code></td>
              <td className="p-2 border">adds an element to a list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>addAll()</code></td>
              <td className="p-2 border">adds all elements of one list to another</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>get()</code></td>
              <td className="p-2 border">helps to randomly access elements from lists</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>iterator()</code></td>
              <td className="p-2 border">returns iterator object that can be used to sequentially access elements of lists</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>set()</code></td>
              <td className="p-2 border">changes elements of lists</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>remove()</code></td>
              <td className="p-2 border">removes an element from the list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>removeAll()</code></td>
              <td className="p-2 border">removes all the elements from the list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clear()</code></td>
              <td className="p-2 border">removes all the elements from the list (more efficient than <code>removeAll()</code>)</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">returns the length of lists</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toArray()</code></td>
              <td className="p-2 border">converts a list into an array</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">returns <code>true</code> if a list contains specific element</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of the List Interface</h2>

      <h3 className="text-xl font-semibold mt-10 mb-2">1. Implementing the ArrayList Class</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.List;
import java.util.ArrayList;

class Main {

    public static void main(String[] args) {
        // Creating list using the ArrayList class
        List<Integer> numbers = new ArrayList<>();

        // Add elements to the list
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("List: " + numbers);

        // Access element from the list
        int number = numbers.get(2);
        System.out.println("Accessed Element: " + number);

        // Remove element from the list
        int removedNumber = numbers.remove(1);
        System.out.println("Removed Element: " + removedNumber);
    }
}`}</code>
        </pre>
        <div className="code-editor__action text-center mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Run Code
          </button>
        </div>
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`List: [1, 2, 3]
Accessed Element: 3
Removed Element: 2`}</code>
      </pre>

      <p className="mb-4">
         To learn more about <code>ArrayList</code>, visit Java ArrayList.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">2. Implementing the LinkedList Class</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.List;
import java.util.LinkedList;

class Main {

    public static void main(String[] args) {
        // Creating list using the LinkedList class
        List<Integer> numbers = new LinkedList<>();

        // Add elements to the list
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("List: " + numbers);

        // Access element from the list
        int number = numbers.get(2);
        System.out.println("Accessed Element: " + number);

        // Using the indexOf() method
        int index = numbers.indexOf(2);
        System.out.println("Position of 3 is " + index);

        // Remove element from the list
        int removedNumber = numbers.remove(1);
        System.out.println("Removed Element: " + removedNumber);
    }
}`}</code>
        </pre>
        <div className="code-editor__action text-center mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Run Code
          </button>
        </div>
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`List: [1, 2, 3]
Accessed Element: 3
Position of 3 is 1
Removed Element: 2`}</code>
      </pre>

      <p className="mb-4">
         To learn more about <code>LinkedList</code>, visit Java LinkedList.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="vs-set" className="text-2xl font-semibold mt-6 mb-2">Java List vs. Set</h2>

      <p className="mb-4">
         Both the <code>List</code> interface and the Set interface inherit the <code>Collection</code> interface.
      </p>

      <p className="mb-4">
         However, there exists some difference between them:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Lists can include duplicate elements, but sets cannot have duplicate elements.</li>
        <li>Elements in lists are stored in some order, but elements in sets are stored in groups (like sets in mathematics).</li>
      </ul>

      <p className="mb-4">
         Now that we know what <code>List</code> is, we will see its implementations in ArrayList and LinkedList classes in detail in the next tutorials.
      </p>

      <hr className="my-6 border-gray-300" />

      
    </div>
  );
}