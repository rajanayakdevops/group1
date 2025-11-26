export default function JavaInheritancePage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java Inheritance</h1>

      <p id="introduction" className="mb-4">
        Inheritance is one of the key features of OOP that allows us to create a
        new class from an existing class.
      </p>

      <p className="mb-4">
        The new class that is created is known as <strong>subclass</strong> (child
        or derived class) and the existing class from where the child class is
        derived is known as <strong>superclass</strong> (parent or base class).
      </p>

      <p className="mb-4">
        The <code>extends</code> keyword is used to perform inheritance in Java.
        For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {
  // methods and fields
}

// use of extends keyword
// to perform inheritance
class Dog extends Animal {

  // methods and fields of Animal
  // methods and fields of Dog
}`}</code>
      </pre>

      <p className="mb-4">
        In the above example, the <var>Dog</var> class is created by inheriting
        the methods and fields from the <var>Animal</var> class.
      </p>

      <p className="mb-4">
        Here, <var>Dog</var> is the subclass and <var>Animal</var> is the
        superclass.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="example" className="text-xl font-semibold mb-2">
        Example 1: Java Inheritance
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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
    labrador.name = "Rohu";
    labrador.display();

    // call method of superclass
    // using object of subclass
    labrador.eat();

  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`My name is Rohu
I can eat`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have derived a subclass <var>Dog</var> from
        superclass <var>Animal</var>. Notice the statements,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`labrador.name = "Rohu";

