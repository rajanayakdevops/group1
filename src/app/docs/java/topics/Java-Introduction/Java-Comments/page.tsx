export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Java Comments</h1>

      <p>
        In the previous tutorial, you learned to write your first Java program. Now, let's learn
        about Java comments.
      </p>

      <p>
        <strong>Comments</strong> are hints added to code to make it easier to read and understand.
        They are completely ignored by the Java compiler.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Example</h2>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class HelloWorld {
    public static void main(String[] args) {
        // print Hello World to the screen
        System.out.println("Hello World");
    }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">Hello World</pre>

      <p>Here, <code>// print Hello World to the screen</code> is a comment. Anything after <code>//</code> is ignored.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Single-line Comment</h2>
      <p>A single-line comment begins with <code>//</code> and ends at the end of the line.</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`// declare and initialize two variables
int a = 1;
int b = 3;

// print the output
System.out.println("This is output");`}</pre>

      <p>The Java compiler ignores everything from <code>//</code> to the end of the line.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Multi-line Comment</h2>

      <p>Use <code>/* ... */</code> to write comments across multiple lines.</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`/* This is an example of multi-line comment.
 * The program prints "Hello, World!" to the standard output.
 */

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">Hello, World!</pre>

      <p>The compiler ignores everything from <code>/*</code> to <code>*/</code>.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Prevent Executing Code Using Comments</h2>

      <p>Comments are useful for temporarily disabling code while debugging.</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`public class Main {
    public static void main(String[] args) {
        System.out.println("some code");
        System.out.println("error code");
        System.out.println("some other code");
    }
}`}</pre>

      <p>If the middle line causes an error, you can disable it:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`public class Main {
    public static void main(String[] args) {
        System.out.println("some code");
        // System.out.println("error code");
        System.out.println("some other code");
    }
}`}</pre>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Why Use Comments?</h2>
      <ul className="list-disc ml-6">
        <li>To make the code readable for future reference.</li>
        <li>Helpful during debugging.</li>
        <li>Useful for team collaboration and code understanding.</li>
      </ul>

      <p>
        Comments should not replace clean code. Prefer explaining <strong>why</strong> something is
        done rather than <strong>how</strong>.
      </p>

      <p className="mt-10">Next, we will learn about Java variables and literals.</p>
    </div>
  );
}
