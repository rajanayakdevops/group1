import React from "react";

export default function JavaEnumStringsPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java enum Strings</h1>

      <p className="text-gray-700">In Java, we can get the string representation of enum constants using the <code>toString()</code> or <code>name()</code> methods.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Example: Default String Values</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`enum Size {
   SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Main {
   public static void main(String[] args) {
      System.out.println("string value of SMALL is " + Size.SMALL.toString());
      System.out.println("string value of MEDIUM is " + Size.MEDIUM.name());
   }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`string value of SMALL is SMALL
string value of MEDIUM is MEDIUM`}</pre>

      <p className="text-gray-700">By default, enum constants return their names as strings.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Override Default String Value</h2>
      <p className="text-gray-700">We can override the <code>toString()</code> method for enum constants to customize their string output.</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`enum Size {
   SMALL {
      public String toString() {
        return "The size is small.";
      }
   },

   MEDIUM {
      public String toString() {
        return "The size is medium.";
      }
   };
}

class Main {
   public static void main(String[] args) {
      System.out.println(Size.MEDIUM.toString());
   }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`The size is medium.`}</pre>

      <p className="text-gray-700">Here, both <code>SMALL</code> and <code>MEDIUM</code> have custom string representations. Note that the <code>name()</code> method cannot be overridden because it is final.</p>
    </div>
  );
}
