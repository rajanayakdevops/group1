export default function JavaInterfacePage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java Interface</h1>

      <p id="introduction" className="mb-4">
        An interface is a fully abstract class. It includes a group of abstract
        methods (methods without a body).
      </p>

      <p className="mb-4">
        We use the <code>interface</code> keyword to create an interface in Java.
        For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface Language {
  public void getType();

  public void getVersion();
}`}</code>
      </pre>

      <p className="mb-4">Here,</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <var>Language</var> is an interface.
        </li>
        <li>
          It includes abstract methods: <code>getType()</code> and{" "}
          <code>getVersion()</code>.
        </li>
      </ul>

      <h2 id="implement" className="text-2xl font-semibold mt-6 mb-2">
        Implementing an Interface
      </h2>

      <p className="mb-4">
        Like abstract classes, we cannot create objects of interfaces.
      </p>

      <p className="mb-4">
        To use an interface, other classes must implement it. We use the{" "}
        <code>implements</code> keyword to implement an interface.
      </p>

      <h3 className="text-xl font-semibold mb-2">Example 1: Java Interface</h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface Polygon {
  void getArea(int length, int breadth);
}

// implement the Polygon interface
class Rectangle implements Polygon {

  // implementation of abstract method
  public void getArea(int length, int breadth) {
    System.out.println("The area of the rectangle is " + (length * breadth));
  }
}

class Main {
  public static void main(String[] args) {
    Rectangle r1 = new Rectangle();
    r1.getArea(5, 6);
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`The area of the rectangle is 30`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an interface named <var>Polygon</var>
        . The interface contains an abstract method <code>getArea()</code>.
      </p>

      <p className="mb-4">
        Here, the <var>Rectangle</var> class implements <var>Polygon</var>. And,
        provides the implementation of the <code>getArea()</code> method.
      </p>

      <h3 id="example" className="text-xl font-semibold mb-2">
        Example 2: Java Interface
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// create an interface
interface Language {
  void getName(String name);
}

// class implements interface
class ProgrammingLanguage implements Language {

  // implementation of abstract method
  public void getName(String name) {
    System.out.println("Programming Language: " + name);
  }
}

class Main {
  public static void main(String[] args) {
    ProgrammingLanguage language = new ProgrammingLanguage();
    language.getName("Java");
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Programming Language: Java`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an interface named <var>Language</var>
        . The interface includes an abstract method <code>getName()</code>.
      </p>

      <p className="mb-4">
        Here, the <var>ProgrammingLanguage</var> class implements the interface
        and provides the implementation for the method.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Implementing Multiple Interfaces
      </h2>

      <p className="mb-4">
        In Java, a class can also implement multiple interfaces. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface A {
  // members of A
}

interface B {
  // members of B
}

class C implements A, B {
  // abstract members of A
  // abstract members of B
}`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="extend" className="text-2xl font-semibold mt-6 mb-2">
        Extending an Interface
      </h2>

      <p className="mb-4">
        Similar to classes, interfaces can extend other interfaces. The{" "}
        <code>extends</code> keyword is used for extending interfaces. For
        example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface Line {
  // members of Line interface
}

// extending interface
interface Polygon extends Line {
  // members of Polygon interface
  // members of Line interface
}`}</code>
      </pre>

      <p className="mb-4">
        Here, the <var>Polygon</var> interface extends the <var>Line</var>{" "}
        interface. Now, if any class implements <var>Polygon</var>, it should
        provide implementations for all the abstract methods of both{" "}
        <var>Line</var> and <var>Polygon</var>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-xl font-semibold mb-2">
        Extending Multiple Interfaces
      </h3>

      <p className="mb-4">
        An interface can extend multiple interfaces. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface A {
  ...
}
interface B {
  ... 
}

