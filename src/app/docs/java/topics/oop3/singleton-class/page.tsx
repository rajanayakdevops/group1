
export default function SingletonClassPage() {
  return (
    <div className="editor-contents text-black">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Singleton Class
      </h1>

      <p className="text-gray-700">
        In Java, a Singleton is a design pattern that ensures a class can only 
        have <strong>one single object</strong> throughout the application.
      </p>

      <p className="text-gray-700 font-medium">
        To create a Singleton class, it must follow these rules:
      </p>

      <ul className="list-disc ml-6 text-gray-700">
        <li>Private <a href="/docs/java/topics/oop1/constructors" className="text-blue-600 ">constructor</a> (to prevent external object creation).</li>
        <li>Private <a href="/docs/java/topics/oop1/static-keyword" className="text-blue-600 ">static</a> attribute that stores the single instance.</li>
        <li>
          Public static method that returns the instance (creates only once).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Example: Java Singleton Class Syntax
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`class SingletonExample {

    // private field that refers to the object
    private static SingletonExample singleObject;

    private SingletonExample() {
        // constructor of the SingletonExample class
    }

    public static SingletonExample getInstance() {
        // write code that allows us to create only one object
        // access the object as per our need
    }
}`}</pre>

      <p className="text-gray-700">
        <code>private static SingletonExample singleObject</code> – holds the single instance.  
        <br />
        <code>private SingletonExample()</code> – prevents creating objects from outside.  
        <br />
        <code>public static getInstance()</code> – returns the single object.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Use of Singleton in Java
      </h2>

      <p className="text-gray-700">
        Singletons are commonly used in database connections, logging systems,
        configuration managers, and thread pools.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-black">Example: Singleton Database Class</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto border border-gray-700">{`class Database {
    private static Database dbObject;

    private Database() {      
    }

    public static Database getInstance() {

        // create object if it's not already created
        if(dbObject == null) {
            dbObject = new Database();
        }

        // returns the singleton object
        return dbObject;
    }

    public void getConnection() {
        System.out.println("You are now connected to the database.");
    }
}

class Main {
    public static void main(String[] args) {
        Database db1;

        // refers to the only object of Database
        db1 = Database.getInstance();

        db1.getConnection();
    }
}`}</pre>

      <h3 className="text-xl font-semibold mt-4 text-black">Output</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md border border-gray-700">{`You are now connected to the database.`}</pre>

      <p className="text-gray-700">
        In this example:
      </p>

      <ul className="list-disc ml-6 text-gray-700">
        <li>The <code>Database</code> class is a Singleton.</li>
        <li><code>dbObject</code> stores the object reference.</li>
        <li>The private constructor prevents external instantiation.</li>
        <li><code>getInstance()</code> returns the same object every time.</li>
        <li>All clients share a single database connection.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Singleton as a Design Pattern</h2>

      <p className="text-gray-700">
        Singleton is not a Java feature but a <strong>software design pattern</strong>.
        It is used globally in many programming languages.
      </p>

      <p className="text-gray-700">
        Use Singleton only if you are sure it fits the situation.  
        For many cases, Singleton may make testing and maintenance harder.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">Also Read</h2>

      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="/docs/java/topics/oop3/nested-and-inner-class" className="text-blue-600 ">Java Nested and Inner Class</a></li>
        <li><a href="/docs/java/topics/oop3/anonymous-class" className="text-blue-600 ">Java Anonymous Class </a></li>
        <li><a href="/docs/java/topics/oop3/nested-static-class" className="text-blue-600 ">Java Nested Static Class</a></li>
      </ul>
    </div>
  );
}
