import React from "react";

export default function MapInterfacePage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Map Interface
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>Map</strong> interface of the Java collections framework provides functionality for key/value pair data structures.
        Keys are unique, and each key is associated with a single value. A map cannot contain duplicate keys.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Classes Implementing Map
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li>HashMap</li>
        <li>EnumMap</li>
        <li>LinkedHashMap</li>
        <li>WeakHashMap</li>
        <li>TreeMap</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Interfaces Extending Map
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li>SortedMap</li>
        <li>NavigableMap</li>
        <li>ConcurrentMap</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating a Map
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`import java.util.Map;
import java.util.HashMap;

// Creating a Map using HashMap
Map<String, Integer> numbers = new HashMap<>();`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Common Map Methods
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li><code>put(K, V)</code> - Insert key/value pair</li>
        <li><code>putAll()</code> - Insert all entries from another map</li>
        <li><code>putIfAbsent(K, V)</code> - Insert only if key is absent</li>
        <li><code>get(K)</code> - Get value by key</li>
        <li><code>getOrDefault(K, defaultValue)</code> - Get value or default</li>
        <li><code>containsKey(K)</code> / <code>containsValue(V)</code></li>
        <li><code>replace(K, V)</code> / <code>replace(K, oldV, newV)</code></li>
        <li><code>remove(K)</code> / <code>remove(K, V)</code></li>
        <li><code>keySet()</code>, <code>values()</code>, <code>entrySet()</code></li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 1: Using HashMap
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`import java.util.Map;
import java.util.HashMap;

class Main {
  public static void main(String[] args) {
    Map<String, Integer> numbers = new HashMap<>();
    numbers.put("One", 1);
    numbers.put("Two", 2);
    System.out.println("Map: " + numbers);

    System.out.println("Keys: " + numbers.keySet());
    System.out.println("Values: " + numbers.values());
    System.out.println("Entries: " + numbers.entrySet());

    int removedValue = numbers.remove("Two");
    System.out.println("Removed Value: " + removedValue);
  }
}`}
      </pre>
      <p className="text-gray-700 mb-4">Output: <code>{'{One=1, Two=2}'}</code></p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 2: Using TreeMap
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`import java.util.Map;
import java.util.TreeMap;

class Main {
  public static void main(String[] args) {
    Map<String, Integer> values = new TreeMap<>();
    values.put("Second", 2);
    values.put("First", 1);
    System.out.println("Map using TreeMap: " + values);

    values.replace("First", 11);
    values.replace("Second", 22);
    System.out.println("New Map: " + values);

    int removedValue = values.remove("First");
    System.out.println("Removed Value: " + removedValue);
  }
}`}
      </pre>
      <p className="text-gray-700 mb-6">
        Output: <code>{'{First=1, Second=2}'}</code> → After replace: <code>{'{First=11, Second=22}'}</code> → Removed Value: <code>11</code>
      </p>
    </div>
  );
}
