export default function JavaBasicInputOutputContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Basic Input and Output</h1>
      <div className="content space-y-4">

        <h2 id="output" className="text-2xl font-semibold mt-6 mb-2">Java Output</h2>

        <p>In Java, you can simply use</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>System.out.println(); or

System.out.print(); or

System.out.printf();</code></pre>
        <p>to send output to standard output (screen).</p>

        <p>Here,</p>
        <ul className="list-disc list-inside">
          <li><code>System</code> is a class</li>
          <li><code>out</code> is a <code>public</code> <code>static</code> field: it accepts output data.</li>
        </ul>

        <p>Don't worry if you don't understand it. We will discuss <code>class</code>, <code>public</code>, and <code>static</code> in later chapters.</p>

        <p>Let's take an example to output a line.</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class AssignmentOperator {
  public static void main(String[] args) {
      System.out.println("Java programming is interesting.");   
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>Java programming is interesting.</code></pre>

        <p>Here, we have used the <code>println()</code> method to display the string.</p>

        <hr className="my-6 border-gray-300" />
        <h3 id="difference-print-println-printf" className="text-xl font-semibold mt-6 mb-2">Difference between println(), print() and printf()</h3>

        <ul className="list-disc list-inside">
          <li><code>print()</code> - It prints string inside the quotes.</li>
          <li><code>println()</code> - It prints string inside the quotes similar like <code>print()</code> method. Then the cursor moves to the beginning of the next line.</li>
          <li><code>printf()</code> - It provides string formatting (similar to <a href="/cpp-programming/library-function/cstdio/printf">printf in C/C++ programming</a>).</li>
        </ul>

        <hr className="my-6 border-gray-300" />
        <h3 className="text-xl font-semibold mt-6 mb-2">Example: print() and println()</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Output {
  public static void main(String[] args) {
      System.out.println("1. println ");
      System.out.println("2. println ");
      
      System.out.print("1. print ");
      System.out.print("2. print");
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>{`1. println 
2. println 
1. print 2. print`}</code></pre>

        <p>In the above example, we have shown the working of the <code>print()</code> and <code>println()</code> methods. To learn about the <code>printf()</code> method, visit <a href="https://www.cs.colostate.edu/~cs160/.Summer16/resources/Java_printf_method_quick_reference.pdf">Java printf()</a>.</p>

        <hr className="my-6 border-gray-300" />
        <h3 id="print-variables" className="text-xl font-semibold mt-6 mb-2">Example: Printing Variables and Literals</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Variables {
  public static void main(String[] args) {
      Double number = -10.6;
      
      System.out.println(5);
      System.out.println(number);
  }
}`}</code>
        </pre>

        <p>When you run the program, the output will be:</p>

        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>{`5
-10.6`}</code></pre>

        <p>Here, you can see that we have not used the quotation marks. It is because to display integers, <a href="/java-programming/variables-literals">variables</a> and so on, we don't use quotation marks.</p>

        <hr className="my-6 border-gray-300" />

        <h3 id="print-strings" className="text-xl font-semibold mt-6 mb-2">Example: Print Concatenated Strings</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class PrintVariables {
  public static void main(String[] args) {
      Double number = -10.6;
      
      System.out.println("I am " + "awesome.");
      System.out.println("Number = " + number);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>{`I am awesome.
Number = -10.6`}</code></pre>

        <p>In the above example, notice the line,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`System.out.println("I am " + "awesome.");`}</code></pre>

        <p>Here, we have used the <code>+</code> operator to concatenate (join) the two strings: <var>"I am "</var> and <var>"awesome."</var>.</p>

        <p>And also, the line,</p>
        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`System.out.println("Number = " + number);`}</code></pre>

        <p>Here, first the value of variable <var>number</var> is evaluated. Then, the value is concatenated to the string: <var>"Number = "</var>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="input" className="text-2xl font-semibold mt-6 mb-2">Java Input</h2>

        <p>Java provides different ways to get input from the user. However, in this tutorial, you will learn to get input from user using the object of <code>Scanner</code> class.</p>

        <p>In order to use the object of <code>Scanner</code>, we need to import <code>java.util.Scanner</code> package.</p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`import java.util.Scanner;`}</code></pre>

        <p>To learn more about importing packages in Java, visit <a href="/java-programming/packages-import">Java Import Packages</a>.</p>

        <p>Then, we need to create an object of the <code>Scanner</code> class. We can use the object to take input from the user.</p>

        <pre className="bg-gray-200 p-3 rounded max-h-[600px] overflow-auto"><code>{`// create an object of Scanner
Scanner input = new Scanner(System.in);

// take input from the user
int number = input.nextInt();`}</code></pre>

        <hr className="my-6 border-gray-300" />

        <h3 id="integer-input" className="text-xl font-semibold mt-6 mb-2">Example: Get Integer Input From the User</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Scanner;

class Input {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int number = input.nextInt();
        System.out.println("You entered " + number);

        // closing the scanner object
        input.close();
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>Enter an integer: 23
You entered 23</code></pre>

        <p>In the above example, we have created an object named <var>input</var> of the <code>Scanner</code> class. We then call the <code>nextInt()</code> method of the <code>Scanner</code> class to get an integer input from the user.</p>

        <p>Similarly, we can use <code>nextLong()</code>, <code>nextFloat()</code>, <code>nextDouble()</code>, and <code>next()</code> methods to get <code>long</code>, <code>float</code>, <code>double</code>, and <code>string</code> input respectively from the user.</p>

        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
          <strong>Note</strong>: We have used the <code>close()</code> method to close the object. It is recommended to close the scanner object once the input is taken.
        </div>

        <hr className="my-6 border-gray-300" />
        <h3 id="double-string-input" className="text-xl font-semibold mt-6 mb-2">Example: Get float, double and String Input</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Scanner;

class Input {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        // Getting float input
        System.out.print("Enter float: ");
        float myFloat = input.nextFloat();
        System.out.println("Float entered = " + myFloat);
        
        // Getting double input
        System.out.print("Enter double: ");
        double myDouble = input.nextDouble();
        System.out.println("Double entered = " + myDouble);
        
        // Getting String input
        System.out.print("Enter text: ");
        String myString = input.next();
        System.out.println("Text entered = " + myString);
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-200 p-3 rounded overflow-auto"><code>{`Enter float: 2.343
Float entered = 2.343
Enter double: -23.4
Double entered = -23.4
Enter text: Hey!
Text entered = Hey!`}</code></pre>

        <p>As mentioned, there are other several ways to get input from the user. To learn more about <code>Scanner</code>, visit <a href="/java-programming/scanner">Java Scanner</a>.</p>

      </div>
    </div>
  );
}
