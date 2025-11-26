export default function JavaVariablesPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-4">Java Variables and Literals</h1>

      <p className="mb-4">
        In the previous tutorial you learnt about{" "}
        <a href="/java-programming/comments" className="text-blue-600 underline">
          Java comments
        </a>
        . Now, let's learn about variables and literals in Java.
      </p>

      {/* ======================= VARIABLES ======================= */}

      <h2 id="variables" className="text-2xl font-semibold mt-6 mb-2">
        Java Variables
      </h2>

      <p className="mb-4">
        A variable is a location in memory (storage area) to hold data.
      </p>

      <p className="mb-4">
        To indicate the storage area, each variable should be given a unique
        name (identifier). Learn more about{" "}
        <a
          href="/java-programming/keywords-identifiers"
          className="text-blue-600 underline"
        >
          Java identifiers
        </a>
        .
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="create-variables" className="text-xl font-semibold mb-2">
        Create Variables in Java
      </h3>

      <p className="mb-4">Here's how we create a variable in Java:</p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">int speedLimit = 80;</code>
      </pre>

      <p className="mb-4">
        Here, <var>speedLimit</var> is a variable of <var>int</var> data type and
        we have assigned value <strong>80</strong> to it.
      </p>

      <p className="mb-4">
        The int data type suggests that the variable can only hold integers. To
        learn more, visit{" "}
        <a
          href="/java-programming/variables-primitive-data-types"
          className="text-blue-600 underline"
        >
          Java data types
        </a>
        .
      </p>

      <p className="mb-4">
        In the example, we have assigned value to the variable during
        declaration. However, it's not mandatory.
      </p>

      <p className="mb-2">You can declare variables and assign values separately:</p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`int speedLimit;
speedLimit = 80;`}</code>
      </pre>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400 mt-4">
        <strong>Note:</strong> Java is a statically-typed language. It means that
        all variables must be declared before they can be used.
      </p>

      <hr className="my-6 border-gray-300" />

      <h3 id="change-value" className="text-xl font-semibold mb-2">
        Change values of variables
      </h3>

      <p className="mb-4">
        The value of a variable can be changed in the program, hence the name{" "}
        <strong>variable</strong>. For example:
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`int speedLimit = 80;
... .. ...
speedLimit = 90;`}</code>
      </pre>

      <p className="mb-4">
        Here, initially the value of <var>speedLimit</var> is{" "}
        <strong>80</strong>. Later, we changed it to <strong>90</strong>.
      </p>

      <p className="mb-4">
        However, we cannot change the data type of a variable in Java within the
        same scope.
      </p>

      <p className="font-semibold mb-4">What is the variable scope?</p>

      <p className="mb-4">
        Don't worry about it for now. Just remember that we can't do something
        like this:
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-red-600">{`int speedLimit = 80;
... .. ...
float speedLimit;`}</code>
      </pre>

      <p className="mt-4">
        To learn more, visit:{" "}
        <a
          href="https://stackoverflow.com/questions/27092245/can-i-change-declaration-type-for-a-variable-in-java"
          className="text-blue-600 underline"
        >
          Can I change declaration type for a variable in Java?
        </a>
      </p>

      {/* ======================= LITERALS ======================= */}

      <hr className="my-6 border-gray-300" />

      <h2 id="literals" className="text-2xl font-semibold mt-6 mb-2">
        Java Literals
      </h2>

      {/* ========== INTEGER LITERALS ========== */}
      <h3 id="integer" className="text-xl font-semibold mt-4 mb-2">
        Integer Literals
      </h3>

      <p className="mb-4">
        Integer literals are numeric values without any fractional or exponential
        part. There are 4 types of integer literals:
      </p>

      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>binary (base 2)</li>
        <li>decimal (base 10)</li>
        <li>octal (base 8)</li>
        <li>hexadecimal (base 16)</li>
      </ol>

      <p className="mb-4">For example:</p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`// binary
int binaryNumber = 0b10010;
// octal 
int octalNumber = 027;

// decimal
int decNumber = 34;

// hexadecimal 
int hexNumber = 0x2F; // 0x represents hexadecimal
// binary
int binNumber = 0b10010; // 0b represents binary`}</code>
      </pre>

      <p className="mb-4">
        In Java, binary starts with <strong>0b</strong>, octal starts with{" "}
        <strong>0</strong>, and hexadecimal starts with <strong>0x</strong>.
      </p>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400">
        <strong>Note:</strong> Integer literals initialize variables of{" "}
        <code>byte</code>, <code>short</code>, <code>int</code>, and{" "}
        <code>long</code>.
      </p>

      <hr className="my-6 border-gray-300" />

      {/* ========== FLOATING POINT LITERALS ========== */}
      <h3 id="floating" className="text-xl font-semibold mb-2">
        Floating-point Literals
      </h3>

      <p className="mb-4">
        Floating-point literals are numeric values that have a fractional or
        exponential form.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`class Main {
  public static void main(String[] args) {

    double myDouble = 3.4;
    float myFloat = 3.4F;

    // 3.445 * 10^2
    double myDoubleScientific = 3.445e2;

    System.out.println(myDouble);         // prints 3.4
    System.out.println(myFloat);          // prints 3.4
    System.out.println(myDoubleScientific); // prints 344.5
  }
}`}</code>
      </pre>

      <p className="bg-yellow-200 p-4 rounded-lg border border-yellow-400">
        <strong>Note:</strong> These literals are used to initialize{" "}
        <code>float</code> and <code>double</code> variables.
      </p>

      <hr className="my-6 border-gray-300" />

      {/* ========== CHARACTER LITERALS ========== */}
      <h3 id="character" className="text-xl font-semibold mb-2">
        Character Literals
      </h3>

      <p className="mb-4">
        Character literals are unicode characters enclosed inside single quotes.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`char letter = 'a';`}</code>
      </pre>

      <p className="mb-4">
        We can also use escape sequences such as <strong>\b</strong>,{" "}
        <strong>\t</strong>, <strong>\n</strong>, etc.
      </p>

      <hr className="my-6 border-gray-300" />

      {/* ========== STRING LITERALS ========== */}
      <h3 id="string" className="text-xl font-semibold mb-2">
        String Literals
      </h3>

      <p className="mb-4">
        A string literal is a sequence of characters enclosed inside double
        quotes.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`String str1 = "Java Programming";
String str2 = "Programiz";`}</code>
      </pre>

      <hr className="my-6 border-gray-300" />

      {/* ========== BOOLEAN LITERALS ========== */}
      <h3 id="boolean" className="text-xl font-semibold mb-2">
        Boolean Literals
      </h3>

      <p className="mb-4">
        Boolean literals initialize boolean data types. They store either{" "}
        <strong>true</strong> or <strong>false</strong>.
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        <code className="text-green-700">{`boolean flag1 = false;
boolean flag2 = true;`}</code>
      </pre>
    </div>
  );
}
