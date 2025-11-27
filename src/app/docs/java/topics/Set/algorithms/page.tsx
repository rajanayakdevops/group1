import React from "react";

export default function JavaAlgorithms(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";
  const noteClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4"; // Custom class for note-tip

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Algorithms</h1>

      <p className="mb-4">
         The Java collections framework provides various algorithms to manipulate elements in data structures.
      </p>

      <p className="mb-4">
         Algorithms in Java are static methods used to perform various operations on collections.
      </p>

      <p className="mb-4">
         Since these algorithms can be used on various collections, they are also known as generic algorithms.
      </p>

      <p className="mb-4">
         Let's see the implementation of different methods available in the collections framework.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="sorting" className="text-2xl font-semibold mt-6 mb-2">1. Sorting Using sort()</h2>

      <p className="mb-4">
         The <code>sort()</code> method is used to sort elements in a collection.
      </p>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.Collections;

class Main {
    public static void main(String[] args) {

        // Creating an array list
        ArrayList<Integer> numbers = new ArrayList<>();

        // Add elements
        numbers.add(4);
        numbers.add(2);
        numbers.add(3);
        System.out.println("Unsorted ArrayList: " + numbers);

        // Using the sort() method (natural order: ascending)
        Collections.sort(numbers);
        System.out.println("Sorted ArrayList: " + numbers);

    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Unsorted ArrayList: [4, 2, 3]
Sorted ArrayList: [2, 3, 4]
`}</code>
      </pre>

      <p className="mb-4">
         Sorting occurs in natural order (ascending). We can customize the sorting order using the Comparator interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="shuffling" className="text-2xl font-semibold mt-6 mb-2">2. Shuffling Using shuffle()</h2>

      <p className="mb-4">
         The <code>shuffle()</code> method destroys any order and returns a random output.
      </p>

      <p className="mb-4">
         It is often used in games or scenarios requiring random output.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.Collections;

class Main {
    public static void main(String[] args) {

        // Creating an array list
        ArrayList<Integer> numbers = new ArrayList<>();

        // Add elements
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("Sorted ArrayList: " + numbers);

        // Using the shuffle() method
        Collections.shuffle(numbers);
        System.out.println("ArrayList using shuffle: " + numbers);

    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Sorted ArrayList: [1, 2, 3]
ArrayList using shuffle: [2, 1, 3]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="data-manipulation" className="text-2xl font-semibold mt-6 mb-2">3. Routine Data Manipulation</h2>

      <p className="mb-4">
         The collections framework provides different methods for manipulating data:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>reverse()</code> - reverses the order of elements.</li>
        <li><code>fill()</code> - replaces every element with the specified value.</li>
        <li><code>copy()</code> - creates a copy of elements from a source list to a destination list.</li>
        <li><code>swap()</code> - swaps the position of two elements.</li>
        <li><code>addAll()</code> - adds all the elements of one collection to another.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Collections;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        System.out.println("ArrayList1: " + numbers);

        // Using reverse()
        Collections.reverse(numbers);
        System.out.println("Reversed ArrayList1: " + numbers);

        // Using swap()
        Collections.swap(numbers, 0, 1);
        System.out.println("ArrayList1 using swap(): " + numbers); // [1, 2]

        ArrayList<Integer> newNumbers = new ArrayList<>();

        // Using addAll
        newNumbers.addAll(numbers);
        System.out.println("ArrayList2 using addAll(): " + newNumbers); // [1, 2]

        // Using fill()
        Collections.fill(numbers, 0);
        System.out.println("ArrayList1 using fill(): " + numbers); // [0, 0]

        // Using copy()
        Collections.copy(newNumbers, numbers);
        System.out.println("ArrayList2 using copy(): " + newNumbers); // [0, 0]
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList1: [1, 2]
Reversed ArrayList1: [2, 1]
ArrayList1 using swap(): [1, 2]
ArrayList2 using addAll(): [1, 2]
ArrayList1 using fill(): [0, 0]
ArrayList2 using copy(): [0, 0]
`}</code>
      </pre>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           While performing the <code>copy()</code> method, both the source and destination lists should be of the same size.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="searching" className="text-2xl font-semibold mt-6 mb-2">4. Searching Using binarySearch()</h2>

      <p className="mb-4">
         The <code>binarySearch()</code> method searches for a specified element and returns its position (index).
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Collections;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        // Using binarySearch()
        int pos = Collections.binarySearch(numbers, 3);
        System.out.println("The position of 3 is " + pos);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`The position of 3 is 2.
`}</code>
      </pre>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
         The collection should be sorted before performing the <code>binarySearch()</code> method.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="composition" className="text-2xl font-semibold mt-6 mb-2">5. Composition (Frequency and Disjoint)</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>frequency()</code> - returns the count of the number of times an element is present.</li>
        <li><code>disjoint()</code> - checks if two collections share any common element.</li>
      </ul>

      <p className="mb-4">
        For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Collections;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(2);
        System.out.println("ArrayList1: " + numbers);

        // Using frequency()
        int count = Collections.frequency(numbers, 2);
        System.out.println("Count of 2: " + count);

        ArrayList<Integer> newNumbers = new ArrayList<>();
        newNumbers.add(5);
        newNumbers.add(6);
        System.out.println("ArrayList2: " + newNumbers);

        // Using disjoint()
        boolean value = Collections.disjoint(numbers, newNumbers);
        System.out.println("Two lists are disjoint: " + value);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList1: [1, 2, 3, 2]
Count of 2: 2
ArrayList2: [5, 6]
Two lists are disjoint: true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="extreme-value" className="text-2xl font-semibold mt-6 mb-2">6. Finding Extreme Values</h2>

      <p className="mb-4">
        The <code>min()</code> and <code>max()</code> methods find the minimum and maximum elements in a collection, respectively.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Collections;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        // Using min()
        int min = Collections.min(numbers);
        System.out.println("Minimum Element: " + min);

        // Using max()
        int max = Collections.max(numbers);
        System.out.println("Maximum Element: " + max);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Minimum Element: 1
Maximum Element: 3
`}</code>
      </pre>
    </div>
  );
}