labrador.eat();`}</code>
      </pre>

      <p className="mb-4">
        Here, <var>labrador</var> is an object of <var>Dog</var>. However,{" "}
        <var>name</var> and <code>eat()</code> are the members of the{" "}
        <var>Animal</var> class.
      </p>

      <p className="mb-4">
        Since <var>Dog</var> inherits the field and method from <var>Animal</var>
        , we are able to access the field and method using the object of the{" "}
        <var>Dog</var>.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-inheritance-implementation.png"
          title="Java Inheritance Implementation"
          alt="Subclass Dog can access the field and method of the superclass Animal."
          width="460"
          height="290"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Inheritance Implementation
        </figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="is-a" className="text-2xl font-semibold mt-6 mb-2">
        is-a relationship
      </h2>

      <p className="mb-4">
        In Java, inheritance is an <strong>is-a</strong> relationship. That is,
        we use inheritance only if there exists an is-a relationship between two
        classes. For example,
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Car</strong> is a <strong>Vehicle</strong>
        </li>
        <li>
          <strong>Orange</strong> is a <strong>Fruit</strong>
        </li>
        <li>
          <strong>Surgeon</strong> is a <strong>Doctor</strong>
        </li>
        <li>
          <strong>Dog</strong> is an <strong>Animal</strong>
        </li>
      </ul>

      <p className="mb-4">
        Here, <strong>Car</strong> can inherit from <strong>Vehicle</strong>,{" "}
        <strong>Orange</strong> can inherit from <strong>Fruit</strong>, and so
        on.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="method-overriding" className="text-2xl font-semibold mt-6 mb-2">
        Method Overriding in Java Inheritance
      </h2>

      <p className="mb-4">
        In <strong>Example 1</strong>, we see the object of the subclass can
        access the method of the superclass.
      </p>

      <p className="mb-4">
        <strong>
          However, if the same method is present in both the superclass and
          subclass, what will happen?
        </strong>
      </p>

      <p className="mb-4">
        In this case, the method in the subclass overrides the method in the
        superclass. This concept is known as method overriding in Java.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 2: Method overriding in Java Inheritance
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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
    labrador.eat();
    labrador.bark();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I eat dog food
I can bark`}</code>
      </pre>

      <p className="mb-4">
        In the above example, the <code>eat()</code> method is present in both
        the superclass <var>Animal</var> and the subclass <var>Dog</var>.
      </p>

      <p className="mb-4">
        Here, we have created an object <var>labrador</var> of <var>Dog</var>.
      </p>

      <p className="mb-4">
        Now when we call <code>eat()</code> using the object <var>labrador</var>,
        the method inside <var>Dog</var> is called. This is because the method
        inside the derived class overrides the method inside the base class.
      </p>

      <p className="mb-4">This is called method overriding.</p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <strong>Note</strong>: We have used the <code>@Override</code> annotation
        to tell the compiler that we are overriding a method. However, the
        annotation is not mandatory.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="super" className="text-2xl font-semibold mt-6 mb-2">
        super Keyword in Java Inheritance
      </h2>

      <p className="mb-4">
        Previously we saw that the same method in the subclass overrides the
        method in superclass.
      </p>

      <p className="mb-4">
        In such a situation, the <code>super</code> keyword is used to call the
        method of the parent class from the method of the child class.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 3: super Keyword in Inheritance
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I can eat
I eat dog food
I can bark`}</code>
      </pre>

      <p className="mb-4">
        In the above example, the <code>eat()</code> method is present in both
        the base class <var>Animal</var> and the derived class <var>Dog</var>.
        Notice the statement,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`super.eat();`}</code>
      </pre>

      <p className="mb-4">
        Here, the <code>super</code> keyword is used to call the <code>eat()</code>{" "}
        method present in the superclass.
      </p>

      <p className="mb-4">
        We can also use the <code>super</code> keyword to call the constructor of
        the superclass from the constructor of the subclass.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="protected-keyword" className="text-2xl font-semibold mt-6 mb-2">
        protected Members in Inheritance
      </h2>

      <p className="mb-4">
        In Java, if a class includes <code>protected</code> fields and methods,
        then these fields and methods are accessible from the subclass of the
        class.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 4: protected Members in Inheritance
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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
    // using the object of subclass
    labrador.name = "Rocky";
    labrador.display();

    labrador.getInfo();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am an animal.
My name is Rocky`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created a class named Animal. The class
        includes a protected field: <var>name</var> and a method:{" "}
        <code>display()</code>.
      </p>

      <p className="mb-4">
        We have inherited the <var>Dog</var> class inherits <var>Animal</var>.
        Notice the statement,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`labrador.name = "Rocky";
labrador.display();`}</code>
      </pre>

      <p className="mb-4">
        Here, we are able to access the protected field and method of the
        superclass using the <var>labrador</var> object of the subclass.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="advantage" className="text-2xl font-semibold mt-6 mb-2">
        Why use inheritance?
      </h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          The most important use of inheritance in Java is{" "}
          <strong>code reusability</strong>. The code that is present in the
          parent class can be directly used by the child class.
        </li>
        <li>
          Method overriding is also known as runtime polymorphism. Hence, we can
          achieve <strong>Polymorphism</strong> in Java with the help of
          inheritance.
        </li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="types" className="text-2xl font-semibold mt-6 mb-2">
        Types of inheritance
      </h2>

      <p className="mb-4">There are five types of inheritance.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Single Inheritance</h3>

      <p className="mb-4">
        In single inheritance, a single subclass extends from a single superclass.
        For example,
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-single-inheritance.png"
          title="Java Single Inheritance"
          alt="Class A inherits from class B."
          width="200"
          height="212"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Single Inheritance
        </figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Multilevel Inheritance
      </h3>

      <p className="mb-4">
        In multilevel inheritance, a subclass extends from a superclass and then
        the same subclass acts as a superclass for another class. For example,
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-multilevel-inheritance.png"
          title="Java Multilevel Inheritance"
          alt="Class B inherits from class A and class C inherits from class B."
          width="240"
          height="386"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Multilevel Inheritance
        </figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-4 mb-2">
        3. Hierarchical Inheritance
      </h3>

      <p className="mb-4">
        In hierarchical inheritance, multiple subclasses extend from a single
        superclass. For example,
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-hierarchical-inheritance.png"
          title="Java Hierarchical Inheritance"
          alt="Both classes B and C inherit from the single class A."
          width="340"
          height="237"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Hierarchical Inheritance
        </figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-4 mb-2">
        4. Multiple Inheritance
      </h3>

      <p className="mb-4">
        In multiple inheritance, a single subclass extends from multiple
        superclasses. For example,
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-multiple-inheritance.png"
          title="Java Multiple Inheritance"
          alt="Class C inherits from both classes A and B."
          width="360"
          height="251"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Multiple Inheritance
        </figcaption>
      </figure>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <strong>Note</strong>: Java doesn't support multiple inheritance.
        However, we can achieve multiple inheritance using interfaces.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mt-4 mb-2">5. Hybrid Inheritance</h3>

      <p className="mb-4">
        Hybrid inheritance is a combination of two or more types of inheritance.
        For example,
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-hybrid-inheritance.png"
          title="Java Hybrid Inheritance"
          alt="Class B and C inherit from a single class A and class D inherits from both the class B and C."
          width="360"
          height="411"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java Hybrid Inheritance
        </figcaption>
      </figure>

      <p className="mb-4">
        Here, we have combined hierarchical and multiple inheritance to form a
        hybrid inheritance.
      </p>
    </div>
  );
}