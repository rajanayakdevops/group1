export default function JavaSwitchStatementContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java switch Statement</h1>
      <div className="content space-y-4">

        <p id="introduction">
          The <code>switch</code> statement allows us to execute a block of code among many alternatives.
        </p>

        <p><strong>Syntax:</strong></p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`switch (expression) {

  case value1:
    // code
    break;

  case value2:
    // code
    break;

  ...
  ...

  default:
    // default statements
}`}</code>
        </pre>

        <p><strong>How does the switch-case statement work?</strong></p>

        <p>The <var>expression</var> is evaluated once and compared with the values of each case.</p>

        <ul className="list-disc list-inside">
          <li>If <var>expression</var> matches with <var>value1</var>, the code of <code>case value1</code> are executed. Similarly, the code of <code>case value2</code> is executed if <var>expression</var> matches with <var>value2</var>.</li>
          <li>If there is no match, the code of the <strong>default case</strong> is executed.</li>
        </ul>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: The working of the switch-case statement is similar to the <a href="/java-programming/if-else-statement#if-else-ladder" className="text-blue-600 underline">Java if...else...if ladder</a>. However, the syntax of the <code>switch</code> statement is cleaner and much easier to read and write.
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="example" className="text-2xl font-semibold mt-6 mb-2">Example: Java switch Statement</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Java Program to check the size
// using the switch...case statement

class Main {
  public static void main(String[] args) {

    int number = 44;
    String size;

    // switch statement to check size
    switch (number) {

      case 29:
        size = "Small";
        break;

      case 42:
        size = "Medium";
        break;

      // match the value of week
      case 44:
        size = "Large";
        break;

      case 48:
        size = "Extra Large";
        break;
      
      default:
        size = "Unknown";
        break;

    }
    System.out.println("Size: " + size);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>Size: Large</code>
        </pre>

        <p>
          In the above example, we have used the <code>switch</code> statement to find the size. Here, we have a variable <var>number</var>. The variable is compared with the value of each case statement.
        </p>

        <p>Since the value matches with <strong>44</strong>, the code of <code>case 44</code> is executed.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`size = "Large";
break;`}</code>
        </pre>

        <p>Here, the <var>size</var> variable is assigned with the value <code>Large</code>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="flowchart" className="text-2xl font-semibold mt-6 mb-2">Flowchart of switch Statement</h2>

        <figure>
          <img src="/sites/tutorial2program/files/java-switch-case-implementation.png" alt="Flowchart of the Java switch statement" title="Flow chart of the Java switch statement" width="420" height="668" />
          <figcaption>Flow chart of the Java switch statement</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h2 id="break-in-switch" className="text-2xl font-semibold mt-6 mb-2">break Statement in Java switch...case</h2>

        <p>Notice that we have been using <code>break</code> in each case block.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`...
case 29:
  size = "Small";
  break;
...`}</code>
        </pre>

        <p>
          The <code>break</code> statement is used to terminate the <strong>switch-case</strong> statement. If <code>break</code> is not used, all the cases after the matching case are also executed. For example,
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    int expression = 2;

    // switch statement to check size
    switch (expression) {
      case 1:
        System.out.println("Case 1");

      // matching case
      case 2:
        System.out.println("Case 2");

      case 3:
        System.out.println("Case 3");

      default:
        System.out.println("Default case");
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Case 2
Case 3
Default case`}</code>
        </pre>

        <p>
          In the above example, <var>expression</var> matches with <code>case 2</code>. Here, we haven't used the break statement after each case.
        </p>

        <p>Hence, all the cases after <code>case 2</code> are also executed.</p>

        <p>
          This is why the <code>break</code> statement is needed to terminate the <strong>switch-case</strong> statement after the matching case. To learn more, visit <a href="/java-programming/break-statement" className="text-blue-600 underline">Java break Statement</a>.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="default" className="text-2xl font-semibold mt-6 mb-2">default Case in Java switch-case</h2>

        <p>The switch statement also includes an <strong>optional default case</strong>. It is executed when the expression doesn't match any of the cases. For example,</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
  
    int expression = 9;
    
    switch(expression) {
        
      case 2:
        System.out.println("Small Size");
        break;

      case 3:
        System.out.println("Large Size");
        break;
            
      // default case
      default:
        System.out.println("Unknown Size");
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>Unknown Size</code>
        </pre>

        <p>
          In the above example, we have created a <strong>switch-case</strong> statement. Here, the value of <var>expression</var> doesn't match with any of the cases.
        </p>

        <p>Hence, the code inside the <strong>default case</strong> is executed.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`default:
  System.out.println("Unknown Size");`}</code>
        </pre>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <p><strong>Note</strong>: The Java switch statement only works with:</p>

          <ul className="list-disc list-inside">
            <li><a href="/java-programming/variables-primitive-data-types#data-types" className="text-blue-600 underline">Primitive data types</a>: byte, short, char, and int</li>
            <li><a href="/java-programming/enums" className="text-blue-600 underline">Enumerated types</a></li>
            <li><a href="/java-programming/string" className="text-blue-600 underline">String Class</a></li>
            <li><a href="/java-programming/wrapper" className="text-blue-600 underline">Wrapper Classes</a>: Character, Byte, Short, and Integer.</li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300" />

        <p><strong>Also Read:</strong></p>
        <ul className="list-disc list-inside">
          <li><a href="/java-programming/examples/implement-switch-on-strings" title="switch Implementation on Strings" className="text-blue-600 underline">Implementation of switch...case on Strings</a></li>
        </ul>

      </div>
    </div>
  );
}
