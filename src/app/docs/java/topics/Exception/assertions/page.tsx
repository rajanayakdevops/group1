import React from "react";

export default function JavaAssertions() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-4xl font-bold mb-6">Java Assertions</h1>

      <p className="mb-4">
        Assertions in Java help detect bugs by testing assumptions in the code. They are
        created using the <code>assert</code> keyword and allow developers to ensure
        that certain conditions hold true during execution.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-3">Basic Syntax</h2>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`assert condition;`}
      </pre>

      <p className="mb-4">
        Here, <strong>condition</strong> is a boolean expression that we assume to be
        true when the program runs.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-3">Enabling Assertions</h2>
      <p className="mb-4">Assertions are disabled by default. To enable them:</p>
      
      <pre className="bg-black text-white p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`java -ea:arguments
java -enableassertions:arguments`}
      </pre>

      <p className="mb-4">
        If the assertion condition is <strong>true</strong>, execution continues
        normally. If it's <strong>false</strong>, an AssertionError is thrown.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Example 1: Simple Assertion</h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`class Main {
  public static void main(String args[]) {
    String[] weekends = {"Friday", "Saturday", "Sunday"};
    assert weekends.length == 2;
    System.out.println("There are " + weekends.length + " weekends in a week");
  }
}`}
      </pre>

      <h2 className="text-3xl font-semibold mt-10 mb-3">
        Another Form of Assertion
      </h2>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`assert condition : expression;`}
      </pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Example 2: Assertion with Message</h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`class Main {
  public static void main(String args[]) {
    String[] weekends = {"Friday", "Saturday", "Sunday"};
    assert weekends.length == 2 : "There are only 2 weekends in a week";
    System.out.println("There are " + weekends.length + " weekends in a week");
  }
}`}
      </pre>

      <h2 className="text-3xl font-semibold mt-12 mb-3">
        Enabling Assertions for Classes and Packages
      </h2>
      <pre className="bg-black text-white p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`java -ea
java -ea Main
java -ea:AnimalClass Main
java -ea:com.animal... Main
java -ea:... Main`}
      </pre>

      <h2 className="text-3xl font-semibold mt-12 mb-3">Disabling Assertions</h2>
      <pre className="bg-black text-white p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`java -da
java -disableassertions
java -dsa
java -disablesystemassertions`}
      </pre>

      <h2 className="text-3xl font-semibold mt-10 mb-3">Advantages of Assertions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Efficient for detecting and correcting bugs.</li>
        <li>Assertions are removed at runtime in production code.</li>
        <li>Makes code more readable by replacing boilerplate checks.</li>
        <li>Improves code reliability and confidence.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-3">When to Use Assertions</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. Unreachable Code</h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`void unreachableCodeMethod() {
  System.out.println("Reachable code");
  return;
  // Unreachable code
  System.out.println("Unreachable code");
  assert false;
}`}
      </pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Switch Example</h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`default:
  assert false : dayOfWeek + " is invalid day";`}
      </pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">2. Documenting Assumptions</h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`if (i % 2 == 0) {
  ...
} else {
  assert i % 2 == 1 : i;
  ...
}`}
      </pre>

      <h2 className="text-3xl font-semibold mt-10 mb-3">When NOT to Use Assertions</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. Argument Checking in Public Methods</h3>
      <p className="mb-4">
        Public methods may receive invalid input from users, so use normal exceptions
        instead of assertions.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        2. Expressions That Affect Program Behavior
      </h3>
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`ArrayList<String> weekdays = new ArrayList<>(Arrays.asList(...));
ArrayList<String> weekends = new ArrayList<>(Arrays.asList(...));

assert weekdays.removeAll(weekends); // ❌ Don't do this
`}
      </pre>

      <p className="mb-4">Instead, assign first:</p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">
{`boolean weekendsRemoved = weekdays.removeAll(weekends);
assert weekendsRemoved;`}
      </pre>
    </div>
  );
}