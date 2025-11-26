export default function JavaSuperKeywordPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java super</h1>

      <p className="mb-4">
        The <code>super</code> keyword in Java is used in subclasses to access
        superclass members (attributes, constructors and methods).
      </p>

      <p className="mb-4">
        Before we learn about the <code>super</code> keyword, make sure to know
        about Java inheritance.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 id="uses" className="text-2xl font-semibold mt-6 mb-2">
        Uses of super keyword
      </h2>

      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>
          To call methods of the superclass that is overridden in the
          subclass.
        </li>
        <li>
          To access attributes (fields) of the superclass if both superclass
          and subclass have attributes with the same name.
        </li>
        <li>
          To explicitly call superclass no-arg (default) or parameterized
          constructor from the subclass constructor.
        </li>
      </ol>

      <p className="mb-4">Let's understand each of these uses.</p>

      <hr className="my-6 border-gray-300" />

      <h2 id="access-superclass-methods" className="text-2xl font-semibold mt-6 mb-2">
        1. Access Overridden Methods of the superclass
      </h2>

      <p className="mb-4">
        If methods with the same name are defined in both superclass and
        subclass, the method in the subclass overrides the method in the
        superclass. This is called method overriding.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 1: Method overriding
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {

  // overridden method
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // overriding method
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){
    display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am a dog`}</code>
      </pre>

      <p className="mb-4">
        In this example, by making an object <var>dog1</var> of <var>Dog</var>{" "}
        class, we can call its method <var>printMessage()</var> which then
        executes the <code>display()</code> statement.
      </p>

      <p className="mb-4">
        Since <code>display()</code> is defined in both the classes, the method
        of subclass <var>Dog</var> overrides the method of superclass{" "}
        <var>Animal</var>. Hence, the <code>display()</code> of the subclass is
        called.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/java-overriding-example.png"
          title="Java overriding example"
          alt="Java overriding example"
          width="500"
          height="391"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Java overriding example
        </figcaption>
      </figure>

      <p className="font-bold mb-4">
        What if the overridden method of the superclass has to be called?
      </p>

      <p className="mb-4">
        We use <code>super.display()</code> if the overridden method{" "}
        <code>display()</code> of superclass <var>Animal</var> needs to be
        called.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 2: super to Call Superclass Method
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {

  // overridden method
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // overriding method
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){

    // this calls overriding method
    display();

    // this calls overridden method
    super.display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am a dog
I am an animal`}</code>
      </pre>

      <p className="mb-4">Here, how the above program works.</p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/call-superclass-method.png"
          title="Working of super in Java"
          alt="Working of super in Java"
          width="500"
          height="393"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Working of super in Java
        </figcaption>
      </figure>

      <hr className="my-6 border-gray-300" />

      <h2 id="access-superclass-attributes" className="text-2xl font-semibold mt-6 mb-2">
        2. Access Attributes of the Superclass
      </h2>

      <p className="mb-4">
        The superclass and subclass can have attributes with the same name. We
        use the <code>super</code> keyword to access the attribute of the
        superclass.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Example 3: Access superclass attribute
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {
  protected String type="animal";
}

class Dog extends Animal {
  public String type="mammal";

