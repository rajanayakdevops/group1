import React from "react";

export default function JavaStackClass(): JSX.Element {
  // Common Tailwind classes for code block and output styling
  const codeBlockClass = "bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]";
  const outputBlockClass = "bg-gray-100 p-4 rounded-lg overflow-auto";

  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Stack Class</h1>

      <p className="mb-4">
        The Stack class provides the functionality of the stack data structure.
      </p>

      <p className="mb-4">
        It is part of the Java collections framework and extends the Vector class.
      </p>

      <figure className="my-6">
        
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="implementation" className="text-2xl font-semibold mt-6 mb-2">Stack Implementation</h2>

      <p className="mb-4">
        In a stack, elements are stored and accessed in a Last In First Out (LIFO) manner.
      </p>

      <p className="mb-4">
        Elements are both added to and removed from the top of the stack.
      </p>

      <figure className="my-6">
        

[Image of Working of stack data structure]

      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Creating a Stack</h2>

      <p className="mb-4">
        To create a stack, we must first import the java.util.Stack package.
      </p>

      <p className="mb-4">
        Here is the syntax for creating a stack in Java:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`Stack<Type> stacks = new Stack<>();`}</code>
      </pre>

      <p className="mb-4">
        Type indicates the stack's type. For example:
      </p>

      <pre className={codeBlockClass}>
        <code className="java hljs text-green-700">{`// Create Integer type stack
Stack<Integer> stacks = new Stack<>();

// Create String type stack
Stack<String> stacks = new Stack<>();`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">Stack Methods</h2>

      <p className="mb-4">
        Since Stack extends the Vector class, it inherits all the methods of Vector.
      </p>

      <p className="mb-4">
        Additionally, the Stack class includes 5 more methods that distinguish it from Vector.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="push" className="text-xl font-semibold mt-6 mb-2">push() Method</h3>

      <p className="mb-4">
        To add an element to the top of the stack, we use the push() method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        // Add elements to Stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");

        System.out.println("Stack: " + animals);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Stack: [Dog, Horse, Cat]`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="pop" className="text-xl font-semibold mt-6 mb-2">pop() Method</h3>

      <p className="mb-4">
        To remove an element from the top of the stack, we use the pop() method. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        // Add elements to Stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Initial Stack: " + animals);

        // Remove element stacks
        String element = animals.pop();
        System.out.println("Removed Element: " + element);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Initial Stack: [Dog, Horse, Cat]
Removed Element: Cat`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="peek" className="text-xl font-semibold mt-6 mb-2">peek() Method</h3>

      <p className="mb-4">
        The peek() method returns the object from the top of the stack without removing it. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        // Add elements to Stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // Access element from the top
        String element = animals.peek();
        System.out.println("Element at top: " + element);

    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Stack: [Dog, Horse, Cat]
Element at top: Cat`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="search" className="text-xl font-semibold mt-6 mb-2">search() Method</h3>

      <p className="mb-4">
        The search() method returns the position of the element from the top of the stack.
      </p>

      <p className="mb-4">
        The element at the top has position 1. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        // Add elements to Stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // Search an element (Cat=1, Horse=2, Dog=3)
        int position = animals.search("Horse");
        System.out.println("Position of Horse: " + position);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Stack: [Dog, Horse, Cat]
Position of Horse: 2`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="empty" className="text-xl font-semibold mt-6 mb-2">empty() Method</h3>

      <p className="mb-4">
        The empty() method checks whether a stack is empty or not and returns a boolean result. For example:
      </p>

      <div className="code-editor">
        <pre className={codeBlockClass}>
          <code className="java hljs text-green-700">{`import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        // Add elements to Stack
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // Check if stack is empty
        boolean result = animals.empty();
        System.out.println("Is the stack empty? " + result);
    }
}`}</code>
        </pre>
        
      </div>

      <p className="font-bold mt-4">Output</p>
      <pre className={outputBlockClass}>
        <code>{`Stack: [Dog, Horse, Cat]
Is the stack empty? false`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="deque" className="text-2xl font-semibold mt-6 mb-2">Use ArrayDeque Instead of Stack</h2>

      <p className="mb-4">
        The Stack class provides a direct implementation of the stack data structure.
      </p>

      <p className="mb-4">
        However, it is generally recommended to use the ArrayDeque class (which implements the Deque interface) to implement the stack data structure in Java due to efficiency reasons.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="font-bold mt-4">Also Read:</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Java ArrayDeque</li>
        <li>Why use Deque over Stack?</li>
      </ul>
    </div>
  );
}