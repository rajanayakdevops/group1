export default function JavaTernaryOperatorContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Ternary Operator</h1>
      <div className="content space-y-4">

        <p id="introduction">
          In Java, a ternary <a href="/java-programming/operators" className="text-blue-600 underline">operator</a> can be used to replace the <code>if…else</code> statement in certain situations. Before you learn about the ternary operator, make sure you visit <a href="/java-programming/if-else-statement" className="text-blue-600 underline">Java if...else statement</a>.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="ternary-operator" className="text-2xl font-semibold mt-6 mb-2">Ternary Operator in Java</h2>

        <p>A ternary operator evaluates the test condition and executes a block of code based on the result of the condition.</p>

        <p>Its syntax is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">condition ? expression1 : expression2;</code>
        </pre>

        <p>Here, <var>condition</var> is evaluated and</p>

        <ul className="list-disc list-inside">
          <li>if <var>condition</var> is <code>true</code>, <var>expression1</var> is executed.</li>
          <li>And, if <var>condition</var> is <code>false</code>, <var>expression2</var> is executed.</li>
        </ul>

        <p>The ternary operator takes <strong>3 operands</strong> (<var>condition</var>, <var>expression1</var>, and <var>expression2</var>). Hence, the name <strong>ternary operator</strong>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Example: Java Ternary Operator</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    
    // take input from users
    Scanner input = new Scanner(System.in);
    System.out.println("Enter your marks: ");
    double marks = input.nextDouble();

    // ternary operator checks if
    // marks is greater than 40
    String result = (marks > 40) ? "pass" : "fail";

    System.out.println("You " + result + " the exam.");
    input.close();
  }
}`}</code>
        </pre>

        <p><strong>Output 1</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter your marks: 
75
You pass the exam.`}</code>
        </pre>

        <p>Suppose the user enters <strong>75</strong>. Then, the condition <code>marks &gt; 40</code> evaluates to <code>true</code>. Hence, the first expression <code>"pass"</code> is assigned to <var>result</var>.</p>

        <p><strong>Output 2</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter your marks: 
24
You fail the exam.`}</code>
        </pre>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: To learn about expression, visit <a href="/java-programming/expressions-statements-blocks" className="text-blue-600 underline">Java Expressions</a>.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="use-ternary-operator" className="text-2xl font-semibold mt-6 mb-2">When to use the Ternary Operator?</h2>

        <p>In Java, the ternary operator can be used to replace certain types of <code>if...else</code> statements. For example,</p>

        <p>You can replace this code</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
    
    // create a variable 
    int number = 24;

    if(number > 0) {
      System.out.println("Positive Number");
    }
    else {
      System.out.println("Negative Number");
    }
  }
}`}</code>
        </pre>

        <p>with</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
    
    // create a variable 
    int number = 24;

    String result = (number > 0) ? "Positive Number" : "Negative Number";
    System.out.println(result);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Positive Number</code></pre>

        <p>Here, both programs give the same output. However, the use of the ternary operator makes our code more readable and clean.</p>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: You should only use the ternary operator if the resulting statement is short.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="nested-ternary-operator" className="text-2xl font-semibold mt-6 mb-2">Nested Ternary Operators</h2>

        <p>It is also possible to use one ternary operator inside another ternary operator. It is called the nested ternary operator in Java.</p>

        <p>Here's a program to find the largest of <strong>3</strong> numbers using the nested ternary operator.</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
    
    // create a variable
    int n1 = 2, n2 = 9, n3 = -11;

    // nested ternary operator
    // to find the largest number
    int largest = (n1 >= n2) ? ((n1 >= n3) ? n1 : n3) : ((n2 >= n3) ? n2 : n3);
    System.out.println("Largest Number: " + largest);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Largest Number: 9</code></pre>

        <p>In the above example, notice the use of the ternary operator,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
  <code className="java hljs">
    (n1 &gt;= n2) ? ((n1 &gt;= n3) ? n1 : n3) : ((n2 &gt;= n3) ? n2 : n3);
  </code>
</pre>

<p>Here,</p>

<ul className="list-disc list-inside">
  <li><code>(n1 &gt;= n2)</code> - first test condition that checks if <var>n1</var> is greater than <var>n2</var></li>
  <li><code>(n1 &gt;= n3)</code> - second test condition that is executed if the first condition is <code>true</code></li>
  <li><code>(n2 &gt;= n3)</code> - third test condition that is executed if the first condition is <code>false</code></li>
</ul>


        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: It is not recommended to use nested ternary operators. This is because it makes our code more complex.
        </div>

      </div>
    </div>
  );
}
