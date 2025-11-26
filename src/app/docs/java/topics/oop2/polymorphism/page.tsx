export default function JavaPolymorphismPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java Polymorphism</h1>

      <p id="introduction" className="mb-4">
        Polymorphism is an important concept of object-oriented programming. It
        simply means more than one form.
      </p>

      <p className="mb-4">
        That is, the same entity (method or operator or object) can perform
        different operations in different scenarios.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="example" className="text-2xl font-semibold mt-6 mb-2">
        Example: Java Polymorphism
      </h2>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Polygon {

  // method to render a shape
  public void render() {
    System.out.println("Rendering Polygon...");
  }
}

class Square extends Polygon {

  // renders Square
  public void render() {
    System.out.println("Rendering Square...");
  }
}

class Circle extends Polygon {

  // renders circle
  public void render() {
    System.out.println("Rendering Circle...");
  }
}

class Main {
  public static void main(String[] args) {
    
    // create an object of Square
    Square s1 = new Square();
    s1.render();

    // create an object of Circle
    Circle c1 = new Circle();
    c1.render();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Rendering Square...
Rendering Circle...`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created a superclass: <var>Polygon</var>{" "}
        and two subclasses: <var>Square</var> and <var>Circle</var>. Notice the
        use of the <code>render()</code> method.
      </p>

      <p className="mb-4">
        The main purpose of the <code>render()</code> method is to render the
        shape. However, the process of rendering a square is different than the
        process of rendering a circle.
      </p>

      <p className="mb-4">
        Hence, the <code>render()</code> method behaves differently in different
        classes. Or, we can say <code>render()</code> is polymorphic.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="why" className="text-xl font-semibold mb-2">
        Why Polymorphism?
      </h3>

      <p className="mb-4">
        Polymorphism allows us to create consistent code. In the previous
        example, we can also create different methods:{" "}
        <code>renderSquare()</code> and <code>renderCircle()</code> to render{" "}
        <var>Square</var> and <var>Circle</var>, respectively.
      </p>

      <p className="mb-4">
        This will work perfectly. However, for every shape, we need to create
        different methods. It will make our code inconsistent.
      </p>

      <p className="mb-4">
        To solve this, polymorphism in Java allows us to create a single method{" "}
        <code>render()</code> that will behave differently for different shapes.
      </p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: The <code>print()</code> method is also an example of
        polymorphism. It is used to print values of different types like{" "}
        <code>char</code>, <code>int</code>, <code>string</code>, etc.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="mb-4">
        We can achieve polymorphism in Java using the following ways:
      </p>

      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Method Overriding</li>
        <li>Method Overloading</li>
        <li>Operator Overloading</li>
      </ol>

      <hr className="my-6 border-gray-300" />

      <h2 id="overriding" className="text-2xl font-semibold mt-6 mb-2">
        1. Java Method Overriding
      </h2>

      <p className="mb-4">
        During inheritance in Java, if the same method is present in both the
        superclass and the subclass. Then, the method in the subclass overrides
        the same method in the superclass. This is called method
        overriding.
      </p>

      <p className="mb-4">
        In this case, the same method will perform one operation in the
        superclass and another operation in the subclass. For example,
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 1: Polymorphism using method overriding
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Language {
  public void displayInfo() {
    System.out.println("Common English Language");
  }
}

class Java extends Language {
  @Override
  public void displayInfo() {
    System.out.println("Java Programming Language");
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of Java class
    Java j1 = new Java();
    j1.displayInfo();

    // create an object of Language class
    Language l1 = new Language();
    l1.displayInfo();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Java Programming Language
Common English Language`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created a superclass named <var>Language</var>{" "}
        and a subclass named <var>Java</var>. Here, the method{" "}
        <code>displayInfo()</code> is present in both <var>Language</var> and{" "}
        <var>Java</var>.
      </p>

      <p className="mb-4">
        The use of <code>displayInfo()</code> is to print the information.
        However, it is printing different information in <var>Language</var> and{" "}
        <var>Java</var>.
      </p>

      <p className="mb-4">
        Based on the object used to call the method, the corresponding
        information is printed.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-polymorphism-implementation.png"
          title="Java Polymorphism Implementation"
          alt="displayInfo() method prints Common English Language when called using l1 object and when using j1 object, it prints Java Programming Language"
          width="520"
          height="257"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Working of Java Polymorphism
        </figcaption>
      </figure>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: The method that is called is determined during the execution of
        the program. Hence, method overriding is a run-time polymorphism.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="method-overloading" className="text-2xl font-semibold mt-6 mb-2">
        2. Java Method Overloading
      </h2>

      <p className="mb-4">
        In a Java class, we can create methods with the same name if they differ
        in parameters. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`void func() { ... }
void func(int a) { ... }
float func(double a) { ... }
float func(int a, float b) { ... }`}</code>
      </pre>

