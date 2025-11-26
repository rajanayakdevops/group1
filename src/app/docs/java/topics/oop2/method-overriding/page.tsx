export default function JavaMethodOverridingPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java Method Overriding</h1>

      <p id="introduction" className="mb-4">
        In the last tutorial, we learned about inheritance. Inheritance is an OOP
        property that allows us to derive a new class (subclass) from an existing
        class (superclass). The subclass inherits the attributes and methods of
        the superclass.
      </p>

      <p className="mb-4">
        Now, if the same method is defined in both the superclass and the
        subclass, then the method of the subclass class overrides the method of
        the superclass. This is known as method overriding.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="example-1" className="text-xl font-semibold mb-2">
        Example 1: Method Overriding
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am a dog.`}</code>
      </pre>

      <p className="mb-4">
        In the above program, the <code>displayInfo()</code> method is present in
        both the <var>Animal</var> superclass and the <var>Dog</var> subclass.
      </p>

      <p className="mb-4">
        When we call <code>displayInfo()</code> using the <var>d1</var> object
        (object of the subclass), the method inside the subclass <var>Dog</var>{" "}
        is called. The <code>displayInfo()</code> method of the subclass
        overrides the same method of the superclass.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/method-overriding-in-java.png"
          title="Method Overriding in Java"
          alt="Working of method overriding in Java."
          width="450"
          height="289"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Method Overriding in Java
        </figcaption>
      </figure>

      <p className="mb-4">
        Notice the use of the <code>@Override</code> annotation in our example.
        In Java, annotations are the metadata that we used to provide information
        to the compiler. Here, the <code>@Override</code> annotation specifies
        the compiler that the method after this annotation overrides the method
        of the superclass.
      </p>

      <p className="mb-4">
        It is not mandatory to use <code>@Override</code>. However, when we use
        this, the method should follow all the rules of overriding. Otherwise,
        the compiler will generate an error.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="rules" className="text-2xl font-semibold mt-6 mb-2">
        Java Overriding Rules
      </h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Both the superclass and the subclass must have the{" "}
          <strong>same method name</strong>, the{" "}
          <strong>same return type</strong> and the{" "}
          <strong>same parameter list</strong>.
        </li>
        <li>
          We cannot override the method declared as <code>final</code> and{" "}
          <code>static</code>.
        </li>
        <li>
          We should always override abstract methods of the superclass (will be
          discussed in later tutorials).
        </li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="super" className="text-2xl font-semibold mt-6 mb-2">
        super Keyword in Java Overriding
      </h2>

      <p className="mb-4">
        A common question that arises while performing overriding in Java is:
      </p>

      <p className="font-bold mb-4">
        Can we access the method of the superclass after overriding?
      </p>

      <p className="mb-4">
        Well, the answer is <strong>Yes</strong>. To access the method of the
        superclass from the subclass, we use the <code>super</code> keyword.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 2: Use of super Keyword
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am an animal.
I am a dog.`}</code>
      </pre>

      <p className="mb-4">
        In the above example, the subclass <var>Dog</var> overrides the method{" "}
        <code>displayInfo()</code> of the superclass <var>Animal</var>.
      </p>

      <p className="mb-4">
        When we call the method <code>displayInfo()</code> using the <var>d1</var>{" "}
        object of the <var>Dog</var> subclass, the method inside the{" "}
        <var>Dog</var> subclass is called; the method inside the superclass is
        not called.
      </p>

      <p className="mb-4">
        Inside <code>displayInfo()</code> of the <var>Dog</var> subclass, we have
        used <code>super.displayInfo()</code> to call{" "}
        <code>displayInfo()</code> of the superclass.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4">
        It is important to note that constructors in Java are not inherited.
        Hence, there is no such thing as constructor overriding in Java.
      </p>

      <p className="mb-4">
        However, we can call the constructor of the superclass from its
        subclasses. For that, we use <code>super()</code>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="access-specifier" className="text-2xl font-semibold mt-6 mb-2">
        Access Specifiers in Method Overriding
      </h2>

      <p className="mb-4">
        The same method declared in the superclass and its subclasses can have
        different access specifiers. However, there is a restriction.
      </p>

      <p className="mb-4">
        We can only use those access specifiers in subclasses that provide{" "}
        <strong>larger access</strong> than the access specifier of the
        superclass. For example,
      </p>

      <p className="mb-4">
        Suppose, a method <code>myClass()</code> in the superclass is declared{" "}
        <code>protected</code>. Then, the same method <code>myClass()</code> in
        the subclass can be either <code>public</code> or <code>protected</code>,
        but not <code>private</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 3: Access Specifier in Overriding
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
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

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am a dog.`}</code>
      </pre>

      <p className="mb-4">
        In the above example, the subclass <var>Dog</var> overrides the method{" "}
        <code>displayInfo()</code> of the superclass <var>Animal</var>.
      </p>

      <p className="mb-4">
        Whenever we call <code>displayInfo()</code> using the <var>d1</var>{" "}
        (object of the subclass), the method inside the subclass is called.
      </p>

      <p className="mb-4">
        Notice that, the <code>displayInfo()</code> is declared{" "}
        <code>protected</code> in the <var>Animal</var> superclass. The same
        method has the <code>public</code> access specifier in the <var>Dog</var>{" "}
        subclass. This is possible because the <code>public</code> provides
        larger access than the <code>protected</code>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Overriding Abstract Methods
      </h2>

      <p className="mb-4">
        In Java, abstract classes are created to be the superclass of other
        classes. And, if a class contains an abstract method, it is{" "}
        <strong>mandatory</strong> to override it.
      </p>

      <p className="mb-4">
        We will learn more about abstract classes and overriding of abstract
        methods in later tutorials.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="font-bold mb-2">Also Read:</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <a
            href="/java-programming/method-overloading"
            className="text-blue-600 underline"
          >
            Java Method Overloading
          </a>
        </li>
      </ul>
    </div>
  );
}