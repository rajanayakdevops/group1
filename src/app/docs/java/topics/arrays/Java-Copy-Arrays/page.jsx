export default function JavaCopyArraysContent() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-3xl font-bold mb-6">Java Copy Arrays</h1>
      <div className="content space-y-4">

        <p>
          In Java, we can copy one <a href="/java-programming/arrays" className="text-blue-600 underline">array</a> into another. There are several techniques you can use to copy arrays in Java.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="assignment" className="text-2xl font-semibold mt-6 mb-2">1. Copying Arrays Using Assignment Operator</h2>

        <p>Let's take an example,</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
    public static void main(String[] args) {
       
        int[] numbers = {1, 2, 3, 4, 5, 6};
        int[] positiveNumbers = numbers;    // copying arrays

        for (int number: positiveNumbers) {
            System.out.print(number + ", ");
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>1, 2, 3, 4, 5, 6</code>
        </pre>

        <p>
          This technique is the easiest one and it works as well. However, there is a problem with this technique. If we change elements of one array, corresponding elements of the other arrays also change. For example,
        </p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`class Main {
    public static void main(String[] args) {
      
        int[] numbers = {1, 2, 3, 4, 5, 6};
        int[] positiveNumbers = numbers;    // copying arrays
      
        // change value of first array
        numbers[0] = -1;

        // printing the second array
        for (int number: positiveNumbers) {
            System.out.print(number + ", ");
        }
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>-1, 2, 3, 4, 5, 6</code>
        </pre>

        <p>
          It's because both arrays refer to the same array object (shallow copy). To create new array objects when copying, you need a deep copy.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="using-loop" className="text-2xl font-semibold mt-6 mb-2">2. Using Looping Construct to Copy Arrays</h2>

        <p>Let's take an example:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Arrays;

class Main {
    public static void main(String[] args) {
      
        int[] source = {1, 2, 3, 4, 5, 6};
        int[] destination = new int[6];

        // iterate and copy elements from source to destination
        for (int i = 0; i < source.length; ++i) {
            destination[i] = source[i];
        }
      
         // converting array to string
        System.out.println(Arrays.toString(destination));
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>[1, 2, 3, 4, 5, 6]</code>
        </pre>

        <p>
          Here, the source and destination array refer to different objects (deep copy). Hence, if elements of one array are changed, corresponding elements of another array remain unchanged.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 id="arraycopy" className="text-2xl font-semibold mt-6 mb-2">3. Copying Arrays Using arraycopy() method</h2>

        <p>The <code>System.arraycopy()</code> method copies a specified portion of the source array to the destination array. Syntax:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">arraycopy(Object src, int srcPos, Object dest, int destPos, int length)</code>
        </pre>

        <ul className="list-disc list-inside">
          <li><var>src</var> - source array you want to copy</li>
          <li><var>srcPos</var> - starting position index in the source array</li>
          <li><var>dest</var> - destination array where elements will be copied</li>
          <li><var>destPos</var> - starting position index in the destination array</li>
          <li><var>length</var> - number of elements to copy</li>
        </ul>

        <p>Example:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        int[] n1 = {2, 3, 12, 4, 12, -2};
      
        int[] n3 = new int[5];
        int[] n2 = new int[n1.length];
      
        // copying entire n1 array to n2
        System.arraycopy(n1, 0, n2, 0, n1.length);
        System.out.println("n2 = " + Arrays.toString(n2));  
      
        // copying elements from index 2 on n1 array to index 1 of n3 array, copying 2 elements
        System.arraycopy(n1, 2, n3, 1, 2);
        System.out.println("n3 = " + Arrays.toString(n3));  
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`n2 = [2, 3, 12, 4, 12, -2]
n3 = [0, 12, 4, 0, 0]`}</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="copyofrange" className="text-2xl font-semibold mt-6 mb-2">4. Copying Arrays Using copyOfRange() method</h2>

        <p>This method from <code>java.util.Arrays</code> copies a range of elements from an array to a new array.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Arrays;

class ArraysCopy {
    public static void main(String[] args) {
      
        int[] source = {2, 3, 12, 4, 12, -2};
      
        int[] destination1 = Arrays.copyOfRange(source, 0, source.length);      
        System.out.println("destination1 = " + Arrays.toString(destination1)); 
      
        int[] destination2 = Arrays.copyOfRange(source, 2, 5); 
        System.out.println("destination2 = " + Arrays.toString(destination2));   
    }
}`}</code>
        </pre>

        <p><strong>Output</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          <code>{`destination1 = [2, 3, 12, 4, 12, -2]
destination2 = [12, 4, 12]`}</code>
        </pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="copying-2d" className="text-2xl font-semibold mt-6 mb-2">5. Copying 2d Arrays Using Loop</h2>

        <p>We can copy 2-dimensional arrays similarly using loops.</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Arrays;

class Main {
    public static void main(String[] args) {
      
        int[][] source = {
            {1, 2, 3, 4}, 
            {5, 6},
            {0, 2, 42, -4, 5}
        };

        int[][] destination = new int[source.length][];

        for (int i = 0; i < destination.length; ++i) {

            // allocate space for each row
            destination[i] = new int[source[i].length];

            for (int j = 0; j < destination[i].length; ++j) {
                destination[i][j] = source[i][j];
            }
        }
     
        // displaying destination array
        System.out.println(Arrays.deepToString(destination));  
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`[[1, 2, 3, 4], [5, 6], [0, 2, 42, -4, 5]]`}</pre>

        <hr className="my-6 border-gray-300" />

        <h2 id="arraycopy-2d" className="text-2xl font-semibold mt-6 mb-2">Copying 2d Arrays using arraycopy()</h2>

        <p>You can simplify the inner loop by using <code>System.arraycopy()</code> as follows:</p>

        <pre className="bg-gray-100 p-3 rounded max-h-[600px] overflow-auto">
          <code className="java hljs">{`import java.util.Arrays;

class Main {
    public static void main(String[] args) {
      
        int[][] source = {
            {1, 2, 3, 4}, 
            {5, 6},
            {0, 2, 42, -4, 5}
        };

        int[][] destination = new int[source.length][];

        for (int i = 0; i < source.length; ++i) {
            // allocate space for each row
            destination[i] = new int[source[i].length];
            System.arraycopy(source[i], 0, destination[i], 0, destination[i].length);
        }
     
        // displaying destination array
        System.out.println(Arrays.deepToString(destination));      
    }
}`}</code>
        </pre>

        <p><strong>Output</strong>:</p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">{`[[1, 2, 3, 4], [5, 6], [0, 2, 42, -4, 5]]`}</pre>

      </div>
    </div>
  );
}
