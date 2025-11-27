import React from "react";

export default function JavaLinkedBlockingQueue(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java LinkedBlockingQueue</h1>

      <p className="mb-4">
         The <code>LinkedBlockingQueue</code> class provides the blocking queue implementation using a linked list.
      </p>

      <p className="mb-4">
         It implements the Java <code>BlockingQueue</code> interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating LinkedBlockingQueue</h2>

      <p className="mb-4">
      We must import the <code>java.util.concurrent.LinkedBlockingQueue</code> package.
      </p>

      <p className="mb-4 font-semibold">1. Without the initial capacity</p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`LinkedBlockingQueue<Type> animal = new LinkedBlockingQueue<>();`}</code>
      </pre>

      <p className="mb-4">
         The default capacity is very large ($2^{31}-1$).
      </p>

      <p className="mb-4 font-semibold">2. With the initial capacity</p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`LinkedBlockingQueue<Type> animal = new LinkedBlockingQueue<>(int capacity);`}</code>
      </pre>

      <p className="mb-4">
         The capacity sets the maximum size of the queue.
      </p>

      <p className="mb-4">
         For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Creating String type LinkedBlockingQueue with size 5
LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

// Creating Integer type LinkedBlockingQueue with size 5
LinkedBlockingQueue<Integer> age = new LinkedBlockingQueue<>(5);`}</code>
      </pre>

      <p className="mb-4">
         Note: It is not compulsory to provide the size (capacity) of the linked list.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of LinkedBlockingQueue</h2>

      <p className="mb-4">
         It implements all methods of the <code>BlockingQueue</code> interface.
      </p>

      <p className="mb-4">
         The <code>put()</code> and <code>take()</code> methods provide the blocking operation that distinguishes it from typical queues.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="insert" className="text-xl font-semibold mt-6 mb-2">Insert Elements</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - Inserts the element. Throws an exception if the queue is full.</li>
        <li><code>offer()</code> - Inserts the element. Returns false if the queue is full.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.LinkedBlockingQueue;

class Main {
    public static void main(String[] args) {
        LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

        // Using add()
        animals.add("Dog");
        animals.add("Cat");

        // Using offer()
        animals.offer("Horse");
        System.out.println("LinkedBlockingQueue: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedBlockingQueue: [Dog, Cat, Horse]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="access" className="text-xl font-semibold mt-6 mb-2">Access Elements</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>peek()</code> - Returns the element from the front (head). Returns null if the queue is empty.</li>
        <li><code>iterator()</code> - Returns an iterator object to sequentially access elements.</li>
      </ul>

      <p className="mb-4">
         For example, using <code>peek()</code> and <code>iterator()</code>:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.LinkedBlockingQueue;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

        // Add elements
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        System.out.println("LinkedBlockingQueue: " + animals);

        // Using peek()
        String element = animals.peek();
        System.out.println("Accessed Element: " + element);

        // Using iterator()
        Iterator<String> iterate = animals.iterator();
        System.out.print("LinkedBlockingQueue Elements: ");

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
        <code>{`LinkedBlockingQueue: [Dog, Cat, Horse]
Accessed Element: Dog
LinkedBlockingQueue Elements: Dog, Cat, Horse,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="remove" className="text-xl font-semibold mt-6 mb-2">Remove Elements</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove()</code> - Returns and removes the head. Throws an exception if empty.</li>
        <li><code>poll()</code> - Returns and removes the head. Returns null if empty.</li>
        <li><code>clear()</code> - Removes all the elements.</li>
      </ul>

      <p className="mb-4">
         For example, removing elements using all three methods:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.LinkedBlockingQueue;

class Main {
    public static void main(String[] args) {
        LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        System.out.println("LinkedBlockingQueue " + animals);

        // Using remove() (removes "Dog")
        String element1 = animals.remove();
        System.out.println("Removed Element:");
        System.out.println("Using remove(): " + element1);

        // Using poll() (removes "Cat")
        String element2 = animals.poll();
        System.out.println("Using poll(): " + element2);

        // Using clear()
        animals.clear();
        System.out.println("Updated LinkedBlockingQueue " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedBlockingQueue: [Dog, Cat, Horse]
Removed Elements:
Using remove(): Dog
Using poll(): Cat
Updated LinkedBlockingQueue: []`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="put-take" className="text-2xl font-semibold mt-6 mb-2">put() and take() Methods (Blocking Operations)</h2>

      <p className="mb-4">
         The <code>put()</code> and <code>take()</code> methods are used in multithreading to synchronize threads by forcing them to wait until an operation can be executed.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">put() Method (Blocking Insert)</h3>

      <p className="mb-4">
         The <code>put()</code> method adds an element. If the queue is full, it waits indefinitely until space is available.
      </p>

      <p className="mb-4">
         Note: The method must be enclosed in a try..catch block to handle InterruptedException.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.LinkedBlockingQueue;

class Main {
    public static void main(String[] args) {
        LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

       try {
        // Add elements to animals
           animals.put("Dog");
           animals.put("Cat");
           System.out.println("LinkedBlockingQueue: " + animals);
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedBlockingQueue: [Dog, Cat]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">take() Method (Blocking Remove)</h3>

      <p className="mb-4">
        The <code>take()</code> method removes and returns the head element. If the queue is empty, it waits indefinitely until an element is present.
      </p>

      <p className="mb-4">
         Note: The method must be enclosed in a try..catch block.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.concurrent.LinkedBlockingQueue;

class Main {
    public static void main(String[] args) {
        LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);

       try {
           //Add elements to animals
           animals.put("Dog");
           animals.put("Cat");
           System.out.println("LinkedBlockingQueue: " + animals);

           // Remove an element
           String element = animals.take();
           System.out.println("Removed Element: " + element);
           System.out.println("New LinkedBlockingQueue: " + animals);
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedBlockingQueue: [Dog, Cat]
Removed Element: Dog
New LinkedBlockingQueue: [Cat]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other Methods</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Descriptions</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains(element)</code></td>
              <td className="p-2 border">Searches the queue for the element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the length of the queue.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toArray()</code></td>
              <td className="p-2 border">Converts the queue to an array.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toString()</code></td>
              <td className="p-2 border">Converts the linked blocking queue to a string.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="why" className="text-2xl font-semibold mt-6 mb-2">Why use LinkedBlockingQueue?</h2>

      <p className="mb-4">
         The <code>LinkedBlockingQueue</code> uses linked lists as its internal storage.
      </p>

      <p className="mb-4">
         It is a thread-safe collection, generally used in multi-threading applications.
      </p>

      <p className="mb-4">
         It helps synchronize producer-consumer threads: if the producer is slower than the consumer, the queue makes the consumer wait until new elements are available.
      </p>
    </div>
  );
}