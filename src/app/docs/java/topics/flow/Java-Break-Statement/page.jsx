export default function JavaBreakStatementContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java break Statement</h1>
      <div className="content space-y-4">

        <p id="introduction">
          While working with loops, it is sometimes desirable to skip some statements inside the loop or terminate the loop immediately without checking the test expression.
        </p>

        <p>
          In such cases, <code>break</code> and <code>continue</code> statements are used. You will learn about the <a href="/java-programming/continue-statement" title="Java continue Statement" className="text-blue-600 underline">Java continue statement</a> in the next tutorial.
        </p>

        <hr className="my-6 border-gray-300" />

        <p>
          The <code>break</code> statement in Java terminates the loop immediately, and the control of the program moves to the next statement following the loop.
        </p>

        <p>
          It is almost always used with decision-making statements (<a href="/java-programming/if-else-statement" className="text-blue-600 underline">Java if...else Statement</a>).
        </p>

        <p>Here is the syntax of the break statement in Java:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">break;</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="working-of-break" className="text-2xl font-semibold mt-6 mb-2">How break statement works?</h2>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/java-break-statement-works.jpg" alt="How break statement works in Java programming?" title="Working of Java break Statement" width="560" height="354" />
          <figcaption>Working of Java break Statement</figcaption>
        </figure>

        <hr className="my-6 border-gray-300" />

        <h3 id="break-example" className="text-xl font-semibold mt-6 mb-2">Example 1: Java break statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Test {
    public static void main(String[] args) {
      
        // for loop
        for (int i = 1; i <= 10; ++i) {

            // if the value of i is 5 the loop terminates
            if (i == 5) {
                break;
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
4`}</code>
        </pre>

        <p>
          In the above program, we are using the <code>for</code> loop to print the value of <var>i</var> in each iteration. To know how <code>for</code> loop works, visit the <a href="/java-programming/for-loop" title="Java for Loop" className="text-blue-600 underline">Java for loop</a>.
          Here, notice the statement,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (i == 5) {
    break;
}`}</code>
        </pre>

        <p>This means when the value of <var>i</var> is equal to 5, the loop terminates. Hence we get the output with values less than 5 only.</p>

        <hr className="my-6 border-gray-300" />

        <h3>Example 2: Java break statement</h3>

        <p>The program below calculates the sum of numbers entered by the user until user enters a negative number.</p>

        <p>
          To take input from the user, we have used the <code>Scanner</code> object. To learn more about <code>Scanner</code>, visit <a href="/java-programming/scanner" title="Java Scanner" className="text-blue-600 underline">Java Scanner</a>.
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Scanner;

class UserInputSum {
    public static void main(String[] args) {
      
        Double number, sum = 0.0;

        // create an object of Scanner
        Scanner input = new Scanner(System.in);
      
        while (true) {
            System.out.print("Enter a number: ");

            // takes double input from user
            number = input.nextDouble();
         
            // if number is negative the loop terminates
            if (number < 0.0) {
                break;
            }
         
           sum += number;
        }
        System.out.println("Sum = " + sum);
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Enter a number: 3.2
Enter a number: 5
Enter a number: 2.3
Enter a number: 0
Enter a number: -4.5
Sum = 10.5`}</code>
        </pre>

        <p>
          In the above program, the test expression of the <code>while</code> loop is always <code>true</code>. Here, notice the line,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`if (number < 0.0) {
    break;
}`}</code>
        </pre>

        <p>This means when the user input negative numbers, the while loop is terminated.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="break-nested-loops" className="text-2xl font-semibold mt-6 mb-2">Java break and Nested Loop</h2>

        <p>In the case of <a href="/java-programming/nested-loop" title="Java nested Loop" className="text-blue-600 underline">nested loops</a>, the <code>break</code> statement terminates the innermost loop.</p>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/nested-while-loop-break.jpg" alt="The break statement terminates the innermost while loop in case of nested loops." title="Working of break Statement with Nested Loops" width="300" height="238" />
          <figcaption>Working of break Statement with Nested Loops</figcaption>
        </figure>

        <p>Here, the break statement terminates the innermost <code>while</code> loop, and control jumps to the outer loop.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="labeled-break" className="text-2xl font-semibold mt-6 mb-2">Labeled break Statement</h2>

        <p>
          Till now, we have used the unlabeled break statement. It terminates the innermost loop and switch statement. However, there is another form of break statement in Java known as the labeled break.
        </p>

        <p>We can use the labeled break statement to terminate the outermost loop as well.</p>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/labeled-break-statement-Java.jpg" alt="The labeled break statement is used to break the outermost loop." title="Working of the labeled break statement in Java" width="350" height="276" />
          <figcaption>Working of the labeled break statement in Java</figcaption>
        </figure>

        <p>
          As you can see in the above image, we have used the <var>label</var> identifier to specify the outer loop. Now, notice how the <code>break</code> statement is used (<code>break label;</code>).
        </p>

        <p>
          Here, the <code>break</code> statement is terminating the labeled statement (i.e. outer loop). Then, the control of the program jumps to the statement after the labeled statement.
        </p>

        <p>Here's another example:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`while (testExpression) {
   // codes
   second:
   while (testExpression) {
      // codes
      while(testExpression) {
         // codes
         break second;
      }
   }
   // control jumps here
}`}</code>
        </pre>

        <p>
          In the above example, when the statement <code>break second;</code> is executed, the <code>while</code> loop labeled as <var>second</var> is terminated. And, the control of the program moves to the statement after the second <code>while</code> loop.
        </p>

        <hr className="my-6 border-gray-300" />

        <h3 id="example-labeled-break" className="text-xl font-semibold mt-6 mb-2">Example 3: labeled break Statement</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class LabeledBreak {
    public static void main(String[] args) {
   
        // the for loop is labeled as first
        first:
        for( int i = 1; i < 5; i++) {

            // the for loop is labeled as second
            second:
            for(int j = 1; j < 3; j ++ ) {
                System.out.println("i = " + i + "; j = " + j);
             
                // the break statement breaks the first for loop
                if ( i == 2)
                    break first;
            }
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`i = 1; j = 1
i = 1; j = 2
i = 2; j = 1`}</code>
        </pre>

        <p>
          In the above example, the <code>labeled break</code> statement is used to terminate the loop labeled as first. That is,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`first:
for(int i = 1; i < 5; i++) {...}`}</code>
        </pre>

        <p>
          Here, if we change the statement <code>break first;</code> to <code>break second;</code> the program will behave differently. In this case, <code>for</code> loop labeled as second will be terminated. For example,
        </p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class LabeledBreak {
    public static void main(String[] args) {
      
        // the for loop is labeled as first
        first:
        for( int i = 1; i < 5; i++) {

            // the for loop is labeled as second
            second:
            for(int j = 1; j < 3; j ++ ) {

                System.out.println("i = " + i + "; j = " + j);
       
                // the break statement terminates the loop labeled as second
                if ( i == 2)
                    break second;
            }
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`i = 1; j = 1
i = 1; j = 2
i = 2; j = 1
i = 3; j = 1
i = 3; j = 2
i = 4; j = 1
i = 4; j = 2`}</code>
        </pre>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <strong>Note</strong>: The <code>break</code> statement is also used to terminate cases inside the <code>switch</code> statement. To learn more, visit the <a href="/java-programming/switch-statement" className="text-blue-600 underline">Java switch statement</a>.
        </div>

      </div>
    </div>
  );
}
