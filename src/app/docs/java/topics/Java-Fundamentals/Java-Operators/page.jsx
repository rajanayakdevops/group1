export default function JavaOperatorsContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Operators</h1>
      <div className="content space-y-4">
        <p>
          Operators are symbols that perform operations on variables and values. For example, <code>+</code> is an operator used for addition, while <code>*</code> is also an operator used for multiplication.
        </p>

        <p>Operators in Java can be classified into 6 types:</p>
        <ol className="list-decimal pl-6 mb-2">
          <li>Arithmetic Operators</li>
          <li>Assignment Operators</li>
          <li>Relational Operators</li>
          <li>Logical Operators</li>
          <li>Unary Operators</li>
          <li>Bitwise Operators</li>
        </ol>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Java Arithmetic Operators</h2>
        <p>Arithmetic operators are used to perform arithmetic operations on variables and data. For example,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>a + b;</code></pre>
        <p>
          Here, the <code>+</code> operator is used to add two variables <var>a</var> and <var>b</var>. Similarly, there are various other arithmetic operators in Java.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border table-auto">
            <tbody>
              <tr>
                <td className="p-2 border">Operator</td>
                <td className="p-2 border">Operation</td>
              </tr>
              <tr>
                <td className="p-2 border"><code>+</code></td>
                <td className="p-2 border">Addition</td>
              </tr>
              <tr>
                <td className="p-2 border"><code>-</code></td>
                <td className="p-2 border">Subtraction</td>
              </tr>
              <tr>
                <td className="p-2 border"><code>*</code></td>
                <td className="p-2 border">Multiplication</td>
              </tr>
              <tr>
                <td className="p-2 border"><code>/</code></td>
                <td className="p-2 border">Division</td>
              </tr>
              <tr>
                <td className="p-2 border"><code>%</code></td>
                <td className="p-2 border">Modulo Operation (Remainder after division)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">Example 1: Arithmetic Operators</h3>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    // declare variables
    int a = 12, b = 5;

    // addition operator
    System.out.println("a + b = " + (a + b));

    // subtraction operator
    System.out.println("a - b = " + (a - b));

    // multiplication operator
    System.out.println("a * b = " + (a * b));

    // division operator
    System.out.println("a / b = " + (a / b));

    // modulo operator
    System.out.println("a % b = " + (a % b));
  }
}`}</code>
        </pre>

        <p className="font-bold">Output</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>a + b = 17
a - b = 7
a * b = 60
a / b = 2
a % b = 2</code></pre>

        <p>
          In the above example, we have used <code>+</code>, <code>-</code>, and <code>*</code> operators to compute addition, subtraction, and multiplication operations.
        </p>

        <p><strong>/ Division Operator</strong></p>
        <p>Note the operation, <code>a / b</code> in our program. The <code>/</code> operator is the division operator.</p>
        <p>If we use the division operator with two integers, then the resulting quotient will also be an integer. And, if one of the operands is a floating-point number, we will get the result will also be in floating-point.</p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`In Java,

(9 / 2) is 4
(9.0 / 2) is 4.5
(9 / 2.0) is 4.5
(9.0 / 2.0) is 4.5`}</code></pre>

        <p><strong>% Modulo Operator</strong></p>
        <p>The modulo operator <code>%</code> computes the remainder. When <code>a = 7</code> is divided by <code>b = 4</code>, the remainder is <strong>3</strong>.</p>

        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note</strong>: The <code>%</code> operator is mainly used with integers.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Java Assignment Operators</h2>
        <p>Assignment operators are used in Java to assign values to variables. For example,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`int age;