      <p className="mb-4">
        This is known as method overloading in Java. Here, the same method
        will perform different operations based on the parameter.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 3: Polymorphism using method overloading
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Pattern {

  // method without parameter
  public void display() {
    for (int i = 0; i < 10; i++) {
      System.out.print("*");
    }
  }

  // method with single parameter
  public void display(char symbol) {
    for (int i = 0; i < 10; i++) {
      System.out.print(symbol);
    }
  }
}

class Main {
  public static void main(String[] args) {
    Pattern d1 = new Pattern();

    // call method without any argument
    d1.display();
    System.out.println("\n");

    // call method with a single argument
    d1.display('#');
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`**********

##########`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created a class named <var>Pattern</var>.
        The class contains a method named <code>display()</code> that is
        overloaded.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// method with no arguments
display() {...}

// method with a single char type argument
display(char symbol) {...}`}</code>
      </pre>

      <p className="mb-4">
        Here, the main function of <code>display()</code> is to print the
        pattern. However, based on the arguments passed, the method is performing
        different operations:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          prints a pattern of <code>*</code>, if no argument is passed or
        </li>
        <li>
          prints pattern of the parameter, if a single <code>char</code> type
          argument is passed.
        </li>
      </ul>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: The method that is called is determined by the compiler. Hence,
        it is also known as compile-time polymorphism.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="operator-overloading" className="text-2xl font-semibold mt-6 mb-2">
        3. Java Operator Overloading
      </h2>

      <p className="mb-4">
        Some operators in Java behave differently with different operands. For
        example,
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <code>+</code> operator is overloaded to perform numeric addition as
          well as string concatenation, and
        </li>
        <li>
          operators like <code>&amp;</code>, <code>|</code>, and <code>!</code>{" "}
          are overloaded for logical and bitwise operations.
        </li>
      </ul>

      <p className="mb-4">
        Let's see how we can achieve polymorphism using operator
        overloading.
      </p>

      <p className="mb-4">
        The <code>+</code> operator is used to add two entities. However, in
        Java, the <code>+</code> operator performs two operations.
      </p>

      <p className="font-bold mb-2">
        1. When <code>+</code> is used with numbers (integers and floating-point
        numbers), it performs mathematical addition. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`int a = 5;
int b = 6;

// + with numbers
int sum = a + b;  // Output = 11`}</code>
      </pre>

      <p className="font-bold mb-2">
        2. When we use the <code>+</code> operator with strings, it will perform
        string concatenation (join two strings). For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`String first = "Java ";
String second = "Programming";

// + with strings
name = first + second;  // Output = Java Programming`}</code>
      </pre>

      <p className="mb-4">
        Here, we can see that the <code>+</code> operator is overloaded in Java
        to perform two operations: addition and concatenation.
      </p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        Note: In languages like C++, we can define operators to work
        differently for different operands. However, Java doesn't support
        user-defined operator overloading.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="polymorphic-variable" className="text-2xl font-semibold mt-6 mb-2">
        Polymorphic Variables
      </h2>

      <p className="mb-4">
        A variable is called polymorphic if it refers to different values
        under different conditions.
      </p>

      <p className="mb-4">
        Object variables (instance variables) represent the behavior of
        polymorphic variables in Java. It is because object variables of a class
        can refer to objects of its class as well as objects of its subclasses.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example: Polymorphic Variables
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class ProgrammingLanguage {
  public void display() {
    System.out.println("I am Programming Language.");
  }
}

class Java extends ProgrammingLanguage {
  @Override
  public void display() {
    System.out.println("I am Object-Oriented Programming Language.");
  }
}

class Main {
  public static void main(String[] args) {

    // declare an object variable
    ProgrammingLanguage pl;

    // create object of ProgrammingLanguage
    pl = new ProgrammingLanguage();
    pl.display();

    // create object of Java class
    pl = new Java();
    pl.display();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am Programming Language.
I am Object-Oriented Programming Language.`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an object variable <var>pl</var> of
        the <var>ProgrammingLanguage</var> class. Here, <var>pl</var> is a
        polymorphic variable. This is because,
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          In statement <code>pl = new ProgrammingLanguage()</code>, <var>pl</var>{" "}
          refer to the object of the <var>ProgrammingLanguage</var> class.
        </li>
        <li>
          And, in statement <code>pl = new Java()</code>, <var>pl</var> refer to
          the object of the <var>Java</var> class.
        </li>
      </ul>
    </div>
  );
}