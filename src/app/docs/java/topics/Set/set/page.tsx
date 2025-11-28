import React from "react";

export default function JavaSetInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Set Interface</h1>

      <p className="mb-4">
         The <code>Set</code> interface provides the features of the mathematical set in Java.
      </p>

      <p className="mb-4">
         It extends the <code>Collection</code> interface.
      </p>

      <p className="mb-4">
         Unlike the List interface, sets cannot contain duplicate elements.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="classes" className="text-2xl font-semibold mt-6 mb-2">Classes that implement Set</h2>

      <p className="mb-4">
         Since <code>Set</code> is an interface, we cannot create objects directly from it.
      </p>

      <p className="mb-4">
         We use the following classes to access the functionalities of the <code>Set</code> interface:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>HashSet</li>
        <li>LinkedHashSet</li>
        <li>EnumSet</li>
        <li>TreeSet</li>
      </ul>

      <p className="mb-4">
         These classes are defined in the Collections framework and implement the <code>Set</code> interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="interfaces" className="text-2xl font-semibold mt-6 mb-2">Interfaces that extend Set</h2>

      <p className="mb-4">
         The <code>Set</code> interface is also extended by these subinterfaces:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>SortedSet</li>
        <li>NavigableSet</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use Set?</h2>

      <p className="mb-4">
         We must import the <code>java.util.Set</code> package to use <code>Set</code>.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Set implementation using HashSet
Set<String> animals = new HashSet<>();`}</code>
      </pre>

      <p className="mb-4">
         Here, we created a <code>Set</code> called animals using the <code>HashSet</code> class.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of Set</h2>

      <p className="mb-4">
         The <code>Set</code> interface inherits all methods of the <code>Collection</code> super interface.
      </p>

      <p className="mb-4">
         Commonly used methods available in the <code>Set</code> interface are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>add() - adds the specified element to the set.</li>
        <li>addAll() - adds all elements of the specified collection to the set (Union).</li>
        <li>iterator() - returns an iterator for sequential access.</li>
        <li>remove() - removes the specified element from the set.</li>
        <li>removeAll() - removes all elements present in another specified set (Difference).</li>
        <li>retainAll() - retains only elements present in another specified set (Intersection).</li>
        <li>clear() - removes all the elements from the set.</li>
        <li>size() - returns the number of elements in the set.</li>
        <li>toArray() - returns an array containing all the elements of the set.</li>
        <li>contains() - returns true if the set contains the specified element.</li>
        <li>containsAll() - returns true if the set contains all the elements of the specified collection (Subset check).</li>
        <li>hashCode() - returns a hash code value for the set.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="operations" className="text-2xl font-semibold mt-6 mb-2">Set Operations</h2>

      <p className="mb-4">
         The Java <code>Set</code> interface allows for basic mathematical set operations:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Union: Use <code>x.addAll(y)</code> to get the union of two sets x and y.</li>
        <li>Intersection: Use <code>x.retainAll(y)</code> to get the intersection of two sets x and y.</li>
        <li>Subset: Use <code>y.containsAll(x)</code> to check if x is a subset of y.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of the Set Interface</h2>

      <p className="mb-4 font-semibold">1. Implementing HashSet Class (Union Example)</p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Set;
import java.util.HashSet;

class Main {

    public static void main(String[] args) {
        // Creating a set using the HashSet class
        Set<Integer> set1 = new HashSet<>();

        // Add elements to the set1
        set1.add(2);
        set1.add(3);
        System.out.println("Set1: " + set1);

        // Creating another set using the HashSet class
        Set<Integer> set2 = new HashSet<>();

        // Add elements
        set2.add(1);
        set2.add(2);
        System.out.println("Set2: " + set2);

        // Union of two sets: set2.addAll(set1)
        set2.addAll(set1);
        System.out.println("Union is: " + set2);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Set1: [2, 3]
Set2: [1, 2]
Union is: [1, 2, 3]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4 font-semibold">2. Implementing TreeSet Class (Ordered Access Example)</p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Set;
import java.util.TreeSet;
import java.util.Iterator;

class Main {

    public static void main(String[] args) {
        // Creating a set using the TreeSet class
        Set<Integer> numbers = new TreeSet<>();

        // Add elements to the set
        numbers.add(2);
        numbers.add(3);
        numbers.add(1);
        System.out.println("Set using TreeSet: " + numbers); // Automatically sorted

        // Access Elements using iterator()
        System.out.print("Accessing elements using iterator(): ");
        Iterator<Integer> iterate = numbers.iterator();
        while(iterate.hasNext()) {
            System.out.print(iterate.next());
            System.out.print(", ");
        }

    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Set using TreeSet: [1, 2, 3]
Accessing elements using iterator(): 1, 2, 3,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4">
         Now that we know what <code>Set</code> is, we will see its implementations in classes like <code>EnumSet</code>, <code>HashSet</code>, <code>LinkedHashSet</code>, and <code>TreeSet</code> in the next tutorials.
      </p>
    </div>
  );
}