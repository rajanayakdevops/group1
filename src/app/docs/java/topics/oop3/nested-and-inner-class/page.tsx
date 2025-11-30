
export default function NestedInnerClassPage() {
  return (
    <div className="editor-contents text-black">
      <h1 className="text-4xl font-bold mb-6">Java Nested and Inner Class</h1>

      <p className="mb-4">
        In Java, you can define a class within another class. Such a class is
        known as a <strong>nested class</strong>.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`class OuterClass {
    // ...
    class NestedClass {
        // ...
    }
}`}
      </pre>

      <p className="mb-4">There are two types of nested classes:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>Non-static nested class (Inner Class)</li>
        <li>Static nested class</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">
        Non-Static Nested Class (Inner Class)
      </h2>

      <p className="mb-4">
        A non-static nested class has access to members of the outer class. To
        instantiate it, you must first create the outer class.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Example 1: Inner Class</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`class CPU {
    double price;

    class Processor {
        double cores;
        String manufacturer;

        double getCache() {
            return 4.3;
        }
    }

    protected class RAM {
        double memory;
        String manufacturer;

        double getClockSpeed() {
            return 5.5;
        }
    }
}

public class Main {
    public static void main(String[] args) {

        CPU cpu = new CPU();

        CPU.Processor processor = cpu.new Processor();
        CPU.RAM ram = cpu.new RAM();

        System.out.println("Processor Cache = " + processor.getCache());
        System.out.println("Ram Clock speed = " + ram.getClockSpeed());
    }
}`}
      </pre>

      <p className="mb-4">
        To create inner class objects, we use the
        <code>OuterClass.this</code> reference.
      </p>

      <h3 className="text-2xl font-semibold mb-2">
        Accessing Outer Class Members
      </h3>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`class Car {
    String carName;
    String carType;

    public Car(String name, String type) {
        this.carName = name;
        this.carType = type;
    }

    private String getCarName() {
        return this.carName;
    }

    class Engine {
        String engineType;

        void setEngine() {
            if (Car.this.carType.equals("4WD")) {
                if (Car.this.getCarName().equals("Crysler")) {
                    this.engineType = "Smaller";
                } else {
                    this.engineType = "Bigger";
                }
            } else {
                this.engineType = "Bigger";
            }
        }

        String getEngineType() { return this.engineType; }
    }
}

public class Main {
    public static void main(String[] args) {

        Car car1 = new Car("Mazda", "8WD");
        Car.Engine engine = car1.new Engine();
        engine.setEngine();
        System.out.println("Engine Type for 8WD = " + engine.getEngineType());

        Car car2 = new Car("Crysler", "4WD");
        Car.Engine c2engine = car2.new Engine();
        c2engine.setEngine();
        System.out.println("Engine Type for 4WD = " + c2engine.getEngineType());
    }
}`}
      </pre>

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        Static Nested Class
      </h2>

      <p className="mb-4">
        Unlike inner classes, a static nested class cannot access members of the
        outer class directly.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Example 3: Static Nested Class</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`class MotherBoard {

    static class USB {
        int usb2 = 2;
        int usb3 = 1;

        int getTotalPorts() {
            return usb2 + usb3;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MotherBoard.USB usb = new MotherBoard.USB();
        System.out.println("Total Ports = " + usb.getTotalPorts());
    }
}`}
      </pre>

      <h3 className="text-2xl font-semibold mb-2">
        Example 4: Static Class Cannot Access Outer Members
      </h3>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`class MotherBoard {
    String model;

    public MotherBoard(String model) {
        this.model = model;
    }

    static class USB {
        int usb2 = 2;
        int usb3 = 1;

        int getTotalPorts() {
            if (MotherBoard.this.model.equals("MSI")) { // ❌ ERROR
                return 4;
            } else {
                return usb2 + usb3;
            }
        }
    }
}`}
      </pre>

      <p className="bg-red-100 p-4 rounded-lg border border-red-300 mb-6">
        ❌ Error: non-static variable this cannot be referenced from a static
        context
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Key Points</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Inner classes behave like members of the outer class.</li>
        <li>Inner classes can use access modifiers (private, protected).</li>
        <li>Use dot notation: <code>Outer.Inner</code></li>
        <li>Inner classes can access private members of outer class.</li>
        <li>
          Static nested classes cannot access outer class members without an
          instance.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        📚 Related Reading
      </h2>

      <ul className="list-disc ml-6 space-y-2 text-blue-600">
        <li>
          <a href="/docs/java/topics/oop1/access-modifiers" className="hover:underline">
            Java Access Modifiers
          </a>
        </li>
        <li>
          <a href="/docs/java/topics/oop1/static-keyword" className="hover:underline">
            Java Static Keyword
          </a>
        </li>
        <li>
          <a href="/docs/java/topics/oop3/nested-static-class" className="hover:underline">
            Java Nested Static Class
          </a>
        </li>
        <li>
          <a href="/docs/java/topics/oop3/anonymous-class" className="hover:underline">
            Java Anonymous Class
          </a>
        </li>
      </ul>
    </div>
  );
}
