export default function JavaContinueStatementContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java continue Statement</h1>
      <div className="content space-y-4">

        <p>
          While working with loops, sometimes you might want to skip some statements or terminate the loop. In such cases, <code>break</code> and <code>continue</code> statements are used.
        </p>

        <p>
          To learn about the <code>break</code> statement, visit <a href="/java-programming/break-statement" className="text-blue-600 underline">Java break</a>. Here, we will learn about the <code>continue</code> statement.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="continue" className="text-2xl font-semibold mt-6 mb-2">Java continue</h2>

        <p>
          The <code>continue</code> statement skips the current iteration of a loop (<code>for</code>, <code>while</code>, <code>do...while</code>, etc).
        </p>

        <p>
          After the <code>continue</code> statement, the program moves to the end of the loop. And, test expression is evaluated (update statement is evaluated in case of the for loop).
        </p>

        <p>Here's the syntax of the continue statement.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">continue;</code>
        </pre>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: The continue statement is almost always used in decision-making statements (<a href="/java-programming/if-else-statement" className="text-blue-600 underline">if...else Statement</a>).
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="working-of-continue" className="text-2xl font-semibold mt-6 mb-2">Working of Java continue statement</h2>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/java-continue.png" alt="The working of continue statement with Java while, do...while, and for loop." title="Working of Java continue statement" height={499} width={560} />
          <figcaption>Working of Java continue Statement</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="continue-example" className="text-xl font-semibold mt-6 mb-2">Example 1: Java continue statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    // for loop
    for (int i = 1; i <= 10; ++i) {

      // if value of i is between 4 and 9
      // continue is executed
      if (i > 4 && i < 9) {
        continue;
      }
      System.out.println(i);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`1
2
3
4
9
10`}</code>
        </pre>

        <p>
          In the above program, we are using the <code>for</code> loop to print the value of <var>i</var> in each iteration. To know how <code>for</code> loop works, visit <a href="/java-programming/for-loop" className="text-blue-600 underline">Java for loop</a>. Notice the statement,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (i > 4 && i < 9) {
    continue;
}`}</code>
        </pre>

        <p>
          Here, the <code>continue</code> statement is executed when the value of <var>i</var> becomes more than <strong>4</strong> and less than <strong>9</strong>.
        </p>

        <p>
          It then skips the print statement for those values. Hence, the output skips the values <strong>5</strong>, <strong>6</strong>, <strong>7</strong>, and <strong>8</strong>.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-xl font-semibold mt-6 mb-2">Example 2: Compute the sum of 5 positive numbers</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    Double number, sum = 0.0;
    // create an object of Scanner
    Scanner input = new Scanner(System.in);

    for (int i = 1; i < 6; ++i) {
      System.out.print("Enter number " + i + " : ");
      // takes input from the user
      number = input.nextDouble();

      // if number is negative
      // continue statement is executed
      if (number <= 0.0) {
        continue;
      }

      sum += number;
    }
    System.out.println("Sum = " + sum);
    input.close();
  }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`Enter number 1: 2.2
Enter number 2: 5.6
Enter number 3: 0
Enter number 4: -2.4
Enter number 5: -3
Sum = 7.8`}</pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="continue-nested-loops" className="text-2xl font-semibold mt-6 mb-2">Java continue with Nested Loop</h2>

        <p>
          In the case of <a href="/java-programming/nested-loop" className="text-blue-600 underline">nested loops in Java</a>, the <code>continue</code> statement skips the current iteration of the innermost loop.
        </p>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/java-continue-with-nested-loop.png" alt="The continue statement skips the innermost loop while working with the nested loop in Java. " title="Working of the continue Statement with Nested Loops" height={365} width={340} />
          <figcaption>Working of Java continue statement with Nested Loops</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="example-continue-nested" className="text-xl font-semibold mt-6 mb-2">Example 3: continue with Nested Loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    int i = 1, j = 1;

    // outer loop
    while (i <= 3) {

      System.out.println("Outer Loop: " + i);

      // inner loop
      while(j <= 3) {

        if(j == 2) {
          j++;
          continue;
        }

        System.out.println("Inner Loop: " + j);
        j++;
      }
      i++;
    }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`Outer Loop: 1
Inner Loop: 1
Inner Loop: 3
Outer Loop: 2
Outer Loop: 3`}</pre>

        <p>
          In the above example, we have used the nested <a href="/java-programming/do-while-loop" className="text-blue-600 underline">while loop</a>. Note that we have used the <code>continue</code> statement inside the inner loop.
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if(j == 2) {
  j++;
  continue;
}`}</code>
        </pre>

        <p>
          Here, when the value of <var>j</var> is <strong>2</strong>, the value of <var>j</var> is increased and the <code>continue</code> statement is executed.
        </p>

        <p>
          This skips the iteration of the inner loop. Hence, the text <var>Inner Loop: 2</var> is skipped from the output.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="labeled-continue" className="text-2xl font-semibold mt-6 mb-2">Labeled continue Statement</h2>

        <p>
          Till now, we have used the unlabeled <code>continue</code> statement. However, there is another form of <code>continue</code> statement in Java known as <strong>labeled continue</strong>.
        </p>

        <p>
          It includes the label of the loop along with the <code>continue</code> keyword. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">continue label;</code>
        </pre>

        <p>
          Here, the <code>continue</code> statement skips the current iteration of the loop specified by <var>label</var>.
        </p>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/java-labeled-continue.png" alt="The labeled continue statement skips the current iteration of the loop specified by the label." title="Working of the labeled continue Statement in Java" height={419} width={340} />
          <figcaption>Working of the Java labeled continue Statement</figcaption>
        </figure>

        <p>
          We can see that the label identifier specifies the outer loop. Notice the use of the continue inside the inner loop.
        </p>

        <p>
          Here, the <code>continue</code> statement is skipping the current iteration of the labeled statement (i.e. outer loop). Then, the program control goes to the next iteration of the labeled statement.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 id="example-labeled-continue" className="text-xl font-semibold mt-6 mb-2">Example 4: labeled continue Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    // outer loop is labeled as first
    first:
    for (int i = 1; i < 6; ++i) {

      // inner loop
      for (int j = 1; j < 5; ++j) {
        if (i == 3 || j == 2)

          // skips the current iteration of outer loop
          continue first;
        System.out.println("i = " + i + "; j = " + j);
      }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`i = 1; j = 1
i = 2; j = 1
i = 4; j = 1
i = 5; j = 1`}</pre>

        <p>
          In the above example, the <code>labeled continue</code> statement is used to skip the current iteration of the loop labeled as <var>first</var>.
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (i==3 || j==2)
    continue first;`}</code>
        </pre>

        <p>
          Here, we can see the outermost <code>for</code> loop is labeled as <var>first</var>,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`first:
for (int i = 1; i < 6; ++i) {..}`}</code>
        </pre>

        <p>
          Hence, the iteration of the outer <code>for</code> loop is skipped if the value of <var>i</var> is 3 or the value of <var>j</var> is 2.
        </p>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: The use of labeled <code>continue</code> is often discouraged as it makes your code hard to understand. If you are in a situation where you have to use labeled <code>continue</code>, refactor your code and try to solve it in a different way to make it more readable.
        </div>

      </div>
    </div>
  );
}
