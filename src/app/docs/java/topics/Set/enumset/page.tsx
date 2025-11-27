import React from "react";

export default function JavaEnumSet(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";
  const noteClass = "bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4"; // Custom class for note-tip

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java EnumSet</h1>

      <p className="mb-4">
         The <code>EnumSet</code> class provides a set implementation for elements of a single enum type.
      </p>

      <p className="mb-4">
         It implements the Java Set interface.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating EnumSet</h2>

      <p className="mb-4">
         We must import the <code>java.util.EnumSet</code> package.
      </p>

      <p className="mb-4">
         The enum set does not have public constructors; we must use predefined static methods.
      </p>

      <h3 className="text-xl font-semibold mt-10 mb-2">1. Using allOf(Size)</h3>

      <p className="mb-4">
         The <code>allOf()</code> method creates an enum set containing all values of the specified enum type.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {
    // an enum named Size
    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }
    
    public static void main(String[] args) {

        // Creating an EnumSet using allOf()
        EnumSet<Size> sizes = EnumSet.allOf(Size.class);

        System.out.println("EnumSet: " + sizes);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet: [SMALL, MEDIUM, LARGE, EXTRALARGE]
`}</code>
      </pre>

      <p className="mb-4">
         Here, <code>Size.class</code> denotes the `Size` enum we created.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-10 mb-2">2. Using noneOf(Size)</h3>

      <p className="mb-4">
         The <code>noneOf()</code> method creates an empty enum set, but its type is bound to the specified enum.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {

      // an enum type Size
    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Creating an EnumSet using noneOf()
        EnumSet<Size> sizes = EnumSet.noneOf(Size.class);

        System.out.println("Empty EnumSet: " + sizes);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Empty EnumSet : []
`}</code>
      </pre>

      <div className={noteClass}>
        <p className="font-bold">Note:</p>
        <p>
           You can only insert elements of enum type `Size` in this set, as it was created using the `Size` enum.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-10 mb-2">3. Using range(e1, e2) Method</h3>

      <p className="mb-4">
         The <code>range()</code> method creates an enum set containing all values between enum constants `e1` and `e2` (inclusive).
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {

    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Creating an EnumSet using range()
        EnumSet<Size> sizes = EnumSet.range(Size.MEDIUM, Size.EXTRALARGE);

        System.out.println("EnumSet: " + sizes);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet: [MEDIUM, LARGE, EXTRALARGE]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-10 mb-2">4. Using of() Method</h3>

      <p className="mb-4">
         The <code>of()</code> method creates an enum set containing the specified elements only.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {

    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Using of() with a single parameter
        EnumSet<Size> sizes1 = EnumSet.of(Size.MEDIUM);
        System.out.println("EnumSet1: " + sizes1);

        // Using of() with multiple parameters
        EnumSet<Size> sizes2 = EnumSet.of(Size.SMALL, Size.LARGE);
        System.out.println("EnumSet2: " + sizes2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet1: [MEDIUM]
EnumSet2: [SMALL, LARGE]
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of EnumSet</h2>

      <p className="mb-4">
         The <code>EnumSet</code> class provides methods to perform various operations.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="insert" className="text-2xl font-semibold mt-6 mb-2">Insert Elements to EnumSet</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>add()</code> - inserts specified enum values to the enum set.</li>
        <li><code>addAll()</code> - inserts all elements of the specified collection to the set.</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {

    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Creating an EnumSet using allOf()
        EnumSet<Size> sizes1 = EnumSet.allOf(Size.class);

        // Creating an EnumSet using noneOf()
        EnumSet<Size> sizes2 = EnumSet.noneOf(Size.class);

        // Using add method
        sizes2.add(Size.MEDIUM);
        System.out.println("EnumSet Using add(): " + sizes2);

        // Using addAll() method
        sizes2.addAll(sizes1);
        System.out.println("EnumSet Using addAll(): " + sizes2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet using add(): [MEDIUM]
EnumSet using addAll(): [SMALL, MEDIUM, LARGE, EXTRALARGE]
`}</code>
      </pre>

      <p className="mb-4">
         The <code>addAll()</code> method can insert elements from other collections (like `ArrayList`), provided all elements are of the same enum type.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="access" className="text-2xl font-semibold mt-6 mb-2">Access EnumSet Elements</h2>

      <p className="mb-4">
         We use the <code>iterator()</code> method (from the <code>java.util.Iterator</code> package) to access elements.
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;
import java.util.Iterator;

class Main {

    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Creating an EnumSet using allOf()
        EnumSet<Size> sizes = EnumSet.allOf(Size.class);

        Iterator<Size> iterate = sizes.iterator();

        System.out.print("EnumSet: ");
        while(iterate.hasNext()) {
            System.out.print(iterate.next());
            System.out.print(", ");
        }
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet: SMALL, MEDIUM, LARGE, EXTRALARGE,
`}</code>
      </pre>

      <p className="mb-4">
         Note: <code>hasNext()</code> checks if there is a next element, and <code>next()</code> returns the next element.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="remove" className="text-2xl font-semibold mt-6 mb-2">Remove EnumSet Elements</h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><code>remove()</code> - removes the specified element.</li>
        <li><code>removeAll()</code> - removes all the elements in the set (Difference).</li>
      </ul>

      <p className="mb-4">
         For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.EnumSet;

class Main {

    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }

    public static void main(String[] args) {

        // Creating EnumSet using allOf()
        EnumSet<Size> sizes = EnumSet.allOf(Size.class);
        System.out.println("EnumSet: " + sizes);

        // Using remove()
        boolean value1 = sizes.remove(Size.MEDIUM);
        System.out.println("Is MEDIUM removed? " + value1);

        // Using removeAll()
        boolean value2 = sizes.removeAll(sizes);
        System.out.println("Are all elements removed? " + value2);
    }
}
`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`EnumSet: [SMALL, MEDIUM, LARGE, EXTRALARGE]
Is MEDIUM removed? true
Are all elements removed? true
`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Other Methods</h2>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Description</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>copyOf()</code></td>
              <td className="p-2 border">Creates a copy of the <code>EnumSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">Searches the <code>EnumSet</code> for the element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>isEmpty()</code></td>
              <td className="p-2 border">Checks if the <code>EnumSet</code> is empty.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the size of the <code>EnumSet</code>.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clear()</code></td>
              <td className="p-2 border">Removes all the elements from the <code>EnumSet</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Clonable and Serializable Interfaces</h2>

      <p className="mb-4 font-semibold">Cloneable Interface</p>
      <p className="mb-4">
         It allows the <code>EnumSet</code> class to make a copy of its instances.
      </p>

      <p className="mb-4 font-semibold">Serializable Interface</p>
      <p className="mb-4">
         This interface allows Java objects to be converted into bits or bytes (serialized) for transmission over a network.
      </p>

      <p className="mb-4">
         The <code>EnumSet</code> implements this interface, making its objects network-transmittable.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="why" className="text-2xl font-semibold mt-6 mb-2">Why EnumSet?</h2>

      <p className="mb-4">
         The <code>EnumSet</code> provides a highly efficient way to store enum values compared to other set implementations (like HashSet).
      </p>

      <p className="mb-4">
         Because an enum set is constrained to a single enum type, the Java Virtual Machine (JVM) knows all possible values.
      </p>

      <p className="mb-4">
         Due to this knowledge, enum sets are internally implemented as a sequence of bits.
      </p>

      <p className="mb-4">
         A bit corresponding to an element is turned on if that element is present in the set, making operations very fast.
      </p>
    </div>
  );
}