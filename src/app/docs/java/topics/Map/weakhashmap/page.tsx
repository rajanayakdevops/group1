import React from "react";

export default function WeakHashMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java WeakHashMap</h1>

      <p className="text-gray-700">
        The <strong>WeakHashMap</strong> class provides a hash table data structure and implements the <a href="/docs/java/topics/Map/map" className="text-blue-600 "><strong>Map</strong></a> interface.
        Keys of a WeakHashMap are of <strong>WeakReference</strong> type, which allows them to be garbage collected if no longer used.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Creating a WeakHashMap</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`// WeakHashMap creation with capacity 8 and load factor 0.6
WeakHashMap<Key, Value> numbers = new WeakHashMap<>(8, 0.6);

// WeakHashMap with default capacity and load factor
WeakHashMap<Key, Value> numbers1 = new WeakHashMap<>();`}
      </pre>
      <p className="text-gray-700">
        <strong>capacity</strong> - initial size of the map.<br />
        <strong>loadFactor</strong> - determines when to resize the map. Default: capacity=16, loadFactor=0.75.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Difference Between HashMap and WeakHashMap</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`WeakHashMap<String, Integer> numbers = new WeakHashMap<>();
String two = new String("Two");
numbers.put(two, 2);
two = null;
System.gc();
System.out.println(numbers); // key "Two" may be removed by GC

HashMap<String, Integer> hashMap = new HashMap<>();
String two2 = new String("Two");
hashMap.put(two2, 2);
two2 = null;
System.gc();
System.out.println(hashMap); // key "Two" remains`}
      </pre>
      <p className="text-gray-700">
        WeakHashMap keys are garbage collected if no longer referenced, unlike HashMap which keeps strong references.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Creating WeakHashMap from Other Maps</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`HashMap<String, Integer> evenNumbers = new HashMap<>();
evenNumbers.put("Two", 2);

WeakHashMap<String, Integer> numbers = new WeakHashMap<>(evenNumbers);`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Methods of WeakHashMap</h2>
      <h3 className="text-xl font-semibold mt-4 text-black">Insert Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>put()</code> - inserts a key/value mapping</li>
        <li><code>putAll()</code> - inserts all entries from another map</li>
        <li><code>putIfAbsent()</code> - inserts only if key is not present</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">Access Elements</h3>
      <p className="text-gray-700">
        Using <code>entrySet()</code>, <code>keySet()</code>, <code>values()</code>, <code>get()</code> and <code>getOrDefault()</code>:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`System.out.println(numbers.entrySet());
System.out.println(numbers.keySet());
System.out.println(numbers.values());

int val = numbers.get("Two");
int val2 = numbers.getOrDefault("Four", 4);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Remove Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>remove(key)</code> - removes entry by key</li>
        <li><code>remove(key, value)</code> - removes entry only if key maps to value</li>
      </ul>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`numbers.remove("Two");
numbers.remove("One", 3);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Other Methods</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>clear()</code> - removes all entries</li>
        <li><code>containsKey()</code> - checks if a key exists</li>
        <li><code>containsValue()</code> - checks if a value exists</li>
        <li><code>size()</code> - returns number of entries</li>
        <li><code>isEmpty()</code> - checks if map is empty</li>
      </ul>
    </div>
  );
}
