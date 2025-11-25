export default function VariablePage() {

  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Your First Java Program</h1>

      <p>
        In the previous tutorial, you learned how to install Java on your computer. Now, let's write
        a simple Java program.
      </p>

      <p>The following program displays <strong>Hello, World!</strong> on the screen:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`public class Main {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</pre>

      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">Output</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`Hello, World!`}</pre>

      <p>
        This <strong>Hello World!</strong> program introduces the basic syntax structure of Java.
        It's okay if you don't understand everything yet — we will learn each part step by step.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">How the Program Works</h2>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`public class Main { 

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</pre>

      <p>Notice this line:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`System.out.println("Hello, World!");`}</pre>

      <p>This prints text to the screen. Remember:</p>
      <ul className="list-disc ml-6">
        <li>You must place everything you print inside parentheses <code>()</code>.</li>
        <li>Strings must be inside double quotes <code>""</code>.</li>
        <li>Every statement ends with a semicolon <code>;</code>.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Basic Structure of a Java Program</h2>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class Main {
    public static void main(String[] args) {

        ...  // your code goes here

    }
}`}</pre>

      <p>You will write your Java code where the <code>...</code> is located between the curly braces.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Installation Resources</h2>

      <p>Use the links below to download Java tools (highlighted in blue):</p>

      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.oracle.com/java/technologies/downloads/" className="text-blue-600 underline" target="_blank">
            Download Oracle JDK
          </a>
        </li>
        <li>
          <a href="https://jdk.java.net/" className="text-blue-600 underline" target="_blank">
            Download OpenJDK
          </a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/idea/download/" className="text-blue-600 underline" target="_blank">
            Download IntelliJ IDEA
          </a>
        </li>
        <li>
          <a href="https://www.eclipse.org/downloads/" className="text-blue-600 underline" target="_blank">
            Download Eclipse IDE
          </a>
        </li>
        <li>
          <a href="https://code.visualstudio.com/" className="text-blue-600 underline" target="_blank">
            Download VS Code (Java Extensions)
          </a>
        </li>
      </ul>
    </div>
  );
}

