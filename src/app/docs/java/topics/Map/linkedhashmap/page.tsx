import React from "react";

export default function LinkedHashMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java LinkedHashMap
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>LinkedHashMap</strong> <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">class</a> provides a hash table and linked list implementation of the <a href="/java-programming/if-else-statement" className="text-blue-600 "><strong>Map</strong></a> interface.
        It extends the <a href="/docs/java/topics/Map/hashmap" className="text-blue-600 "><strong>HashMap</strong></a> class and maintains a <strong>doubly-linked list</strong> among its entries to preserve insertion order.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating a LinkedHashMap
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// LinkedHashMap with initial capacity 8 and load factor 0.6
LinkedHashMap<Key, Value> numbers = new LinkedHashMap<>(8, 0.6f);

// LinkedHashMap with default capacity and load factor
LinkedHashMap<Key, Value> numbers1 = new LinkedHashMap<>();

// LinkedHashMap with insertion/access order
LinkedHashMap<Key, Value> numbers2 = new LinkedHashMap<>(capacity, loadFactor, accessOrder);`}
      </pre>

      <p className="text-gray-700 mb-4">
        <strong>capacity</strong> - initial size of the map.<br />
        <strong>loadFactor</strong> - determines when to resize the map.<br />
        <strong>accessOrder</strong> - if true, orders entries from least-recently accessed to most-recently accessed (default false = insertion order).
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating LinkedHashMap from Other Maps
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`LinkedHashMap<String, Integer> evenNumbers = new LinkedHashMap<>();
evenNumbers.put("Two", 2);
evenNumbers.put("Four", 4);

LinkedHashMap<String, Integer> numbers = new LinkedHashMap<>(evenNumbers);
numbers.put("Three", 3);`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Methods of LinkedHashMap
      </h2>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Insert Elements</h3>
      <ul className="list-disc ml-5 sm:ml-6 mb-4 text-gray-700">
        <li><code>put()</code> - inserts a key/value mapping</li>
        <li><code>putAll()</code> - inserts all entries from another map</li>
        <li><code>putIfAbsent()</code> - inserts only if key is not present</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Access Elements</h3>
      <p className="text-gray-700 mb-2">
        Using <code>entrySet()</code>, <code>keySet()</code>, <code>values()</code>, <code>get()</code>, and <code>getOrDefault()</code>:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`LinkedHashMap<String, Integer> numbers = new LinkedHashMap<>();
numbers.put("One", 1);
numbers.put("Two", 2);
numbers.put("Three", 3);

System.out.println(numbers.entrySet());
System.out.println(numbers.keySet());
System.out.println(numbers.values());

int val1 = numbers.get("Three");
int val2 = numbers.getOrDefault("Five", 5);`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Remove Elements</h3>
      <ul className="list-disc ml-5 sm:ml-6 mb-4 text-gray-700">
        <li><code>remove(key)</code> - removes entry by key</li>
        <li><code>remove(key, value)</code> - removes entry only if key maps to value</li>
      </ul>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`int removedValue = numbers.remove("Two");
boolean removed = numbers.remove("Three", 3);`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mt-4 text-black">Other Methods</h3>
      <ul className="list-disc ml-5 sm:ml-6 mb-4 text-gray-700">
        <li><code>clear()</code> - removes all entries</li>
        <li><code>containsKey()</code> - checks if the map contains a key</li>
        <li><code>containsValue()</code> - checks if the map contains a value</li>
        <li><code>size()</code> - returns the number of entries</li>
        <li><code>isEmpty()</code> - checks if map is empty</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">LinkedHashMap Vs. HashMap</h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700">
        <li>LinkedHashMap maintains a <strong>doubly-linked list</strong> internally to preserve insertion order.</li>
        <li>Requires more storage than HashMap.</li>
        <li>Performance is slightly slower than HashMap due to maintaining linked lists.</li>
      </ul>
    </div>
  );
}
