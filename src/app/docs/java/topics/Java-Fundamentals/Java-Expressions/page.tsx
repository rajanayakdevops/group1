export default function JavaExpressionsStatementsBlocksContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">
        Java Expressions, Statements and Blocks
      </h1>
      <div className="content space-y-4">
        <p>
          In previous chapters, we have used expressions, statements, and blocks
          without much explaining about them. Now that you know about variables,
          operators, and literals, it will be easier to understand these
          concepts.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="expressions" className="text-2xl font-semibold mt-6 mb-2">
          Java Expressions
        </h2>
        <p>
          A Java expression consists of{" "}
          <a
            href="/java-programming/variables-primitive-data-types#variables"
            className="text-blue-600 underline"
          >
            variables
          </a>
          ,{" "}
          <a
            href="/java-programming/operators"
            className="text-blue-600 underline"
          >
            operators
          </a>
          ,{" "}
          <a
            href="/java-programming/variables-primitive-data-types#literals"
            className="text-blue-600 underline"
          >
            literals
          </a>
          , and method calls. To know more about method calls, visit{" "}
          <a
            href="/java-programming/methods"
            className="text-blue-600 underline"
          >
            Java methods
          </a>
          . For example,
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`int score; 
score = 90;`}</code>
        </pre>

        <p>
          <code>score = 90</code> is an expression that returns an{" "}
          <code>int</code>. Consider another example,
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`Double a = 2.2, b = 3.4, result;
result = a + b - 3.4;`}</code>
        </pre>

        <p>
          Here, <code>a + b - 3.4</code> is an expression.
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (number1 == number2)
    System.out.println("Number 1 is larger than number 2");`}</code>
        </pre>

        <p>
          Here, <code>number1 == number2</code> is an expression that returns a
          boolean value. Similarly,{" "}
          <code>"Number 1 is larger than number 2"</code> is a{" "}
          <a
            href="/java-programming/string"
            className="text-blue-600 underline"
          >
            string
          </a>{" "}
          expression.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="statements" className="text-2xl font-semibold mt-6 mb-2">
          Java Statements
        </h2>
        <p>
          In Java, each statement is a complete unit of execution. For example,
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`int score = 9*5;`}</code>
        </pre>

        <p>
          Here, we have a statement. The complete execution of this statement
          involves multiplying integers <code>9</code> and <code>5</code> and
          then assigning the result to the variable <code>score</code>.
        </p>
        <p>
          In the above statement, we have an expression <code>9 * 5</code>. In
          Java, expressions are part of statements.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3
          id="expression-statements"
          className="text-xl font-semibold mt-6 mb-2"
        >
          Expression statements
        </h3>

        <p>
          We can convert an expression into a statement by terminating the
          expression with a <code>;</code>. These are known as expression
          statements. For example,
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// expression
number = 10
// statement
number = 10;`}</code>
        </pre>

        <p>
          In the above example, <code>number = 10</code> is an expression. By
          adding a semicolon you convert it into a statement.
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// expression
++number
// statement
++number;`}</code>
        </pre>

        <p>
          Similarly, <code>++number</code> is an expression whereas{" "}
          <code>++number;</code> is a statement.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3
          id="declaration-statements"
          className="text-xl font-semibold mt-6 mb-2"
        >
          Declaration Statements
        </h3>
        <p>
          In Java, declaration statements are used for declaring variables. For
          example,
        </p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">Double tax = 9.5;</code>
        </pre>

        <p>
          The statement above declares a variable <var>tax</var> initialized to{" "}
          <code>9.5</code>.
        </p>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: There are control flow statements that are used
          in decision making and looping in Java. You will learn about control
          flow statements in later chapters.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="blocks" className="text-2xl font-semibold mt-6 mb-2">
          Java Blocks
        </h2>
        <p>
          A block is a group of statements (zero or more) that is enclosed in
          curly braces <code>{`{ }`}</code>. For example,
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
      
      String band = "Beatles";
      
      if (band == "Beatles") { // start of block
          System.out.print("Hey ");
          System.out.print("Jude!");
      } // end of block
  }
}`}</code>
        </pre>

        <p>
          <strong>Output</strong>:
        </p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto">
          <code>Hey Jude!</code>
        </pre>

        <p>
          In the above example, we have a block <code>if &#123;....&#125</code>.
        </p>
        <p>Here, inside the block we have two statements:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>System.out.print("Hey ");</code>
          </li>
          <li>
            <code>System.out.print("Jude!");</code>
          </li>
        </ul>

        <p>
          However, a block may not have any statements. Consider the following
          examples,
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
      
      if (10 > 5) { // start of block    

      } // end of block
  }
}`}</code>
        </pre>

        <p>
          This is a valid Java program. Here, we have a block{" "}
          <code>if &#123;....&#125</code>. However, there is no any statement
          inside this block.
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class AssignmentOperator {
  public static void main(String[] args) {  // start of block  

  }  // end of block
}`}</code>
        </pre>

        <p>
          Here, we have block{" "}
          <code>public static void main() &#123;....&#125</code>. However,
          similar to the above example, this block does not have any statement.
        </p>

        <hr className="my-6 border-gray-300" />

        <p>
          <strong>Also Read:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="/java-programming/if-else-statement"
              className="text-blue-600 underline"
            >
              Java if…else Statement
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
