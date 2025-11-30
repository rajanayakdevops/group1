import React from "react";

export default function JavaMethodOverloading() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Method Overloading
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, <strong>method overloading</strong> allows two or more methods to have the same name but differ in <strong>parameters</strong> (different number, different type, or both). Overloaded methods may have the same or different return types.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`void func() { ... }
void func(int a) { ... }
float func(double a) { ... }
float func(int a, float b) { ... }`}
      </pre>

      <p className="text-gray-700 mb-4">
        Here, <code>func()</code> is overloaded. The return types may vary, but overloading is determined by parameters.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Why Method Overloading?
      </h2>
      <p className="text-gray-700 mb-4">
        Method overloading increases code readability and avoids creating multiple methods with different names for the same operation.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 1: Overloading by changing the number of parameters
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class MethodOverloading {
    private static void display(int a){
        System.out.println("Arguments: " + a);
    }

    private static void display(int a, int b){
        System.out.println("Arguments: " + a + " and " + b);
    }

    public static void main(String[] args) {
        display(1);
        display(1, 4);
    }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong><br />Arguments: 1<br />Arguments: 1 and 4</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 2: Overloading by changing the data type of parameters
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class MethodOverloading {
    private static void display(int a){
        System.out.println("Got Integer data.");
    }

    private static void display(String a){
        System.out.println("Got String object.");
    }

    public static void main(String[] args) {
        display(1);
        display("Hello");
    }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong><br />Got Integer data.<br />Got String object.</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Example 3: Real-world example
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base border border-gray-700 mb-4">
{`class HelperService {
    private String formatNumber(int value) {
        return String.format("%d", value);
    }

    private String formatNumber(double value) {
        return String.format("%.3f", value);
    }

    private String formatNumber(String value) {
        return String.format("%.2f", Double.parseDouble(value));
    }

    public static void main(String[] args) {
        HelperService hs = new HelperService();
        System.out.println(hs.formatNumber(500));
        System.out.println(hs.formatNumber(89.9934));
        System.out.println(hs.formatNumber("550"));
    }
}`}
      </pre>
      <p className="bg-gray-900 text-white p-3 rounded-md border border-gray-300 mb-6"><strong>Output:</strong><br />500<br />89.993<br />550.00</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3 text-black">
        Important Points
      </h2>
      <ul className="list-disc ml-5 sm:ml-6 text-gray-700 mb-4">
        <li><a href="/docs/java/topics/oop1/Methods" className="text-blue-600 ">Methods</a> can have the same name inside the same class if they differ in parameters.</li>
        <li>Overloading is done by changing the number or data type of arguments.</li>
        <li>Changing only the return type does <strong>not</strong> constitute overloading.</li>
        <li> <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">Constructors</a> can also be overloaded similarly.</li>
      </ul>
    </div>
  );
}
