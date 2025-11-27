import React from "react";

export default function JavaVector(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Vector</h1>

      <p className="mb-4">
         The <code>Vector</code> class is an implementation of the List interface.
      </p>
      
      <p className="mb-4">
         It allows us to create resizable-arrays, similar to the ArrayList class.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="vs-arraylist" className="text-2xl font-semibold mt-6 mb-2">Java Vector vs ArrayList</h2>

      <p className="mb-4">
         Both <code>ArrayList</code> and <code>Vector</code> implement the <code>List</code> interface and provide similar functionalities.
      </p>

      <p className="mb-4">
         The main difference is that the <code>Vector</code> class synchronizes each individual operation.
      </p>

      <p className="mb-4">
         This synchronization means a lock is applied whenever an operation is performed, preventing exceptions like <code>ConcurrentModificationException</code> in multi-threaded environments.
      </p>

      <p className="mb-4">
         This continuous locking makes vectors less efficient than array lists.
      </p>

      <p className="mb-4">
         Note: It is recommended to use <code>ArrayList</code> instead of <code>Vector</code> because vectors are less efficient.
      </p>
      
      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating a Vector</h2>

      <p className="mb-4">
         Here is the basic syntax for creating vectors in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`Vector<Type> vector = new Vector<>();`}</code>
      </pre>

      <p className="mb-4">
         Here, Type indicates the type of data the vector will store. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// create Integer type vector
Vector<Integer> vector = new Vector<>();

// create String type vector
Vector<String> vector = new Vector<>();`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of Vector</h2>

      <p className="mb-4">
         The <code>Vector</code> class provides resizable-array implementations of the <code>List</code> interface.
      </p>

      <h2 id="add-elements" className="text-2xl font-semibold mt-6 mb-2">Add Elements to Vector</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add(element)</code> - adds an element to the end of the vector.</li>
        <li><code>add(index, element)</code> - adds an element to the specified position.</li>
        <li><code>addAll(vector)</code> - adds all elements of one vector to another.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Vector;

class Main {
    public static void main(String[] args) {
        Vector<String> mammals = new Vector<>();

        // Using the add() method
        mammals.add("Dog");
        mammals.add("Horse");

        // Using index number
        mammals.add(2, "Cat");
        System.out.println("Vector: " + mammals);

        // Using addAll()
        Vector<String> animals = new Vector<>();
        animals.add("Crocodile");

        animals.addAll(mammals);
        System.out.println("New Vector: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Vector: [Dog, Horse, Cat]
New Vector: [Crocodile, Dog, Horse, Cat]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="access" className="text-2xl font-semibold mt-6 mb-2">Access Vector Elements</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>get(index)</code> - returns an element specified by the index.</li>
        <li><code>iterator()</code> - returns an iterator object to sequentially access vector elements.</li>
      </ul>

      <p className="mb-4">
        For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Iterator;
import java.util.Vector;

class Main {
    public static void main(String[] args) {
        Vector<String> animals = new Vector<>();
        animals.add("Dog");
        animals.add("Horse");
        animals.add("Cat");

        // Using get()
        String element = animals.get(2);
        System.out.println("Element at index 2: " + element);

        // Using iterator()
        Iterator<String> iterate = animals.iterator();
        System.out.print("Vector: ");
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
        <code>{`Element at index 2: Cat
Vector: Dog, Horse, Cat,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="remove" className="text-2xl font-semibold mt-6 mb-2">Remove Vector Elements</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove(index)</code> - removes an element from specified position.</li>
        <li><code>removeAll()</code> - removes all the elements.</li>
        <li><code>clear()</code> - removes all elements (more efficient than <code>removeAll()</code>).</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Vector;

class Main {
    public static void main(String[] args) {
        Vector<String> animals = new Vector<>();
        animals.add("Dog");
        animals.add("Horse");
        animals.add("Cat");

        System.out.println("Initial Vector: " + animals);

        // Using remove()
        String element = animals.remove(1);
        System.out.println("Removed Element: " + element);
        System.out.println("New Vector: " + animals);

        // Using clear()
        animals.clear();
        System.out.println("Vector after clear(): " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Initial Vector: [Dog, Horse, Cat]
Removed Element: Horse
New Vector: [Dog, Cat]
Vector after clear(): []`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="other-methods" className="text-2xl font-semibold mt-6 mb-2">Others Vector Methods</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Descriptions</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>set()</code></td>
              <td className="p-2 border">changes an element of the vector</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">returns the size of the vector</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toArray()</code></td>
              <td className="p-2 border">converts the vector into an array</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>toString()</code></td>
              <td className="p-2 border">converts the vector into a String</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">searches the vector for specified element and returns a boolean result</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}