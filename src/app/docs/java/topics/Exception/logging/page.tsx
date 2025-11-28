import React from "react";

export default function VariablePage() {
  return (
    <div className="prose prose-neutral max-w-full p-4 md:p-8 lg:p-12 mx-auto">

      {/* MAIN HEADING */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Java Logging
      </h1>

      <p className="text-black">
        Java allows us to create and capture log messages and files through the
        process of logging.
      </p>

      <p className="text-black">
        In Java, logging requires frameworks and APIs. Java has a built-in
        logging framework in the <code>java.util.logging</code> package.
      </p>

      <p className="text-black">
        We can also use third-party frameworks like Log4j, Logback, and many
        more for logging purposes.
      </p>

      {/* SUB HEADING */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-black">
        Java Logging Components
      </h2>

      <p className="text-black">
        The figure below represents the core components and the flow of control
        of the Java Logging API (<code>java.util.logging</code>).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">
        1. Logger
      </h2>

      <p className="text-black">
        The Logger class provides methods for logging. We can instantiate
        objects from the Logger class and call its methods for logging
        purposes.
      </p>

      <p className="text-black">Example:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
Logger logger = Logger.getLogger("newLoggerName");
      `}</pre>

      <p className="text-black">
        The <code>getLogger()</code> method finds or creates a logger. The name
        identifies the logger.
      </p>

      <p className="text-black">Convention:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
Logger logger = Logger.getLogger(MyClass.class.getName());
      `}</pre>

      <p className="text-black">
        Note: This will throw <code>NullPointerException</code> if the passed
        name is null.
      </p>

      <h3 className="text-xl font-semibold mt-8 text-black">Log Levels</h3>

      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1 text-black">Log Level</th>
            <th className="border px-2 py-1 text-black">Use</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1 text-black">SEVERE</td><td className="border px-2 py-1 text-black">serious failure</td></tr>
          <tr><td className="border px-2 py-1 text-black">WARNING</td><td className="border px-2 py-1 text-black">warning / potential problem</td></tr>
          <tr><td className="border px-2 py-1 text-black">INFO</td><td className="border px-2 py-1 text-black">general runtime info</td></tr>
          <tr><td className="border px-2 py-1 text-black">CONFIG</td><td className="border px-2 py-1 text-black">configuration info</td></tr>
          <tr><td className="border px-2 py-1 text-black">FINE</td><td className="border px-2 py-1 text-black">developer info</td></tr>
          <tr><td className="border px-2 py-1 text-black">FINER</td><td className="border px-2 py-1 text-black">detailed developer info</td></tr>
          <tr><td className="border px-2 py-1 text-black">FINEST</td><td className="border px-2 py-1 text-black">highly detailed trace</td></tr>
        </tbody>
      </table>

      <p className="text-black mt-4">
        The special levels <strong>OFF</strong> (disable logging) and
        <strong> ALL</strong> (enable all logging) exist as well.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-black">
        Logging the message
      </h3>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
logger.setLevel(Level.FINE);
      `}</pre>

      <p className="text-black">
        Now only FINE and above will be logged.
      </p>

      <p className="text-black">Logging example:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
logger.log(Level.INFO, "This is INFO log level message");
      `}</pre>

      <p className="text-black">Shorthand methods:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
logger.info("This is INFO log level message");
logger.warning("This is WARNING log level message");
      `}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">2. Filters</h2>

      <p className="text-black">
        Filters determine whether the <code>LogRecord</code> should be allowed
        to pass.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
// set a filter
logger.setFilter(filter);

// get a filter
Filter filter = logger.getFilter();
      `}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">
        3. Handlers (Appenders)
      </h2>

      <p className="text-black">
        Handlers send log records to different output targets.
      </p>

      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1 text-black">Handlers</th>
            <th className="border px-2 py-1 text-black">Use</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1 text-black">StreamHandler</td><td className="border px-2 py-1 text-black">writes to OutputStream</td></tr>
          <tr><td className="border px-2 py-1 text-black">ConsoleHandler</td><td className="border px-2 py-1 text-black">writes to console</td></tr>
          <tr><td className="border px-2 py-1 text-black">FileHandler</td><td className="border px-2 py-1 text-black">writes to file</td></tr>
          <tr><td className="border px-2 py-1 text-black">SocketHandler</td><td className="border px-2 py-1 text-black">writes to TCP</td></tr>
          <tr><td className="border px-2 py-1 text-black">MemoryHandler</td><td className="border px-2 py-1 text-black">writes to memory</td></tr>
        </tbody>
      </table>

      <p className="text-black mt-4">Add handler:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
Handler handler = new ConsoleHandler();
logger.addHandler(handler);
      `}</pre>

      <p className="text-black">Remove handler:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
logger.removeHandler(handler);
      `}</pre>

      <p className="text-black">Get handlers:</p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
Handler[] handlers = logger.getHandlers();
      `}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">4. Formatters</h2>

      <p className="text-black">
        Formatters convert log records into human-readable or XML format.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
// formats to string
handler.setFormatter(new SimpleFormatter());

// formats to XML
handler.setFormatter(new XMLFormatter());
      `}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">
        LogManager
      </h2>

      <p className="text-black">
        LogManager maintains global logging configuration and logger instances.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">{`
LogManager manager = new LogManager();
      `}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black">
        Advantages of Logging
      </h2>

      <ul className="list-disc pl-6 text-black">
        <li>Helps in monitoring program flow</li>
        <li>Helps capture errors</li>
        <li>Supports debugging and diagnosis</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-black">Also Read:</h3>
      <p className="text-black">Java Methods</p>
    </div>
  );
}