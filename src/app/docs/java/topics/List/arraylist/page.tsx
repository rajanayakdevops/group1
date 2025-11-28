import React from "react";

export default function JavaArrayList(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  // Class for the collapsible FAQ headers (no need for the full collapse logic here)
  const faqHeaderClass = "text-lg font-semibold cursor-pointer border-b border-gray-300 py-3 mb-2";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java ArrayList</h1>

      <p className="mb-4">
         In Java, we use the <code>ArrayList</code> class to implement resizable-arrays.
      </p>

      <p className="mb-4">
         It implements the List interface of the collections framework.
      </p>

      <figure className="my-6">
        
        <figcaption className="text-sm text-gray-500 mt-1">Java ArrayList Implementation</figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Java ArrayList Vs Array</h2>

      <p className="mb-4">
         In Java, the size of an array must be declared beforehand and is hard to change.
      </p>

      <p className="mb-4">
        The <code>ArrayList</code> class solves this by providing resizable arrays.
      </p>

      <p className="mb-4">
         Arraylists can automatically adjust their capacity when elements are added or removed.
      </p>

      <p className="mb-4">
         Hence, arraylists are also known as dynamic arrays.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="create" className="text-2xl font-semibold mt-6 mb-2">Creating an ArrayList</h2>

      <p className="mb-4">
         Before using <code>ArrayList</code>, we must import the <code>java.util.ArrayList</code> package.
      </p>

      <p className="mb-4">
         Here is how we can create arraylists in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`ArrayList<Type> arrayList = new ArrayList<>();`}</code>
      </pre>

      <p className="mb-4">
         Here, Type indicates the type of the arraylist. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// create Integer type arraylist
ArrayList<Integer> arrayList = new ArrayList<>();

// create String type arraylist
ArrayList<String> arrayList = new ArrayList<>();`}</code>
      </pre>

      <p className="mb-4">
         Note that we used <code>Integer</code> (wrapper class) not int (primitive type).
      </p>

      <p className="mb-4">
         We cannot use primitive types while creating an arraylist; we must use the corresponding wrapper classes.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="example" className="text-xl font-semibold mt-6 mb-2">Example: Create ArrayList in Java</h3>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args){

    // create ArrayList
    ArrayList<String> languages = new ArrayList<>();

    // Add elements to ArrayList
    languages.add("Java");
    languages.add("Python");
    languages.add("Swift");
    System.out.println("ArrayList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Java, Python, Swift]`}</code>
      </pre>

      <p className="mb-4">
         In the example, we created an <code>ArrayList</code> named languages.
      </p>

      <p className="mb-4">
         We used the <code>add()</code> method to add elements to the arraylist.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Basic Operations on ArrayList</h2>

      <p className="mb-4">
         The <code>ArrayList</code> class provides various methods for different operations.
      </p>

      <p className="mb-4">
         Commonly used arraylist operations are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Add elements</li>
        <li>Access elements</li>
        <li>Change elements</li>
        <li>Remove elements</li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h3 id="add-element" className="text-xl font-semibold mt-6 mb-2">1. Add Elements to an ArrayList</h3>

      <p className="mb-4">
         To add a single element, use the <code>add()</code> method without an index parameter. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args){
    // create ArrayList
    ArrayList<String> languages = new ArrayList<>();

    // add() method without the index parameter
    languages.add("Java");
    languages.add("C");
    languages.add("Python");
    System.out.println("ArrayList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Java, C, Python]`}</code>
      </pre>

      <p className="mb-4">
         To add an element at a specified position, pass the index number as an additional parameter to the <code>add()</code> method. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// add JavaScript at index 1
languages.add(1, "JavaScript");

// add C++ at index 3
languages.add(3, "C++");`}</code>
      </pre>

      <p className="mb-4">
         To add all elements of another collection (like a set) to an arraylist, use the <code>addAll()</code> method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.HashSet;

class Main {
  public static void main(String[] args) {

    // create a set
    HashSet<String> vowels = new HashSet<>();
    vowels.add("a");
    vowels.add("e");
    vowels.add("i");

    // create an arraylist
    ArrayList<String> alphabets = new ArrayList<>();

    // add all elements of set to arraylist
    alphabets.addAll(vowels);
    System.out.println("ArrayList: " + alphabets);
  }
}

// Output: ArrayList: [a, e, i]`}</code>
        </pre>
        
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 id="access-element" className="text-xl font-semibold mt-6 mb-2">2. Access ArrayList Elements</h3>

      <p className="mb-4">
         To access an element by index, use the <code>get()</code> method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> animals = new ArrayList<>();

    // add elements in the arraylist
    animals.add("Cat");
    animals.add("Dog");
    animals.add("Cow");
    System.out.println("ArrayList: " + animals);

    // get the element from the arraylist
    String str = animals.get(1);
    System.out.print("Element at index 1: " + str);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Cat, Dog, Cow]
