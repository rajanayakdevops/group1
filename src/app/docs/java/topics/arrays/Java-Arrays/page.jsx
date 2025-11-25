export default function JavaArraysContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Arrays</h1>
      <div className="content space-y-4">

        <p id="introduction">
          An array is a collection of similar types of data.
        </p>

        <p>
          For example, if we want to store the names of 100 people then we can create an array of the string type that can store 100 names.
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">String[] array = new String[100];</code>
        </pre>

        <p>
          Here, the above array cannot store more than 100 names. The number of values in a Java array is always fixed.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="declaration" className="text-2xl font-semibold mt-6 mb-2">How to declare an array in Java?</h2>

        <p>In Java, here is how we can declare an array.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">dataType[] arrayName;</code>
        </pre>

        <ul className="list-disc list-inside">
          <li><var>dataType</var> - it can be <a href="/java-programming/variables-primitive-data-types#data-types" className="text-blue-600 underline">primitive data types</a> like <code>int</code>, <code>char</code>, <code>double</code>, <code>byte</code>, etc. or <a href="/java-programming/class-objects" className="text-blue-600 underline">Java objects</a></li>
          <li><var>arrayName</var> - it is an <a href="/java-programming/keywords-identifiers#identifiers" className="text-blue-600 underline">identifier</a></li>
        </ul>

        <p>For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">double[] data;</code>
        </pre>

        <p><var>data</var> is an array that can hold values of type <code>double</code>.</p>

        <p><strong>But, how many elements can array this hold?</strong></p>

        <p>
          Good question! To define the number of elements that an array can hold, we have to allocate memory for the array in Java. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// declare an array
double[] data;

// allocate memory
data = new double[10];`}</code>
        </pre>

        <p>Here, the array can store <strong>10</strong> elements. We can also say that the <strong>size or length</strong> of the array is 10.</p>

        <p>
          In Java, we can declare and allocate the memory of an array in one single statement. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">double[] data = new double[10];</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="initialization" className="text-2xl font-semibold mt-6 mb-2">How to Initialize Arrays in Java?</h2>

        <p>In Java, we can initialize arrays during declaration. For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`//declare and initialize and array
int[] age = {12, 4, 5, 2, 5};`}</code>
        </pre>

        <p>Here, we have created an array named age and initialized it with the values inside the curly brackets.</p>

        <p>
          Note that we have not provided the size of the array. In this case, the Java compiler automatically specifies the size by counting the number of elements in the array (i.e. 5).
        </p>

        <p>
          In the Java array, each memory location is associated with a number. The number is known as an array index. We can also initialize arrays in Java, using the index number. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// declare an array
int[] age = new int[5];

// initialize array
age[0] = 12;
age[1] = 4;
age[2] = 5;
..`}</code>
        </pre>

        <figure>
          <img src="//cdn.programiz.com/sites/tutorial2program/files/initialize-array-during-declaration-java.jpg" alt="Elements are stored in the array" width={300} height={74} />
          <figcaption>Java Arrays initialization</figcaption>
        </figure>

        <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
          <p><strong>Note</strong>:</p>
          <ul className="list-disc list-inside">
            <li>Array indices always start from 0. That is, the first element of an array is at index 0.</li>
            <li>If the size of an array is <var>n</var>, then the last element of the array will be at index <var>n-1</var>.</li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 id="access-array" className="text-2xl font-semibold mt-6 mb-2">How to Access Elements of an Array in Java?</h2>

        <p>We can access the element of an array using the index number. Here is the syntax for accessing elements of an array,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">// access array elements
array[index]</code>
        </pre>

        <p>Let's see an example of accessing array elements using index numbers.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Example: Access Array Elements</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
  
    // create an array
    int[] age = {12, 4, 5, 2, 5};

    // access each array elements
    System.out.println("Accessing Elements of Array:");
    System.out.println("First Element: " + age[0]);
    System.out.println("Second Element: " + age[1]);
    System.out.println("Third Element: " + age[2]);
    System.out.println("Fourth Element: " + age[3]);
    System.out.println("Fifth Element: " + age[4]);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Accessing Elements of Array:
