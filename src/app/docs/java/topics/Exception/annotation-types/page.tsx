import React from "react";

export default function JavaAnnotationTypes() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-4xl font-bold mb-6">Java Annotation Types</h1>

      <p className="mb-4">
        Java  are <a href="/docs/java/topics/Exception/annotations" className="text-blue-600 ">annotation</a> metadata (data about data) for our program source code. There are several
        predefined annotations provided by the Java SE. Moreover, we can also create custom annotations
        as per our needs.
      </p>

      <p className="mb-4">
        If you do not know what annotations are, visit the Java annotations tutorial.
      </p>

      <p className="mb-4">These annotations can be categorized as:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>Predefined annotations</li>
        <li>Custom annotations</li>
        <li>Meta-annotations</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">1. Predefined Annotations</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Deprecated</h3>
      <p className="mb-3">
        The @Deprecated annotation is a marker annotation that indicates the element (class, method,
        field, etc) is deprecated and has been replaced by a newer element.
      </p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Deprecated
accessModifier returnType deprecatedMethodName() { ... }`
}</pre>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`class Main {
  /**
   * @deprecated
   * This method is deprecated and has been replaced by newMethod()
   */
  @Deprecated
  public static void deprecatedMethod() { 
    System.out.println("Deprecated method"); 
  }

  public static void main(String args[]) {
    deprecatedMethod();
  }
}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Override</h3>
      <p className="mb-3">Specifies that a method of a subclass overrides the method of the superclass.</p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`class Animal {
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){
    display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@SuppressWarnings</h3>
      <p className="mb-3">
        The @SuppressWarnings annotation instructs the compiler to suppress warnings.
      </p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`class Main {
  @Deprecated
  public static void deprecatedMethod() { 
    System.out.println("Deprecated method"); 
  } 

  @SuppressWarnings("deprecated")
  public static void main(String args[]) {
    Main depObj = new Main();
    depObj.deprecatedMethod();
  }
}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@SafeVarargs</h3>
      <p className="mb-3">Indicates that a method using varargs performs safe operations.</p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`import java.util.*;

class Main {
  @SafeVarargs
  private void displayList(List<String>... lists) {
    for (List<String> list : lists) {
      System.out.println(list);
    }
  }

  public static void main(String args[]) {
    Main obj = new Main();

    List<String> universityList = Arrays.asList("Tribhuvan University", "Kathmandu University");
    obj.displayList(universityList);

    List<String> programmingLanguages = Arrays.asList("Java", "C");
    obj.displayList(universityList, programmingLanguages);
  }
}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@FunctionalInterface</h3>
      <p className="mb-3">Marks an interface with a single abstract method.</p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@FunctionalInterface
public interface MyFuncInterface{
  public void firstMethod();
}`
}</pre>

      <h2 className="text-3xl font-semibold mt-10 mb-4">2. Custom Annotations</h2>
      <p className="mb-4">We can create our own annotations using @interface.</p>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@interface MyCustomAnnotation {
  String value() default "default value";
}

class Main {
  @MyCustomAnnotation(value = "programiz")
  public void method1() {
    System.out.println("Test method 1");
  }

  public static void main(String[] args) throws Exception {
    Main obj = new Main();
    obj.method1();
  }
}`
}</pre>

      <h2 className="text-3xl font-semibold mt-10 mb-4">3. Meta-Annotations</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Retention</h3>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Retention(RetentionPolicy.RUNTIME)
public @interface MyCustomAnnotation {}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Documented</h3>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Documented
public @interface MyCustomAnnotation {}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Target</h3>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Target(ElementType.METHOD)
public @interface MyCustomAnnotation {}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Inherited</h3>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Inherited
public @interface MyCustomAnnotation {}

@MyCustomAnnotation
public class ParentClass{}

public class ChildClass extends ParentClass {}`
}</pre>

      <h3 className="text-2xl font-semibold mt-6 mb-2">@Repeatable</h3>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto text-sm">{
`@Repeatable(Universities.class)
public @interface University {
  String name();
}

public @interface Universities {
  University[] value();
}

@University(name = "TU")
@University(name = "KU")
private String uniName;`
}</pre>
    </div>
  );
}