age = 5;`}</code></pre>

        <p>Here, <code>=</code> is the assignment operator. It assigns the value on its right to the variable on its left. That is, <strong>5</strong> is assigned to the variable <var>age</var>.</p>

        <p>Let's see some more assignment operators available in Java.</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border table-auto">
            <thead>
              <tr>
                <th className="p-2 border">Operator</th>
                <th className="p-2 border">Example</th>
                <th className="p-2 border">Equivalent to</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border"><code>=</code></td><td className="p-2 border"><code>a = b;</code></td><td className="p-2 border"><code>a = b;</code></td></tr>
              <tr><td className="p-2 border"><code>+=</code></td><td className="p-2 border"><code>a += b;</code></td><td className="p-2 border"><code>a = a + b;</code></td></tr>
              <tr><td className="p-2 border"><code>-=</code></td><td className="p-2 border"><code>a -= b;</code></td><td className="p-2 border"><code>a = a - b;</code></td></tr>
              <tr><td className="p-2 border"><code>*=</code></td><td className="p-2 border"><code>a *= b;</code></td><td className="p-2 border"><code>a = a * b;</code></td></tr>
              <tr><td className="p-2 border"><code>/=</code></td><td className="p-2 border"><code>a /= b;</code></td><td className="p-2 border"><code>a = a / b;</code></td></tr>
              <tr><td className="p-2 border"><code>%=</code></td><td className="p-2 border"><code>a %= b;</code></td><td className="p-2 border"><code>a = a % b;</code></td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">Example 2: Assignment Operators</h3>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    // create variables
    int a = 4;
    int var;

    // assign value using =
    var = a;
    System.out.println("var using =: " + var);

    // assign value using +=
    var += a;
    System.out.println("var using +=: " + var);

    // assign value using *=
    var *= a;
    System.out.println("var using *=: " + var);
  }
}`}</code>
        </pre>

        <p className="font-bold">Output</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto">
          <code>var using =: 4
