export default function JavaForEachLoopContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java for-each Loop</h1>
      <div className="content space-y-4">
        <p id="introduction">
          In Java, the <strong>for-each</strong> loop is used to iterate through elements of <a href="/java-programming/arrays" className="text-blue-600 underline">arrays</a> and <a href="/java-programming/collections" className="text-blue-600 underline">collections</a> (like <a href="/java-programming/arraylist" className="text-blue-600 underline">ArrayList</a>). It is also known as the enhanced for loop.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">for-each Loop Syntax</h2>
        <p>The syntax of the Java <strong>for-each</strong> loop is:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`for(dataType item : array) {
    ...
}`}</code>
        </pre>

        <p>Here,</p>
        <ul className="list-disc list-inside">
          <li><strong>array</strong> - an array or a collection</li>
          <li><strong>item</strong> - each item of array/collection is assigned to this variable</li>
          <li><strong>dataType</strong> - the <a href="/java-programming/variables-primitive-data-types" className="text-blue-600 underline">data type</a> of the array/collection</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Example 1: Print Array Elements</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// print array elements 

class Main {
  public static void main(String[] args) {
      
    // create an array
    int[] numbers = {3, 9, 5, -5};
    
    // for each loop 
    for (int number: numbers) {
      System.out.println(number);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`3
9
5
-5`}</code>
        </pre>

        <p>
          Here, we have used the <strong>for-each loop</strong> to print each element of the <var>numbers</var> array one by one.
        </p>

        <ul className="list-disc list-inside">
          <li>In the first iteration, <var>item</var> will be 3.</li>
          <li>In the second iteration, <var>item</var> will be 9.</li>
          <li>In the third iteration, <var>item</var> will be 5.</li>
          <li>In the fourth iteration, <var>item</var> will be -5.</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 id="example" className="text-2xl font-semibold mt-6 mb-2">Example 2: Sum of Array Elements</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// Calculate the sum of all elements of an array

class Main {
 public static void main(String[] args) {
  
   // an array of numbers
   int[] numbers = {3, 4, 5, -5, 0, 12};
   int sum = 0;

   // iterating through each element of the array 
   for (int number: numbers) {
     sum += number;
   }
  
   System.out.println("Sum = " + sum);
 }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>Sum = 19</code></pre>

        <hr className="my-6 border-gray-300" />

        <p>In the above program, the execution of the <code>for each</code> loop looks as:</p>

        <div className="overflow-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full text-left mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2">Iteration</th>
                <th className="border border-gray-300 px-3 py-2">Variables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = 3<br /><var>sum</var> = 0 + 3 = 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = 4<br /><var>sum</var> = 3 + 4 = 7</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = 5<br /><var>sum</var> = 7 + 5 = 12</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = -5<br /><var>sum</var> = 12 + (-5) = 7</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = 0<br /><var>sum</var> = 7 + 0 = 7</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">6</td>
                <td className="border border-gray-300 px-3 py-2"><var>number</var> = 12<br /><var>sum</var> = 7 + 12 = 19</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>As we can see, we have added each element of the <var>numbers</var> array to the <var>sum</var> variable in each iteration of the loop.</p>

        <hr className="my-6 border-gray-300" />

        <h2 id="difference" className="text-2xl font-semibold mt-6 mb-2">for loop Vs for-each loop</h2>

        <p>Let's see how a <code>for-each</code> loop is different from a regular <a href="/java-programming/for-loop" className="text-blue-600 underline">Java for loop</a>.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Using for loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
 public static void main(String[] args) {
    
   char[] vowels = {'a', 'e', 'i', 'o', 'u'};

   // iterating through an array using a for loop
   for (int i = 0; i < vowels.length; ++ i) {
     System.out.println(vowels[i]);
   }
 }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>{`a
e
i
o
u`}</code></pre>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Using for-each Loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
 public static void main(String[] args) {

   char[] vowels = {'a', 'e', 'i', 'o', 'u'};
  
   // iterating through an array using the for-each loop
   for (char item: vowels) {
     System.out.println(item);
   }
 }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto"><code>{`a
e
i
o
u`}</code></pre>

        <p>Here, the output of both programs is the same. However, the <strong>for-each</strong> loop is easier to write and understand.</p>
        <p>This is why the <strong>for-each</strong> loop is preferred over the <strong>for</strong> loop when working with arrays and collections.</p>
      </div>
    </div>
  );
}
