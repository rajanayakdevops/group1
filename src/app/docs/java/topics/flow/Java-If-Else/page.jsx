export default function JavaIfElseStatementContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java if...else Statement</h1>
      <div className="content space-y-4">

        <p id="introduction">
          In programming, we use the <code>if..else</code> statement to run a block of code among more than one alternatives.
        </p>

        <p>For example, assigning grades (A, B, C) based on the percentage obtained by a student.</p>
        <ul className="list-disc list-inside">
          <li>if the percentage is above <strong>90</strong>, assign grade <strong>A</strong></li>
          <li>if the percentage is above <strong>75</strong>, assign grade <strong>B</strong></li>
          <li>if the percentage is above <strong>65</strong>, assign grade <strong>C</strong></li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 id="if-then" className="text-2xl font-semibold mt-6 mb-2">1. Java if (if-then) Statement</h2>

        <p>The syntax of an <strong>if-then</strong> statement is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (condition) {
  // statements
}`}</code>
        </pre>

        <p>Here, <var>condition</var> is a boolean expression such as <code>age &gt;= 18</code>.</p>

        <ul className="list-disc list-inside">
          <li>if <var>condition</var> evaluates to <code>true</code>, the lines of code inside <code>if</code> are executed</li>
          <li>if <var>condition</var> evaluates to <code>false</code>, the lines of code inside <code>if</code> are skipped</li>
        </ul>

        <h3>Working of if Statement</h3>

        <figure>
          <img src="/sites/tutorial2program/files/java-if-working.png" alt="if the number is greater than 0, code inside if block is executed, otherwise code inside if block is skipped" title="Working of Java if statement" width="520" height="256" />
          <figcaption>Working of Java if statement</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="if-example" className="text-xl font-semibold mt-6 mb-2">Example 1: Java if Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class IfStatement {
  public static void main(String[] args) {

    int number = 10;

    // checks if number is less than 0
    if (number < 0) {
      System.out.println("The number is negative.");
    }

    System.out.println("Statement outside if block");
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Statement outside if block</code></pre>

        <p>
          In the program, <code>number &lt; 0</code> is <code>false</code>. Hence, the code inside the body of the <code>if</code> statement is <strong>skipped</strong>.
        </p>

        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note:</strong> If you want to learn more about about test conditions, visit <a href="/java-programming/operators#relational" className="text-blue-600 underline">Java Relational Operators</a> and <a href="/java-programming/operators#logical" className="text-blue-600 underline">Java Logical Operators</a>.
        </div>

        <hr className="my-6 border-gray-300" />

        <p>We can also use <a href="/java-programming/string" className="text-blue-600 underline">Java Strings</a> as the test condition.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Example 2: Java if with String</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
    // create a string variable
    String language = "Java";

    // if statement
    if (language == "Java") {
      System.out.println("Best Programming Language");
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Best Programming Language</code></pre>

        <p>In the above example, we are comparing two strings in the <code>if</code> block.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="if-else" className="text-2xl font-semibold mt-6 mb-2">2. Java if...else (if-then-else) Statement</h2>

        <p>
          The <code>if</code> statement executes a certain section of code if the test expression is evaluated to <code>true</code>. However, if the test expression is evaluated to <code>false</code>, it does nothing.
        </p>

        <p>
          In this case, we can use an optional <code>else</code> block. Statements inside the body of <code>else</code> block are executed if the test expression is evaluated to <code>false</code>. This is known as the <strong>if-...else</strong> statement in Java.
        </p>

        <p>The syntax of the <strong>if...else</strong> statement is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (condition) {
  // codes in if block
}
else {
  // codes in else block
}`}</code>
        </pre>

        <p>
          Here, the program will do one task (codes inside <code>if</code> block) if the condition is <code>true</code> and another task (codes inside <code>else</code> block) if the condition is <code>false</code>.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3>How the if...else statement works?</h3>

        <figure>
          <img src="/sites/tutorial2program/files/java-if-else-working.png" alt="If the condition is true, the code inside the if block is executed, otherwise, code inside the else block is executed" title="Working of Java if-else statements" width="580" height="267" />
          <figcaption>Working of Java if-else statements</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="if-else-example" className="text-xl font-semibold mt-6 mb-2">Example 3: Java if...else Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
    int number = 10;

    // checks if number is greater than 0
    if (number > 0) {
      System.out.println("The number is positive.");
    }
    
    // execute this block
    // if number is not greater than 0
    else {
      System.out.println("The number is not positive.");
    }

    System.out.println("Statement outside if...else block");
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`The number is positive.
Statement outside if...else block`}</code>
        </pre>

        <p>In the above example, we have a variable named <var>number</var>. Here, the test expression <code>number &gt; 0</code> checks if <var>number</var> is greater than 0.</p>

        <p>Since the value of the <var>number</var> is <var>10</var>, the test expression evaluates to <code>true</code>. Hence code inside the body of <code>if</code> is executed.</p>

        <p>Now, change the value of the <var>number</var> to a negative integer. Let's say <var>-5</var>.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`int number = -5;`}</code>
        </pre>

        <p>If we run the program with the new value of <var>number</var>, the output will be:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`The number is not positive.
Statement outside if...else block`}</code>
        </pre>

        <p>
          Here, the value of <var>number</var> is <var>-5</var>. So the test expression evaluates to <code>false</code>. Hence code inside the body of <code>else</code> is executed.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="if-else-ladder" className="text-2xl font-semibold mt-6 mb-2">3. Java if...else...if Statement</h2>

        <p>In Java, we have an <strong>if...else...if</strong> ladder, that can be used to execute one block of code among multiple other blocks.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (condition1) {
  // codes
}
else if(condition2) {
  // codes
}
else if (condition3) {
  // codes
}
.
.
else {
  // codes
}`}</code>
        </pre>

        <p>
          Here, <code>if</code> statements are executed from the top towards the bottom. When the test condition is <code>true</code>, codes inside the body of that <code>if</code> block is executed. And, program control jumps outside the <strong>if...else...if</strong> ladder.
        </p>

        <p>If all test expressions are <code>false</code>, codes inside the body of <code>else</code> are executed.</p>

        <hr className="my-6 border-gray-300" />

        <h3>How the if...else...if ladder works?</h3>

        <figure>
          <img src="/sites/tutorial2program/files/java-if-else-if-statement.png" alt="If the first test condition if true, code inside first if block is executed, if the second condition is true, block inside second if is executed, and if all conditions are false, the else block is executed" title="Working of if...else...if ladder" width="740" height="312" />
          <figcaption>Working of if...else...if ladder</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="if-else-ladder-example" className="text-xl font-semibold mt-6 mb-2">Example 4: Java if...else...if Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    int number = 0;

    // checks if number is greater than 0
    if (number > 0) {
      System.out.println("The number is positive.");
    }

    // checks if number is less than 0
    else if (number < 0) {
      System.out.println("The number is negative.");
    }
    
    // if both condition is false
    else {
      System.out.println("The number is 0.");
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>The number is 0.</code></pre>

        <p>
          In the above example, we are checking whether <var>number</var> is <a href="/java-programming/examples/positive-negative" className="text-blue-600 underline">positive, negative, or zero</a>. Here, we have two condition expressions:
        </p>

        <ul className="list-disc list-inside">
          <li><code>number &gt; 0</code> - checks if <var>number</var> is greater than <var>0</var></li>
          <li><code>number &lt; 0</code> - checks if <var>number</var> is less than <var>0</var></li>
        </ul>

        <p>Here, the value of <var>number</var> is <var>0</var>. So both the conditions evaluate to <code>false</code>. Hence the statement inside the body of <code>else</code> is executed.</p>

        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note</strong>: Java provides a special operator called <strong>ternary operator</strong>, which is a kind of shorthand notation of <strong>if...else...if</strong> statement. To learn about the ternary operator, visit <a href="/java-programming/ternary-operator" className="text-blue-600 underline">Java Ternary Operator</a>.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="nested-if-else" className="text-2xl font-semibold mt-6 mb-2">4. Java Nested if..else Statement</h2>

        <p>
          In Java, it is also possible to use <code>if..else</code> statements inside an <code>if...else</code> statement. It's called the nested <code>if...else</code> statement.
        </p>

        <p>Here's a program to find the largest of <strong>3</strong> numbers using the nested <code>if...else</code> statement.</p>

        <h3>Example 5: Nested if...else Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    // declaring double type variables
    Double n1 = -1.0, n2 = 4.5, n3 = -5.3, largest;

    // checks if n1 is greater than or equal to n2
    if (n1 >= n2) {

      // if...else statement inside the if block
      // checks if n1 is greater than or equal to n3
      if (n1 >= n3) {
        largest = n1;
      }

      else {
        largest = n3;
      }
    } else {

      // if..else statement inside else block
      // checks if n2 is greater than or equal to n3
      if (n2 >= n3) {
        largest = n2;
      }

      else {
        largest = n3;
      }
    }

    System.out.println("Largest Number: " + largest);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Largest Number: 4.5</code></pre>

        <p>
          In the above programs, we have assigned the value of <a href="/java-programming/variables-literals" className="text-blue-600 underline">variables</a> ourselves to make this easier.
        </p>

        <p>
          However, in real-world applications, these values may come from user input data, log files, form submission, etc.
        </p>

      </div>
    </div>
  );
}
