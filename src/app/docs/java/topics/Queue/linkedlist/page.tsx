import React from "react";

export default function JavaLinkedList(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  // Note: Using an approximate yellow background for the final Note section
  const noteBlockClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java LinkedList</h1>

      <p className="mb-4">
        The <code>LinkedList</code> class provides the functionality of the doubly linked list data structure.
      </p>

      <figure className="my-6">
        
        <figcaption className="text-sm text-gray-500 mt-1">Java Doubly LinkedList</figcaption>
      </figure>

      <p className="mb-4">
         Each element in a linked list is a node.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Prev - stores the address of the previous element (is null for the first element).</li>
        <li>Next - stores the address of the next element (is null for the last element).</li>
        <li>Data - stores the actual data.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating a Java LinkedList</h2>

      <p className="mb-4">
         Here is the basic syntax for creating linked lists in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`LinkedList<Type> linkedList = new LinkedList<>();`}</code>
      </pre>

      <p className="mb-4">
         Type indicates the data type of the linked list. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// create Integer type linked list
LinkedList<Integer> linkedList = new LinkedList<>();

// create String type linked list
LinkedList<String> linkedList = new LinkedList<>();`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Example: Create LinkedList in Java</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
  public static void main(String[] args){

    // create linkedlist
    LinkedList<String> animals = new LinkedList<>();

    // Add elements to LinkedList
    animals.add("Dog");
    animals.add("Cat");
    animals.add("Cow");
    System.out.println("LinkedList: " + animals);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Dog, Cat, Cow]`}</code>
      </pre>

      <p className="mb-4">
         We created a <code>LinkedList</code> named animals and used the <code>add()</code> method to insert elements.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Working of a Java LinkedList</h2>

      <p className="mb-4">
         Elements in linked lists are not stored in sequence; they are scattered and connected through links (Prev and Next pointers).
      </p>

      <figure className="my-6">
        
        <figcaption className="text-sm text-gray-500 mt-1">Java LinkedList Implementation</figcaption>
      </figure>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Dog (first element) holds null as the previous address and the address of Cat as the next address.</li>
        <li>Cat (second element) holds the address of Dog as the previous address and the address of Cow as the next address.</li>
        <li>Cow (last element) holds the address of Cat as the previous address and null as the next element.</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of Java LinkedList</h2>

      <p className="mb-4">
        . <code>LinkedList</code> provides various methods to perform operations. We will look at four commonly used types:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Add elements</li>
        <li>Access elements</li>
        <li>Change elements</li>
        <li>Remove elements</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h3 id="add" className="text-xl font-semibold mt-6 mb-2">1. Add elements to a LinkedList</h3>

      <p className="mb-4">
         We use the <code>add()</code> method to add an element (node) at the end.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
  public static void main(String[] args){
    // create linkedlist
    LinkedList<String> animals = new LinkedList<>();

    // add() method without the index parameter
    animals.add("Dog");
    animals.add("Cat");
    animals.add("Cow");
    System.out.println("LinkedList: " + animals);

    // add() method with the index parameter
    animals.add(1, "Horse");
    System.out.println("Updated LinkedList: " + animals);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Dog, Cat, Cow]
