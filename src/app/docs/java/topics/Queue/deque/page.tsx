import React from "react";

export default function JavaDequeInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Deque Interface</h1>

      <p className="mb-4">
         The <code>Deque</code> interface provides the functionality of a double-ended queue.
      </p>

      <p className="mb-4">
         It extends the <code>Queue</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="working" className="text-2xl font-semibold mt-6 mb-2">Working of Deque</h2>

      <p className="mb-4">
         Unlike a regular queue (FIFO), a deque allows us to insert and remove elements from both front and rear.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="classes" className="text-2xl font-semibold mt-6 mb-2">Classes that implement Deque</h2>

      <p className="mb-4">
         To use the functionalities of the <code>Deque</code> interface, we must use classes that implement it.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>ArrayDeque</li>
        <li>LinkedList</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use Deque?</h2>

      <p className="mb-4">
         We must import the <code>java.util.Deque</code> package to use <code>Deque</code>.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Array implementation of Deque
Deque<String> animal1 = new ArrayDeque<>();

// LinkedList implementation of Deque
Deque<String> animal2 = new LinkedList<>();`}</code>
      </pre>

      <p className="mb-4">
         Objects `animal1` and `animal2` use the functionalities of the <code>Deque</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of Deque</h2>

      <p className="mb-4">
         Since <code>Deque</code> extends the <code>Queue</code> interface, it inherits all the methods of the Queue interface.
      </p>

      <p className="mb-4">
        The <code>Deque</code> interface also includes the following methods for access at both ends:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>addFirst() - Adds the element at the beginning. Throws exception if full.</li>
        <li>addLast() - Adds the element at the end. Throws exception if full.</li>
        <li>offerFirst() - Adds the element at the beginning. Returns false if full.</li>
        <li>offerLast() - Adds the element at the end. Returns false if full.</li>
        <li>getFirst() - Returns the first element. Throws exception if empty.</li>
        <li>getLast() - Returns the last element. Throws exception if empty.</li>
        <li>peekFirst() - Returns the first element. Returns null if empty.</li>
        <li>peekLast() - Returns the last element. Returns null if empty.</li>
        <li>removeFirst() - Returns and removes the first element. Throws exception if empty.</li>
        <li>removeLast() - Returns and removes the last element. Throws exception if empty.</li>
        <li>pollFirst() - Returns and removes the first element. Returns null if empty.</li>
        <li>pollLast() - Returns and removes the last element. Returns null if empty.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="stack" className="text-2xl font-semibold mt-6 mb-2">Deque as Stack Data Structure</h2>

      <p className="mb-4">
         While the <code>Stack</code> class exists, it is recommended to use <code>Deque</code> as a stack instead.
      </p>

      <p className="mb-4">
         This is because methods of the <code>Stack</code> class are synchronized, making them less efficient than the methods of Deque.
      </p>

      <p className="mb-4">
         Here are the methods the <code>Deque</code> interface provides to implement stack functionality (LIFO):
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>push()</code> - adds an element at the beginning (top of stack).</li>
        <li><code>pop()</code> - removes an element from the beginning (top of stack).</li>
        <li><code>peek()</code> - returns an element from the beginning (top of stack).</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of Deque in ArrayDeque Class</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Deque;
import java.util.ArrayDeque;

class Main {

    public static void main(String[] args) {
        // Creating Deque using the ArrayDeque class
        Deque<Integer> numbers = new ArrayDeque<>();

        // add elements to the Deque
        numbers.offer(1);
        numbers.offerLast(2);
        numbers.offerFirst(3); // '3' is added to the front
        System.out.println("Deque: " + numbers); // Output: [3, 1, 2]

        // Access elements of the Deque
        int firstElement = numbers.peekFirst();
        System.out.println("First Element: " + firstElement);

        int lastElement = numbers.peekLast();
        System.out.println("Last Element: " + lastElement);

        // Remove elements from the Deque
        int removedNumber1 = numbers.pollFirst();
        System.out.println("Removed First Element: " + removedNumber1);

        int removedNumber2 = numbers.pollLast();
        System.out.println("Removed Last Element: " + removedNumber2);

        System.out.println("Updated Deque: " + numbers);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Deque: [3, 1, 2]
First Element: 3
Last Element: 2
Removed First Element: 3
Removed Last Element: 2
Updated Deque: [1]`}</code>
      </pre>

      <p className="mb-4">
         To learn more, visit Java ArrayDeque.
      </p>
    </div>
  );
}