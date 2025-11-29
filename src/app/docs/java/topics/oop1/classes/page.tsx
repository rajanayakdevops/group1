import React from "react";

export default function JavaClassObjectsPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Classes and Objects
      </h1>

      <p className="text-gray-700 mb-4">
        Java is an object-oriented programming language. Objects represent entities that have both <strong>state</strong> and <strong>behavior</strong>.
        For example, a bicycle is an object with:
      </p>

      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li>States: idle, first gear, etc.</li>
        <li>Behaviors: braking, accelerating, etc.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Java Class
      </h2>
      <p className="text-gray-700 mb-4">
        A <strong>class</strong> is a blueprint for creating objects. It defines the state (fields) and behavior <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">Methods</a> of the objects.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Bicycle {
  // state or field
  private int gear = 5;

  // behavior or method
  public void braking() {
    System.out.println("Working of Braking");
  }
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Creating Objects
      </h2>
      <p className="text-gray-700 mb-4">
        An <strong>object</strong> is an instance of a class. You can create multiple objects from a single class using the <code>new</code> keyword.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`Bicycle sportsBicycle = new Bicycle();
Bicycle touringBicycle = new Bicycle();`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Accessing Members
      </h2>
      <p className="text-gray-700 mb-4">
        Use the object name with the <code>.</code> operator to access fields and methods.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`sportsBicycle.gear;
sportsBicycle.braking();`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 1: Class and Objects
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Lamp {
  boolean isOn;

  void turnOn() {
    isOn = true;
    System.out.println("Light on? " + isOn);
  }

  void turnOff() {
    isOn = false;
    System.out.println("Light on? " + isOn);
  }
}

public class Main {
  public static void main(String[] args) {
    Lamp led = new Lamp();
    Lamp halogen = new Lamp();

    led.turnOn();
    halogen.turnOff();
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        Output:
        <br />
        <code>Light on? true</code>
        <br />
        <code>Light on? false</code>
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 2: Objects Inside the Same Class
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Lamp {
  boolean isOn;

  void turnOn() {
    isOn = true;
    System.out.println("Light on? " + isOn);
  }

  public static void main(String[] args) {
    Lamp led = new Lamp();
    led.turnOn();
  }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6">
        Output:
        <br />
        <code>Light on? true</code>
      </p>
    </div>
  );
}
