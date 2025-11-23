export default function JavaDocsPage() {
  return (
    <div className="container mx-auto py-16 prose prose-lg max-w-4xl">

      <h1>Getting Started with Java</h1>

      <p>
        Java is a high level, class based, object oriented programming language 
        that is widely used across various operating systems.
      </p>

      <p>You can run Java on your computer using the following two methods:</p>
      <ul>
        <li>Run Java online</li>
        <li>Install Java on your computer</li>
      </ul>

      <p>In this tutorial, you will learn both methods.</p>

      <h2>Run Java Online</h2>
      <p>
        To run Java code, you need to have a Java compiler installed on your system. 
        However, if you want to start immediately, you can use our free online Java compiler.
      </p>

      <h3>Online Java Compiler</h3>
      <p>
        The online compiler enables you to run Java code directly in your browser—no installation required.
      </p>

      <h2>Install Java on Your Computer</h2>
      <p>
        For those who prefer to install Java on your computer, this guide will walk you through 
        the installation process on Windows, macOS, or Linux (Ubuntu).
      </p>

      <ul>
        <li>Windows</li>
        <li>Mac</li>
        <li>Linux</li>
      </ul>

      <p>Follow the steps below to install Java on Windows:</p>

      <h3>Step 1: Download JDK</h3>
      <p>Go to the official Oracle website to download the JDK.</p>

      <h3>Step 2: Run the Installer</h3>
      <p>
        Go to your downloads folder and run the installer you just downloaded. Simply click Next to proceed.
      </p>

      <h3>Step 3: Configure Environment Variables</h3>
      <p>
        After installation, you will need to tell your system where to find Java. 
        This is done by setting environment variables.
      </p>

      <p><strong>Locate JDK Path:</strong> Normally located at:</p>
      <pre>C:\Program Files\Java\jdk-22\bin</pre>

      <p><strong>Access Environment Variables:</strong>  
        Search “environment variables” in the start menu → open → edit system variables.
      </p>

      <p><strong>Update PATH Variable:</strong>  
        Edit System PATH → Add new → paste JDK bin path.
      </p>

      <p><strong>Set JAVA_HOME:</strong></p>
      <pre>C:\Program Files\Java\jdk-22</pre>
      
      <h3>Step 4: Verify Installation</h3>
      <p>Run the following command:</p>
      <pre>java --version</pre>

      <h2>Run Your First Java Program</h2>

      <p>Create a new file with the following code:</p>

    <pre>{`
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`}</pre>


      <p>Save it as <strong>HelloWorld.java</strong></p>

      <p>Compile:</p>
      <pre>javac HelloWorld.java</pre>

      <p>Run:</p>
      <pre>java HelloWorld</pre>

      <p>
        You should see <strong>Hello World</strong> printed on the screen.  
        In the next tutorial, you’ll learn how the basic Java program works.
      </p>

    </div>
  );
}
