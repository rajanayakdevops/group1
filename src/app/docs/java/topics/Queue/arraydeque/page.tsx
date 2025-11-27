import React from "react";

export default function JavaArrayDeque(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";
  const noteClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4"; // Custom class for note-tip

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java ArrayDeque</h1>

      <p className="mb-4">
         In Java, we use the <code>ArrayDeque</code> class to implement queue and deque data structures using arrays.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Interfaces implemented by ArrayDeque</h2>

      <p className="mb-4">
         The <code>ArrayDeque</code> class implements these two interfaces:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Java Queue Interface</li>
        <li>Java Deque Interface</li>
      </ul>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating ArrayDeque</h2>

      <p className="mb-4">
         We must import the <code>java.util.ArrayDeque</code> package to create an array deque.
      </p>

      <p className="mb-4">
         Here is how we can create an array deque in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`ArrayDeque<Type> animal = new ArrayDeque<>();`}</code>
      </pre>

      <p className="mb-4">
         Type indicates the type of the array deque. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Creating String type ArrayDeque
ArrayDeque<String> animals = new ArrayDeque<>();

// Creating Integer type ArrayDeque
ArrayDeque<Integer> age = new ArrayDeque<>();`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of ArrayDeque</h2>

      <p className="mb-4">
        The <code>ArrayDeque</code> class provides implementations for all the methods present in the <code>Queue</code> and <code>Deque</code> interfaces.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="insert" className="text-xl font-semibold mt-6 mb-2">Insert Elements to Deque</h3>

      <p className="mb-4 font-semibold">1. Add elements using add(), addFirst() and addLast()</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - inserts the element at the end of the array deque.</li>
        <li><code>addFirst()</code> - inserts the element at the beginning of the array deque.</li>
        <li><code>addLast()</code> - inserts the element at the end (equivalent to <code>add()</code>).</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           If the array deque is full, all these methods (add(), addFirst(), and addLast()) throw <code>IllegalStateException</code>.
        </p>
      </div>

      <p className="mb-4">
        For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();

        // Using add()
        animals.add("Dog");

        // Using addFirst()
        animals.addFirst("Cat");

        // Using addLast()
        animals.addLast("Horse");
        System.out.println("ArrayDeque: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Cat, Dog, Horse]`}</code>
      </pre>

      <p className="mb-4 font-semibold">2. Insert elements using offer(), offerFirst() and offerLast()</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>offer()</code> - inserts the element at the end of the array deque.</li>
        <li><code>offerFirst()</code> - inserts the element at the beginning of the array deque.</li>
        <li><code>offerLast()</code> - inserts the element at the end of the array deque.</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
          <code>offer()</code>, <code>offerFirst()</code> and <code>offerLast()</code> return <code>true</code> if successful; if the array deque is full, these methods return <code>false</code>.
        </p>
      </div>

      <p className="mb-4">
        For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        // Using offer()
        animals.offer("Dog");

        // Using offerFirst()
        animals.offerFirst("Cat");

        // Using offerLast()
        animals.offerLast("Horse");
        System.out.println("ArrayDeque: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Cat, Dog, Horse]`}</code>
      </pre>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>If the array deque is full, the <code>add()</code> method will throw an exception.</li>
          <li>If the array deque is full, the <code>offer()</code> method returns <code>false</code>.</li>
        </ul>
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 id="access" className="text-xl font-semibold mt-6 mb-2">Access ArrayDeque Elements</h3>

      <p className="mb-4 font-semibold">1. Access elements using getFirst() and getLast()</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>getFirst()</code> - returns the first element of the array deque.</li>
        <li><code>getLast()</code> - returns the last element of the array deque.</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           If the array deque is empty, <code>getFirst()</code> and <code>getLast()</code> throw <code>NoSuchElementException</code>.
        </p>
      </div>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        System.out.println("ArrayDeque: " + animals);

        // Get the first element
        String firstElement = animals.getFirst();
        System.out.println("First Element: " + firstElement);

        // Get the last element
        String lastElement = animals.getLast();
        System.out.println("Last Element: " + lastElement);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Dog, Cat, Horse]
First Element: Dog
Last Element: Horse`}</code>
      </pre>

      <p className="mb-4 font-semibold">2. Access elements using peek(), peekFirst() and peekLast() method</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>peek()</code> - returns the first element of the array deque.</li>
        <li><code>peekFirst()</code> - returns the first element of the array deque (equivalent to <code>peek()</code>).</li>
        <li><code>peekLast()</code> - returns the last element of the array deque.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        System.out.println("ArrayDeque: " + animals);

        // Using peek()
        String element = animals.peek();
        System.out.println("Head Element: " + element);

        // Using peekFirst()
        String firstElement = animals.peekFirst();
        System.out.println("First Element: " + firstElement);

        // Using peekLast
        String lastElement = animals.peekLast();
        System.out.println("Last Element: " + lastElement);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Dog, Cat, Horse]
Head Element: Dog
First Element: Dog
Last Element: Horse`}</code>
      </pre>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           If the array deque is empty, <code>peek()</code>, <code>peekFirst()</code> and <code>peekLast()</code> return `null`.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Remove ArrayDeque Elements</h3>

      <p className="mb-4 font-semibold">1. Remove elements using the remove(), removeFirst(), removeLast() method</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove()</code> - returns and removes the first element (head).</li>
        <li><code>remove(element)</code> - returns and removes the specified element from the head.</li>
        <li><code>removeFirst()</code> - returns and removes the first element (equivalent to <code>remove()</code>).</li>
        <li><code>removeLast()</code> - returns and removes the last element.</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           If the array deque is empty, <code>remove()</code>, <code>removeFirst()</code> and <code>removeLast()</code> throw an exception.
        </p>
        <p>
           Also, <code>remove(element)</code> throws an exception if the element is not found.
        </p>
      </div>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Cow");
        animals.add("Horse");
        System.out.println("ArrayDeque: " + animals);

        // Using remove()
        String element = animals.remove();
        System.out.println("Removed Element: " + element);

        System.out.println("New ArrayDeque: " + animals);

        // Using removeFirst()
        String firstElement = animals.removeFirst();
        System.out.println("Removed First Element: " + firstElement);

        // Using removeLast()
        String lastElement = animals.removeLast();
        System.out.println("Removed Last Element: " + lastElement);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Dog, Cat, Cow, Horse]
