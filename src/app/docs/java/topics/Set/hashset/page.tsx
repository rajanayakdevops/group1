import React from "react";

export default function JavaHashSetClass(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";
  const noteClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4"; // Custom class for note-tip

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java HashSet Class</h1>

      <p className="mb-4">
         The <code>HashSet</code> class provides the functionalities of the hash table data structure.
      </p>

      <p className="mb-4">
         It implements the Java Set interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating a HashSet</h2>

      <p className="mb-4">
         We must import the <code>java.util.HashSet</code> package to create a hash set.
      </p>

      <p className="mb-4">
         Here is how we can create hash sets in Java with capacity and load factor:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// HashSet with 8 capacity and 0.75 load factor
HashSet<Integer> numbers = new HashSet<>(8, 0.75);`}</code>
      </pre>

      <p className="mb-4">
         capacity (8): The maximum number of elements the hash set can store before resizing.
      </p>

      <p className="mb-4">
         loadFactor (0.75): When the hash set is filled by 75%, its elements are moved to a new hash table of double the size.
      </p>

      <p className="mb-4 font-semibold">Default capacity and load factor</p>

      <p className="mb-4">
         It's possible to create a hash table without defining its capacity and load factor:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// HashSet with default capacity and load factor
HashSet<Integer> numbers1 = new HashSet<>();`}</code>
      </pre>

      <p className="mb-4">
         By default, the capacity is 16 and the load factor is 0.75.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of HashSet</h2>

      <p className="mb-4">
         The <code>HashSet</code> class provides various methods inherited from the `Set` interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="insert" className="text-2xl font-semibold mt-6 mb-2">Insert Elements to HashSet</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - inserts the specified element to the set.</li>
        <li><code>addAll()</code> - inserts all elements of the specified collection to the set (Union).</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> evenNumber = new HashSet<>();

        // Using add() method
        evenNumber.add(2);
        evenNumber.add(4);
        evenNumber.add(6);
        System.out.println("HashSet: " + evenNumber);

        HashSet<Integer> numbers = new HashSet<>();
        
        // Using addAll() method
        numbers.addAll(evenNumber);
        numbers.add(5);
        System.out.println("New HashSet: " + numbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`HashSet: [2, 4, 6]
New HashSet: [2, 4, 5, 6]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="access" className="text-2xl font-semibold mt-6 mb-2">Access HashSet Elements</h2>

      <p className="mb-4">
         To access elements, use the <code>iterator()</code> method.
      </p>

      <p className="mb-4">
         We must import the <code>java.util.Iterator</code> package.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("HashSet: " + numbers);

        // Calling iterator() method
        Iterator<Integer> iterate = numbers.iterator();
        System.out.print("HashSet using Iterator: ");
        
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
        <code>{`HashSet: [2, 5, 6]
HashSet using Iterator: 2, 5, 6,
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="remove" className="text-2xl font-semibold mt-6 mb-2">Remove Elements</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove()</code> - removes the specified element from the set.</li>
        <li><code>removeAll()</code> - removes all the elements from the set.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("HashSet: " + numbers);

        // Using remove() method
        boolean value1 = numbers.remove(5);
        System.out.println("Is 5 removed? " + value1);

        // Using removeAll() method
        boolean value2 = numbers.removeAll(numbers);
        System.out.println("Are all elements removed? " + value2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`HashSet: [2, 5, 6]
Is 5 removed? true
Are all elements removed? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="operations" className="text-2xl font-semibold mt-6 mb-2">Set Operations</h2>

      <p className="mb-4">
         <code>HashSet</code> methods can perform various set operations like Union, Intersection, Difference, and Subset.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Union of Sets</h2>

      <p className="mb-4">
         To perform the Union, use the <code>addAll()</code> method.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> evenNumbers = new HashSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("HashSet1: " + evenNumbers);

        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(1);
        numbers.add(3);
        System.out.println("HashSet2: " + numbers);

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
        <code>{`HashSet1: [2, 4]
HashSet2: [1, 3]
Union is: [1, 2, 3, 4]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Intersection of Sets</h2>

      <p className="mb-4">
         To perform the Intersection, use the <code>retainAll()</code> method.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> primeNumbers = new HashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        System.out.println("HashSet1: " + primeNumbers);

        HashSet<Integer> evenNumbers = new HashSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("HashSet2: " + evenNumbers);

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
        <code>{`HashSet1: [2, 3]
HashSet2: [2, 4]
Intersection is: [2]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Difference of Sets</h2>

      <p className="mb-4">
         To calculate the Difference, use the <code>removeAll()</code> method.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> primeNumbers = new HashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        primeNumbers.add(5);
        System.out.println("HashSet1: " + primeNumbers);

        HashSet<Integer> oddNumbers = new HashSet<>();
        oddNumbers.add(1);
        oddNumbers.add(3);
        oddNumbers.add(5);
        System.out.println("HashSet2: " + oddNumbers);

        // Difference between HashSet1 and HashSet2
        primeNumbers.removeAll(oddNumbers);
        System.out.println("Difference : " + primeNumbers);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`HashSet1: [2, 3, 5]
HashSet2: [1, 3, 5]
Difference : [2]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Subset</h2>

      <p className="mb-4">
         To check if one set is a subset of another, use the <code>containsAll()</code> method.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("HashSet1: " + numbers);

        HashSet<Integer> primeNumbers = new HashSet<>();
        primeNumbers.add(2);
        primeNumbers.add(3);
        System.out.println("HashSet2: " + primeNumbers);

        // Check if primeNumbers is a subset of numbers
        boolean result = numbers.containsAll(primeNumbers);
        System.out.println("Is HashSet2 is subset of HashSet1? " + result);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`HashSet1: [1, 2, 3, 4]
HashSet2: [2, 3]
Is HashSet2 is subset of HashSet1? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other Methods Of HashSet</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Description</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>clone()</code></td>
              <td className="p-2 border">Creates a copy of the <code>HashSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">Searches the <code>HashSet</code> for the specified element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>isEmpty()</code></td>
              <td className="p-2 border">Checks if the <code>HashSet</code> is empty.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the size of the <code>HashSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clear()</code></td>
              <td className="p-2 border">Removes all the elements from the <code>HashSet</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="why" className="text-2xl font-semibold mt-6 mb-2">Why HashSet?</h2>

      <p className="mb-4">
         <code>HashSet</code> is commonly used for random access of elements using hash codes.
      </p>

      <p className="mb-4">
         The hash code acts as a unique identity that helps locate the element in the hash table.
      </p>

      <p className="mb-4">
         Since <code>HashSet</code> cannot contain duplicates, each element has a unique hash code.
      </p>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           <code>HashSet</code> is not synchronized. If multiple threads access and modify the set concurrently, it must be externally synchronized.
        </p>
      </div>
    </div>
  );
}