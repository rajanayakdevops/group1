export default function JavaDataTypesContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Data Types (Primitive)</h1>

      <div className="content space-y-4">
        <h2 id="data-type" className="text-2xl font-semibold">
          Java Data Types
        </h2>

        <p>
          As the name suggests, data types specify the type of data that can be
          stored inside{" "}
          <a
            href="/java-programming/variables-literals"
            className="text-blue-600 underline"
          >
            variables in Java
          </a>
          .
        </p>

        <p>
          Java is a statically-typed language. This means that all variables
          must be declared before they can be used.
        </p>

        <pre className="bg-gray-200 p-3 rounded">
          <code>int speed;</code>
        </pre>

        <p>
          Here, <var>speed</var> is a variable, and the data type of the
          variable is <code>int</code>.
        </p>

        <p>
          The <var>int</var> data type determines that the <var>speed</var>{" "}
          variable can only contain integers.
        </p>
        <p>
          There are 8 data types predefined in Java, known as primitive data
          types.
        </p>
        <p className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note:</strong> In addition to primitive data types, there are
          also referenced types (object type).
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          8 Primitive Data Types
        </h2>

        {/* BOOLEAN */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="boolean">
          1. boolean type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>boolean</code> data type has two possible values, either{" "}
            <code>true</code> or <code>false</code>.
          </li>
          <li>
            Default value: <code>false</code>.
          </li>
          <li>
            They are usually used for <strong>true/false</strong> conditions.
          </li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    boolean flag = true;
    System.out.println(flag); // prints true
  }
}`}</code>
        </pre>

        {/* BYTE */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="byte">
          2. byte type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>byte</code> data type can have values from{" "}
            <strong>-128</strong> to <strong>127</strong> (8-bit signed two's
            complement integer).
          </li>
          <li>
            If it's certain that the value of a variable will be within -128 to
            127, then it is used instead of int to save memory.
          </li>
          <li>Default value: 0</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    byte range = 124;
    System.out.println(range); // prints 124
  }
}`}</code>
        </pre>

        {/* SHORT */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="short">
          3. short type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>short</code> data type in Java can have values from{" "}
            <strong>-32768</strong> to <strong>32767</strong> (16-bit signed
            two's complement integer).
          </li>
          <li>
            If it's certain that the value of a variable will be within -32768
            and 32767, then it is used instead of other integer data types (
            <code>int</code>, <code>long</code>).
          </li>
          <li>Default value: 0</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    short temperature = -200;
    System.out.println(temperature); // prints -200
  }
}`}</code>
        </pre>

        {/* INT */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="int">
          4. int type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>int</code> data type can have values from{" "}
            <strong>
              -2<sup>31</sup>
            </strong>{" "}
            to{" "}
            <strong>
              2<sup>31</sup>-1
            </strong>{" "}
            (32-bit signed two's complement integer).
          </li>
          <li>
            If you are using Java 8 or later, you can use an unsigned 32-bit
            integer. This will have a minimum value of 0 and a maximum value of
            2<sup>32</sup>-1. To learn more, visit{" "}
            <a
              href="http://stackoverflow.com/questions/25556017/how-to-use-the-unsigned-integer-in-java-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to use the unsigned integer in Java 8?
            </a>
          </li>
          <li>Default value: 0</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    int range = -4250000;
    System.out.println(range); // print -4250000
  }
}`}</code>
        </pre>

        {/* LONG */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="long">
          5. long type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>long</code> data type can have values from{" "}
            <strong>
              -2<sup>63</sup>
            </strong>{" "}
            to{" "}
            <strong>
              2<sup>63</sup>-1
            </strong>{" "}
            (64-bit signed two's complement integer).
          </li>
          <li>
            If you are using Java 8 or later, you can use an unsigned 64-bit
            integer with a minimum value of <strong>0</strong> and a maximum
            value of{" "}
            <strong>
              2<sup>64</sup>-1
            </strong>
            .
          </li>
          <li>Default value: 0</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class LongExample {
  public static void main(String[] args) {
    long range = -42332200000L;
    System.out.println(range); // prints -42332200000
  }
}`}</code>
        </pre>
        <p>
          Notice, the use of <code>L</code> at the end of{" "}
          <code>-42332200000</code>. This represents that it's an integer of the{" "}
          <code>long</code> type.
        </p>

        {/* DOUBLE */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="double">
          6. double type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>double</code> data type is a double-precision 64-bit
            floating-point.
          </li>
          <li>It should never be used for precise values such as currency.</li>
          <li>Default value: 0.0 (0.0d)</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    double number = -42.3;
    System.out.println(number); // prints -42.3
  }
}`}</code>
        </pre>

        {/* FLOAT */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="float">
          7. float type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <code>float</code> data type is a single-precision 32-bit
            floating-point. Learn more about{" "}
            <a
              href="http://stackoverflow.com/questions/801117/whats-the-difference-between-a-single-precision-and-double-precision-floating-p"
              target="_blank"
              rel="noopener noreferrer"
            >
              single-precision and double-precision floating-point
            </a>{" "}
            if you are interested.
          </li>
          <li>It should never be used for precise values such as currency.</li>
          <li>Default value: 0.0 (0.0f)</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    float number = -42.3f;
    System.out.println(number); // prints -42.3
  }
}`}</code>
        </pre>
        <p>
          Notice that we have used <code>-42.3f</code> instead of{" "}
          <code>-42.3</code> in the above program. It's because{" "}
          <code>-42.3</code> is a <code>double</code> literal.
        </p>
        <p>
          To tell the compiler to treat <code>-42.3</code> as <code>float</code>{" "}
          rather than <code>double</code>, you need to use <var>f</var> or{" "}
          <var>F</var>.
        </p>

        {/* CHAR */}
        <h3 className="text-xl font-semibold mt-4 mb-2" id="char">
          8. char type
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>It's a 16-bit Unicode character.</li>
          <li>
            The minimum value of the char data type is <code>'\u0000'</code> (0)
            and the maximum value of the is <code>'\uffff'</code>.
          </li>
          <li>
            Default value: <code>'\u0000'</code>
          </li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    char letter = '\u0051';
    System.out.println(letter); // prints Q

    char letter1 = '9';
    System.out.println(letter1); // prints 9

    char letter2 = 65;
    System.out.println(letter2); // prints A
  }
}`}</code>
        </pre>
        <p>
          Here, the Unicode value of <code>Q</code> is <strong>\u0051</strong>.
          Hence, we get <code>Q</code> as the output.
        </p>
        <p>
          Here, we have assigned <code>9</code> as a character (specified by
          single quotes) to the <var>letter1</var> variable. However, the{" "}
          <var>letter2</var> variable is assigned <code>65</code> as an integer
          number (no single quotes). Hence, <code>A</code> is printed to the
          output. Java treats characters as an integer and the ASCII value of{" "}
          <code>A</code> is 65. To learn more about ASCII, visit{" "}
          <a
            href="https://www.ascii-code.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is ASCII Code?
          </a>
          .
        </p>

        {/* STRING */}
        <h3 className="text-xl font-semibold mt-4 mb-2">String type</h3>
        <p>
          Java also provides support for character strings via{" "}
          <code>java.lang.String</code> class. Strings in Java are not primitive
          types. Instead, they are objects.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          <code className="text-green-700">{`String myString = "Java Programming";`}</code>
        </pre>
        <p>
          Here, <var>myString</var> is an object of the <code>String</code>{" "}
          class. To learn more, visit{" "}
          <a
            href="/java-programming/string"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java Strings
          </a>
          .
        </p>

        <hr className="my-6 border-gray-300" />
        <p>
          <strong>Also Read:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a
              href="/java-programming/examples/primitive-types-wrapper-objects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Program to convert primitive types to objects and vice versa
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
