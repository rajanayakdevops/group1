import React from "react";

export default function JavaAnnotationsPage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Java Annotations</h1>

      <p className="text-gray-700">Java annotations are metadata for source code. They provide additional information to the compiler but do not affect program execution.</p>

      <p className="text-gray-700">Annotations start with <code>@</code>. Example syntax:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">@AnnotationName</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">@Override Annotation</h2>
      <p className="text-gray-700">Indicates a method overrides a method from its superclass.</p>

      <h3 className="text-xl font-semibold mt-4 text-black">Example 1: @Override Annotation</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm border border-gray-700">{`class Animal {
  public void displayInfo() {
    System.out.println("I am an animal.");
  }
}

class Dog extends Animal {
  @Override
  public void displayInfo() {
    System.out.println("I am a dog.");
  }
}

class Main {
  public static void main(String[] args) {
    Dog d1 = new Dog();
    d1.displayInfo();
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">I am a dog.</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Annotation Formats</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">1. Marker Annotations</h3>
      <p className="text-gray-700">Contain no elements. Example: <code>@Override</code></p>

      <h3 className="text-xl font-semibold mt-4 text-black">2. Single Element Annotations</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm border border-gray-700">@AnnotationName(value = "elementValue")</pre>
      <p className="text-gray-700">You can omit the element name if it's <code>value</code>:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm border border-gray-700">@AnnotationName("elementValue")</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">3. Multiple Element Annotations</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm border border-gray-700">@AnnotationName(element1 = "value1", element2 = "value2")</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Annotation Placement</h2>
      <p className="text-gray-700">Annotations may be placed above declarations or directly on types.</p>

      <h3 className="text-xl font-semibold mt-4 text-black">Example 2: @SuppressWarnings Annotation</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm border border-gray-700">{`import java.util.*;

class Main {
  @SuppressWarnings("unchecked")
  static void wordsList() {
    ArrayList wordList = new ArrayList<>();
    wordList.add("programiz");
    System.out.println("Word list => " + wordList);
  }

  public static void main(String args[]) {
    wordsList();
  }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`Word list => [programiz]`}</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">2. Type Annotations</h2>
      <p className="text-gray-700">Introduced in Java 8; may appear anywhere a type is used.</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm border border-gray-700">{`@NonNull String str;
List<@NonNull String> values;
new @Readonly ArrayList<>();
(@Localized IOException)`}</pre>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Types of Annotations</h2>

      <h3 className="text-xl font-semibold mt-4 text-black">1. Predefined Annotations</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>@Deprecated</li>
        <li>@Override</li>
        <li>@SuppressWarnings</li>
        <li>@SafeVarargs</li>
        <li>@FunctionalInterface</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">2. Meta-annotations</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>@Retention</li>
        <li>@Documented</li>
        <li>@Target</li>
        <li>@Inherited</li>
        <li>@Repeatable</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-black">3. Custom Annotations</h3>
      <p className="text-gray-700">User-defined annotation types.</p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-black">Use of Annotations</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><strong>Compiler instructions</strong> — detect errors or suppress warnings.</li>
        <li><strong>Compile-time instructions</strong> — code generation and tooling support.</li>
        <li><strong>Runtime instructions</strong> — processed using reflection.</li>
      </ul>
    </div>
  );
}