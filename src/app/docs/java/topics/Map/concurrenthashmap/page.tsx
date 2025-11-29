import React from "react";

export default function ConcurrentHashMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java ConcurrentHashMap</h1>

      <p className="text-gray-700">
        The <strong>ConcurrentHashMap</strong> class of the Java collections framework provides a thread-safe map. That is, multiple threads can access the map at once without affecting the consistency of entries.
      </p>

      <p className="text-gray-700">It implements the <a href="/docs/java/topics/Map/concurrentmap" className="text-blue-600 "><code>ConcurrentMap</code> interface</a>.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Create a ConcurrentHashMap</h2>
      <p className="text-gray-700">First, import the package:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`import java.util.concurrent.ConcurrentHashMap;`}</pre>

      <p className="text-gray-700">Example with capacity and load factor:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`ConcurrentHashMap<Key, Value> numbers = new ConcurrentHashMap<>(8, 0.6f);`}</pre>

      <p className="text-gray-700">
        <strong>Key</strong> - unique identifier for elements. <strong>Value</strong> - element associated with key. <br />
        <strong>capacity</strong> - initial capacity of map. <strong>loadFactor</strong> - when table is 60% full, it doubles in size.
      </p>

      <p className="text-gray-700">Default ConcurrentHashMap:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`ConcurrentHashMap<Key, Value> numbers1 = new ConcurrentHashMap<>();`}</pre>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Default capacity: 16</li>
        <li>Default load factor: 0.75</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Creating ConcurrentHashMap from Other Maps</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`import java.util.concurrent.ConcurrentHashMap;
import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> evenNumbers = new HashMap<>();
        evenNumbers.put("Two", 2);
        evenNumbers.put("Four", 4);

        ConcurrentHashMap<String, Integer> numbers = new ConcurrentHashMap<>(evenNumbers);
        numbers.put("Three", 3);
        System.out.println(numbers);
    }
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Methods of ConcurrentHashMap</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">1. Insert Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>put()</code> - insert key/value</li>
        <li><code>putAll()</code> - insert all entries from another map</li>
        <li><code>putIfAbsent()</code> - insert only if key is absent</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">Example:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`ConcurrentHashMap<String, Integer> numbers = new ConcurrentHashMap<>();
numbers.put("One", 1);
numbers.putIfAbsent("Two", 2);
numbers.putAll(anotherMap);`}</pre>

      <h3 className="text-xl font-semibold mt-6 text-black">2. Access Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>entrySet()</code> - set of key/value pairs</li>
        <li><code>keySet()</code> - set of keys</li>
        <li><code>values()</code> - set of values</li>
        <li><code>get(key)</code> - get value for key</li>
        <li><code>getOrDefault(key, default)</code> - get value or default if not present</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">3. Remove Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>remove(key)</code> - removes entry and returns value</li>
        <li><code>remove(key, value)</code> - removes entry if value matches</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-black">4. Bulk Operations</h3>
      <p className="text-gray-700">ConcurrentHashMap supports thread-safe bulk operations:</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>forEach()</code> - iterate over entries</li>
        <li><code>search()</code> - search entries based on function</li>
        <li><code>reduce()</code> - aggregate entries into single result</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">Example of forEach and reduce:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`numbers.forEach(4, (k, v) -> System.out.println(k + " => " + v));
int sum = numbers.reduce(4, (k, v) -> v, (v1, v2) -> v1 + v2);`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">ConcurrentHashMap vs HashMap</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>ConcurrentHashMap is thread-safe; HashMap is not.</li>
        <li>ConcurrentHashMap supports bulk operations like forEach, search, reduce.</li>
        <li>Multiple threads can access and modify ConcurrentHashMap concurrently.</li>
        <li><code>putIfAbsent()</code> does not overwrite existing entries.</li>
      </ul>
    </div>
  );
}
