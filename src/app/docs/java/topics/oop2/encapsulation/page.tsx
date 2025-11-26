export default function JavaEncapsulationPage() {
  return (
    <div className="editor-contents text-black">
      <h2 id="introduction" className="text-3xl font-bold mb-4">
        Java Encapsulation
      </h2>

      <p className="mb-4">
        Encapsulation is one of the key features of object-oriented programming.
        Encapsulation refers to the bundling of fields and methods inside a single
        class.
      </p>

      <p className="mb-4">
        It prevents outer classes from accessing and changing fields and methods
        of a class. This also helps to achieve data hiding.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="example" className="text-xl font-semibold mb-2">
        Example 1: Java Encapsulation
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Area {

  // fields to calculate area
  int length;
  int breadth;

  // constructor to initialize values
  Area(int length, int breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  // method to calculate area
  public void getArea() {
    int area = length * breadth;
    System.out.println("Area: " + area);
  }
}

class Main {
  public static void main(String[] args) {

    // create object of Area
    // pass value of length and breadth
    Area rectangle = new Area(5, 6);
    rectangle.getArea();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Area: 30`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have created a class named <var>Area</var>. The
        main purpose of this class is to calculate the area.
      </p>

      <p className="mb-4">
        To calculate an area, we need two variables: <var>length</var> and{" "}
        <var>breadth</var> and a method: <code>getArea()</code>. Hence, we
        bundled these fields and methods inside a single class.
      </p>

      <p className="mb-4">
        Here, the fields and methods can be accessed from other classes as well.
        Hence, this is not data hiding.
      </p>

      <p className="mb-4">
        This is only encapsulation. We are just keeping similar codes
        together.
      </p>

      <div className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <p className="font-bold mb-2">Note:</p>
        <p className="mb-2">
          People often consider encapsulation as data hiding, but that's not
          entirely true.
        </p>
        <p>
          Encapsulation refers to the bundling of related fields and methods
          together. This can be used to achieve data hiding. Encapsulation in
          itself is not data hiding.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <h2 id="why" className="text-2xl font-semibold mt-6 mb-2">
        Why Encapsulation?
      </h2>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          In Java, encapsulation helps us to keep related fields and methods
          together, which makes our code cleaner and easy to read.
        </li>
        <li>
          It helps to control the values of our data fields. For example,
          <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px] mt-2">
            <code className="text-green-700">{`class Person {
  private int age;

  public void setAge(int age) {
    if (age >= 0) {
      this.age = age;
    }
  }
}`}</code>
          </pre>
          <br />
          Here, we are making the <var>age</var> variable <code>private</code>{" "}
          and applying logic inside the <code>setAge()</code> method. Now,{" "}
          <var>age</var> cannot be negative.
        </li>
        <li>
          The getter and setter methods provide read-only or write-only
          access to our class fields. For example,
          <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px] mt-2">
            <code className="text-green-700">{`getName()  // provides read-only access
setName() // provides write-only access`}</code>
          </pre>
        </li>
        <li>
          It helps to decouple components of a system. For example, we can
          encapsulate code into multiple bundles.
          <br />
          <br />
          These decoupled components (bundle) can be developed, tested, and
          debugged independently and concurrently. And, any changes in a
          particular component do not have any effect on other components.
        </li>
        <li>
          We can also achieve data hiding using encapsulation. In the above
          example, if we change the length and breadth variable into private, then
          the access to these fields is restricted.
          <br />
          <br />
          And, they are kept hidden from outer classes. This is called data
          hiding.
        </li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <h2 id="data-hiding" className="text-2xl font-semibold mt-6 mb-2">
        Data Hiding
      </h2>

      <p className="mb-4">
        Data hiding is a way of restricting the access of our data members by
        hiding the implementation details. Encapsulation also provides a way for
        data hiding.
      </p>

      <p className="mb-4">
        We can use access modifiers to achieve data hiding. For example,
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 2: Data hiding using the private specifier
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Person {

  // private field
  private int age;

  // getter method
  public int getAge() {
    return age;
  }

  // setter method
  public void setAge(int age) {
    this.age = age;
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of Person
    Person p1 = new Person();

    // change age using setter
    p1.setAge(24);

    // access age using getter
    System.out.println("My age is " + p1.getAge());
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`My age is 24`}</code>
      </pre>

      <p className="mb-4">
        In the above example, we have a <code>private</code> field <var>age</var>
        . Since it is <code>private</code>, it cannot be accessed from outside
        the class.
      </p>

      <p className="mb-4">
        In order to access <var>age</var>, we have used <code>public</code>{" "}
        methods: <code>getAge()</code> and <code>setAge()</code>. These methods
        are called getter and setter methods.
      </p>

      <p className="mb-4">
        Making <var>age</var> private allowed us to restrict unauthorized access
        from outside the class. This is data hiding.
      </p>

      <p className="mb-4">
        If we try to access the <var>age</var> field from the <var>Main</var>{" "}
        class, we will get an error.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`// error: age has private access in Person
p1.age = 24;`}</code>
      </pre>
    </div>
  );
}