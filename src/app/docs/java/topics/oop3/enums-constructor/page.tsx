import React from "react";

export default function JavaEnumConstructorPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java Enum Constructor</h1>

      <p className="text-gray-700">
        In Java, an <a href="/docs/java/topics/oop3/enums" className="text-blue-600 ">enum</a> class may include a <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">constructor</a> like a regular class. These enum constructors are either
        <strong> private </strong> (accessible within the class) or <strong> package-private </strong> (accessible within the package).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Example: Enum Constructor</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`enum Size {

   // enum constants calling the enum constructors 
   SMALL("The size is small."),
   MEDIUM("The size is medium."),
   LARGE("The size is large."),
   EXTRALARGE("The size is extra large.");

   private final String pizzaSize;

   // private enum constructor
   private Size(String pizzaSize) {
      this.pizzaSize = pizzaSize;
   }

   public String getSize() {
      return pizzaSize;
   }
}

class Main {
   public static void main(String[] args) {
      Size size = Size.SMALL;
      System.out.println(size.getSize());
   }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`The size is small.`}</pre>

      <p className="text-gray-700 mt-4">
        In this example, the enum <code>Size</code> contains a private constructor that accepts a string value. The constants like
        <code> SMALL </code> and <code> MEDIUM </code> automatically call this constructor when they are created.
      </p>

      <p className="text-gray-700 mt-2">
        Since the constructor is private, we cannot access it from outside the enum class. Instead, enum constants call the
        constructor implicitly.
      </p>

      <p className="text-gray-700 mt-2">
        Finally, the <code>getSize()</code> method returns the description assigned through the constructor.
      </p>
    </div>
  );
}
