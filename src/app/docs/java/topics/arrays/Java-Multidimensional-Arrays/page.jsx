export default function JavaMultidimensionalArraysContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Multidimensional Arrays</h1>
      <div className="content space-y-4">

        <p id="introduction">
          Before we learn about the multidimensional array, make sure you know about <a href="/java-programming/arrays" className="text-blue-600 underline">Java array</a>.
        </p>

        <p>
          A multidimensional array is an array of arrays. Each element of a multidimensional array is an array itself. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">int[][] a = new int[3][4];</code>
        </pre>

     

        <p>Remember, Java uses zero-based indexing, that is, indexing of arrays in Java starts with 0 and not 1.</p>

        <p>
          Let's take another example of the multidimensional array. This time we will be creating a 3-dimensional array. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">String[][][] data = new String[3][4][2];</code>
        </pre>

        <p>
          Here, <var>data</var> is a 3d array that can hold a maximum of 24 (3*4*2) elements of type <a href="/java-programming/string" className="text-blue-600 underline">String</a>.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="2d" className="text-2xl font-semibold mt-6 mb-2">How to initialize a 2d array in Java?</h2>

        <p>Here is how we can initialize a 2-dimensional array in Java.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`int[][] a = {
      {1, 2, 3}, 
      {4, 5, 6, 9}, 
      {7}, 
};`}</code>
        </pre>

       

        <h3 className="text-xl font-semibold mt-6 mb-2">Example: 2-dimensional Array</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class MultidimensionalArray {
    public static void main(String[] args) {

        // create a 2d array
        int[][] a = {
            {1, 2, 3}, 
            {4, 5, 6, 9}, 
            {7}, 
        };
      
        // calculate the length of each row
        System.out.println("Length of row 1: " + a[0].length);
        System.out.println("Length of row 2: " + a[1].length);
        System.out.println("Length of row 3: " + a[2].length);
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`Length of row 1: 3
Length of row 2: 4
Length of row 3: 1`}</code>
        </pre>

        <p>
          In the above example, we are creating a multidimensional array named <var>a</var>. Since each component of a multidimensional array is also an array (<code>a[0]</code>, <code>a[1]</code> and <code>a[2]</code> are also arrays).
        </p>

        <p>Here, we are using the <code>length</code> attribute to calculate the length of each row.</p>

        <hr className="my-6 border-gray-300" />

        <h3 id="2d-example" className="text-xl font-semibold mt-6 mb-2">Example: Print all elements of 2d array Using Loop</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class MultidimensionalArray {
    public static void main(String[] args) {

        int[][] a = {
            {1, -2, 3}, 
            {-4, -5, 6, 9}, 
            {7}, 
        };
      
        for (int i = 0; i < a.length; ++i) {
            for(int j = 0; j < a[i].length; ++j) {
                System.out.println(a[i][j]);
            }
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`1
-2
3
-4
-5
6
9
7`}</code>
        </pre>

        <p>We can also use the <a href="/java-programming/enhanced-for-loop" className="text-blue-600 underline">for...each loop</a> to access elements of the multidimensional array. For example,</p>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class MultidimensionalArray {
    public static void main(String[] args) {

        // create a 2d array
        int[][] a = {
            {1, -2, 3}, 
            {-4, -5, 6, 9}, 
            {7}, 
        };
      
        // first for...each loop access the individual array
        // inside the 2d array
        for (int[] innerArray: a) {
            // second for...each loop access each element inside the row
            for(int data: innerArray) {
                System.out.println(data);
            }
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`1
-2
3
-4
-5
6
9
7`}</code>
        </pre>

        <p>
          In the above example, we are have created a 2d array named <var>a</var>. We then used <code>for</code> loop and <code>for...each</code> loop to access each element of the array.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="3d-array" className="text-2xl font-semibold mt-6 mb-2">How to initialize a 3d array in Java?</h2>

        <p>Let's see how we can use a 3d array in Java. We can initialize a 3d array similar to the 2d array. For example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`// test is a 3d array
int[][][] test = {
        {
          {1, -2, 3}, 
          {2, 3, 4}
        }, 
        { 
          {-4, -5, 6, 9}, 
          {1}, 
          {2, 3}
        } 
};`}</code>
        </pre>

        <p>Basically, a 3d array is an array of 2d arrays. The rows of a 3d array can also vary in length just like in a 2d array.</p>

        <hr className="my-6 border-gray-300" />

        <h3 id="3d-example" className="text-xl font-semibold mt-6 mb-2">Example: 3-dimensional Array</h3>

        <pre className="bg-gray-200 p-4 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class ThreeArray {
    public static void main(String[] args) {

        // create a 3d array
        int[][][] test = {
            {
              {1, -2, 3}, 
              {2, 3, 4}
            }, 
            { 
              {-4, -5, 6, 9}, 
              {1}, 
              {2, 3}
            } 
        };

        // for..each loop to iterate through elements of 3d array
        for (int[][] array2D: test) {
            for (int[] array1D: array2D) {
                for(int item: array1D) {
                    System.out.println(item);
                }
            }
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>

        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`1
-2
3
2
3
4
-4
-5
6
9
1
2
3`}</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <p><strong>Also Read:</strong></p>

        <ul className="list-disc list-inside">
          <li><a href="/java-programming/examples/add-matrix" className="text-blue-600 underline">Java Program to Add Two Matrix Using Multi-dimensional Arrays</a></li>
          <li><a href="/java-programming/examples/multiply-matrix" className="text-blue-600 underline">Java Program to Multiply Two Matrix Using Multi-dimensional Arrays</a></li>
        </ul>

      </div>
    </div>
  );
}
