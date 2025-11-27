import React from "react";

export default function JavaPriorityQueue(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java PriorityQueue</h1>

      <p className="mb-4">
         The <code>PriorityQueue</code> class provides the functionality of the heap data structure.
      </p>

      <p className="mb-4">
         It implements the Queue interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <p className="mb-4">
         Unlike normal queues, priority queue elements are retrieved in sorted order.
      </p>

      <p className="mb-4">
         The head of the priority queue will always be the smallest element when retrieving in ascending order.
      </p>

      <p className="mb-4">
         It is important to note that the elements of a priority queue may not be sorted internally, but they are always retrieved in sorted order.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating PriorityQueue</h2>

      <p className="mb-4">
         To create a priority queue, we must import the <code>java.util.PriorityQueue</code> package.
      </p>

      <p className="mb-4">
         Here is how we can create a priority queue in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`PriorityQueue<Integer> numbers = new PriorityQueue<>();`}</code>
      </pre>

      <p className="mb-4">
         When created without arguments, the head of the queue is the smallest element (natural ascending order).
      </p>

      <p className="mb-4">
         We can customize the ordering of elements using the <code>Comparator</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of PriorityQueue</h2>

      <p className="mb-4">
         The <code>PriorityQueue</code> class provides the implementation of all methods inherited from the <code>Queue</code> interface.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="insert" className="text-2xl font-semibold mt-6 mb-2">Insert Elements to PriorityQueue</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - Inserts the specified element. Throws an exception if the queue is full.</li>
        <li><code>offer()</code> - Inserts the specified element. Returns `false` if the queue is full (preferred).</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.PriorityQueue;

class Main {
    public static void main(String[] args) {

        // Creating a priority queue
        PriorityQueue<Integer> numbers = new PriorityQueue<>();

        // Using the add() method
        numbers.add(4);
        numbers.add(2);
        System.out.println("PriorityQueue: " + numbers);

        // Using the offer() method
        numbers.offer(1);
        System.out.println("Updated PriorityQueue: " + numbers);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`PriorityQueue: [2, 4]
Updated PriorityQueue: [1, 4, 2]`}</code>
      </pre>

      <p className="mb-4">
         Although 4 was inserted before 2, the head of the queue is 2 (the smallest).
      </p>

      <p className="mb-4">
         After inserting 1, the queue rearranges, making 1 the new head (smallest element).
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="acess" className="text-2xl font-semibold mt-6 mb-2">Access PriorityQueue Elements</h2>

      <p className="mb-4">
         To access the element at the head (smallest element), use the <code>peek()</code> method.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.PriorityQueue;

class Main {
    public static void main(String[] args) {

        // Creating a priority queue
        PriorityQueue<Integer> numbers = new PriorityQueue<>();
        numbers.add(4);
        numbers.add(2);
        numbers.add(1);
        System.out.println("PriorityQueue: " + numbers);

        // Using the peek() method
        int number = numbers.peek();
        System.out.println("Accessed Element: " + number);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`PriorityQueue: [1, 4, 2]
Accessed Element: 1`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="remove" className="text-2xl font-semibold mt-6 mb-2">Remove PriorityQueue Elements</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove(element)</code> - removes the specified element from the queue.</li>
        <li><code>poll()</code> - returns and removes the head (smallest element) of the queue.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.PriorityQueue;

class Main {
    public static void main(String[] args) {

        // Creating a priority queue
        PriorityQueue<Integer> numbers = new PriorityQueue<>();
        numbers.add(4);
        numbers.add(2);
        numbers.add(1);
        System.out.println("PriorityQueue: " + numbers);

        // Using the remove() method
        boolean result = numbers.remove(2);
        System.out.println("Is the element 2 removed? " + result);

        // Using the poll() method (removes the head, which is 1)
        int number = numbers.poll();
        System.out.println("Removed Element Using poll(): " + number);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`PriorityQueue: [1, 4, 2]
Is the element 2 removed? true
Removed Element Using poll(): 1`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="iterate" className="text-2xl font-semibold mt-6 mb-2">Iterating Over a PriorityQueue</h2>

      <p className="mb-4">
         We can use the <code>iterator()</code> method and the <code>java.util.Iterator</code> package to loop through the elements.
      </p>

      <p className="mb-4">
         Note that using the iterator does not guarantee the elements are accessed in sorted (priority) order; they are returned based on the internal heap structure.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.PriorityQueue;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {

        // Creating a priority queue
        PriorityQueue<Integer> numbers = new PriorityQueue<>();
        numbers.add(4);
        numbers.add(2);
        numbers.add(1);
        System.out.print("PriorityQueue using iterator(): ");

        //Using the iterator() method
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
        <code>{`PriorityQueue using iterator(): 1, 4, 2,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other PriorityQueue Methods</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Descriptions</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains(element)</code></td>
              <td className="p-2 border">Searches the priority queue for the specified element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the length of the priority queue.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toArray()</code></td>
              <td className="p-2 border">Converts a priority queue to an array and returns it.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="comparator" className="text-2xl font-semibold mt-6 mb-2">PriorityQueue Comparator</h2>

      <p className="mb-4">
         By default, priority queue elements are retrieved in natural order (ascending). We can customize this ordering.
      </p>

      <p className="mb-4">
         To customize, we must create a comparator class that implements the <code>Comparator</code> interface. For example, to sort in reverse order (largest element first):
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.PriorityQueue;
import java.util.Comparator;
class Main {
    public static void main(String[] args) {

        // Creating a priority queue with a custom comparator
        PriorityQueue<Integer> numbers = new PriorityQueue<>(new CustomComparator());
        numbers.add(4);
        numbers.add(2);
        numbers.add(1);
        numbers.add(3);
        System.out.print("PriorityQueue: " + numbers);
    }
}

class CustomComparator implements Comparator<Integer> {

    @Override
    public int compare(Integer number1, Integer number2) {
        int value = number1.compareTo(number2);
        // elements are sorted in reverse order (largest first)
        if (value > 0) {
            return -1;
        }
        else if (value < 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`PriorityQueue: [4, 3, 1, 2]`}</code>
      </pre>

      <p className="mb-4">
         In this example, the <code>CustomComparator</code> class implements the <code>Comparator</code> interface.
      </p>

      <p className="mb-4">
         The overridden <code>compare()</code> method causes the head of the element to be the largest number (reverse order).
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="font-bold mt-4">Also Read:</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Java Program to Implement the queue data structure</li>
      </ul>
    </div>
  );
}