Removed Element: Dog
New ArrayDeque: [Cat, Cow, Horse]
Removed First Element: Cat
Removed Last Element: Horse`}</code>
      </pre>

      <p className="mb-4 font-semibold">2. Remove elements using the poll(), pollFirst() and pollLast() method</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>poll()</code> - returns and removes the first element.</li>
        <li><code>pollFirst()</code> - returns and removes the first element (equivalent to <code>poll()</code>).</li>
        <li><code>pollLast()</code> - returns and removes the last element.</li>
      </ul>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           If the array deque is empty, <code>poll()</code>, <code>pollFirst()</code> and <code>pollLast()</code> return <code>null</code>.
        </p>
      </div>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Cow");
        animals.add("Horse");
        System.out.println("ArrayDeque: " + animals);

        // Using poll()
        String element = animals.poll();
        System.out.println("Removed Element: " + element);
        System.out.println("New ArrayDeque: " + animals);

        // Using pollFirst()
        String firstElement = animals.pollFirst();
        System.out.println("Removed First Element: " + firstElement);

        // Using pollLast()
        String lastElement = animals.pollLast();
        System.out.println("Removed Last Element: " + lastElement);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Dog, Cat, Cow, Horse]
Removed Element: Dog
New ArrayDeque: [Cat, Cow, Horse]
Removed First Element: Cat
Removed Last Element: Horse`}</code>
      </pre>

      <p className="mb-4 font-semibold">3. Remove Element: using the clear() method</p>

      <p className="mb-4">
         To remove all the elements, use the <code>clear()</code> method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        System.out.println("ArrayDeque: " + animals);

        // Using clear()
        animals.clear();

        System.out.println("New ArrayDeque: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: [Dog, Cat, Horse]
New ArrayDeque: []`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="iterate" className="text-xl font-semibold mt-6 mb-2">Iterating the ArrayDeque</h3>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>iterator()</code> - returns an iterator to traverse the deque.</li>
        <li><code>descendingIterator()</code> - returns an iterator to traverse the deque in reverse order.</li>
      </ul>

      <p className="mb-4">
         We must import the <code>java.util.Iterator</code> package. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> animals = new ArrayDeque<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");

        System.out.print("ArrayDeque: ");

        // Using iterator()
        Iterator<String> iterate = animals.iterator();
        while(iterate.hasNext()) {
            System.out.print(iterate.next());
            System.out.print(", ");
        }

        System.out.print("\nArrayDeque in reverse order: ");
        // Using descendingIterator()
        Iterator<String> desIterate = animals.descendingIterator();
        while(desIterate.hasNext()) {
            System.out.print(desIterate.next());
            System.out.print(", ");
        }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayDeque: Dog, Cat, Horse, 
ArrayDeque in reverse order: Horse, Cat, Dog, `}</code>
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
              <td className="p-2 border"><code>element()</code></td>
              <td className="p-2 border">Returns an element from the head of the array deque.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains(element)</code></td>
              <td className="p-2 border">Searches for the specified element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the length of the array deque.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toArray()</code></td>
              <td className="p-2 border">Converts array deque to array and returns it.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clone()</code></td>
              <td className="p-2 border">Creates a copy of the array deque and returns it.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="stack" className="text-2xl font-semibold mt-6 mb-2">ArrayDeque as a Stack</h2>

      <p className="mb-4">
         To implement **LIFO (Last-In-First-Out)** stacks, it is recommended to use <code>ArrayDeque</code> over the Stack class, as <code>ArrayDeque</code> is likely faster.
      </p>

      <p className="mb-4">
         <code>ArrayDeque</code> provides the following methods for stack implementation:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>push()</code> - adds an element to the top of the stack.</li>
        <li><code>peek()</code> - returns an element from the top of the stack.</li>
        <li><code>pop()</code> - returns and removes an element from the top of the stack.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        ArrayDeque<String> stack = new ArrayDeque<>();

        // Add elements to stack
        stack.push("Dog");
        stack.push("Cat");
        stack.push("Horse"); // Horse is now the top element (LIFO)
        System.out.println("Stack: " + stack);

        // Access element from top of stack
        String element = stack.peek();
        System.out.println("Accessed Element: " + element);

        // Remove elements from top of stack
        String remElement = stack.pop();
        System.out.println("Removed element: " + remElement);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Stack: [Horse, Cat, Dog]
Accessed Element: Horse
Removed Element: Horse`}</code>
      </pre>
    </div>
  );
}