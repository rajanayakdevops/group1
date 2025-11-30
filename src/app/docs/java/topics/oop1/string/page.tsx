import React from "react";

export default function JavaStringsTutorial() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Strings
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, a <strong>string</strong> is a sequence of characters, represented using double quotes. Strings are objects of the predefined <code>String</code> class.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating Strings
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// Using string literals
String first = "Java";
String second = "Python";

// Using the new keyword
String third = new String("Java String");`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        String Operations
      </h2>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">1. Get Length</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String greet = "Hello! World";
int length = greet.length();
System.out.println("Length: " + length); // Output: 12`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">2. Concatenate Strings</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String first = "Java ";
String second = "Programming";
String joined = first.concat(second);
System.out.println(joined); // Output: Java Programming

// Or using +
String joined2 = first + second;`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">3. Compare Strings</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String first = "java programming";
String second = "java programming";
String third = "python programming";

System.out.println(first.equals(second)); // true
System.out.println(first.equals(third));  // false`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">4. Escape Characters</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String example = "This is the \"String\" class.";
System.out.println(example); // Output: This is the "String" class.`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">5. Strings are Immutable</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String example = "Hello! ";
example = example.concat("World");
System.out.println(example); // Output: Hello! World
// Original string "Hello! " remains unchanged`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">6. String Literals vs New Keyword</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// Literal
String s1 = "Java"; // stored in string pool
String s2 = "Java"; // same reference as s1

// New keyword
String s3 = new String("Java"); // new object created
String s4 = new String("Java"); // different object than s3`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Common String Methods
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300 mb-6 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2 text-left">Method</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border border-gray-300 px-3 py-2">contains()</td>
            <td className="border border-gray-300 px-3 py-2">Checks whether the string contains a substring.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">substring()</td>
            <td className="border border-gray-300 px-3 py-2">Returns a substring from the string.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">replace()</td>
            <td className="border border-gray-300 px-3 py-2">Replaces characters or substrings in the string.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">charAt()</td>
            <td className="border border-gray-300 px-3 py-2">Returns the character at a specific index.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">toUpperCase()</td>
            <td className="border border-gray-300 px-3 py-2">Converts string to uppercase.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">toLowerCase()</td>
            <td className="border border-gray-300 px-3 py-2">Converts string to lowercase.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">split()</td>
            <td className="border border-gray-300 px-3 py-2">Breaks the string into an array of substrings.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">trim()</td>
            <td className="border border-gray-300 px-3 py-2">Removes leading and trailing whitespaces.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
