import React from "react";

export default function JavaThisKeyword() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java <code>this</code> Keyword
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, the <code>this</code> keyword is used to refer to the current <a href="/docs/java/topics/oop1/classes" className="text-blue-600 ">object</a> inside a <a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">method</a> or a <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">constructor</a>. It is commonly used to resolve ambiguity between instance variables and parameters, call constructors, or pass the current object as an argument.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        1. Reference to Current Object
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
    int instVar;

    Main(int instVar){
        this.instVar = instVar;
        System.out.println("this reference = " + this);
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("object reference = " + obj);
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Output shows that <code>this</code> refers to the current object.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        2. Resolving Ambiguity Between Parameters and Instance Variables
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
    int age;
    Main(int age){
        this.age = age; // resolves ambiguity
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("obj.age = " + obj.age);
    }
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        3. Using <code>this</code> in Getters and Setters
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Main {
    String name;

    void setName(String name) {
        this.name = name;
    }

    String getName(){
        return this.name;
    }

    public static void main(String[] args) {
        Main obj = new Main();
        obj.setName("Toshiba");
        System.out.println("obj.name: " + obj.getName());
    }
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        4. Using <code>this()</code> to Call Another Constructor
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class Complex {
    private int a, b;

    private Complex(int i, int j){
        this.a = i;
        this.b = j;
    }

    private Complex(int i){
        this(i, i); // call constructor with 2 parameters
    }

    private Complex(){
        this(0); // call constructor with single parameter
    }

    @Override
    public String toString(){
        return this.a + " + " + this.b + "i";
    }

    public static void main(String[] args) {
        Complex c1 = new Complex(2, 3);
        Complex c2 = new Complex(3);
        Complex c3 = new Complex();

        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Using <code>this()</code> reduces duplicate code by calling one constructor from another.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        5. Passing <code>this</code> as an Argument
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class ThisExample {
    int x, y;

    ThisExample(int x, int y) {
        this.x = x;
        this.y = y;
        System.out.println("Before passing this:");
        System.out.println("x = " + this.x + ", y = " + this.y);

        add(this);

        System.out.println("After passing this:");
        System.out.println("x = " + this.x + ", y = " + this.y);
    }

    void add(ThisExample o){
        o.x += 2;
        o.y += 2;
    }
}

class Main {
    public static void main(String[] args) {
        ThisExample obj = new ThisExample(1, -2);
    }
}`}
      </pre>
      <p className="text-gray-700 mb-4">
        Passing <code>this</code> allows the method to modify the current object's state.
      </p>

      <p className="text-gray-700 mt-6">
        The <code>this</code> keyword is powerful in Java and is widely used in constructors, setters/getters, and when passing the current object to methods.
      </p>
    </div>
  );
}
