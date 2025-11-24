export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-none">
      <h1 className="text-3xl font-bold mb-4">Java Variables</h1>

      <p>
        Welcome to your first java program
      </p>

      <h2 className="text-2xl font-semibold mt-6">Types of Variables in Java</h2>
      <ul className="list-disc ml-6">
        <li><strong>Local Variables</strong> – declared inside methods.</li>
        <li><strong>Instance Variables</strong> – non-static, belong to objects.</li>
        <li><strong>Static Variables</strong> – declared with <code>static</code>, belong to the class.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Example of Declaring Variables</h2>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
{`int age = 20;
String name = "Raja";
double salary = 55000.50;`}
      </pre>

      <p className="mt-4">
        In Java, every variable must be declared before use, and it must match its data type.
      </p>
    </div>
  );
}