  public void printType() {
    System.out.println("I am a " + type);
    System.out.println("I am an " + super.type);
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printType();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am a mammal
I am an animal`}</code>
      </pre>

      <p className="mb-4">
        In this example, we have defined the same instance field <var>type</var>{" "}
        in both the superclass <var>Animal</var> and the subclass <var>Dog</var>
        .
      </p>

      <p className="mb-4">
        We then created an object <var>dog1</var> of the <var>Dog</var> class.
        Then, the <code>printType()</code> method is called using this object.
      </p>

      <p className="mb-2">Inside the <code>printType()</code> function,</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <var>type</var> refers to the attribute of the subclass <var>Dog</var>
          .
        </li>
        <li>
          <var>super.type</var> refers to the attribute of the superclass{" "}
          <var>Animal</var>.
        </li>
      </ul>

      <p className="mb-4">
        Hence, <code>System.out.println("I am a " + type);</code> prints{" "}
        <samp>I am a mammal</samp>. And,{" "}
        <code>System.out.println("I am an " + super.type);</code> prints{" "}
        <samp>I am an animal</samp>.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Use of super() to access superclass constructor
      </h2>

      <p className="mb-4">
        As we know, when an object of a class is created, its default constructor
        is automatically called.
      </p>

      <p className="mb-4">
        To explicitly call the superclass constructor from the subclass
        constructor, we use <code>super()</code>. It's a special form of the{" "}
        <code>super</code> keyword.
      </p>

      <p className="mb-4">
        <code>super()</code> can be used only inside the subclass constructor and
        must be the **first statement**.
      </p>

      <h3 className="text-xl font-semibold mb-2">Example 4: Use of super()</h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {

  // default or no-arg constructor of class Animal
  Animal() {
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // default or no-arg constructor of class Dog
  Dog() {

    // calling default constructor of the superclass
    super();

    System.out.println("I am a dog");
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`I am an animal
I am a dog`}</code>
      </pre>

      <p className="mb-4">
        Here, when an object <var>dog1</var> of <var>Dog</var> class is created,
        it automatically calls the default or no-arg constructor of that class.
      </p>

      <p className="mb-4">
        Inside the subclass constructor, the <code>super()</code> statement calls
        the constructor of the superclass and executes the statements inside it.
        Hence, we get the output <samp>I am an animal</samp>.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/super%28%29-example.png"
          title="Working of super() in Java"
          alt="Working of super() in Java"
          width="450"
          height="422"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Working of super() in Java
        </figcaption>
      </figure>

      <p className="mb-4">
        The flow of the program then returns back to the subclass constructor and
        executes the remaining statements. Thus, <samp>I am a dog</samp> will be
        printed.
      </p>

      <p className="mb-4">
        However, using <code>super()</code> is not compulsory. Even if{" "}
        <code>super()</code> is not used in the subclass constructor, the
        compiler implicitly calls the default constructor of the superclass.
      </p>

      <p className="font-bold mb-4">
        So, why use redundant code if the compiler automatically invokes super()?
      </p>

      <p className="mb-4">
        It is required if the **parameterized constructor (a constructor that
        takes arguments)** of the superclass has to be called from the subclass
        constructor.
      </p>

      <p className="mb-4">
        The parameterized <code>super()</code> must always be the **first
        statement** in the body of the constructor of the subclass, otherwise, we
        get a compilation error.
      </p>

      <h3 id="access-superclass-constructors" className="text-xl font-semibold mb-2">
        Example 5: Call Parameterized Constructor Using super()
      </h3>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto max-h-[600px]">
        <code className="text-green-700">{`class Animal {

  // default or no-arg constructor
  Animal() {
    System.out.println("I am an animal");
  }

  // parameterized constructor
  Animal(String type) {
    System.out.println("Type: "+type);
  }
}

class Dog extends Animal {

  // default constructor
  Dog() {

    // calling parameterized constructor of the superclass
    super("Animal");

    System.out.println("I am a dog");
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
  }
}`}</code>
      </pre>

      <p className="font-bold mt-4">Output</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        <code>{`Type: Animal
I am a dog`}</code>
      </pre>

      <p className="mb-4">
        The compiler can automatically call the no-arg constructor. However, it
        cannot call parameterized constructors.
      </p>

      <p className="mb-4">
        If a parameterized constructor has to be called, we need to explicitly
        define it in the subclass constructor.
      </p>

      <figure className="my-4">
        <img
          src="/sites/tutorial2program/files/parameterized-super-example.png"
          title="Working of super in case of parameterized constructor."
          alt="Working of super in case of parameterized constructor."
          width="450"
          height="375"
          className="mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Working of super in case of parameterized constructor.
        </figcaption>
      </figure>

      <p className="mb-4">
        Note that in the above example, we explicitly called the parameterized
        constructor <code>super("Animal")</code>. The compiler does not call the
        default constructor of the superclass in this case.
      </p>
    </div>
  );
}