First Element: 12
Second Element: 4
Third Element: 5
Fourth Element: 2
Fifth Element: 5`}</code>
        </pre>

        <p>
          In the above example, notice that we are using the index number to access each element of the array.
          We can use loops to access all the elements of the array at once.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="looping-array" className="text-2xl font-semibold mt-6 mb-2">Looping Through Array Elements</h2>

        <p>In Java, we can also loop through each element of the array. For example,</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Example: Using For Loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
  
    // create an array
    int[] age = {12, 4, 5};

    // loop through the array
    // using for loop
    System.out.println("Using for Loop:");
    for(int i = 0; i < age.length; i++) {
      System.out.println(age[i]);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`Using for Loop:
12
4
5`}</pre>

        <p>
          In the above example, we are using the <a href="/java-programming/for-loop" className="text-blue-600 underline">for Loop in Java</a> to iterate through each element of the array. Notice the expression inside the loop,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">age.length</code>
        </pre>

        <p>Here, we are using the <code>length</code> property of the array to get the size of the array.</p>

        <p>
          We can also use the <a href="/java-programming/enhanced-for-loop" className="text-blue-600 underline">for-each loop</a> to iterate through the elements of an array. For example,
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Example: Using the for-each Loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {
  
    // create an array
    int[] age = {12, 4, 5};

    // loop through the array
    // using for-each loop
    System.out.println("Using for-each Loop:");
    for(int a : age) {
      System.out.println(a);
    }
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`Using for-each Loop:
12
4
5`}</pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="example" className="text-2xl font-semibold mt-6 mb-2">Example: Compute Sum and Average of Array Elements</h2>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
  public static void main(String[] args) {

    int[] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
    int sum = 0;
    Double average;
    
    // access all elements using for each loop
    // add each element in sum
    for (int number: numbers) {
      sum += number;
    }
   
    // get the total number of elements
    int arrayLength = numbers.length;

    // calculate the average
    // convert the average from int to double
    average =  ((double)sum / (double)arrayLength);

    System.out.println("Sum = " + sum);
    System.out.println("Average = " + average);
  }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`Sum = 36
Average = 3.6`}</pre>

        <p>
          In the above example, we have created an array of named <var>numbers</var>. We have used the <code>for...each</code> loop to access each element of the array.
        </p>

        <p>Inside the loop, we are calculating the sum of each element. Notice the line,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">int arrayLength = numbers.length;</code>
        </pre>

        <p>
          Here, we are using the <a href="http://stackoverflow.com/questions/8755812/array-length-in-java" className="text-blue-600 underline">length attribute</a> of the array to calculate the size of the array. We then calculate the average using:
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">average = ((double)sum / (double)arrayLength);</code>
        </pre>

        <p>As you can see, we are converting the <code>int</code> value into <code>double</code>. This is called type casting in Java. To learn more about typecasting, visit <a href="/java-programming/typecasting" className="text-blue-600 underline">Java Type Casting</a>.</p>

        <hr className="my-6 border-gray-300" />

        <h3 id="multidimensional" className="text-xl font-semibold mt-6 mb-2">Multidimensional Arrays</h3>

        <p>
          Arrays we have mentioned till now are called one-dimensional arrays. However, we can declare multidimensional arrays in Java.
        </p>

        <p>A multidimensional array is an array of arrays. That is, each element of a multidimensional array is an array itself. For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`double[][] matrix = {
  {1.2, 4.3, 4.0}, 
  {4.1, -1.1}
};`}</code>
        </pre>

        <p>Here, we have created a multidimensional array named matrix. It is a 2-dimensional array. To learn more, visit the <a href="/java-programming/multidimensional-array" className="text-blue-600 underline">Java multidimensional array</a>.</p>

        <hr className="my-6 border-gray-300" />

        <p><strong>Also Read:</strong></p>

        <ul className="list-disc list-inside">
          <li><a href="/java-programming/copy-arrays" className="text-blue-600 underline">Java Copy Array</a></li>
          <li><a href="/java-programming/examples/print-array" className="text-blue-600 underline">Java Program to Print an Array</a></li>
          <li><a href="/java-programming/examples/concatenate-two-arrays" className="text-blue-600 underline">Java Program to Concatenate two Arrays</a></li>
          <li><a href="/java-programming/examples/convert-list-array" className="text-blue-600 underline">Java ArrayList to Array and Array to ArrayList</a></li>
          <li><a href="/java-programming/arraylist" className="text-blue-600 underline">Java Dynamic Array</a></li>
        </ul>

      </div>
    </div>
  );
}
