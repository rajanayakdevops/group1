import React from "react";

export default function TreeMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java TreeMap</h1>

      <p className="text-gray-700">
        The <strong>TreeMap</strong> class of the Java collections framework provides a tree data structure implementation.
        It implements the <a href="/docs/java/topics/Map/navigablemap" className="text-blue-600 "><code>NavigableMap</code></a> interface and the <code>Map</code> interface.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Creating a TreeMap</h2>
      <p className="text-gray-700">
        First, import the package:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`import java.util.TreeMap;`}</pre>

      <p className="text-gray-700">Example of creating a TreeMap:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`TreeMap<Key, Value> numbers = new TreeMap<>();`}</pre>
      <p className="text-gray-700">Elements in a TreeMap are naturally sorted (ascending order) by default. Custom sorting can be implemented using a Comparator.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Methods of TreeMap</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">1. Insert Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>put()</code> - inserts a key/value entry</li>
        <li><code>putAll()</code> - inserts all entries from another map</li>
        <li><code>putIfAbsent()</code> - inserts entry only if key is absent</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">Example:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`TreeMap<String, Integer> evenNumbers = new TreeMap<>();
evenNumbers.put("Two", 2);
evenNumbers.put("Four", 4);
evenNumbers.putIfAbsent("Six", 6);

TreeMap<String, Integer> numbers = new TreeMap<>();
numbers.put("One", 1);
numbers.putAll(evenNumbers);`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">2. Access Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>entrySet()</code> - returns all key/value entries</li>
        <li><code>keySet()</code> - returns all keys</li>
        <li><code>values()</code> - returns all values</li>
        <li><code>get()</code> - get value by key</li>
        <li><code>getOrDefault()</code> - get value or default</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">3. Remove Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>remove(key)</code> - removes and returns the value</li>
        <li><code>remove(key, value)</code> - removes only if value matches</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">4. Replace Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>replace(key, value)</code> - replace value for a key</li>
        <li><code>replace(key, oldValue, newValue)</code> - replace only if oldValue matches</li>
        <li><code>replaceAll(function)</code> - replace all values using a lambda function</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">5. Navigation Methods</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>firstKey()</code>, <code>firstEntry()</code> - first key/entry</li>
        <li><code>lastKey()</code>, <code>lastEntry()</code> - last key/entry</li>
        <li><code>higherKey()</code>, <code>higherEntry()</code> - lowest key/entry greater than given key</li>
        <li><code>lowerKey()</code>, <code>lowerEntry()</code> - greatest key/entry less than given key</li>
        <li><code>ceilingKey()</code>, <code>ceilingEntry()</code> - lowest key/entry ≥ given key</li>
        <li><code>floorKey()</code>, <code>floorEntry()</code> - greatest key/entry ≤ given key</li>
        <li><code>pollFirstEntry()</code>, <code>pollLastEntry()</code> - remove and return first/last entry</li>
        <li><code>headMap(key, boolean)</code>, <code>tailMap(key, boolean)</code>, <code>subMap(k1, bV1, k2, bV2)</code> - get partial maps</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">6. Other Methods</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>clone()</code> - creates a copy of the TreeMap</li>
        <li><code>containsKey()</code> - checks if key exists</li>
        <li><code>containsValue()</code> - checks if value exists</li>
        <li><code>size()</code> - returns map size</li>
        <li><code>clear()</code> - removes all entries</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">TreeMap with Comparator</h2>
      <p className="text-gray-700">
        By default, TreeMap elements are sorted naturally. To customize ordering, you can pass a <code>Comparator</code>:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`TreeMap<String, Integer> numbers = new TreeMap<>(new CustomComparator());

public static class CustomComparator implements Comparator<String> {
    @Override
    public int compare(String a, String b) {
        // Reverse order sorting
        return b.compareTo(a);
    }
}`}</pre>

      <p className="text-gray-700">
        The comparator overrides the <code>compare()</code> method to sort elements in reverse order.
      </p>

      <p className="text-gray-700 mt-4">
        For more details, visit the <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" className="text-blue-600 underline">official Java Comparator documentation</a>.
      </p>
    </div>
  );
}
