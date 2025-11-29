import React from "react";

export default function JavaPackagePage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java Package</h1>

      <h2 className="text-2xl font-semibold mt-4 mb-3 text-black">What is a Package?</h2>
      <p>A <strong>package</strong> is a container that groups related Java types (<a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">classes</a>, <a href="/docs/java/topics/oop2/interface" className="text-blue-600 ">interfaces</a>, <a href="/docs/java/topics/oop3/enums" className="text-blue-600 ">enum</a>, <a href="/docs/java/topics/Exception/annotations" className="text-blue-600 ">annotations</a>). Packages help organize code, prevent naming conflicts, and keep projects maintainable.</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`java.sql.ResultSet // belongs to java.sql package
import java.sql.*;    // importing the entire package`}</pre>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Why Packages?</h2>
      <p>Java allows only <strong>one unique class name per package</strong>. Two separate packages can contain classes with the same name.</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`java.util.Date
java.sql.Date`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Types of Packages</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">1. Built-in Packages</h3>
      <ul>
        <li>java.lang</li>
        <li>java.util</li>
        <li>java.io</li>
      </ul>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`import java.util.ArrayList;

class ArrayListUtilization {
    public static void main(String[] args) {
        ArrayList<Integer> myList = new ArrayList<>(3);
        myList.add(3);
        myList.add(2);
        myList.add(1);

        System.out.println(myList);
    }
}`}</pre>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">{`[3, 2, 1]`}</pre>

      <h3 className="text-xl font-semibold mt-6 text-black">2. User-defined Packages</h3>
      <p>Created by programmers using the <code>package</code> Keyword.</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`package packageName;`}</pre>

      <p>Folder structure example:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`com/
  test/
    Test.java`}</pre>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`package com.test;

class Test {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 text-black">Package Naming Convention</h2>
      <p>Use reversed domain names like <code>com.company.project</code></p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`com/
  company/
    name/`}</pre>

      <h2 className="text-2xl font-semibold mt-8 text-black">Importing Packages</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`import package.name.ClassName; // import specific class
import package.name.*;        // import entire package`}</pre>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`class MyClass extends java.util.Date {
    // body
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 text-black">Example: Importing a User-defined Package</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">Helper.java</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`package com.programiz;

public class Helper {
    public static String getFormattedDollar(double value) {
        return String.format("$%.2f", value);
    }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">UseHelper.java</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">{`import com.programiz.Helper;

class UseHelper {
    public static void main(String[] args) {
        System.out.println(Helper.getFormattedDollar(45.90));
    }
}`}</pre>
    </div>
  );
}
