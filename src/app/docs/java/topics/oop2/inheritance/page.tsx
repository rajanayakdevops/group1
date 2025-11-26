import React from "react";
export default function InheritancePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java Inheritance</h1>
      <p>
        Inheritance is one of the key features of OOP that allows us to create a new class from an existing class.</p>

        <p>The new class is known as subclass (child/derived class)<code>,</code> and the existing class is the superclass (parent/base class).</p>
        
        <p>The <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">
  extend
</code> keyword is used to perform inheritance. For example:</p>

      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base mt-4 mb-4">
        <code className="text-green-700">{`class Animal {
  // methods and fields
}
// use of extends keyword
class Dog extends Animal {

  // methods and fields of Animal
  // methods and fields of Dog
}`}</code>
      </pre>

      <p>In this example, the <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Dog</code> class inherits 
      methods and fields from the 
      <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Animal</code> class.</p>
      <p>Here, <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Dog</code> is the subclass and 
      <code className="px-2 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 shadow-sm">Animal</code>  is the superclass.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 1: Java Inheritance</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {

  // field and method of the parent class
  String name;
  public void eat() {
    System.out.println("I can eat");
  }
}
// inherit from Animal
class Dog extends Animal {

  // new method in subclass
  public void display() {
    System.out.println("My name is " + name);
  }
}
class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // access field of superclass
    labrador.name = "Rovu";
    labrador.display();

    // call method of superclass
    labrador.eat();

  }
}`}</code>
      </pre>
      <p className="font-bold mt-4">Output</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`My name is Rovu
I can eat`}</pre>
      <p>Here, labrador is an object of Dog, but it accesses name and eat(), which are members of the Animal superclass.</p>
      <p>This is possible because Dog inherits the members from Animal.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Java Inheritance Implementation</h2>
      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">is-a relationship</h3>
      
      <p>In Java, inheritance represents an is-a relationship.</p>
      
      
      <p>We use inheritance only when an is-a relationship exists (e.g., Car is a Vehicle).</p>
      <ul className="list-disc ml-6">
        <li>Car is a Vehicle</li>
        <li>Orange is a Fruit</li>
        <li>Surgeon is a Doctor</li>
        <li>Dog is an Animal</li>
      </ul>
      <p>Therefore, Car can inherit from Vehicle, and Dog can inherit from Animal, and so on.</p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Method Overriding in Java Inheritance</h3>
      <p>If the same method is present in both the superclass and the subclass, the method in the subclass overrides the one in the superclass.</p>
      <p>This concept is known as method overriding.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 2: Method overriding in Java Inheritance</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {

  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}
// Dog inherits Animal
class Dog extends Animal {

  // overriding the eat() method
  @Override
  public void eat() {
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}
class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // call the eat() method
    labrador.eat(); // Calls Dog's eat()
    labrador.bark();
  }
}`}</code>
      </pre>
      <p className="font-bold mt-4">Output</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I eat dog food
I can bark`}</pre>
      <p>When labrador.eat() is called, the method inside Dog is executed because it overrides the method in the Animal class.</p>
      
      <p>We use the `@Override` annotation for clarity, though it is not mandatory.</p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">super Keyword in Java Inheritance</h3>

      <p>When a method is overridden in a subclass, the super keyword is used to call the overridden method of the parent class from the child class.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 3: super Keyword in Inheritance</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {

  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}
// Dog inherits Animal
class Dog extends Animal {

  // overriding the eat() method
  @Override
  public void eat() {

    // call method of superclass
    super.eat();
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}
class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}`}</code>
      </pre>
      
      <p className="font-bold mt-4">Output</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I can eat
I eat dog food
I can bark`}</pre>
      <p>The statement super.eat() explicitly calls the eat() method from the Animal class.</p>
      
      <p>The super keyword can also call the superclass constructor.</p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">protected Members in Inheritance</h3>
      <p>Protected fields and methods in a class are accessible from the subclass.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Example 4: protected Members in Inheritance</h2>
      <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-x-auto text-sm md:text-base">
        <code className="text-green-700">{`class Animal {
  protected String name;

  protected void display() {
    System.out.println("I am an animal.");
  }
}
class Dog extends Animal {

  public void getInfo() {
    System.out.println("My name is " + name);
  }
}
class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // access protected field and method
    labrador.name = "Rocky";
    labrador.display();

    labrador.getInfo();
  }
}`}</code>
      </pre>
      <p className="font-bold mt-4">Output</p>
      <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm md:text-base">{`I am an animal.
My name is Rocky`}</pre>
      <p>The labrador object of the Dog subclass can access the protected field name and method display() from the Animal superclass.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Why use inheritance?</h2>
      <ul className="list-disc ml-6">
        <li>Code reusability (child classes use parent code).</li>
        <li>It helps achieve Polymorphism (Method overriding is a type of runtime polymorphism).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Types of inheritance</h2>
      <p>There are five types of inheritance.</p>
      <ol className="list-decimal ml-6">
        <li>Single Inheritance
          <p>A single subclass extends from a single superclass. For example,</p>
          <p className="mt-2 font-semibold">Java Single Inheritance</p>
        </li>
        <li>Multilevel Inheritance
          <p>A subclass extends a superclass, which itself is a subclass of another class. For example,</p>
          <p className="mt-2 font-semibold">Java Multilevel Inheritance</p>
        </li>
        <li>Hierarchical Inheritance
          <p>Multiple subclasses extend from a single superclass. For example,</p>
          <p className="mt-2 font-semibold">Java Hierarchical Inheritance</p>
        </li>
        <li>Multiple Inheritance
          <p>A single subclass extends from multiple superclasses. For example,</p>
          <p className="mt-2 font-semibold">Java Multiple Inheritance</p>
          <p className="mt-2 text-sm italic">
            Note: Java doesn't support multiple inheritance with classes, but it can be achieved using interfaces.
          </p>
        </li>
        <li>Hybrid Inheritance
          <p>A combination of two or more types of inheritance.</p>
          <p className="mt-2 font-semibold">Java Hybrid Inheritance</p>
          <p className="mt-2 text-sm italic">
            Here, we combined hierarchical and multiple inheritance to form a hybrid inheritance.
          </p>
        </li>
      </ol>
    </div>
  );
}