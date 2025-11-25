export default function JavaForLoopContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java for Loop</h1>
      <div className="content space-y-4">

        <p id="introduction">
          In computer programming, loops are used to repeat a block of code. For example, if you want to show a message <strong>100</strong> times, then rather than typing the same code <strong>100</strong> times, you can use a loop.
        </p>

        <p>In Java, there are three types of loops.</p>
        <ul className="list-disc list-inside">
          <li>for loop</li>
          <li><a href="/java-programming/do-while-loop#syntax-while" className="text-blue-600 underline">while loop</a></li>
          <li><a href="/java-programming/do-while-loop#do-while-loop" className="text-blue-600 underline">do...while loop</a></li>
        </ul>

        <p>This tutorial focuses on the <code>for</code> loop. You will learn about the other types of loops in the upcoming tutorials.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="for-loop" className="text-2xl font-semibold mt-6 mb-2">Java for Loop</h2>
        <p>Java <code>for</code> loop is used to run a block of code for a certain number of times. The syntax of <code>for</code> loop is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`for (initialExpression; testExpression; updateExpression) {
    // body of the loop
}`}</code>
        </pre>

        <p>Here,</p>
        <ol className="list-decimal list-inside">
          <li>The <var>initialExpression</var> initializes and/or declares <a href="/java-programming/variables-literals" className="text-blue-600 underline">variables</a> and executes only once.</li>
          <li>The <code>condition</code> is evaluated. If the <code>condition</code> is <code>true</code>, the body of the <code>for</code> loop is executed.</li>
          <li>The <code>updateExpression</code> updates the value of <code>initialExpression</code>.</li>
          <li>The <strong>condition</strong> is evaluated again. The process continues until the <strong>condition</strong> is <code>false</code>.</li>
        </ol>

        <hr className="my-6 border-gray-300" />

        <figure>
          <img src="/sites/tutorial2program/files/java-for-loop.png" alt="Working of for loop in Java with flowchart" title="Flowchart of Java for loop" width="320" height="493" />
          <figcaption>Flowchart of Java for loop</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h2 id="example-1" className="text-2xl font-semibold mt-6 mb-2">Example 1: Display a Text Five Times</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Program to print a text 5 times

