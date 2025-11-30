import React from "react";

export default function EnumMapPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java EnumMap</h1>

      <p className="text-gray-700">
        The <strong>EnumMap</strong> class of the Java collections framework provides a map implementation for elements of an enum.
        In <strong>EnumMap</strong>, enum elements are used as keys. It implements the <a href="/docs/java/topics/Map/map" className="text-blue-600 "><strong>Map</strong></a> interface.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Creating an EnumMap</h2>
      <p className="text-gray-700">
        Import the <a href="/docs/java/topics/oop3/package" className="text-blue-600 ">package</a> first and create an EnumMap:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`enum Size {
    SMALL, MEDIUM, LARGE, EXTRALARGE
}

EnumMap<Size, Integer> sizes = new EnumMap<>(Size.class);`}
      </pre>
      <p className="text-gray-700">
        <strong>Size</strong> - keys of the enum map.<br />
        <strong>Integer</strong> - values associated with enum keys.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Methods of EnumMap</h2>
      <h3 className="text-xl font-semibold mt-4 text-black">Insert Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>put()</code> - inserts a key/value mapping</li>
        <li><code>putAll()</code> - inserts all entries from another map</li>
      </ul>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`EnumMap<Size, Integer> sizes1 = new EnumMap<>(Size.class);
sizes1.put(Size.SMALL, 28);
sizes1.put(Size.MEDIUM, 32);

EnumMap<Size, Integer> sizes2 = new EnumMap<>(Size.class);
sizes2.putAll(sizes1);
sizes2.put(Size.LARGE, 36);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Access EnumMap Elements</h3>
      <p className="text-gray-700">Using <code>entrySet()</code>, <code>keySet()</code>, and <code>values()</code>:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`System.out.println("Key/Value mappings: " + sizes.entrySet());
System.out.println("Keys: " + sizes.keySet());
System.out.println("Values: " + sizes.values());`}
      </pre>

      <p className="text-gray-700">Using <code>get(key)</code>:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`int value = sizes.get(Size.MEDIUM);
System.out.println("Value of MEDIUM: " + value);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Remove EnumMap Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>remove(key)</code> - removes entry by key</li>
        <li><code>remove(key, value)</code> - removes entry if key maps to the value</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">Replace EnumMap Elements</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>replace(key, value)</code> - replaces value of key</li>
        <li><code>replace(key, oldValue, newValue)</code> - replaces old value if matched</li>
        <li><code>replaceAll(function)</code> - replaces all values using a function</li>
      </ul>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
{`sizes.replace(Size.MEDIUM, 30);
sizes.replace(Size.LARGE, 36, 34);
sizes.replaceAll((key, oldValue) -> oldValue + 3);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Other Methods</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li><code>clone()</code> - copies the EnumMap</li>
        <li><code>containsKey()</code> - checks if a key exists</li>
        <li><code>containsValue()</code> - checks if a value exists</li>
        <li><code>size()</code> - returns number of entries</li>
        <li><code>clear()</code> - removes all entries</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">EnumSet vs EnumMap</h2>
      <p className="text-gray-700">
        Both <strong>EnumSet</strong> and <strong>EnumMap</strong> store enum values, but differ internally:<br />
        - EnumSet: uses bits<br />
        - EnumMap: uses arrays<br />
        EnumSet uses predefined methods like <code>allOf()</code>, <code>of()</code>, etc., while EnumMap uses a constructor.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Clonable and Serializable Interfaces</h2>
      <p className="text-gray-700">
        <strong>Cloneable:</strong> allows EnumMap to create copies.<br />
        <strong>Serializable:</strong> allows objects to be converted to bytes for network transmission.
      </p>
    </div>
  );
}