Element at index 1: Dog`}</code>
      </pre>

      <p className="mb-4">
         The <code>get()</code> method with parameter 1 returns the element at index 1.
      </p>

      <p className="mb-4">
         We can also access elements using the <code>iterator()</code> method.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="change-element" className="text-xl font-semibold mt-6 mb-2">3. Change ArrayList Elements</h3>

      <p className="mb-4">
         To change elements, use the <code>set()</code> method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    // add elements in the array list
    languages.add("Java");
    languages.add("Kotlin");
    languages.add("C++");
    System.out.println("ArrayList: " + languages);

    // change the element of the array list
    languages.set(2, "JavaScript");
    System.out.println("Modified ArrayList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Java, Kotlin, C++]
Modified ArrayList: [Java, Kotlin, JavaScript]`}</code>
      </pre>

      <p className="mb-4">
         The <code>set(2, "JavaScript")</code> method changes the element at index 2 to "JavaScript".
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="remove-elements" className="text-xl font-semibold mt-6 mb-2">4. Remove ArrayList Elements</h3>

      <p className="mb-4">
         To remove an element by index, use the <code>remove()</code> method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> animals = new ArrayList<>();

    // add elements in the array list
    animals.add("Dog");
    animals.add("Cat");
    animals.add("Horse");
    System.out.println("ArrayList: " + animals);

    // remove element from index 2
    String str = animals.remove(2);
    System.out.println("Updated ArrayList: " + animals);
    System.out.println("Removed Element: " + str);
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Dog, Cat, Horse]
Updated ArrayList: [Dog, Cat]
Removed Element: Horse`}</code>
      </pre>

      <p className="mb-4">
         The <code>remove()</code> method takes the index number and removes the element at that position.
      </p>

      <p className="mb-4">
         To remove all elements, use the <code>removeAll()</code> or <code>clear()</code> methods.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Methods of ArrayList Class</h2>

      <p className="mb-4">
         We have covered the <code>add()</code>, <code>get()</code>, <code>set()</code>, and <code>remove()</code> methods.
      </p>

      <p className="mb-4">
         Here are some more commonly used <code>ArrayList</code> methods:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">Methods</th>
              <th className="p-2 border">Descriptions</th>
            </tr>
            <tr>
              <td className="p-2 border"><code>size()</code></td>
              <td className="p-2 border">Returns the length of the arraylist.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>sort()</code></td>
              <td className="p-2 border">Sort the arraylist elements.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>clone()</code></td>
              <td className="p-2 border">Creates a new arraylist with the same element, size, and capacity.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>contains()</code></td>
              <td className="p-2 border">Searches the arraylist for the specified element and returns a boolean result.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>ensureCapacity()</code></td>
              <td className="p-2 border">Specifies the total element the arraylist can contain.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>isEmpty()</code></td>
              <td className="p-2 border">Checks if the arraylist is empty.</td>
            </tr>
            <tr>
              <td className="p-2 border"><code>indexOf()</code></td>
              <td className="p-2 border">Searches a specified element in an arraylist and returns the index of the element.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="loop" className="text-2xl font-semibold mt-6 mb-2">Iterate through an ArrayList</h2>

      <p className="mb-4">
         We can use the Java for-each loop to iterate through each element of the arraylist. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {

    // creating an array list
    ArrayList<String> animals = new ArrayList<>();
    animals.add("Cow");
    animals.add("Cat");
    animals.add("Dog");
    System.out.println("ArrayList: " + animals);

    // iterate using for-each loop
    System.out.println("Accessing individual elements:  ");

    for (String language : animals) {
      System.out.print(language);
      System.out.print(", ");
    }
  }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Cow, Cat, Dog]
Accessing individual elements:  
Cow, Cat, Dog,`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>

      <p className={faqHeaderClass}>What is the difference between Java ArrayList and LinkedList?</p>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border table-auto">
          <tbody>
            <tr>
              <th className="p-2 border">ArrayList</th>
              <th className="p-2 border">LinkedList</th>
            </tr>
            <tr>
              <td className="p-2 border">Implements <code>List</code> interface.</td>
              <td className="p-2 border">Implements <code>List</code>, <code>Queue</code>, and <code>Deque</code> interfaces.</td>
            </tr>
            <tr>
              <td className="p-2 border">Stores a single value (the data).</td>
              <td className="p-2 border">Stores 3 values: data, previous address, and next address.</td>
            </tr>
            <tr>
              <td className="p-2 border">Provides the functionality of a resizable array.</td>
              <td className="p-2 border">Provides the functionality of a doubly-linked list.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={faqHeaderClass}>How to convert an ArrayList to Array?</p>
      <p className="mb-4">
         We can convert the <code>ArrayList</code> into an array using the <code>toArray()</code> method. For example:
      </p>
      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    // add elements in the array list
    languages.add("Java");
    languages.add("Python");
    languages.add("C++");
    System.out.println("ArrayList: " + languages);

    // create a new array of String type
    String[] arr = new String[languages.size()];

    // convert ArrayList into an array
    languages.toArray(arr);
    System.out.print("Array: ");

    // access elements of the array
    for (String item : arr) {
      System.out.print(item + ", ");
    }
  }
}`}</code>
        </pre>
        
      </div>
      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Java, Python, C++]
Array: Java, Python, C++, `}</code>
      </pre>

      <p className={faqHeaderClass}>How to convert an array to ArrayList?</p>
      <p className="mb-4">
         We use the <code>asList()</code> method of the <code>Arrays</code> class. We must import the <code>java.util.Arrays</code> package. For example:
      </p>
      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {

    // create an array of String type
    String[] arr = { "Java", "Python", "C++" };
    System.out.print("Array: ");

    // print array
    for (String str : arr) {
      System.out.print(str);
      System.out.print(" ");
    }

    // create an ArrayList from an array
    ArrayList<String> languages = new ArrayList<>(Arrays.asList(arr));
    System.out.println("\nArrayList: " + languages);
  }
}`}</code>
        </pre>
        
      </div>
      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Array: Java Python C++  
ArrayList: [Java, Python, C++]`}</code>
      </pre>

      <p className={faqHeaderClass}>How to create and initialize an ArrayList in a single line?</p>
      <p className="mb-4">
         We use the <code>Arrays.asList()</code> method to create and initialize an arraylist in a single line. For example:
      </p>
      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {

    // create and initialize ArrayList
    ArrayList<String> languages = new ArrayList<>(Arrays.asList("Java", "Python", "C"));
    System.out.println("ArrayList: " + languages);

  }
}

