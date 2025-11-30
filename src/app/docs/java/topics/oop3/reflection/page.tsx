import React from "react";

export default function JavaReflectionPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java Reflection</h1>

      <p className="text-gray-700">In Java, reflection allows us to inspect and manipulate classes, <a href="/docs/java/topics/oop2/interface" className="text-blue-600 ">interface</a>, <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">constructor</a>, <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">method</a>, and fields at runtime. The <code><a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">Class</a></code> object stores all metadata needed for reflection.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-black">Creating Class Objects</h2>
      <p className="text-gray-700">There are three ways to create <code>Class</code> objects:</p>
      <ol className="list-decimal ml-6 text-gray-700">
        <li><strong>Using forName()</strong></li>
      </ol>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Class a = Class.forName("Dog");`}</pre>
      <ol start={2} className="list-decimal ml-6 text-gray-700">
        <li><strong>Using getClass()</strong></li>
      </ol>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Dog d1 = new Dog();
Class b = d1.getClass();`}</pre>
      <ol start={3} className="list-decimal ml-6 text-gray-700">
        <li><strong>Using .class</strong></li>
      </ol>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Class c = Dog.class;`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Example: Class Reflection</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`class Animal {}

public class Dog extends Animal {
  public void display() {
    System.out.println("I am a dog.");
  }
}

class Main {
  public static void main(String[] args) {
    Dog d1 = new Dog();
    Class obj = d1.getClass();

    System.out.println("Name: " + obj.getName());
    System.out.println("Modifier: " + Modifier.toString(obj.getModifiers()));
    System.out.println("Superclass: " + obj.getSuperclass().getName());
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Name: Dog
Modifier: public
Superclass: Animal`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Reflection of Methods</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Method[] methods = obj.getDeclaredMethods();
for (Method m : methods) {
  System.out.println(m.getName());
}`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Reflection of Fields</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Field field1 = obj.getField("type");
field1.set(d1, "labrador");`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Reflection of Private Fields</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Field field1 = obj.getDeclaredField("color");
field1.setAccessible(true);
field1.set(d1, "brown");`}</pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Reflection of Constructors</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`Constructor[] constructors = obj.getDeclaredConstructors();
for (Constructor c : constructors) {
  System.out.println(c.getName());
  System.out.println(Modifier.toString(c.getModifiers()));
}`}</pre>
    </div>
  );
}