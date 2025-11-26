export default function JavaAbstractClassAndMethodsPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">
        Java Abstract Class and Abstract Methods
      </h1>

      <h2 id="abstract-class" className="text-2xl font-semibold mt-6 mb-2">
        Java Abstract Class
      </h2>

      <p className="mb-4">
        The abstract class in Java cannot be instantiated (we cannot create
        objects of abstract classes). We use the <code>abstract</code> keyword to
        declare an abstract class. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// create an abstract class
abstract class Language {
  // fields and methods
}
...

// try to create an object Language
// throws an error
Language obj = new Language();`}</code>
      </pre>

      <p className="mb-4">
        An abstract class can have both the regular methods and abstract methods.
        For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract class Language {

  // abstract method
  abstract void method1();

  // regular method
  void method2() {
    System.out.println("This is regular method");
  }
}`}</code>
      </pre>

      <p className="mb-4">
        To know about the non-abstract methods, visit Java methods. Here, we will
        learn about abstract methods.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="abstract-method" className="text-2xl font-semibold mt-6 mb-2">
        Java Abstract Method
      </h2>

      <p className="mb-4">
        A method that doesn't have its body is known as an abstract method.
        We use the same <code>abstract</code> keyword to create abstract methods.
        For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract void display();`}</code>
      </pre>

      <p className="mb-4">
        Here, <code>display()</code> is an abstract method. The body of{" "}
        <code>display()</code> is replaced by <code>;</code>.
      </p>

      <p className="mb-4">
        If a class contains an abstract method, then the class should be declared
        abstract. Otherwise, it will generate an error. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// error
// class should be abstract
class Language {

  // abstract method
  abstract void method1();
}`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h3 id="example" className="text-xl font-semibold mb-2">
        Example: Java Abstract Class and Method
      </h3>

      <p className="mb-4">
        Though abstract classes cannot be instantiated, we can create subclasses
        from it. We can then access members of the abstract class using the
        object of the subclass. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract class Language {

  // method of abstract class
  public void display() {
    System.out.println("This is Java Programming");
  }
}

class Main extends Language {

  public static void main(String[] args) {
    
    // create an object of Main
    Main obj = new Main();

    // access method of abstract class
    // using object of Main class
    obj.display();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`This is Java Programming`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an abstract class named{" "}
        <var>Language</var>. The class contains a regular method{" "}
        <code>display()</code>.
      </p>

      <p className="mb-4">
        We have created the Main class that inherits the abstract class. Notice
        the statement,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`obj.display();`}</code>
      </pre>

      <p className="mb-4">
        Here, <var>obj</var> is the object of the child class <var>Main</var>. We
        are calling the method of the abstract class using the object <var>obj</var>
        .
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="implement" className="text-2xl font-semibold mt-6 mb-2">
        Implementing Abstract Methods
      </h2>

      <p className="mb-4">
        If the abstract class includes any abstract method, then all the child
        classes inherited from the abstract superclass must provide the
        implementation of the abstract method. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract class Animal {
  abstract void makeSound();

  public void eat() {
    System.out.println("I can eat.");
  }
}

class Dog extends Animal {

  // provide implementation of abstract method
  public void makeSound() {
    System.out.println("Bark bark");
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of Dog class
    Dog d1 = new Dog();

    d1.makeSound();
    d1.eat();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Bark bark
I can eat.`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an abstract class <var>Animal</var>
        The class contains an abstract method <code>makeSound()</code> and a
        non-abstract method <code>eat()</code>.
      </p>

      <p className="mb-4">
        We have inherited a subclass <var>Dog</var> from the superclass{" "}
        <var>Animal</var>. Here, the subclass <var>Dog</var> provides the
        implementation for the abstract method <code>makeSound()</code>.
      </p>

      <p className="mb-4">
        We then used the object <var>d1</var> of the <var>Dog</var> class to call
        methods <code>makeSound()</code> and <code>eat()</code>.
      </p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: If the <var>Dog</var> class doesn't provide the implementation
        of the abstract method <code>makeSound()</code>, <var>Dog</var> should
        also be declared as abstract. This is because the subclass <var>Dog</var>{" "}
        inherits <code>makeSound()</code> from <var>Animal</var>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="access-constructor" className="text-xl font-semibold mb-2">
        Accesses Constructor of Abstract Classes
      </h3>

      <p className="mb-4">
        An abstract class can have constructors like the regular class. And, we
        can access the constructor of an abstract class from the subclass using
        the <code>super</code> keyword. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract class Animal {
  Animal() {
    ….
  }
}

class Dog extends Animal {
  Dog() {
    super();
    ...
  }
}`}</code>
      </pre>