// Output: ArrayList: [Java, Python, C]`}</code>
        </pre>
        
      </div>

      <p className={faqHeaderClass}>How to convert an ArrayList to String?</p>
      <p className="mb-4">
         We use the <code>toString()</code> method of the <code>ArrayList</code> class to convert an arraylist into a string. For example:
      </p>
      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    // add elements in the ArrayList
    languages.add("Java");
    languages.add("Python");
    languages.add("Kotlin");
    System.out.println("ArrayList: " + languages);

    // convert ArrayList into a String
    String str = languages.toString();
    System.out.println("String: " + str);
  }
}`}</code>
        </pre>
        
      </div>
      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`ArrayList: [Java, Python, Kotlin]
String: [Java, Python, Kotlin]`}</code>
      </pre>

      <p className={faqHeaderClass}>How to create an arraylist using the List interface?</p>
      <p className="mb-4">
        We can also create an arraylist using the List interface since the ArrayList class implements the List interface. For example:
      </p>
      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.ArrayList;
import java.util.List;

class Main {
  public static void main(String[] args) {

    // create arraylist using List
    List<String> languages = new ArrayList<>();
    languages.add("Java");
    languages.add("Python");
    languages.add("C");

    System.out.println("ArrayList: " + languages);
  }
}

// Output: ArrayList: [Java, Python, C]`}</code>
        </pre>
        
      </div>
    </div>
  );
}