import React from "react";

export default function JavaCollectionInterface(): JSX.Element {
  // Common Tailwind classes for the inline highlighted box
  const boxClass = "px-1 py-0.5 rounded border bg-gray-50 text-gray-700 border-gray-300";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Collection Interface</h1>

      <p className="mb-4">
        The <code>Collection</code> interface is the root interface of the Java collections framework.
      </p>

      <p className="mb-4">
         There is no direct implementation of this interface.
      </p>

      <p className="mb-4">
        It is implemented through its subinterfaces like <code>List</code>, <code>Set</code>, and <code>Queue</code>.
      </p>

      <p className="mb-4">
        Example: The <code>ArrayList</code> class implements the <code>List</code> interface, which is a subinterface of <code>Collection</code>.
      </p>

      <figure className="my-6">
        

[Image of Java Collection Interface hierarchy]

      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="subinterfaces" className="text-2xl font-semibold mt-6 mb-2">Subinterfaces of Collection</h2>

      <p className="mb-4">
        The <code>Collection</code> interface includes subinterfaces implemented by various classes in Java.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">1. List Interface</h3>

      <p className="mb-4">
         The <code>List</code> interface is an ordered collection.
      </p>

      <p className="mb-4">
         It allows us to add and remove elements like an array. To learn more, visit: Java List Interface.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">2. Set Interface</h3>

      <p className="mb-4">
        The <code>Set</code> interface allows us to store elements in different sets (similar to the set in mathematics).
      </p>

      <p className="mb-4">
        It cannot have duplicate elements. To learn more, visit: Java Set Interface.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">3. Queue Interface</h3>

      <p className="mb-4">
        The <code>Queue</code> interface is used for First In, First Out (FIFO) element storage and access. To learn more, visit: Java Queue Interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of Collection</h2>

      <p className="mb-4">
       The <code>Collection</code> interface includes various methods for object operations.
      </p>

      <p className="mb-4">
        These methods are available in all its subinterfaces:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - inserts the specified element to the collection</li>
        <li><code>size()</code> - returns the size of the collection</li>
        <li><code>remove()</code> - removes the specified element from the collection</li>
        <li><code>iterator()</code> - returns an iterator to access elements of the collection</li>
        <li><code>addAll()</code> - adds all the elements of a specified collection to the collection</li>
        <li><code>removeAll()</code> - removes all the elements of the specified collection from the collection</li>
        <li><code>clear()</code> - removes all the elements of the collection</li>
      </ul>

      <hr className="my-6 border-gray-300" />
      
      <p className="font-bold mt-4">Also Read:</p>
      
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Java Interface</li>
      </ul>
      
    </div>
  );
}