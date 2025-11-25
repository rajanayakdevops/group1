
import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Getting started with Java</h1>

      <p>
        Java is a high level, class based, object oriented programming language that is widely used
        across various operating systems.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">How to Run Java</h2>
      <p>You can run Java on your computer using two methods:</p>
      <ul className="list-disc ml-6">
        <li>Run Java online</li>
        <li>Install Java on your computer</li>
      </ul>
      <p>In this tutorial, you will learn both methods.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Run Java Online</h2>
      <p>
        To run Java code, you need to have a Java compiler installed on your system. However, if you
        want to start immediately, you can use our free online Java compiler.
      </p>
      <br/>
      <p><strong>Online Java Compiler</strong> – run Java code directly in your browser, no installation required.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Install Java on Your Computer</h2>
      <p>This guide will walk you through installing Java on Windows, macOS, or Linux.</p>
      <ul className="list-disc ml-6">
        <li>Windows</li>
        <li>Mac</li>
        <li>Linux</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Windows Installation Steps</h3>
      <ol className="list-decimal ml-6">
        <li>Download JDK (Java Development Kit)</li>
        <li>Run the Installer</li>
        <li>Configure Environment Variables</li>
        <li>Verify Installation</li>
      </ol>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Step 1: Download JDK</h3>
      <p className="mb-1">Go to the official Oracle website to download the JDK:</p>
      <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://www.oracle.com/java/technologies/downloads/">Download Oracle JDK</a>
      <br />
      <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://jdk.java.net/">Download OpenJDK</a>
      
      <p className="mt-2">Choose the x64 MSI Installer to download.</p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Step 2: Run the Installer</h3>
      <p>Open your downloads folder, run the installer, and click Next to proceed.</p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Step 3: Configure Environment Variables</h3>
      <p>After installation, set environment variables so your system can locate Java.</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base mt-4 mb-4">{`C:\Program Files\Java\jdk-22\bin`}</pre>

      <p>Add this path to your PATH variable and create JAVA_HOME pointing to:</p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base mt-4">{`C:\Program Files\Java\jdk-22`}</pre>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Step 4: Verify Installation</h3>
  

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base mb-4">{`java --version`}</pre>
      <p>If Java is installed correctly, version details will appear.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Run Your First Java Program</h2>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}</pre>
      <br></br>


      <p>Save the file as <code>HelloWorld.java</code> and run:</p>
      <br></br>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`javac HelloWorld.java
java HelloWorld`}</pre>
      <br></br>

      <p>You should see <strong>Hello World</strong> printed to the command prompt.</p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Java Resources & Downloads</h2>
      <ul className="list-disc ml-6">
        <li><a href="https://www.oracle.com/java/technologies/downloads/" className="text-blue-600 underline" target="_blank">Oracle JDK</a></li>
        <li><a href="https://jdk.java.net/" className="text-blue-600 underline" target="_blank">OpenJDK Builds</a></li>
        <li><a href="https://www.eclipse.org/downloads/" className="text-blue-600 underline" target="_blank">Eclipse IDE</a></li>
        <li><a href="https://www.jetbrains.com/idea/download/" className="text-blue-600 underline" target="_blank">IntelliJ IDEA</a></li>
        <li><a href="https://code.visualstudio.com/" className="text-blue-600 underline" target="_blank">VS Code (Java Extensions)</a></li>
        <li><a href="https://maven.apache.org/download.cgi" className="text-blue-600 underline" target="_blank">Apache Maven</a></li>
        <li><a href="https://gradle.org/install/" className="text-blue-600 underline" target="_blank">Gradle Build Tool</a></li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5">Java JDK, JRE and JVM</h2>

      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">What is JVM?</h3>
      <p>
        JVM (Java Virtual Machine) is an abstract machine that enables your computer to run a Java
        program. The Java compiler first compiles your Java code into bytecode. Then the JVM
        translates the bytecode into native machine instructions that your CPU can execute.
      </p>
      <p>
        Java is platform-independent because Java programs are written for the JVM, not for the
        physical machine. Since JVM executes platform-independent bytecode, Java code can run on any
        system with a JVM.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">How Does a Java Program Work?</h3>
      <p>Below is the simplified execution flow of a Java program:</p>
      <br></br>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">{`Java Source Code (.java)
        ↓
Java Compiler (javac)
        ↓
Java Bytecode (.class)
        ↓
JVM interprets/compiles
        ↓
Native Machine Code`}</pre>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">What is JRE?</h3>
      <p>
        JRE (Java Runtime Environment) is a package that includes the JVM, Java class libraries, and
        essential components needed to run Java applications. If you only need to run Java programs
        but do not plan to develop them, JRE is what you need.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">What is JDK?</h3>
      <p>
        JDK (Java Development Kit) is a complete software development kit that includes the JRE,
        compilers, debugging tools, documentation tools, and everything required to develop Java
        applications. If you want to develop Java applications, you must install the JDK.
      </p>

    </div>

  );
}
