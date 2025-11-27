import React from "react";

export default function JavaQueueInterface(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Queue Interface</h1>

      <p className="mb-4">
         The <code>Queue</code> interface provides the functionality of the queue data structure.
      </p>

      <p className="mb-4">
         It is part of the Java collections framework and extends the <code>Collection</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="classes" className="text-2xl font-semibold mt-6 mb-2">Classes that Implement Queue</h2>

      <p className="mb-4">
         Since <code>Queue</code> is an interface, it cannot be implemented directly.
      </p>

      <p className="mb-4">
         We use the following classes to access the functionalities of <code>Queue</code>:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>ArrayDeque</li>
        <li>LinkedList</li>
        <li>PriorityQueue</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Interfaces that extend Queue</h2>

      <p className="mb-4">
         The <code>Queue</code> interface is also extended by various subinterfaces:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>Deque</code></li>
        <li><code>BlockingQueue</code></li>
        <li><code>BlockingDeque</code></li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="working" className="text-2xl font-semibold mt-6 mb-2">Working of Queue Data Structure</h2>

      <p className="mb-4">
         In queues, elements are stored and accessed in a First In, First Out (FIFO) manner.
      </p>

      <p className="mb-4">
         Elements are added from the behind and removed from the front.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use Queue?</h2>

      <p className="mb-4">
         We must import the <code>java.util.Queue</code> package to use <code>Queue</code>.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// LinkedList implementation of Queue
Queue<String> animal1 = new LinkedList<>();

// Array implementation of Queue
Queue<String> animal2 = new ArrayDeque<>();

// Priority Queue implementation of Queue
Queue<String> animal3 = new PriorityQueue<>();`}</code>
      </pre>

      <p className="mb-4">
         Objects animal1, animal2, and animal3 use the functionalities of the <code>Queue</code> interface via their respective implementing classes.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of Queue</h2>

      <p className="mb-4">
         The <code>Queue</code> interface includes all the methods of the <code>Collection</code> interface.
      </p>

      <p className="mb-4">
        Some commonly used methods of the <code>Queue</code> interface are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>add() - Inserts the specified element into the queue. Throws an exception if unsuccessful.</li>
        <li>offer() - Inserts the specified element into the queue. Returns false if unsuccessful (preferred for capacity-restricted queues).</li>
        <li>element() - Returns the head of the queue. Throws an exception if the queue is empty.</li>
        <li>peek() - Returns the head of the queue. Returns null if the queue is empty (preferred for checking the head).</li>
        <li>remove() - Returns and removes the head of the queue. Throws an exception if the queue is empty.</li>
        <li>poll() - Returns and removes the head of the queue. Returns null if the queue is empty (preferred for removal).</li>
      </ul>

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of the Queue Interface</h2>

      <h3 className="text-xl font-semibold mt-10 mb-2">1. Implementing the LinkedList Class</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Queue;
import java.util.LinkedList;

class Main {

    public static void main(String[] args) {
        // Creating Queue using the LinkedList class
        Queue<Integer> numbers = new LinkedList<>();

        // offer elements to the Queue
        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(3);
        System.out.println("Queue: " + numbers);

        // Access elements of the Queue
        int accessedNumber = numbers.peek();
        System.out.println("Accessed Element: " + accessedNumber);

        // Remove elements from the Queue
        int removedNumber = numbers.poll();
        System.out.println("Removed Element: " + removedNumber);

        System.out.println("Updated Queue: " + numbers);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Queue: [1, 2, 3]
Accessed Element: 1
Removed Element: 1
Updated Queue: [2, 3]`}</code>
      </pre>

      <p className="mb-4">
        To learn more, visit Java LinkedList.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">2. Implementing the PriorityQueue Class</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Queue;
import java.util.PriorityQueue;

class Main {

    public static void main(String[] args) {
        // Creating Queue using the PriorityQueue class
        Queue<Integer> numbers = new PriorityQueue<>();

        // offer elements to the Queue
        numbers.offer(5);
        numbers.offer(1);
        numbers.offer(2);
        System.out.println("Queue: " + numbers);

        // Access elements of the Queue
        int accessedNumber = numbers.peek();
        System.out.println("Accessed Element: " + accessedNumber);

        // Remove elements from the Queue
        int removedNumber = numbers.poll();
        System.out.println("Removed Element: " + removedNumber);

        System.out.println("Updated Queue: " + numbers);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Queue: [1, 5, 2]
Accessed Element: 1
Removed Element: 1
Updated Queue: [2, 5]`}</code>
      </pre>

      <p className="mb-4">
         To learn more, visit Java PriorityQueue.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4">
        In the next tutorials, we will learn about different subinterfaces of the <code>Queue</code> interface and its implementation in detail.
      </p>
    </div>
  );
}