interface C extends A, B {
  ...
}`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      <h2 id="advantage" className="text-2xl font-semibold mt-6 mb-2">
        Advantages of Interface in Java
      </h2>

      <p className="mb-4">
        Now that we know what interfaces are, let's learn about why interfaces
        are used in Java.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Similar to abstract classes, interfaces help us to achieve{" "}
          abstraction in Java.
          <br />
          <br />
          Here, we know <code>getArea()</code> calculates the area of polygons,
          but the way area is calculated is different for different polygons.
          Hence, the implementation of <code>getArea()</code> is independent of
          one another.
        </li>
        <li>
          Interfaces provide specifications that a class (which implements
          it) must follow.
          <br />
          <br />
          In our previous example, we used <code>getArea()</code> as a
          specification inside the interface <var>Polygon</var>. This is like
          setting a rule that we should be able to get the area of every polygon.
          <br />
          <br />
          Now any class that implements the <var>Polygon</var> interface must
          provide an implementation for the <code>getArea()</code> method.
        </li>
        <li>
          Interfaces are also used to achieve **multiple inheritance** in Java.
          For example,
        </li>
      </ul>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface Line {
...
}

interface Polygon {
...
}

class Rectangle implements Line, Polygon {
...
}`}</code>
      </pre>

      <p className="mt-4 mb-4">
        Here, the class <var>Rectangle</var> is implementing two different
        interfaces. This is how we achieve multiple inheritance in Java.
      </p>

      <div className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <p className="font-bold mb-2">Note:</p>
        <p className="mb-2">
          All the methods inside an interface are implicitly <code>public</code>{" "}
          and all fields are implicitly <code>public static final</code>. For
          example,
        </p>

        <pre className="bg-gray-300 p-2 rounded-lg overflow-auto max-h-[600px]">
          <code className="text-green-800">{`interface Language {
  
  // by default public static final
  String type = "programming language";

  // by default public
  void getName();
}`}</code>
        </pre>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="default-methods" className="text-2xl font-semibold mt-6 mb-2">
        default methods in Java Interfaces
      </h2>

      <p className="mb-4">
        With the release of Java <code>8</code>, we can now add methods with
        implementation inside an interface. These methods are called{" "}
        default methods.
      </p>

      <p className="mb-4">
        To declare default methods inside interfaces, we use the{" "}
        <code>default</code> keyword. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`public default void getSides() {
    // body of getSides()
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Why default methods?</h3>

      <p className="mb-4">
        Let's take a scenario to understand why default methods are introduced in
        Java.
      </p>

      <p className="mb-4">
        Suppose, we need to add a new method in an interface.
      </p>

      <p className="mb-4">
        We can add the method in our interface easily without implementation.
        However, that's not the end of the story. All our classes that implement
        that interface must provide an implementation for the method.
      </p>

      <p className="mb-4">
        If a large number of classes were implementing this interface, we need to
        track all these classes and make changes to them. This is not only
        tedious but error-prone as well.
      </p>

      <p className="mb-4">
        To resolve this, Java introduced default methods. Default methods are
        inherited like ordinary methods.
      </p>

      <p className="mb-4">
        Let's take an example to have a better understanding of default methods.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Example: Default Method in Java Interface
      </h2>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`interface Polygon {
  void getArea();

  // default method 
  default void getSides() {
    System.out.println("I can get sides of a polygon.");
  }
}

// implements the interface
class Rectangle implements Polygon {
  public void getArea() {
    int length = 6;
    int breadth = 5;
    int area = length * breadth;
    System.out.println("The area of the rectangle is " + area);
  }

  // overrides the getSides()
  public void getSides() {
    System.out.println("I have 4 sides.");
  }
}

