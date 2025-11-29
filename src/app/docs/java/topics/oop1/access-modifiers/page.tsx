import React from "react";

export default function JavaAccessModifiers() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Access Modifiers
      </h1>

      <p className="text-gray-700 mb-4">
        Access modifiers in Java are keywords used to set the accessibility (visibility) of <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">classes</a>, <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">methods</a>, <a href="/docs/java/topics/Java-Fundamentals/Java-variables-and-Literals" className="text-blue-600 ">variables</a>, and <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">constructors</a>. They help control which parts of a program can access members of a class.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Types of Access Modifiers
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>Default:</strong> Accessible only within the same package.</li>
        <li><strong>Private:</strong> Accessible only within the same class.</li>
        <li><strong>Protected:</strong> Accessible within the same <a href="/docs/java/topics/oop3/package" className="text-blue-600 ">package</a> and subclasses.</li>
        <li><strong>Public:</strong> Accessible from anywhere.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">1. Default Access Modifier</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`package defaultPackage;

class Logger {
    void message() {
        System.out.println("This is a message");
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        The <code>Logger</code> class here is accessible only within the <code>defaultPackage</code> package.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">2. Private Access Modifier</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Data {
    private String name;

    // getter
    public String getName() {
        return this.name;
    }

    // setter
    public void setName(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Data d = new Data();
        d.setName("Programiz");         // access via setter
        System.out.println(d.getName()); // access via getter
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Private members cannot be accessed outside their class directly. We use <strong>getters</strong> and <strong>setters</strong> to access them.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">3. Protected Access Modifier</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Animal {
    protected void display() {
        System.out.println("I am an animal");
    }
}

class Dog extends Animal {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.display(); // accessing protected method
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Protected members can be accessed within the same package or by subclasses even in different packages.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">4. Public Access Modifier</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`// Animal.java
public class Animal {
    public int legCount;

    public void display() {
        System.out.println("I am an animal.");
        System.out.println("I have " + legCount + " legs.");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.legCount = 4;
        animal.display();
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Public members can be accessed from anywhere, without restrictions.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Summary Table
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300 mb-6 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2 text-left">Modifier</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Accessibility</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border border-gray-300 px-3 py-2">Default</td>
            <td className="border border-gray-300 px-3 py-2">Within the same package only</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">Private</td>
            <td className="border border-gray-300 px-3 py-2">Within the same class only</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">Protected</td>
            <td className="border border-gray-300 px-3 py-2">Within package and subclasses</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2">Public</td>
            <td className="border border-gray-300 px-3 py-2">Anywhere</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700">
        Access modifiers are an essential part of <strong><a href="/docs/java/topics/oop2/encapsulation" className="text-blue-600 ">encapsulation</a></strong>, helping control access to the internal members of a class and preventing misuse of data.
      </p>
    </div>
  );
}
