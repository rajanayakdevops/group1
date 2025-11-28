import React from "react";

export default function JavaBlockingQueue(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";
  const noteClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4"; // Custom class for note-tip

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java BlockingQueue</h1>

      <p className="mb-4">
         The <code>BlockingQueue</code> interface extends the <code>Queue</code> interface.
      </p>

      <p className="mb-4">
         It allows any operation to wait until it can be successfully performed.
      </p>

      <p className="mb-4">
         Example: A delete operation on an empty queue waits until an element is present.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="classes" className="text-2xl font-semibold mt-6 mb-2">Classes that Implement BlockingQueue</h2>

      <p className="mb-4">
         Since <code>BlockingQueue</code> is an interface, it requires implementing classes.
      </p>

      <p className="mb-4">
         Classes that implement <code>BlockingQueue</code> include:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>ArrayBlockingQueue</li>
        <li>LinkedBlockingQueue</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="use" className="text-2xl font-semibold mt-6 mb-2">How to use blocking queues?</h2>

      <p className="mb-4">
         We must import the <code>java.util.concurrent.BlockingQueue</code> package to use <code>BlockingQueue</code>.
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Array implementation of BlockingQueue
BlockingQueue<String> animal1 = new ArrayBlockingQueue<>();

// LinkedList implementation of BlockingQueue
BlockingQueue<String> animal2 = new LinkedBlockingQueue<>();`}</code>
      </pre>

      <p className="mb-4">
         Objects animal1 and animal2 use the functionalities of the <code>BlockingQueue</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="methods" className="text-2xl font-semibold mt-6 mb-2">Methods of BlockingQueue</h2>

      <p className="mb-4">
        Blocking queue methods are divided into 3 categories based on whether they throw an exception, return a value, or block the operation.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">Methods that throw an exception (if queue is full or empty)</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - Inserts an element at the end. Throws an exception if the queue is full.</li>
        <li><code>element()</code> - Returns the head. Throws an exception if the queue is empty.</li>
        <li><code>remove()</code> - Removes an element. Throws an exception if the queue is empty.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-10 mb-2">Methods that return some value (if queue is full or empty)</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>offer()</code> - Inserts the element at the end. Returns false if the queue is full.</li>
        <li><code>peek()</code> - Returns the head. Returns null if the queue is empty.</li>
        <li><code>poll()</code> - Removes an element. Returns null if the queue is empty.</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold mb-2">More on offer() and poll()</p>
        <p className="mb-2">
           The <code>offer()</code> and <code>poll()</code> methods can be used with timeouts.
        </p>

        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`offer(value, 100, milliseconds)`}</code>
        </pre>

        <p className="mb-2">
           This example means the <code>offer()</code> method will try to insert an element for 100 milliseconds.
        </p>

        <p>
           If the insertion fails within 100 milliseconds, the method returns false.
        </p>

        <p className="mb-0">
           Time units that can be used: days, hours, minutes, seconds, microseconds, and nanoseconds.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-10 mb-2">Methods that blocks the operation (waiting if full or empty)</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>put()</code> - Inserts an element. If the queue is full, it waits until space is available.</li>
        <li><code>take()</code> - Removes and returns an element. If the queue is empty, it waits until an element is present.</li>
      </ul>

      <p className="mb-4">
         If the queue is full, the <code>put()</code> method will wait until the queue has space to insert elements.
      </p>

      <p className="mb-4">
         If the queue is empty, the <code>take()</code> method will wait until the queue contains elements to be deleted.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation-classes" className="text-2xl font-semibold mt-6 mb-2">Implementation of BlockingQueue in ArrayBlockingQueue</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ArrayBlockingQueue;

class Main {

    public static void main(String[] args) {
      // Create a blocking queue with a capacity of 5
      BlockingQueue<Integer> numbers = new ArrayBlockingQueue<>(5);

      try {
        // Insert element using put() - this blocks if capacity is reached
        numbers.put(2);
        numbers.put(1);
        numbers.put(3);
        System.out.println("BLockingQueue: " + numbers);

        // Remove Elements using take() - this blocks if the queue is empty
        int removedNumber = numbers.take();
        System.out.println("Removed Number: " + removedNumber);
      }

      catch(Exception e) {
          e.getStackTrace();
      }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`BlockingQueue: [2, 1, 3]
Removed Element: 2`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="why" className="text-2xl font-semibold mt-6 mb-2">Why BlockingQueue?</h2>

      <p className="mb-4">
         <code>BlockingQueue</code> is considered a thread-safe collection.
      </p>

      <p className="mb-4">
       It is essential for multi-threading operations.
      </p>

      <p className="mb-4">
         If one thread (consumer) runs faster than another (producer), the blocking queue can make the consumer wait until the producer completes its operation, ensuring smooth data flow.
      </p>
    </div>
  );
}