var using +=: 8
var using *=: 32</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Java Relational Operators</h2>
        <p>Relational operators are used to check the relationship between two operands. For example,</p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`// check if a is less than b
a < b;`}</code></pre>

        <p>Here, <code>&lt;</code> operator is the relational operator. It checks if <var>a</var> is less than <var>b</var> or not.</p>
        <p>It returns either <code>true</code> or <code>false</code>.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border table-auto">
            <thead>
              <tr>
                <th className="p-2 border">Operator</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border"><code>==</code></td><td className="p-2 border">Is Equal To</td><td className="p-2 border"><code>3 == 5</code> returns <strong>false</strong></td></tr>
              <tr><td className="p-2 border"><code>!=</code></td><td className="p-2 border">Not Equal To</td><td className="p-2 border"><code>3 != 5</code> returns <strong>true</strong></td></tr>
              <tr><td className="p-2 border"><code>&gt;</code></td><td className="p-2 border">Greater Than</td><td className="p-2 border"><code>3 &gt; 5</code> returns <strong>false</strong></td></tr>
              <tr><td className="p-2 border"><code>&lt;</code></td><td className="p-2 border">Less Than</td><td className="p-2 border"><code>3 &lt; 5</code> returns <strong>true</strong></td></tr>
              <tr><td className="p-2 border"><code>&gt;=</code></td><td className="p-2 border">Greater Than or Equal To</td><td className="p-2 border"><code>3 &gt;= 5</code> returns <strong>false</strong></td></tr>
              <tr><td className="p-2 border"><code>&lt;=</code></td><td className="p-2 border">Less Than or Equal To</td><td className="p-2 border"><code>3 &lt;= 5</code> returns <strong>true</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">Example 3: Relational Operators</h3>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    // create variables
    int a = 7, b = 11;

    // value of a and b
    System.out.println("a is " + a + " and b is " + b);

    // == operator
    System.out.println(a == b);  // false

    // != operator
    System.out.println(a != b);  // true

    // > operator
    System.out.println(a > b);  // false

    // < operator
    System.out.println(a < b);  // true

    // >= operator
    System.out.println(a >= b);  // false

    // <= operator
    System.out.println(a <= b);  // true
  }
}`}</code>
        </pre>

        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note</strong>: Relational operators are used in decision making and loops.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Java Logical Operators</h2>
        <p>Logical operators are used to check whether an expression is <code>true</code> or <code>false</code>. They are used in decision making.</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border table-auto">
            <thead>
              <tr>
                <th className="p-2 border">Operator</th>
                <th className="p-2 border">Example</th>
                <th className="p-2 border">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border"><code>&amp;&amp;</code> (Logical AND)</td>
                <td className="p-2 border">expression1 <strong>&amp;&amp;</strong> expression2</td>
                <td className="p-2 border"><code>true</code> only if both <var>expression1</var> and <var>expression2</var> are <code>true</code></td>
              </tr>
              <tr>
                <td className="p-2 border"><code>||</code> (Logical OR)</td>
                <td className="p-2 border">expression1 <strong>||</strong> expression2</td>
                <td className="p-2 border"><code>true</code> if either <var>expression1</var> or <var>expression2</var> is <code>true</code></td>
              </tr>
              <tr>
                <td className="p-2 border"><code>!</code> (Logical NOT)</td>
                <td className="p-2 border"><strong>!</strong>expression</td>
                <td className="p-2 border"><code>true</code> if <var>expression</var> is <code>false</code> and vice versa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">Example 4: Logical Operators</h3>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {

    // && operator
    System.out.println((5 > 3) && (8 > 5));  // true
    System.out.println((5 > 3) && (8 < 5));  // false

    // || operator
    System.out.println((5 < 3) || (8 > 5));  // true
    System.out.println((5 > 3) || (8 < 5));  // true
    System.out.println((5 < 3) || (8 < 5));  // false

    // ! operator
    System.out.println(!(5 == 3));  // true
    System.out.println(!(5 > 3));   // false
  }
}`}</code>
        </pre>

        <p><strong>Working of Program</strong></p>
        <ul className="list-disc list-inside">
          <li><code>(5 &gt; 3) &amp;&amp; (8 &gt; 5)</code> returns <code>true</code> because both <code>(5 &gt; 3)</code> and <code>(8 &gt; 5)</code> are <code>true</code>.</li>
          <li><code>(5 &gt; 3) &amp;&amp; (8 &lt; 5)</code> returns <code>false</code> because the expression <code>(8 &lt; 5)</code> is <code>false</code>.</li>
          <li><code>(5 &lt; 3) || (8 &gt; 5)</code> returns <code>true</code> because the expression <code>(8 &gt; 5)</code> is <code>true</code>.</li>
          <li><code>(5 &gt; 3) || (8 &lt; 5)</code> returns <code>true</code> because the expression <code>(5 &gt; 3)</code> is <code>true</code>.</li>
          <li><code>(5 &lt; 3) || (8 &lt; 5)</code> returns <code>false</code> because both <code>(5 &lt; 3)</code> and <code>(8 &lt; 5)</code> are <code>false</code>.</li>
          <li><code>!(5 == 3)</code> returns true because <code>5 == 3</code> is <code>false</code>.</li>
          <li><code>!(5 &gt; 3)</code> returns false because <code>5 &gt; 3</code> is <code>true</code>.</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Java Unary Operators</h2>
        <p>Unary operators are used with only one operand. For example, <code>++</code> is a unary operator that increases the value of a variable by <strong>1</strong>. That is, <code>++5</code> will return <strong>6</strong>.</p>
        <p>Different types of unary operators are:</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border table-auto">
            <tbody>
              <tr><th className="p-2 border">Operator</th><th className="p-2 border">Meaning</th></tr>
              <tr><td className="p-2 border"><code>+</code></td><td className="p-2 border"><strong>Unary plus</strong>: not necessary to use since numbers are positive without using it</td></tr>
              <tr><td className="p-2 border"><code>-</code></td><td className="p-2 border"><strong>Unary minus</strong>: inverts the sign of an expression</td></tr>
              <tr><td className="p-2 border"><code>++</code></td><td className="p-2 border"><strong>Increment operator</strong>: increments value by 1</td></tr>
              <tr><td className="p-2 border"><code>--</code></td><td className="p-2 border"><strong>Decrement operator</strong>: decrements value by 1</td></tr>
              <tr><td className="p-2 border"><code>!</code></td><td className="p-2 border"><strong>Logical complement operator</strong>: inverts the value of a boolean</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Increment and Decrement Operators</h2>
        <p>Java also provides increment and decrement operators: <code>++</code> and <code>--</code> respectively. <code>++</code> increases the value of the operand by <strong>1</strong>, while <code>--</code> decrease it by <strong>1</strong>. For example,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code className="java hljs">{`int num = 5;

// increase num by 1
++num;`}</code></pre>
        <p>Here, the value of <var>num</var> gets increased to <strong>6</strong> from its initial value of <strong>5</strong>.</p>

        <h3 className="font-semibold">Example 5: Increment and Decrement Operators</h3>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="text-green-700">{`class Main {
  public static void main(String[] args) {
    // declare variables
    int a = 12, b = 12;
    int result1, result2;

    // original value
    System.out.println("Value of a: " + a);

    // increment operator
    result1 = ++a;
    System.out.println("After increment: " + result1);

    System.out.println("Value of b: " + b);

    // decrement operator
    result2 = --b;
    System.out.println("After decrement: " + result2);
  }
}`}</code>
        </pre>

        <p className="font-bold">Output</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto">
          <code>
            Value of a: 12{'\n'}
            After increment: 13{'\n'}
            Value of b: 12{'\n'}
            After decrement: 11
          </code>
        </pre>

        <p>In the above program, we have used the ++ and -- operator as <strong>prefixes (++a, --b)</strong>. We can also use these operators as <strong>postfix (a++, b++)</strong>.</p>
        <p>There is a slight difference when these operators are used as prefix versus when they are used as a postfix.</p>
        <p>To learn more about these operators, visit <a href="/article/increment-decrement-operator-difference-prefix-postfix">increment and decrement operators</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Java Bitwise Operators</h2>
        <p>Bitwise operators in Java are used to perform operations on individual bits. For example,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code className="java hljs">{`Bitwise complement Operation of 35

35 = 00100011 (In Binary)

~ 00100011 
  ________
   11011100  = 220 (In decimal)`}</code></pre>
        <p>Here, <code>~</code> is a bitwise operator. It inverts the value of each bit (<strong>0</strong> to <strong>1</strong> and <strong>1</strong> to <strong>0</strong>).</p>

        <p>The various bitwise operators present in Java are:</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border table-auto">
            <tbody>
              <tr><th className="p-2 border">Operator</th><th className="p-2 border">Description</th></tr>
              <tr><td className="p-2 border"><code>~</code></td><td className="p-2 border">Bitwise Complement</td></tr>
              <tr><td className="p-2 border"><code>&lt;&lt;</code></td><td className="p-2 border">Left Shift</td></tr>
              <tr><td className="p-2 border"><code>&gt;&gt;</code></td><td className="p-2 border">Right Shift</td></tr>
              <tr><td className="p-2 border"><code>&gt;&gt;&gt;</code></td><td className="p-2 border">Unsigned Right Shift</td></tr>
              <tr><td className="p-2 border"><code>&amp;</code></td><td className="p-2 border">Bitwise AND</td></tr>
              <tr><td className="p-2 border"><code>^</code></td><td className="p-2 border">Bitwise exclusive OR</td></tr>
            </tbody>
          </table>
        </div>
        <p>These operators are not generally used in Java. To learn more, visit <a href="/java-programming/bitwise-operators">Java Bitwise and Bit Shift Operators</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Other operators</h2>
        <p>Besides these operators, there are other additional operators in Java.</p>

        <h3 className="text-xl font-semibold" id="instanceof">Java instanceof Operator</h3>
        <p>The <code>instanceof</code> operator checks whether an object is an instanceof a particular class. For example,</p>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto"><code className="java hljs">{`class Main {
  public static void main(String[] args) {

    String str = "Programiz";
    boolean result;

    // checks if str is an instance of
    // the String class
    result = str instanceof String;
    System.out.println("Is str an object of String? " + result);
  }
}`}</code></pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>Is str an object of String? true</code></pre>

        <p>Here, <var>str</var> is an instance of the <code>String</code> class. Hence, the <code>instanceof</code> operator returns <code>true</code>. To learn more, visit <a href="/java-programming/instanceof">Java instanceof</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-xl font-semibold" id="ternary">Java Ternary Operator</h3>
        <p>The ternary operator (conditional operator) is shorthand for the <code>if-then-else</code> statement. For example,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>variable = Expression ? expression1 : expression2</code></pre>
        <p>Here's how it works.</p>
        <ul className="list-disc list-inside">
          <li>If the <code>Expression</code> is <code>true</code>, <code>expression1</code> is assigned to the <var>variable</var>.</li>
          <li>If the <code>Expression</code> is <code>false</code>, <code>expression2</code> is assigned to the <var>variable</var>.</li>
        </ul>
        <p>Let's see an example of a ternary operator.</p>
        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto"><code className="java hljs">{`class Java {
  public static void main(String[] args) {

    int februaryDays = 29;
    String result;

    // ternary operator
    result = (februaryDays == 28) ? "Not a leap year" : "Leap year";
    System.out.println(result);
  }
}`}</code></pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>Leap year</code></pre>

        <p>In the above example, we have used the ternary operator to check if the year is a leap year or not. To learn more, visit <a href="/java-programming/ternary-operator">the Java ternary operator</a>.</p>
        <hr/>
        <p>Now that you know about Java operators, it's time to know about the order in which operators are evaluated. To learn more, visit <a href="/java-programming/operator-precedence">Java Operator Precedence</a>.</p>

      </div>
    </div>
  );
}
