import React from "react";

export default function JavaCollectionsFramework(): JSX.Element {
  // Common Tailwind classes for the code block style used previously
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Collections Framework</h1>

      <p className="mb-4">
        The Java collections framework provides interfaces and classes.
      </p>

      <p className="mb-4">
        It is used to implement various data structures and algorithms.
      </p>

      <p className="mb-4">
         Example: The <code>LinkedList</code> class provides the implementation of the doubly-linked list data structure.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="interfaces" className="text-2xl font-semibold mt-6 mb-2">Interfaces of Collections Framework</h2>

      <p className="mb-4">
         The collections framework provides various interfaces.
      </p>

      <p className="mb-4">
         These interfaces include methods to perform different operations on collections.
      </p>

      <p className="mb-4">
         We will learn about these interfaces, their subinterfaces, and implementation in detail later.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="collection-interface" className="text-2xl font-semibold mt-6 mb-2">Java Collection Interface</h2>

      <p className="mb-4">
         The <code>Collection</code> interface is the root interface of the collections framework hierarchy.
      </p>

      <p className="mb-4">
         Java provides implementations for its subinterfaces like <code>List</code>, <code>Set</code>, and <code>Queue</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">Collections Framework Vs. Collection Interface</h3>

      <p className="mb-4">
         People often confuse the collections framework with the <code>Collection</code> Interface.
      </p>

      <p className="mb-4">
         The <code>Collection</code> interface is only the root interface of the framework.
      </p>

      <p className="mb-4">
         The framework also includes other interfaces: <code>Map</code> and <code>Iterator</code>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="subinterfaces" className="text-2xl font-semibold mt-6 mb-2">Subinterfaces of the Collection Interface</h2>

      <p className="mb-4">
         The <code>Collection</code> interface includes subinterfaces implemented by Java classes.
      </p>

      <p className="mb-4">
         All methods of the <code>Collection</code> interface are also present in its subinterfaces.
      </p>

      <p className="mb-4">
         Here are the subinterfaces:
      </p>

      <h3 className="text-xl font-semibold mb-2">List Interface</h3>

      <p className="mb-4">
         The <code>List</code> interface is an ordered collection.
      </p>

      <p className="mb-4">
         It allows adding and removing elements like an array.
      </p>

      <h3 className="text-xl font-semibold mb-2">Set Interface</h3>

      <p className="mb-4">
         The <code>Set</code> interface stores elements similar to a set in mathematics.
      </p>

      <p className="mb-4">
         It cannot have duplicate elements.
      </p>

      <h3 className="text-xl font-semibold mb-2">Queue Interface</h3>

      <p className="mb-4">
         The <code>Queue</code> interface stores and accesses elements in First In, First Out (FIFO) manner.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="map" className="text-2xl font-semibold mt-6 mb-2">Java Map Interface</h2>

      <p className="mb-4">
         The <code>Map</code> interface stores elements in key/value pairs.
      </p>

      <p className="mb-4">
         Keys are unique names used to access a particular element.
      </p>

      <p className="mb-4">
         Each key has a single value associated with it.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Java Iterator Interface</h2>

      <p className="mb-4">
         The <code>Iterator</code> interface provides methods to access elements of collections.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why the Collections Framework?</h2>

      <p className="mb-4">
         The collections framework provides ready-to-use data structures and algorithms.
      </p>

      <p className="mb-4">
         This offers two main advantages:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>We don't need to manually write code for these structures and algorithms.</li>
        <li>Our code is more efficient as the framework is highly optimized.</li>
      </ul>

      <p className="mb-4">
         The framework allows us to use a specific data structure for a particular type of data. Examples:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Use the <code>Set</code> interface for unique data.</li>
        <li>Use the <code>Map</code> interface to store data in key/value pairs.</li>
        <li>The <code>ArrayList</code> class provides resizable array functionality.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example: ArrayList Class of Collections</h2>

      <p className="mb-4">
         Let's look at an example of the <code>ArrayList</code> class.
      </p>

      <p className="mb-4">
         The <code>ArrayList</code> class allows us to create resizable arrays.
      </p>

      <p className="mb-4">
         It implements the <code>List</code> interface (a subinterface of the <code>Collection</code> interface).
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`// The Collections framework is defined in the java.util package
import java.util.ArrayList;

class Main {
    public static void main(String[] args){
        ArrayList<String> animals = new ArrayList<>();
        // Add elements
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");

        System.out.println("ArrayList: " + animals);
    }
}`}</code>
        </pre>
        <div className="code-editor__action text-center mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Run Code
          </button>
        </div>
      </div>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`ArrayList: [Dog, Cat, Horse]`}</code>
      </pre>

      <p className="mb-4">
        In later tutorials, we will learn about the collections framework (its interfaces and classes) in detail with the help of examples.
      </p>
    </div>
  );
}