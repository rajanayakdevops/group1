import React from "react";

export default function JavaConcurrentMap() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java ConcurrentMap Interface
      </h1>

      <p className="text-gray-700 mb-4">
        The <code>ConcurrentMap</code> interface of the Java Collections Framework provides a
        thread-safe map. Multiple threads can access the map simultaneously
        without affecting data consistency. <code>ConcurrentMap</code> is also known as a
        synchronized map and extends the <code>Map</code> interface.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Class that Implements ConcurrentMap
      </h2>
      <p className="text-gray-700 mb-4">
        Since <code>ConcurrentMap</code> is an interface, we cannot create objects directly.
        Instead, we use <code>ConcurrentHashMap</code>, which implements <code>ConcurrentMap</code>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        How to Use ConcurrentMap?
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700 overflow-x-auto text-sm sm:text-base mb-4">
{`// ConcurrentMap implementation using ConcurrentHashMap
ConcurrentMap<Key, Value> numbers = new ConcurrentHashMap<>();`}
      </pre>

      <p className="text-gray-700 mb-4">
        Here:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Key</strong> – unique identifier for each mapped element</li>
        <li><strong>Value</strong> – element associated with a key</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Methods of ConcurrentMap
      </h2>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><code>putIfAbsent()</code> – Inserts key/value pair only if key is not mapped.</li>
        <li><code>compute()</code> – Computes a mapping for the given key.</li>
        <li><code>computeIfAbsent()</code> – Computes value if key is not already mapped.</li>
        <li><code>computeIfPresent()</code> – Computes new mapping if key is already mapped.</li>
        <li><code>forEach()</code> – Performs actions for all map entries.</li>
        <li><code>merge()</code> – Merges new value with existing one for a key.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">
        Implementation Example
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700 overflow-x-auto text-sm sm:text-base mb-4">
{`import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ConcurrentHashMap;

class Main {
    public static void main(String[] args) {
        // Creating ConcurrentMap using ConcurrentHashMap
        ConcurrentMap<String, Integer> numbers = new ConcurrentHashMap<>();

        // Insert elements to map
        numbers.put("Two", 2);
        numbers.put("One", 1);
        numbers.put("Three", 3);
        System.out.println("ConcurrentMap: " + numbers);

        // Access the value of specified key
        int value = numbers.get("One");
        System.out.println("Accessed Value: " + value);

        // Remove the value of specified key
        int removedValue = numbers.remove("Two");
        System.out.println("Removed Value: " + removedValue);
    }
}`}
      </pre>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
ConcurrentMap: {`{One=1, Two=2, Three=3}`}
Accessed Value: 1
Removed Value: 2
      </pre>

      <p className="text-gray-700">
        To learn more about <code>ConcurrentHashMap</code>, you can refer to the official Java documentation.
      </p>
    </div>
  );
}
