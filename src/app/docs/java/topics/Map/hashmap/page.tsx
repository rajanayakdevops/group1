import React from "react";

export default function HashMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java HashMap
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>HashMap</strong> class of the Java collections framework provides a hash table implementation.
        It stores elements in <strong>key/value pairs</strong>. Keys are unique identifiers used to associate values.
        HashMap implements the <a href="/docs/java/topics/Map/map" className="text-blue-600 "><strong>Map interface</strong></a>.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating a HashMap
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// Creating a HashMap with String keys and Integer values
HashMap<String, Integer> numbers = new HashMap<>();`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-black">
        Example: Creating a HashMap
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`import java.util.HashMap;

class Main {
  public static void main(String[] args) {
    HashMap<String, Integer> languages = new HashMap<>();
    languages.put("Java", 8);
    languages.put("JavaScript", 1);
    languages.put("Python", 3);
    System.out.println("HashMap: " + languages);
  }
}`}
      </pre>
      <p className="text-gray-700 mb-4">Output: <code>{'{Java=8, JavaScript=1, Python=3}'}</code></p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Basic Operations
      </h2>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Add Elements</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`HashMap<String, Integer> numbers = new HashMap<>();
numbers.put("One", 1);
numbers.put("Two", 2);
numbers.put("Three", 3);`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Access Elements</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String value = languages.get(1);
System.out.println("Value at index 1: " + value);

// Access keys, values, and entries
System.out.println(languages.keySet());
System.out.println(languages.values());
System.out.println(languages.entrySet());`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Change Value</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`languages.replace(2, "C++"); // change value for key 2`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Remove Elements</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`String removedValue = languages.remove(2); // remove by key
boolean removed = languages.remove(2, "C++"); // conditional removal`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Iterate through a HashMap</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`for (Integer key : languages.keySet()) System.out.println(key);
for (String val : languages.values()) System.out.println(val);
for (Map.Entry<Integer, String> entry : languages.entrySet()) System.out.println(entry);`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Create HashMap from Other Maps</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`TreeMap<String, Integer> evenNumbers = new TreeMap<>();
evenNumbers.put("Two", 2);
evenNumbers.put("Four", 4);

HashMap<String, Integer> numbers = new HashMap<>(evenNumbers);
numbers.put("Three", 3);`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Other Useful Methods
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-6">
        <li><code>clear()</code> - removes all mappings</li>
        <li><code>compute()</code>, <code>computeIfAbsent()</code>, <code>computeIfPresent()</code> - compute values</li>
        <li><code>merge()</code> - merges mappings</li>
        <li><code>clone()</code> - creates a copy</li>
        <li><code>containsKey()</code> / <code>containsValue()</code></li>
        <li><code>size()</code> - number of entries</li>
        <li><code>isEmpty()</code> - checks if empty</li>
      </ul>
    </div>
  );
}
