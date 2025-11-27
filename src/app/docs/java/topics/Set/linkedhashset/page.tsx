import React from "react";

export default function JavaLinkedHashSet(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java LinkedHashSet</h1>

      <p className="mb-4">
         The <code>LinkedHashSet</code> class provides functionalities of both the hash table and the linked list data structure.
      </p>

      <p className="mb-4">
         It implements the Java Set interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <p className="mb-4">
         Elements are stored in hash tables (like HashSet).
      </p>

      <p className="mb-4">
         Internally, linked hash sets maintain a doubly-linked list to track the insertion order of elements.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Create a LinkedHashSet</h2>

      <p className="mb-4">
         We must import the <code>java.util.LinkedHashSet</code> package.
      </p>

      <p className="mb-4">
         Syntax for creation with capacity and load factor:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// LinkedHashSet with 8 capacity and 0.75 load factor
LinkedHashSet<Integer> numbers = new LinkedHashSet<>(8, 0.75);`}</code>
      </pre>

      <p className="mb-4">
         Capacity (8): The initial size (can store 8 elements).
      </p>

      <p className="mb-4">
         Load Factor (0.75): The threshold for resizing the internal hash table.
      </p>

      <p className="mb-4 font-semibold">Default capacity and load factor</p>

      <p className="mb-4">
         It's possible to create a linked hash set without defining its capacity:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// LinkedHashSet with default capacity and load factor
LinkedHashSet<Integer> numbers1 = new LinkedHashSet<>();`}</code>
      </pre>

      <p className="mb-4">
         By default, the capacity is 16 and the load factor is 0.75.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Creating LinkedHashSet from Other Collections</h2>

      <p className="mb-4">
         We can create a linked hash set containing all elements of another collection:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // Creating an arrayList of even numbers
        ArrayList<Integer> evenNumbers = new ArrayList<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("ArrayList: " + evenNumbers);

        // Creating a LinkedHashSet from an ArrayList
        LinkedHashSet<Integer> numbers = new LinkedHashSet<>(evenNumbers);
        System.out.println("LinkedHashSet: " + numbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [2, 4]
LinkedHashSet: [2, 4]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of LinkedHashSet</h2>

      <p className="mb-4">
         The <code>LinkedHashSet</code> class provides methods inherited from the Set interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="insert" className="text-2xl font-semibold mt-6 mb-2">Insert Elements to LinkedHashSet</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - inserts the specified element.</li>
        <li><code>addAll()</code> - inserts all elements of the specified collection.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> evenNumber = new LinkedHashSet<>();

        // Using add() method
        evenNumber.add(2);
        evenNumber.add(4);
        evenNumber.add(6);
        System.out.println("LinkedHashSet: " + evenNumber);

        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();
        
        // Using addAll() method
        numbers.addAll(evenNumber);
        numbers.add(5);
        System.out.println("New LinkedHashSet: " + numbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet: [2, 4, 6]
New LinkedHashSet: [2, 4, 6, 5]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="access" className="text-2xl font-semibold mt-6 mb-2">Access LinkedHashSet Elements</h2>

      <p className="mb-4">
         To access elements, use the <code>iterator()</code> method (requires importing <code>java.util.Iterator</code>).
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("LinkedHashSet: " + numbers);

        // Calling the iterator() method
        Iterator<Integer> iterate = numbers.iterator();

        System.out.print("LinkedHashSet using Iterator: ");

        // Accessing elements
        while(iterate.hasNext()) {
            System.out.print(iterate.next());
            System.out.print(", ");
        }
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet: [2, 5, 6]
LinkedHashSet using Iterator: 2, 5, 6,
`}</code>
      </pre>

      <p className="mb-4">
         Note: <code>hasNext()</code> checks for the next element, and <code>next()</code> retrieves it.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="remove" className="text-2xl font-semibold mt-6 mb-2">Remove Elements from HashSet</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove()</code> - removes the specified element.</li>
        <li><code>removeAll()</code> - removes all the elements in the set.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("LinkedHashSet: " + numbers);

        // Using the remove() method
        boolean value1 = numbers.remove(5);
        System.out.println("Is 5 removed? " + value1);

        // Using removeAll()
        boolean value2 = numbers.removeAll(numbers);
        System.out.println("Are all elements removed? " + value2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet: [2, 5, 6]
Is 5 removed? true
Are all elements removed? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="set-operations" className="text-2xl font-semibold mt-6 mb-2">Set Operations</h2>

      <p className="mb-4">
         <code>LinkedHashSet</code> methods support Union, Intersection, Difference, and Subset operations.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Union of Sets</h3>

      <p className="mb-4">
         Use the <code>addAll()</code> method to calculate the union.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> evenNumbers = new LinkedHashSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("LinkedHashSet1: " + evenNumbers);

        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();
        numbers.add(1);
        numbers.add(3);
        System.out.println("LinkedHashSet2: " + numbers);

        // Union of two set
        numbers.addAll(evenNumbers);
        System.out.println("Union is: " + numbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet1: [2, 4]
LinkedHashSet2: [1, 3]
Union is: [1, 3, 2, 4]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Intersection of Sets</h3>

      <p className="mb-4">
         Use the <code>retainAll()</code> method for intersection.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> primeNumbers = new LinkedHashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        System.out.println("LinkedHashSet1: " + primeNumbers);

        LinkedHashSet<Integer> evenNumbers = new LinkedHashSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("LinkedHashSet2: " + evenNumbers);

        // Intersection of two sets
        evenNumbers.retainAll(primeNumbers);
        System.out.println("Intersection is: " + evenNumbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet1: [2, 3]
LinkedHashSet2: [2, 4]
Intersection is: [2]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Difference of Sets</h3>

      <p className="mb-4">
         Use the <code>removeAll()</code> method to calculate the difference.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> primeNumbers = new LinkedHashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        primeNumbers.add(5);
        System.out.println("LinkedHashSet1: " + primeNumbers);

        LinkedHashSet<Integer> oddNumbers = new LinkedHashSet<>();
        oddNumbers.add(1);
        oddNumbers.add(3);
        oddNumbers.add(5);
        System.out.println("LinkedHashSet2: " + oddNumbers);

        // Difference between LinkedHashSet1 and LinkedHashSet2
        primeNumbers.removeAll(oddNumbers);
        System.out.println("Difference : " + primeNumbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet1: [2, 3, 5]
LinkedHashSet2: [1, 3, 5]
Difference: [2]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Subset</h3>

      <p className="mb-4">
         Use the <code>containsAll()</code> method to check if one set is a subset of another.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("LinkedHashSet1: " + numbers);

        LinkedHashSet<Integer> primeNumbers = new LinkedHashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        System.out.println("LinkedHashSet2: " + primeNumbers);

        // Check if primeNumbers is a subset of numbers
        boolean result = numbers.containsAll(primeNumbers);
        System.out.println("Is LinkedHashSet2 is subset of LinkedHashSet1? " + result);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedHashSet1: [1, 2, 3, 4]
LinkedHashSet2: [2, 3]
Is LinkedHashSet2 is a subset of LinkedHashSet1? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other Methods Of LinkedHashSet</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Description</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>clone()</code></td>
              <td className="p-2 border">Creates a copy of the <code>LinkedHashSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">Searches the <code>LinkedHashSet</code> for the specified element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>isEmpty()</code></td>
              <td className="p-2 border">Checks if the <code>LinkedHashSet</code> is empty.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the size of the <code>LinkedHashSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clear()</code></td>
              <td className="p-2 border">Removes all the elements from the <code>LinkedHashSet</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="vs-hashset" className="text-2xl font-semibold mt-6 mb-2">LinkedHashSet Vs. HashSet</h2>

      <p className="mb-4">
         Both classes implement the <code>Set</code> interface, but they have differences:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>LinkedHashSet</code> maintains insertion order due to its internal linked list.</li>
        <li><code>LinkedHashSet</code> requires more storage due to maintaining the linked list pointers.</li>
        <li>The performance of <code>LinkedHashSet</code> is generally slower than <code>HashSet</code> because of the linked list maintenance.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="vs-treeset" className="text-2xl font-semibold mt-6 mb-2">LinkedHashSet Vs. TreeSet</h2>

      <p  className="mb-4">
         Major differences:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>TreeSet</code> implements <code>SortedSet</code>, meaning its elements are always sorted by value. <code>LinkedHashSet</code> only maintains insertion order.</li>
        <li><code>TreeSet</code> is usually slower than <code>LinkedHashSet</code> because it performs sorting upon insertion.</li>
        <li><code>LinkedHashSet</code> allows the insertion of `null` values; <code>TreeSet</code> does not allow `null` values.</li>
      </ul>
    </div>
  );
}