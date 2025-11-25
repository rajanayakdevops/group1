export default function JavaWhileDoWhileLoopContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java while and do...while Loop</h1>
      <div className="content space-y-4">

        <p id="introduction">
          In computer programming, loops are used to repeat a block of code. For example, if you want to show a message 100 times, then you can use a loop. It's just a simple example; you can achieve much more with loops.
        </p>

        <p>
          In the previous tutorial, you learned about <a href="/java-programming/for-loop" className="text-blue-600 underline">Java for loop</a>. Here, you are going to learn about <code>while</code> and <code>do...while</code> loops.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="while-loop" className="text-2xl font-semibold mt-6 mb-2">Java while loop</h2>

        <p>Java <code>while</code> loop is used to run a specific code until a certain condition is met. The syntax of the <code>while</code> loop is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`while (testExpression) {
    // body of loop
}`}</code>
        </pre>

        <p>Here,</p>

        <ol className="list-decimal list-inside">
          <li>A <code>while</code> loop evaluates the <strong>textExpression</strong> inside the parenthesis <code>()</code>.</li>
          <li>If the <strong>textExpression</strong> evaluates to <code>true</code>, the code inside the <code>while</code> loop is executed.</li>
          <li>The <strong>textExpression</strong> is evaluated again.</li>
          <li>This process continues until the <strong>textExpression</strong> is <code>false</code>.</li>
          <li>When the <strong>textExpression</strong> evaluates to <code>false</code>, the loop stops.</li>
        </ol>

        <p>To learn more about the conditions, visit <a href="/java-programming/operators#equality-relational" className="text-blue-600 underline">Java relational</a> and <a href="/java-programming/operators#logical" className="text-blue-600 underline">logical operators</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="flowchart-while" className="text-2xl font-semibold mt-6 mb-2">Flowchart of while loop</h2>

        <figure>
          <img src="/sites/tutorial2program/files/java-while-loop.png" alt="Flowchart of while loop in Java" title="Flowchart of while loop in Java" width="350" height="460" />
          <figcaption>Flowchart of Java while loop</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="example-while" className="text-xl font-semibold mt-6 mb-2">Example 1: Display Numbers from 1 to 5</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Program to display numbers from 1 to 5