// implements the interface
class Square implements Polygon {
  public void getArea() {
    int length = 5;
    int area = length * length;
    System.out.println("The area of the square is " + area);
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of Rectangle
    Rectangle r1 = new Rectangle();
    r1.getArea();
    r1.getSides();

    // create an object of Square
    Square s1 = new Square();
    s1.getArea();
    s1.getSides();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`The area of the rectangle is 30
I have 4 sides.
The area of the square is 25
I can get sides of a polygon.`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created an interface named <var>Polygon</var>
        . It has a default method <code>getSides()</code> and an abstract method{" "}
        <code>getArea()</code>.
      </p>

      <p className="mb-4">
        Here, we have created two classes, <var>Rectangle</var> and{" "}
        <var>Square</var>, that implement <var>Polygon</var>.
      </p>

      <p className="mb-4">
        The <var>Rectangle</var> class provides the implementation of the{" "}
        <code>getArea()</code> method and overrides the <code>getSides()</code>{" "}
        method. However, the <var>Square</var> class only provides the
        implementation of the <code>getArea()</code> method.
      </p>

      <p className="mb-4">
        Now, while calling the <code>getSides()</code> method using the{" "}
        <var>Rectangle</var> object, the overridden method is called. However, in
        the case of the <var>Square</var> object, the default method is called.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="private-static-methods" className="text-2xl font-semibold mt-6 mb-2">
        private and static Methods in Interface
      </h2>

      <p className="mb-4">
        The **Java <code>8</code> also added another feature to include static methods
        inside an interface.
      </p>

      <p className="mb-4">
        Similar to a class, we can access static methods of an interface using
        its references. For example,
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// create an interface
interface Polygon {
  staticMethod(){..}
}

// access static method
Polygon.staticMethod();`}</code>
      </pre>

      <div className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <p className="font-bold mb-2">Note:</p>
        <p className="mb-2">
          With the release of Java<code>9</code>, private methods are also supported in
          interfaces.
        </p>
        <p className="mb-2">
          We cannot create objects of an interface. Hence, private methods are
          used as helper methods that provide support to other methods in
          interfaces.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h3 id="practical-example" className="text-xl font-semibold mb-2">
        Practical Example of Interface
      </h3>

      <p className="mb-4">
        Let's see a more practical example of Java Interface.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// To use the sqrt function
import java.lang.Math;

interface Polygon {
  void getArea();
  
// calculate the perimeter of a Polygon
  default void getPerimeter(int... sides) {
    int perimeter = 0;
    for (int side: sides) {
      perimeter += side;
    }

   System.out.println("Perimeter: " + perimeter);
  }
}

class Triangle implements Polygon {
  private int a, b, c;
  private double s, area;

// initializing sides of a triangle
  Triangle(int a, int b, int c) {
    this.a = a;
    this.b = b;
    this.c = c;
    s = 0;
  }

// calculate the area of a triangle
  public void getArea() {
    s = (double) (a + b + c)/2;
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    System.out.println("Area: " + area);
  }
}

class Main {
  public static void main(String[] args) {
    Triangle t1 = new Triangle(2, 3, 4);

// calls the method of the Triangle class
    t1.getArea();

// calls the method of Polygon
    t1.getPerimeter(2, 3, 4);
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Area: 2.9047375096555625
Perimeter: 9`}</code>
      </pre>

      <p className="mb-4">
        In the above program, we have created an interface named <var>Polygon</var>
        . It includes a default method <code>getPerimeter()</code> and an
        abstract method <code>getArea()</code>.
      </p>

      <p className="mb-4">
        We can calculate the perimeter of all polygons in the same manner so we
        implemented the body of <code>getPerimeter()</code> in <var>Polygon</var>
        .
      </p>

      <p className="mb-4">
        Now, all polygons that implement <var>Polygon</var> can use{" "}
        <code>getPerimeter()</code> to calculate perimeter.
      </p>

      <p className="mb-4">
        However, the rule for calculating the area is different for different
        polygons. Hence, <code>getArea()</code> is included without
        implementation.
      </p>

      <p className="mb-4">
        Any class that implements <var>Polygon</var> must provide an
        implementation of <code>getArea()</code>.
      </p>
    </div>
  );
}