      <p className="mb-4">
        Here, we have used the <code>super()</code> inside the constructor of{" "}
        <var>Dog</var> to access the constructor of the <var>Animal</var>.
      </p>

      <p className="mb-4">
        Note that the <code>super</code> should always be the first statement of
        the subclass constructor.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="abstraction" className="text-2xl font-semibold mt-6 mb-2">
        Java Abstraction
      </h2>

      <p className="mb-4">
        The major use of abstract classes and methods is to achieve **abstraction**
        in Java.
      </p>

      <p className="mb-4">
        Abstraction is an important concept of object-oriented programming that
        allows us to hide unnecessary details and only show the needed
        information.
      </p>

      <p className="mb-4">
        This allows us to manage complexity by omitting or hiding details with a
        simpler, higher-level idea.
      </p>

      <p className="mb-4">
        A practical example of abstraction can be motorbike brakes. We know
        what brake does. When we apply the brake, the motorbike will stop.
        However, the working of the brake is kept hidden from us.
      </p>

      <p className="mb-4">
        The major advantage of hiding the working of the brake is that now the
        manufacturer can implement brake differently for different motorbikes,
        however, what brake does will be the same.
      </p>

      <p className="mb-4">
        Let's take an example that helps us to better understand Java
        abstraction.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 3: Java Abstraction
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`abstract class MotorBike {
  abstract void brake();
}

class SportsBike extends MotorBike {
    
  // implementation of abstract method
  public void brake() {
    System.out.println("SportsBike Brake");
  }
}

class MountainBike extends MotorBike {
    
  // implementation of abstract method
  public void brake() {
    System.out.println("MountainBike Brake");
  }
}

class Main {
  public static void main(String[] args) {
    MountainBike m1 = new MountainBike();
    m1.brake();
    SportsBike s1 = new SportsBike();
    s1.brake();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`MountainBike Brake
SportsBike Brake`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an abstract super class{" "}
        <var>MotorBike</var>. The superclass <var>MotorBike</var> has an
        abstract method <code>brake()</code>.
      </p>

      <p className="mb-4">
        The <code>brake()</code> method cannot be implemented inside{" "}
        <var>MotorBike</var>. It is because every bike has different
        implementation of brakes. So, all the subclasses of <var>MotorBike</var>{" "}
        would have different implementation of <code>brake()</code>.
      </p>

      <p className="mb-4">
        So, the implementation of <code>brake()</code> in <var>MotorBike</var> is
        kept hidden.
      </p>

      <p className="mb-4">
        Here, <var>MountainBike</var> makes its own implementation of{" "}
        <code>brake()</code> and <var>SportsBike</var> makes its own
        implementation of <code>brake()</code>.
      </p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: We can also use interfaces to achieve abstraction in Java.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="key-points" className="text-2xl font-semibold mt-6 mb-2">
        Key Points to Remember
      </h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          We use the <code>abstract</code> keyword to create abstract classes and
          methods.
        </li>
        <li>
          An abstract method doesn't have any implementation (method body).
        </li>
        <li>
          A class containing abstract methods should also be abstract.
        </li>
        <li>We cannot create objects of an abstract class.</li>
        <li>
          To implement features of an abstract class, we inherit subclasses from
          it and create objects of the subclass.
        </li>
        <li>
          A subclass must override all abstract methods of an abstract class.
          However, if the subclass is declared abstract, it's not mandatory to
          override abstract methods.
        </li>
        <li>
          We can access the static attributes and methods of an abstract
          class using the reference of the abstract class. For example,
          <pre className="bg-gray-300 p-2 rounded-lg mt-1 inline-block">
            <code className="text-green-800">{`Animal.staticMethod();`}</code>
          </pre>
        </li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <p className="font-bold mb-2">Also Read:</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <a
            href="/java-programming/class-objects"
            className="text-blue-600 underline"
          >
            Java Class and Objects
          </a>
        </li>
      </ul>
    </div>
  );
}