class Main {
  public static void main(String[] args) {

    // declare variables
    int i = 1, n = 5;

    // while loop from 1 to 5
    while(i <= n) {
      System.out.println(i);
      i++;
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

        <p>Here is how this program works.</p>

        <div className="overflow-auto mb-6">
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
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
                <td className="border border-gray-300 px-3 py-2"><samp>1</samp> is printed.<br />Variable <var>i</var> is increased to <strong>2</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2nd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 2</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>2</samp> is printed.<br />Variable <var>i</var> is increased to <strong>3</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3rd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 3</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>3</samp> is printed.<br />Variable <var>i</var> is increased to <strong>4</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 4</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>4</samp> is printed.<br />Variable <var>i</var> is increased to <strong>5</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 5</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>5</samp> is printed.<br />Variable <var>i</var> is increased to <strong>6</strong>.</td>
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

        <h3 className="text-xl font-semibold mt-6 mb-2">Example 2: Sum of Positive Numbers Only</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Java program to find the sum of positive numbers
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
      
    int sum = 0;

    // create an object of Scanner class
    Scanner input = new Scanner(System.in);

    // take integer input from the user
    System.out.println("Enter a number");
    int number = input.nextInt();
	   
    // while loop continues 
    // until entered number is positive
    while (number >= 0) {
      // add only positive numbers
      sum += number;

      System.out.println("Enter a number");
      number = input.nextInt();
    }
	   
    System.out.println("Sum = " + sum);
    input.close();
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter a number
25
Enter a number
9
Enter a number
5
Enter a number
-3
Sum = 39`}</code>
        </pre>

        <p>
          In the above program, we have used the <a href="/java-programming/scanner" className="text-blue-600 underline">Scanner class</a> to take input from the user. Here, <code>nextInt()</code> takes integer input from the user.
        </p>

        <p>
          The <code>while</code> loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the <code>sum</code> variable.
        </p>

        <p>
          When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="do-while-loop" className="text-2xl font-semibold mt-6 mb-2">Java do...while loop</h2>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`do {
    // body of loop
} while(textExpression);`}</code>
        </pre>

        <p>Here,</p>

        <ol className="list-decimal list-inside">
          <li>The body of the loop is executed at first. Then the <strong>textExpression</strong> is evaluated.</li>
          <li>If the <strong>textExpression</strong> evaluates to <code>true</code>, the body of the loop inside the <code>do</code> statement is executed again.</li>
          <li>The <strong>textExpression</strong> is evaluated once again.</li>
          <li>If the <strong>textExpression</strong> evaluates to <code>true</code>, the body of the loop inside the <code>do</code> statement is executed again.</li>
          <li>This process continues until the <strong>textExpression</strong> evaluates to <code>false</code>. Then the loop stops.</li>
        </ol>

        <hr className="my-6 border-gray-300" />

        <h3 id="do-while-flowchart" className="text-xl font-semibold mt-6 mb-2">Flowchart of do...while loop</h3>

        <figure>
          <img src="/sites/tutorial2program/files/java-do-while-loop.png" alt="Flowchart of do...while loop in Java" title="Flowchart of do...while loop in Java" width="300" height="383" />
          <figcaption>Flowchart of Java do while loop</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <p>Let's see the working of <code>do...while</code> loop.</p>

        <h3 id="do-while-example" className="text-xl font-semibold mt-6 mb-2">Example 3: Display Numbers from 1 to 5</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Java Program to display numbers from 1 to 5
import java.util.Scanner;

// Program to find the sum of natural numbers from 1 to 100.

class Main {
  public static void main(String[] args) {

    int i = 1, n = 5;

    // do...while loop from 1 to 5
    do {
      System.out.println(i);
      i++;
    } while(i <= n);
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

        <p>Here is how this program works.</p>

        <div className="overflow-auto mb-6">
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
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
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 1</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2">not checked</td>
                <td className="border border-gray-300 px-3 py-2"><samp>1</samp> is printed.<br />Variable <var>i</var> is increased to <strong>2</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1st</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 2</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>2</samp> is printed.<br />Variable <var>i</var> is increased to <strong>3</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2nd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 3</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>3</samp> is printed.<br />Variable <var>i</var> is increased to <strong>4</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3rd</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 4</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>4</samp> is printed.<br />Variable <var>i</var> is increased to <strong>5</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 5</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>true</code></td>
                <td className="border border-gray-300 px-3 py-2"><samp>5</samp> is printed.<br />Variable <var>i</var> is increased to <strong>6</strong>.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5th</td>
                <td className="border border-gray-300 px-3 py-2"><code>i = 6</code><br /><code>n = 5</code></td>
                <td className="border border-gray-300 px-3 py-2"><code>false</code></td>
                <td className="border border-gray-300 px-3 py-2">The loop is terminated.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-xl font-semibold mt-6 mb-2">Example 4: Sum of Positive Numbers</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Java program to find the sum of positive numbers
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
      
    int sum = 0;
    int number = 0;

    // create an object of Scanner class
    Scanner input = new Scanner(System.in);
	   
    // do...while loop continues 
    // until entered number is positive
    do {
      // add only positive numbers
      sum += number;
      System.out.println("Enter a number");
      number = input.nextInt();
    } while(number >= 0); 
	   
    System.out.println("Sum = " + sum);
    input.close();
  }
}`}</code>
        </pre>

        <p><strong>Output 1</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter a number
25
Enter a number
9
Enter a number
5
Enter a number
-3
Sum = 39`}</code>
        </pre>

        <p>
          Here, the user enters a positive number, that number is added to the <var>sum</var> variable. And this process continues until the number is negative. When the number is negative, the loop terminates and displays the sum without adding the negative number.
        </p>

        <p><strong>Output 2</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter a number
-8
Sum is 0`}</code>
        </pre>

        <p>
          Here, the user enters a negative number. The test condition will be <code>false</code> but the code inside of the loop executes once.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 id="infinite-loop" className="text-xl font-semibold mt-6 mb-2">Infinite while loop</h3>

        <p>If <strong>the condition</strong> of a loop is always <code>true</code>, the loop runs for infinite times (until the memory is full). For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// infinite while loop
while(true){
    // body of loop
}`}</code>
        </pre>

        <p>Here is an example of an infinite <code>do...while</code> loop.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// infinite do...while loop
int count = 1;
do {
   // body of loop
} while(count == 1);`}</code>
        </pre>

        <p>
          In the above programs, the <strong>textExpression</strong> is always <code>true</code>. Hence, the loop body will run for infinite times.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="for-vs-while" className="text-2xl font-semibold mt-6 mb-2">for and while loops</h2>

        <p>
          The <code>for</code> loop is used when the number of iterations is known. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`for (int i = 1; i <= 5; ++i) {
   // body of loop
}`}</code>
        </pre>

        <p>And <code>while</code> and <code>do...while</code> loops are generally used when the number of iterations is unknown. For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`while (condition) {
    // body of loop
}`}</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <p><strong>Also Read:</strong></p>

        <ul className="list-disc list-inside">
          <li><a href="/java-programming/nested-loop" className="text-blue-600 underline">Nested Loop in Java</a></li>
        </ul>

      </div>
    </div>
  );
}
