import React from "react";

export default function SortedMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java SortedMap Interface</h1>

      <p className="text-gray-700">
        The <strong>SortedMap</strong> interface of the Java collections framework provides sorting of keys stored in a map. 
        It extends the <a href="/docs/java/topics/Map/map" className="text-blue-600 "><strong>Map</strong></a> interface.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Class that implements SortedMap</h2>
      <p className="text-gray-700">
        Since <strong>SortedMap</strong> is an interface, we cannot create <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">Objects</a> from it.
        To use its functionalities, we need the <a href="/docs/java/topics/Map/treemap" className="text-blue-600 "><strong>TreeMap</strong></a> class, which implements SortedMap.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">How to use SortedMap</h2>
      <p className="text-gray-700">
        First, import the package and create a sorted map:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`// SortedMap implementation by TreeMap class
SortedMap<Key, Value> numbers = new TreeMap<>();`}
      </pre>
      <p className="text-gray-700">
        <strong>Key</strong> - unique identifier for each element.<br />
        <strong>Value</strong> - elements associated by keys in a map.<br />
        Using no arguments will create a map sorted in natural ascending order.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Methods of SortedMap</h2>
      <p className="text-gray-700">
        SortedMap extends Map, so all Map methods are available. Additionally, it provides:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>comparator()</code> - returns a comparator used to order keys</li>
        <li><code>firstKey()</code> - returns the first key</li>
        <li><code>lastKey()</code> - returns the last key</li>
        <li><code>headMap(key)</code> - entries with keys less than the specified key</li>
        <li><code>tailMap(key)</code> - entries with keys greater than or equal to the specified key</li>
        <li><code>subMap(key1, key2)</code> - entries with keys between <code>key1</code> and <code>key2</code> (including <code>key1</code>)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Implementation of SortedMap in TreeMap</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`import java.util.SortedMap;
import java.util.TreeMap;

class Main {
    public static void main(String[] args) {
        // Creating SortedMap using TreeMap
        SortedMap<String, Integer> numbers = new TreeMap<>();

        // Insert elements to map
        numbers.put("Two", 2);
        numbers.put("One", 1);
        System.out.println("SortedMap: " + numbers);

        // Access the first key of the map
        System.out.println("First Key: " + numbers.firstKey());

        // Access the last key of the map
        System.out.println("Last Key: " + numbers.lastKey());

        // Remove elements from the map
        int value = numbers.remove("One");
        System.out.println("Removed Value: " + value);
    }
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">
{`SortedMap: {One=1, Two=2}
First Key: One
Last Key: Two
Removed Value: 1`}
      </pre>
    </div>
  );
}