class Main {
  public static void main(String[] args) {

    int n = 5;
    // for loop  
    for (int i = 1; i <= n; ++i) {
      System.out.println("Java is fun");
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Java is fun
Java is fun
Java is fun
Java is fun
Java is fun`}</code>
        </pre>

        <p>Here is how this program works.</p>

        <div className="overflow-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full text-left mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2">Iteration</th>
                <th className="border border-gray-300 px-3 py-2">Variable</th>
                <th className="border border-gray-300 px-3 py-2">Condition: i</th>
                <th className="border border-gray-300 px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1st</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 1</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>Java is fun</samp> is printed.<br />Variable <var>i</var> is increased to <strong>2</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2nd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 2</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>Java is fun</samp> is printed.<br />Variable <var>i</var> is increased to <strong>3</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3rd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 3</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>Java is fun</samp> is printed.<br />Variable <var>i</var> is increased to <strong>4</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 4</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>Java is fun</samp> is printed.<br />Variable <var>i</var> is increased to <strong>5</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 5</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>Java is fun</samp> is printed.<br />Variable <var>i</var> is increased to <strong>6</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">6th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 6</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>false</code></td>
                <td className="border border-gray-300 px-3 py-2">The loop is terminated.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Example 2: Display numbers from 1 to 5</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Program to print numbers from 1 to 5

class Main {
  public static void main(String[] args) {
  
    int n = 5;
    // for loop  
    for (int i = 1; i <= n; ++i) {
      System.out.println(i);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`1
2
3
4
5`}</code>
        </pre>

        <p>Here is how the program works.</p>

        <div className="overflow-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full text-left mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2">Iteration</th>
                <th className="border border-gray-300 px-3 py-2">Variable</th>
                <th className="border border-gray-300 px-3 py-2">Condition: i</th>
                <th className="border border-gray-300 px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1st</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 1</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>1</samp> is printed.<br /><var>i</var> is increased to <strong>2</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2nd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 2</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>2</samp> is printed.<br /><var>i</var> is increased to <strong>3</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3rd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 3</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>3</samp> is printed.<br /><var>i</var> is increased to <strong>4</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 4</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>4</samp> is printed.<br /><var>i</var> is increased to <strong>5</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 5</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>5</samp> is printed.<br /><var>i</var> is increased to <strong>6</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">6th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 6</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>false</code></td>
                <td className="border border-gray-300 px-3 py-2">The loop is terminated.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="example-2" className="text-2xl font-semibold mt-6 mb-2">Example 3: Display Sum of n Natural Numbers</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Program to find the sum of natural numbers from 1 to 1000.

class Main {
  public static void main(String[] args) {
      
    int sum = 0;
    int n = 1000;

    // for loop
    for (int i = 1; i <= n; ++i) {
      // body inside for loop
      sum += i;     // sum = sum + i
    }
       
    System.out.println("Sum = " + sum);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Sum = 500500</code></pre>

        <p>
          Here, the value of <var>sum</var> is <strong>0</strong> initially. Then, the for loop is iterated from <code>i = 1 to 1000</code>. In each iteration, <var>i</var> is added to <var>sum</var> and its value is increased by <strong>1</strong>.
        </p>
        <p>
          When <var>i</var> becomes <strong>1001</strong>, the test condition is <code>false</code> and <var>sum</var> will be equal to <code>0 + 1 + 2 + .... + 1000</code>.
        </p>

        <p>The above program to add the sum of natural numbers can also be written as</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Program to find the sum of natural numbers from 1 to 1000.

class Main {
  public static void main(String[] args) {
      
    int sum = 0;
    int n = 1000;

    // for loop
    for (int i = n; i >= 1; --i) {
      // body inside for loop
      sum += i;     // sum = sum + i
    }
       
    System.out.println("Sum = " + sum);
  }
}`}</code>
        </pre>

        <p>The output of this program is the same as the <strong>Example 3</strong>.</p>

        <hr className="my-6 border-gray-300" />

        <h2>Java for-each Loop</h2>

        <p>The Java for loop has an alternative syntax that makes it easy to iterate through <a href="/java-programming/arrays" className="text-blue-600 underline">arrays</a> and <a href="/java-programming/collections" className="text-blue-600 underline">collections</a>. For example,</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// print array elements 

class Main {
  public static void main(String[] args) {
      
    // create an array
    int[] numbers = {3, 7, 5, -5};
    
    // iterating through the array 
    for (int number: numbers) {
       System.out.println(number);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`3
7
5
-5`}</code>
        </pre>

        <p>Here, we have used the <strong>for-each loop</strong> to print each element of the <var>numbers</var> array one by one.</p>

        <p>
          In the first iteration of the loop, <var>number</var> will be <strong>3</strong>, <var>number</var> will be <strong>7</strong> in second iteration and so on.
        </p>

        <p>To learn more, visit <a href="/java-programming/enhanced-for-loop" className="text-blue-600 underline">Java for-each Loop</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h3 id="infinite" className="text-xl font-semibold mt-6 mb-2">Java Infinite for Loop</h3>

        <p>
          If we set the <strong>test expression</strong> in such a way that it never evaluates to <code>false</code>, the <code>for</code> loop will run forever. This is called infinite for loop. For example,
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Infinite for Loop

class Infinite {
    public static void main(String[] args) {
      
        int sum = 0;

        for (int i = 1; i <= 10; --i) {
            System.out.println("Hello");
        }
    }
}`}</code>
        </pre>

        <p>
          Here, the test expression ,<code>i &lt;= 10</code>, is never <code>false</code> and <code>Hello</code> is printed repeatedly until the memory runs out.
        </p>

        <hr className="my-6 border-gray-300" />

        <p><strong>Also Read:</strong></p>

        <ul className="list-disc list-inside">
          <li><a href="/java-programming/enhanced-for-loop" className="text-blue-600 underline">Enhanced For Loop</a></li>
          <li><a href="/java-programming/nested-loop" className="text-blue-600 underline">Nested Loop</a></li>
          <li><a href="/java-programming/break-statement" className="text-blue-600 underline">Break Statement</a></li>
          <li><a href="/java-programming/continue-statement" className="text-blue-600 underline">Continue Statement</a></li>
        </ul>

      </div>
    </div>
  );
}