Updated LinkedList: [Dog, Horse, Cat, Cow]`}</code>
      </pre>

      <p className="mb-4">
         The statement <code>animals.add(1, "Horse")</code> uses the optional index parameter (1) to insert "Horse" at that position.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="get" className="text-xl font-semibold mt-6 mb-2">2. Access LinkedList elements</h3>

      <p className="mb-4">
         The <code>get()</code> method is used to access an element by its index.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
  public static void main(String[] args) {
    LinkedList<String> languages = new LinkedList<>();

    // add elements in the linked list
    languages.add("Python");
    languages.add("Java");
    languages.add("JavaScript");
    System.out.println("LinkedList: " + languages);

    // get the element from the linked list
    String str = languages.get(1);
    System.out.print("Element at index 1: " + str);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Python, Java, JavaScript]
Element at index 1: Java`}</code>
      </pre>

      <p className="mb-4">
         The <code>get(1)</code> method returns the element at index 1 ("Java").
      </p>

      <p className="mb-4">
         Elements can also be accessed using the <code>iterator()</code> and <code>listIterator()</code> methods.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="change" className="text-xl font-semibold mt-6 mb-2">3. Change Elements of a LinkedList</h3>

      <p className="mb-4">
         The <code>set()</code> method is used to change an existing element at a specific index.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
  public static void main(String[] args) {
    LinkedList<String> languages = new LinkedList<>();

    // add elements in the linked list
    languages.add("Java");
    languages.add("Python");
    languages.add("JavaScript");
    languages.add("Java");
    System.out.println("LinkedList: " + languages);

    // change elements at index 3
    languages.set(3, "Kotlin");
    System.out.println("Updated LinkedList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Java, Python, JavaScript, Java]
Updated LinkedList: [Java, Python, JavaScript, Kotlin]`}</code>
      </pre>

      <p className="mb-4">
         The statement <code>languages.set(3, "Kotlin")</code> changes the element at index 3 to "Kotlin".
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="remove" className="text-xl font-semibold mt-6 mb-2">4. Remove element from a LinkedList</h3>

      <p className="mb-4">
         The <code>remove()</code> method is used to remove an element specified by its index number.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
  public static void main(String[] args) {
    LinkedList<String> languages = new LinkedList<>();

    // add elements in LinkedList
    languages.add("Java");
    languages.add("Python");
    languages.add("JavaScript");
    languages.add("Kotlin");
    System.out.println("LinkedList: " + languages);

    // remove elements from index 1
    String str = languages.remove(1);
    System.out.println("Removed Element: " + str);

    System.out.println("Updated LinkedList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Java, Python, JavaScript, Kotlin]
Removed Element: Python
Updated LinkedList: [Java, JavaScript, Kotlin]`}</code>
      </pre>

      <p className="mb-4">
         The <code>remove(1)</code> method removes the element at index 1 ("Python").
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other Methods</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Description</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">checks if the LinkedList contains the element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>indexOf()</code></td>
              <td className="p-2 border">returns the index of the first occurrence of the element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>lastIndexOf()</code></td>
              <td className="p-2 border">returns the index of the last occurrence of the element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clear()</code></td>
              <td className="p-2 border">removes all the elements of the LinkedList</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>iterator()</code></td>
              <td className="p-2 border">returns an iterator to iterate over LinkedList</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="queue-deque" className="text-2xl font-semibold mt-6 mb-2">LinkedList as Deque and Queue</h2>

      <p className="mb-4">
         Since the <code>LinkedList</code> class implements the Queue and Deque interfaces, it can use methods from those interfaces as well.
      </p>

      <p className="mb-4">
         Here are some of the commonly used Queue/Deque methods available in <code>LinkedList</code>:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Descriptions</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>addFirst()</code></td>
              <td className="p-2 border">adds the specified element at the beginning of the linked list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>addLast()</code></td>
              <td className="p-2 border">adds the specified element at the end of the linked list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>getFirst()</code></td>
              <td className="p-2 border">returns the first element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>getLast()</code></td>
              <td className="p-2 border">returns the last element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>removeFirst()</code></td>
              <td className="p-2 border">removes the first element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>removeLast()</code></td>
              <td className="p-2 border">removes the last element</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>peek()</code></td>
              <td className="p-2 border">returns the first element (head) of the linked list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>poll()</code></td>
              <td className="p-2 border">returns and removes the first element from the linked list</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>offer()</code></td>
              <td className="p-2 border">adds the specified element at the end of the linked list</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example: Java LinkedList as Queue</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;
import java.util.Queue;

class Main {
  public static void main(String[] args) {
    Queue<String> languages = new LinkedList<>();

    // add elements
    languages.add("Python");
    languages.add("Java");
    languages.add("C");
    System.out.println("LinkedList: " + languages);

    // access the first element
    String str1 = languages.peek();
    System.out.println("Accessed Element: " + str1);

    // access and remove the first element
    String str2 = languages.poll();
    System.out.println("Removed Element: " + str2);
    System.out.println("LinkedList after poll(): " + languages);

    // add element at the end
    languages.offer("Swift");
    System.out.println("LinkedList after offer(): " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Python, Java, C]
Accessed Element: Python
Removed Element: Python
LinkedList after poll(): [Java, C]
LinkedList after offer(): [Java, C, Swift]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example: LinkedList as Deque</h2>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;
import java.util.Deque;

class Main {
  public static void main(String[] args){
    Deque<String> animals = new LinkedList<>();

    // add element at the beginning
    animals.add("Cow");
    System.out.println("LinkedList: " + animals);

    animals.addFirst("Dog");
    System.out.println("LinkedList after addFirst(): " + animals);

    // add elements at the end
    animals.addLast("Zebra");
    System.out.println("LinkedList after addLast(): " + animals);

    // remove the first element
    animals.removeFirst();
    System.out.println("LinkedList after removeFirst(): " + animals);

    // remove the last element
    animals.removeLast();
    System.out.println("LinkedList after removeLast(): " + animals);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Cow]
LinkedList after addFirst(): [Dog, Cow]
LinkedList after addLast(): [Dog, Cow, Zebra]
LinkedList after removeFirst(): [Cow, Zebra]
LinkedList after removeLast(): [Cow]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="iterate" className="text-2xl font-semibold mt-6 mb-2">Iterating through LinkedList</h2>

      <p className="mb-4">
         We can use the Java for-each loop to iterate through <code>LinkedList</code> elements. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.LinkedList;

class Main {
    public static void main(String[] args) {
        // Creating a linked list
        LinkedList<String> animals = new LinkedList<>();
        animals.add("Cow");
        animals.add("Cat");
        animals.add("Dog");
        System.out.println("LinkedList: " + animals);

        // Using forEach loop
        System.out.println("Accessing linked list elements:");
        for(String animal: animals) {
            System.out.print(animal);
            System.out.print(", ");
        }
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`LinkedList: [Cow, Cat, Dog]
Accessing linked list elements:
Cow, Cat, Dog,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="linkedlist-vs-arraylist" className="text-2xl font-semibold mt-6 mb-2">LinkedList Vs. ArrayList</h2>

      <p className="mb-4">
         Both Java <code>ArrayList</code> and <code>LinkedList</code> implement the <code>List</code> interface.
      </p>

      <p className="mb-4">
         However, there are significant differences between them:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">LinkedList</th>
              <th className="p-2 border">ArrayList</th>
            </tr>
            <tr>
              <td className="p-2 border">Implements <code>List</code>, <code>Queue</code>, and <code>Deque</code> interfaces.</td>
              <td className="p-2 border">Implements <code>List</code> interface.</td>
            </tr>
            <tr>
              <td className="p-2 border">Stores 3 values (previous address, data, and next address) in a single node.</td>
              <td className="p-2 border">Stores a single value in a single position (resizable array).</td>
            </tr>
            <tr>
              <td className="p-2 border">Provides the doubly-linked list implementation.</td>
              <td className="p-2 border">Provides a resizable array implementation.</td>
            </tr>
            <tr>
              <td className="p-2 border">Adding an element only changes `prev` and `next` addresses.</td>
              <td className="p-2 border">Adding an element requires shifting all subsequent elements.</td>
            </tr>
            <tr>
              <td className="p-2 border">Accessing an element requires iterating from the beginning.</td>
              <td className="p-2 border">Can randomly access elements using indexes (O(1) access).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className={noteBlockClass}>
        <p className="font-bold mb-2">Note:</p>
        <p className="mb-2">
           We can also create a <code>LinkedList</code> using interfaces in Java. For example:
        </p>

        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`// create linkedlist using List
List<String> animals1 = new LinkedList<>();

// creating linkedlist using Queue
Queue<String> animals2 = new LinkedList<>();

// creating linkedlist using Deque
Deque<String> animals3 = new LinkedList<>();`}</code>
        </pre>

        <p>
           If the <code>LinkedList</code> is created using one interface (e.g., List for animals1), then you cannot use methods specific to other interfaces (like Queue or Deque methods).
        </p>
      </div>
    </div>
  );
}