import React from "react";

export default function JavaListIteratorInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java ListIterator Interface</h1>

      <p className="mb-4">
        The <code>ListIterator</code> interface provides the functionality to access elements of a list.
      </p>

      <p className="mb-4">
        It is bidirectional, meaning it allows us to iterate elements of a list in both forward and backward directions.
      </p>

      <p className="mb-4">
        It extends the <code>Iterator</code> interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <p className="mb-4">
        The <code>List</code> interface provides a <code>listIterator()</code> method that returns an instance of the <code>ListIterator</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of ListIterator</h2>

      <p className="mb-4">
        The <code>ListIterator</code> interface provides methods to perform various operations on the elements of a list:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>hasNext()</code> - returns true if there exists an element when moving forward.</li>
        <li><code>next()</code> - returns the next element in the forward direction.</li>
        <li><code>nextIndex()</code> - returns the index of the element that the <code>next()</code> method will return.</li>
        <li><code>previous()</code> - returns the previous element in the backward direction.</li>
        <li><code>previousIndex()</code> - returns the index of the element that the <code>previous()</code> method will return.</li>
        <li><code>remove()</code> - removes the last element returned by either <code>next()</code> or <code>previous()</code>.</li>
        <li><code>set()</code> - replaces the element returned by either <code>next()</code> or <code>previous()</code> with the specified element.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h3 id="example-1" className="text-xl font-semibold mt-6 mb-2">Example 1: Forward Iteration with ListIterator</h3>

      <p className="mb-4">
        In this example, we demonstrate the <code>next()</code>, <code>nextIndex()</code> and <code>hasNext()</code> methods.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.ListIterator;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1); // Index 0
        numbers.add(3); // Index 1
        numbers.add(2); // Index 2
        System.out.println("ArrayList: " + numbers);

        // Creating an instance of ListIterator (cursor starts before Index 0)
        ListIterator<Integer> iterate = numbers.listIterator();

        // Using the next() method
        int number1 = iterate.next(); // Moves past 1
        System.out.println("Next Element: " + number1);

        // Using the nextIndex() (cursor is now before Index 1)
        int index1 = iterate.nextIndex();
        System.out.println("Position of Next Element: " + index1);

        // Using the hasNext() method
        System.out.println("Is there any next element? " + iterate.hasNext());
    }
}
`}</code>
        </pre>
       
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [1, 3, 2]
Next Element: 1
Position of Next Element: 1
Is there any next element? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="example-2" className="text-xl font-semibold mt-6 mb-2">Example 2: Backward Iteration with ListIterator</h3>

      <p className="mb-4">
        In this example, we demonstrate the <code>previous()</code> and <code>previousIndex()</code> methods.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.ListIterator;

class Main {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1); // Index 0
        numbers.add(3); // Index 1
        numbers.add(2); // Index 2
        System.out.println("ArrayList: " + numbers);

        // Creating an instance of ListIterator
        ListIterator<Integer> iterate = numbers.listIterator();
        
        // Advance the cursor: next() calls
        iterate.next(); // Cursor after 1 (Index 1)
        iterate.next(); // Cursor after 3 (Index 2)
        // Cursor is now between 3 and 2

        // Using the previous() method
        int number1 = iterate.previous(); // Moves past 3
        System.out.println("Previous Element: " + number1);

        // Using the previousIndex() (Cursor is now before 3, at Index 1)
        int index1 = iterate.previousIndex();
        System.out.println("Position of the Previous element: " + index1); // This returns the index of the element '1'
    }
}
`}</code>
        </pre>
       
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [1, 3, 2]
Previous Element: 3
Position of the Previous Element: 1
`}</code>
      </pre>

      <p className="mb-4">
        Initially, the iterator instance is before element 1. If <code>previous()</code> is called immediately, it throws an exception.
      </p>

      <p className="mb-4">
        After calling <code>next()</code> two times, the iterator cursor is between elements 3 and 2.
      </p>

      <p className="mb-4">
        Therefore, the <code>previous()</code> method returns 3, and <code>previousIndex()</code> returns 1 (the index of the element 3).
      </p>
    </div>
  );
}