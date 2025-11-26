import React from "react";
export default function JavaMethodOverridingContent() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java Method Overriding</h1>
      
      {/* CORRECTED: Single, clean paragraph flow matching the screenshot style */}
      <p>
        In the last tutorial, we learned about inheritance, an OOP property that 
        allows us to derive a new class (subclass) from an existing class (superclass). 
        The subclass inherits the attributes and methods of the superclass. Now, if the 
        same method is defined in both the superclass and the subclass, then the 
        method of the subclass overrides the method of the superclass. This is known 
        as method overriding.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 1: Method Overriding</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {
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
}`}</code>
      </pre>
      
      <p className="font-bold mt-4">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I am a dog.`}</pre>

      <p>
        In the above program, the <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">displayInfo()</code> 
        method is in both the <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Animal</code>
        superclass and the <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Dog</code> subclass.
        When we call displayInfo() using the d1 object (object of the subclass), the method inside the subclass Dog is called.
        The subclass's displayInfo() method overrides the superclass's method.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">@Override Annotation</h2>
      <p>
        Notice the use of the <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">@Override</code> annotation in our example.
        In Java, annotations are metadata used to provide information to the compiler.
        The <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">@Override</code> annotation specifically tells the compiler that this method overrides a superclass method.
        It is not mandatory to use <code  className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">@Override</code>. However, using it ensures the method follows all the rules of overriding; otherwise, the compiler generates an error.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Java Overriding Rules</h2>
      <ul className="list-disc ml-6">
        <li>Both the superclass and the subclass must have the same method name, the same return type, and the same parameter list.</li>
        <li>We cannot override the method declared as final and static.</li>
        <li>We should always override abstract methods of the superclass (will be discussed in later tutorials).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">super Keyword in Java Overriding</h2>
      <p>
        A common question is: Can we access the method of the superclass after overriding? Yes.
        To access the method of the superclass from the subclass, we use the `super` keyword.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 2: Use of super Keyword</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {
   public void displayInfo() {
      System.out.println("I am an animal.");
   }
}
class Dog extends Animal {
   public void displayInfo() {
      super.displayInfo();
      System.out.println("I am a dog.");
   }
}
class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}`}</code>
      </pre>
      
      <p className="font-bold mt-4">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I am an animal.
I am a dog.`}</pre>

      <p>
        Inside the displayInfo() method of the Dog subclass, we used super.displayInfo() to call the overridden method of the superclass.
        Constructors in Java are not inherited, so there is no constructor overriding.
        However, we can call the superclass constructor using `super()`.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Access Specifiers in Method Overriding</h2>
      <p>
        The same method in the superclass and subclasses can have different access specifiers.
        The restriction is that the subclass method can only use access specifiers that provide larger access than the superclass method.
        For example, if a method in the superclass is protected, the same method in the subclass can be public or protected, but not private.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 3: Access Specifier in Overriding</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {
   protected void displayInfo() {
      System.out.println("I am an animal.");
   }
}
class Dog extends Animal {
   public void displayInfo() {
      System.out.println("I am a dog.");
   }
}
class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}`}</code>
      </pre>
      
      <p className="font-bold mt-4">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I am a dog.`}</pre>
      <p>
        The displayInfo() method is protected in the Animal superclass but public in the Dog subclass.
        This is valid because public provides larger access than protected.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Overriding Abstract Methods</h2>
      <p>
        Abstract classes are created to be superclasses of other classes.
        If a class contains an abstract method, it is mandatory to override it in the first concrete subclass (will be discussed in later tutorials).
      </p>
    </div>
  );
  } 