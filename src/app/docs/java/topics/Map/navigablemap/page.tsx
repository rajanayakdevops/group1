import React from "react";

export default function NavigableMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java NavigableMap Interface</h1>

      <p className="text-gray-700">
        The <strong>NavigableMap</strong> interface of the Java collections framework provides
        features to navigate among the map entries. It is considered as a type of <a href="/docs/java/topics/Map/sortedmap" className="text-blue-600 "><strong>SortedMap</strong></a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Class that implements NavigableMap</h2>
      <p className="text-gray-700">
        Since <strong>NavigableMap</strong> is an interface, we cannot create objects from it.
        To use its functionalities, we need to use the <a href="/docs/java/topics/Map/treemap" className="text-blue-600 "><strong>TreeMap</strong></a> class, which implements NavigableMap.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">How to use NavigableMap</h2>
      <p className="text-gray-700">
        First, import the package:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`// NavigableMap implementation by TreeMap class
NavigableMap<Key, Value> numbers = new TreeMap<>();`}
      </pre>
      <p className="text-gray-700">
        <strong>Key</strong> - unique identifier for each element.<br />
        <strong>Value</strong> - elements associated by keys in a map.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Methods of NavigableMap</h2>
      <p className="text-gray-700">
        NavigableMap extends SortedMap, so all SortedMap methods are available. Some methods are redefined:
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">headMap(key, booleanValue)</h3>
      <p className="text-gray-700">
        Returns all entries with keys before the specified key. Include the key if <code>true</code> is passed.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">tailMap(key, booleanValue)</h3>
      <p className="text-gray-700">
        Returns all entries with keys after the specified key. Include the key if <code>true</code> is passed (default is true).
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">subMap(k1, bv1, k2, bv2)</h3>
      <p className="text-gray-700">
        Returns all entries with keys between <code>k1</code> and <code>k2</code>. The boolean values control inclusivity.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">Other Methods</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>descendingMap() - reverse order of entries</li>
        <li>descendingKeyMap() - reverse order of keys</li>
        <li>ceilingEntry() / ceilingKey()</li>
        <li>floorEntry() / floorKey()</li>
        <li>higherEntry() / higherKey()</li>
        <li>lowerEntry() / lowerKey()</li>
        <li>firstEntry() / lastEntry()</li>
        <li>pollFirstEntry() / pollLastEntry()</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Implementation of NavigableMap in TreeMap</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`import java.util.NavigableMap;
import java.util.TreeMap;

class Main {
    public static void main(String[] args) {
        NavigableMap<String, Integer> numbers = new TreeMap<>();

        numbers.put("Two", 2);
        numbers.put("One", 1);
        numbers.put("Three", 3);
        System.out.println("NavigableMap: " + numbers);

        System.out.println("First Entry: " + numbers.firstEntry());
        System.out.println("Last Entry: " + numbers.lastEntry());

        System.out.println("Removed First Entry: " + numbers.pollFirstEntry());
        System.out.println("Removed Last Entry: " + numbers.pollLastEntry());
    }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`NavigableMap: {One=1, Three=3, Two=2}
First Entry: One=1
Last Entry: Two=2
Removed First Entry: One=1
Removed Last Entry: Two=2`}
      </pre>
    </div>
  );
}
