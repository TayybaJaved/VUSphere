const mcqData = {

    midterm: {
               CS101: [

    {
        question:
            "Which of the following best describes RAM?",

        options: [
            "Permanent mass storage",
            "Random Access Memory used as main memory",
            "An optical storage device",
            "A type of processor"
        ],

        answer: 1,

        explanation:
            "RAM stands for Random Access Memory and is used as the computer's main memory."
    },

    {
        question:
            "What is the purpose of a memory address in main memory?",

        options: [
            "To identify a particular memory location",
            "To identify the computer user",
            "To determine disk rotation speed",
            "To convert data into Unicode"
        ],

        answer: 0,

        explanation:
            "A memory address uniquely identifies a location in main memory."
    },

    {
        question:
            "Which type of memory requires periodic refreshing to retain its data?",

        options: [
            "ROM",
            "DRAM",
            "Optical memory",
            "Flash memory"
        ],

        answer: 1,

        explanation:
            "DRAM stores information in cells that require periodic refreshing."
    },

    {
        question:
            "What does SDRAM stand for?",

        options: [
            "Sequential Dynamic Random Access Memory",
            "Synchronous Dynamic Random Access Memory",
            "Static Digital Read Access Memory",
            "Synchronous Data Readable Access Memory"
        ],

        answer: 1,

        explanation:
            "SDRAM stands for Synchronous Dynamic Random Access Memory."
    },

    {
        question:
            "Which storage technology stores data on rotating disks using magnetic properties?",

        options: [
            "Magnetic storage",
            "Optical storage",
            "Unicode storage",
            "ASCII storage"
        ],

        answer: 0,

        explanation:
            "Magnetic storage systems use magnetic surfaces on rotating disks to store data."
    },

    {
        question:
            "In a magnetic disk system, seek time refers to the time required to:",

        options: [
            "Transfer an entire file to RAM",
            "Move the read/write head to the required track",
            "Rotate the disk through one complete revolution",
            "Convert binary data into text"
        ],

        answer: 1,

        explanation:
            "Seek time is associated with positioning the read/write head over the required track."
    },

    {
        question:
            "Rotation delay in a magnetic disk is the time spent waiting for:",

        options: [
            "The required sector to rotate under the read/write head",
            "The operating system to start",
            "The CPU to execute an instruction",
            "A file to be converted to Unicode"
        ],

        answer: 0,

        explanation:
            "After the head reaches the correct track, the system may have to wait for the required sector to rotate into position."
    },

    {
        question:
            "What does the transfer rate of a disk describe?",

        options: [
            "The number of tracks on the disk",
            "The rate at which data can be transferred to or from the disk",
            "The amount of RAM installed",
            "The speed at which the CPU executes instructions"
        ],

        answer: 1,

        explanation:
            "The handout defines transfer rate as the rate at which data can be transferred to or from a disk."
    },

    {
        question:
            "How is data arranged on a Compact Disk (CD) according to the handout?",

        options: [
            "On multiple independent circular tracks",
            "On a single spiral track",
            "Only in RAM cells",
            "In magnetic cylinders"
        ],

        answer: 1,

        explanation:
            "A CD stores its data on a single spiral track running from the inside toward the outside."
    },

    {
        question:
            "Which technology is used to retrieve information from a CD?",

        options: [
            "Magnetic read/write head",
            "Laser",
            "Electric motor only",
            "RAM controller"
        ],

        answer: 1,

        explanation:
            "A laser detects irregularities in the reflective surface of a CD while it spins."
    },

    {
        question:
            "Why is data retrieval generally faster in magnetic systems than in the optical system described in the handout?",

        options: [
            "Optical disks contain no sectors",
            "All sectors in the single optical track are not individually accessible",
            "Magnetic systems never require physical movement",
            "Optical disks use ASCII"
        ],

        answer: 1,

        explanation:
            "The handout notes that the optical system has a single track and all sectors are not individually accessible, making magnetic retrieval faster."
    },

    {
        question:
            "Which storage medium uses a blue-violet spectrum of light?",

        options: [
            "CD",
            "Magnetic disk",
            "Blu-ray Disk",
            "Flash drive"
        ],

        answer: 2,

        explanation:
            "Blu-ray Disks use blue-violet light, allowing the laser to focus with greater precision."
    },

    {
        question:
            "Compared with DVDs, Blu-ray Disks provide approximately:",

        options: [
            "Half the capacity",
            "The same capacity",
            "Five times the capacity",
            "One tenth the capacity"
        ],

        answer: 2,

        explanation:
            "According to the handout, Blu-ray Disks provide about five times the capacity of DVDs."
    },

    {
        question:
            "Which major feature distinguishes flash storage from traditional magnetic and optical storage?",

        options: [
            "It requires continuous physical disk rotation",
            "It does not depend on the same mechanical motion",
            "It can store only text",
            "It works only with CDs"
        ],

        answer: 1,

        explanation:
            "Flash storage avoids the physical motion associated with traditional magnetic and optical storage systems."
    },

    {
        question:
            "ASCII is primarily used for representing:",

        options: [
            "Processor instructions only",
            "Text characters as codes",
            "Disk rotation speeds",
            "Image resolution only"
        ],

        answer: 1,

        explanation:
            "ASCII provides numerical codes for representing characters used in text."
    },

    {
        question:
            "Why was Unicode developed?",

        options: [
            "To represent a much wider range of characters than traditional ASCII",
            "To replace RAM",
            "To increase magnetic disk speed",
            "To compress sound files only"
        ],

        answer: 0,

        explanation:
            "Unicode provides a broader character representation system capable of supporting many writing systems."
    },

    {
        question:
            "UTF-8 is associated with:",

        options: [
            "Magnetic disk addressing",
            "Unicode character encoding",
            "Optical disk rotation",
            "CPU scheduling"
        ],

        answer: 1,

        explanation:
            "UTF-8 is an encoding method used for representing Unicode characters."
    },

    {
        question:
            "In digital image representation, what is a pixel?",

        options: [
            "A basic individual element of an image",
            "A sound sample",
            "A disk track",
            "A memory address"
        ],

        answer: 0,

        explanation:
            "A digital image is composed of individual picture elements called pixels."
    },

    {
        question:
            "What is a bitmap used to represent?",

        options: [
            "An image through encoded pixel information",
            "Only sound amplitude",
            "CPU instructions",
            "Magnetic disk rotation"
        ],

        answer: 0,

        explanation:
            "Bitmap representation encodes an image in terms of its individual pixels."
    },

    {
        question:
            "The process of representing sound digitally fundamentally requires measurements of:",

        options: [
            "Disk tracks",
            "Sound amplitude",
            "Memory addresses",
            "ASCII characters"
        ],

        answer: 1,

        explanation:
            "Digital sound representation is based on measuring and encoding sound amplitude."
    }

],
       CS201: [

    {
        question:
            "According to the CS201 handout, a program is best defined as:",

        options: [
            "A collection of computer hardware instructions",
            "A precise sequence of steps to solve a particular problem",
            "A set of variables stored in memory",
            "A collection of programming languages"
        ],

        answer: 1,

        explanation:
            "The handout defines a program as a precise sequence of steps used to solve a particular problem."
    },

    {
        question:
            "Which ability is specifically developed by learning programming according to the handout?",

        options: [
            "Analytical and problem-solving ability",
            "Hardware manufacturing ability",
            "Network installation ability",
            "Electronic circuit designing ability"
        ],

        answer: 0,

        explanation:
            "The handout explains that programming develops analytical and problem-solving abilities."
    },

    {
        question:
            "Why should a programmer pay close attention to program logic?",

        options: [
            "A program cannot contain variables without it",
            "A grammatically correct program may still produce incorrect results",
            "Logic automatically removes syntax errors",
            "Logic increases the physical memory of a computer"
        ],

        answer: 1,

        explanation:
            "The handout explains that a program may compile and run but still produce incorrect or absurd results if its logic is wrong."
    },

    {
        question:
            "What does reusability mean in program development?",

        options: [
            "Running a program only once",
            "Writing code that can be used again for related problems",
            "Removing all functions from a program",
            "Rewriting the complete program for every problem"
        ],

        answer: 1,

        explanation:
            "Reusability means designing code so that it can be reused later or applied to related problems."
    },

    {
        question:
            "According to the handout, a good user interface should primarily be:",

        options: [
            "Complex and highly technical",
            "Easy to understand and use",
            "Designed only for programmers",
            "Dependent on the user's programming knowledge"
        ],

        answer: 1,

        explanation:
            "The handout advises programmers not to assume that users are computer literate and recommends an easy-to-use, self-explanatory interface."
    },

    {
        question:
            "Why must instructions given to a computer be explicitly stated?",

        options: [
            "Computers independently correct vague instructions",
            "Computers execute only what they are instructed to do",
            "Computers automatically understand human intentions",
            "Computers ignore detailed instructions"
        ],

        answer: 1,

        explanation:
            "The handout emphasizes that computers do exactly what they are instructed to do and cannot infer the programmer's intention."
    },

    {
        question:
            "What is the main purpose of comments in a program?",

        options: [
            "To increase execution speed",
            "To explain the functioning of the program",
            "To allocate additional memory",
            "To replace executable statements"
        ],

        answer: 1,

        explanation:
            "Comments help the programmer and other programmers understand the functioning of the code."
    },

    {
        question:
            "What effect do comments have on program execution according to the handout?",

        options: [
            "They slow down execution",
            "They increase memory usage",
            "They are ignored by the compiler",
            "They are converted into variables"
        ],

        answer: 2,

        explanation:
            "The handout states that comments are ignored by the compiler and do not affect program performance."
    },

    {
        question:
            "Which of the following is part of the program design recipe described in the handout?",

        options: [
            "Avoid analysing the problem before coding",
            "Analyse the problem statement and express its essence",
            "Start coding before understanding requirements",
            "Remove testing after completing the program"
        ],

        answer: 1,

        explanation:
            "The design recipe begins with analysing the problem statement and expressing its essential requirements."
    },

    {
        question:
            "Which three basic programming constructs are discussed in the CS201 handout?",

        options: [
            "Input, output and storage",
            "Sequences, decisions and repetition",
            "Classes, files and databases",
            "Compilation, linking and loading"
        ],

        answer: 1,

        explanation:
            "The handout identifies sequences, decisions and repetition structures as the basic programming constructs."
    },

    {
        question:
            "Which statement is used as a multi-way decision construct in C++?",

        options: [
            "while",
            "switch",
            "continue",
            "for"
        ],

        answer: 1,

        explanation:
            "The switch statement provides a multi-way decision structure."
    },

    {
        question:
            "If the condition of a while loop is false initially, how many times will its body execute?",

        options: [
            "Exactly once",
            "At least twice",
            "Zero times",
            "Infinitely"
        ],

        answer: 2,

        explanation:
            "A while loop tests its condition before executing its body, so it may execute zero times."
    },

    {
        question:
            "Which loop executes its body at least once?",

        options: [
            "for",
            "while",
            "do-while",
            "nested for"
        ],

        answer: 2,

        explanation:
            "The do-while loop performs its body before testing the condition, so its body executes at least once."
    },

    {
        question:
            "Why does the handout discourage excessive use of the goto statement?",

        options: [
            "It prevents variables from being declared",
            "It can make the path of execution difficult to trace",
            "It cannot transfer control in a program",
            "It automatically terminates every loop"
        ],

        answer: 1,

        explanation:
            "Unconditional jumps can make program execution difficult to follow, producing code that is difficult to debug and modify."
    },

    {
        question:
            "What is meant by making a program modular?",

        options: [
            "Placing the entire program inside one statement",
            "Dividing a large program into smaller manageable parts",
            "Avoiding functions completely",
            "Using only global variables"
        ],

        answer: 1,

        explanation:
            "Modularity means dividing a large program into smaller parts that are easier to manage."
    },

    {
        question:
            "When an ordinary variable is passed to a function by value, the function receives:",

        options: [
            "The original variable itself",
            "A copy of the variable's value",
            "Only the variable's name",
            "The complete source program"
        ],

        answer: 1,

        explanation:
            "With call by value, the called function works with a copy rather than directly modifying the original ordinary variable."
    },

    {
        question:
            "According to the CS201 handout, arrays passed to functions are passed by default using:",

        options: [
            "Call by value",
            "Call by reference behaviour",
            "Call by name",
            "Call by constant"
        ],

        answer: 1,

        explanation:
            "The handout states that when an array is passed to a function, changes made to its elements can affect the original array."
    },

    {
        question:
            "What does a pointer variable primarily contain?",

        options: [
            "The memory address of another variable",
            "Only character data",
            "A complete executable program",
            "The size of the operating system"
        ],

        answer: 0,

        explanation:
            "A pointer is a variable used to hold a memory address."
    },

    {
        question:
            "Why can pointers be used to swap original variables through a function?",

        options: [
            "They pass the addresses of the original variables",
            "They automatically create global variables",
            "They convert integers into arrays",
            "They prevent the function from accessing memory"
        ],

        answer: 0,

        explanation:
            "Passing addresses allows pointer variables in the called function to access and modify the original variables."
    },

    {
        question:
            "Which functions mentioned in the handout are used to move to positions inside a file?",

        options: [
            "tellg and tellp",
            "seekg and seekp",
            "cin and cout",
            "open and close only"
        ],

        answer: 1,

        explanation:
            "The handout identifies seekg and seekp as seek functions used to move to positions inside a file."
    }

],

        CS301: [

    {
        question:
            "Which of the following is a basic cost associated with a data structure?",

        options: [
            "Screen resolution",
            "Space required for stored data",
            "Internet speed",
            "Monitor size"
        ],

        answer: 1,

        explanation:
            "The handout identifies space, operation time, and programming effort as basic costs associated with data structures."
    },

    {
        question:
            "Why is one data structure not necessarily suitable for every problem?",

        options: [
            "Every data structure has different costs and benefits",
            "All data structures perform exactly the same operations",
            "A program can use only one data structure",
            "Data structures work only with integers"
        ],

        answer: 0,

        explanation:
            "Different situations have different requirements, so a suitable data structure should be selected according to the problem."
    },

    {
        question:
            "What does random access mean according to the handout?",

        options: [
            "Data must always be accessed from the first element",
            "Data can only be accessed in sorted order",
            "The next accessed position does not have to follow a fixed sequence",
            "Only the last element can be accessed"
        ],

        answer: 2,

        explanation:
            "Random access allows data positions to be accessed without following a fixed sequential order."
    },

    {
        question:
            "What is an important limitation of using an array to construct a list?",

        options: [
            "An array cannot store numbers",
            "An array has a fixed size",
            "An array cannot be accessed by index",
            "An array has no memory locations"
        ],

        answer: 1,

        explanation:
            "The handout discusses fixed size as an important limitation of arrays when implementing lists."
    },

    {
        question:
            "A typical node of a linked list contains:",

        options: [
            "Only a data value",
            "Only a memory address",
            "A data part and a pointer to the next node",
            "A CPU instruction and disk address"
        ],

        answer: 2,

        explanation:
            "A linked-list node contains its data and a pointer that connects it to the next node."
    },

    {
        question:
            "What is the role of the head pointer in a linked list?",

        options: [
            "It points to the first node of the list",
            "It always points to the last node",
            "It stores the number of CPU cores",
            "It sorts all nodes automatically"
        ],

        answer: 0,

        explanation:
            "The head pointer contains the address of the first node of the linked list."
    },

    {
        question:
            "What does a NULL or zero next pointer in the last linked-list node indicate?",

        options: [
            "The list contains an error",
            "The node has no data",
            "There is no next node",
            "The list must be sorted"
        ],

        answer: 2,

        explanation:
            "The final node does not point to another node, so its next pointer indicates NULL."
    },

    {
        question:
            "Which principle is followed by a stack?",

        options: [
            "FIFO",
            "LIFO",
            "Random In Random Out",
            "First In Last Inserted"
        ],

        answer: 1,

        explanation:
            "A stack follows Last In First Out (LIFO) behaviour."
    },

    {
        question:
            "Which stack operation adds a new element?",

        options: [
            "pop()",
            "push()",
            "dequeue()",
            "front()"
        ],

        answer: 1,

        explanation:
            "The push() operation adds an element to the top of a stack."
    },

    {
        question:
            "Which stack operation removes an element?",

        options: [
            "push()",
            "enqueue()",
            "pop()",
            "front()"
        ],

        answer: 2,

        explanation:
            "The pop() operation removes the element currently at the top of the stack."
    },

    {
        question:
            "When a stack is implemented using a linked list, a new node in push() is connected to:",

        options: [
            "The current head node",
            "The rear of a queue",
            "An array index only",
            "The root of a binary tree"
        ],

        answer: 0,

        explanation:
            "During push(), the new node's next pointer is set to the current head and then head is updated to the new node."
    },

    {
        question:
            "What does the top() operation of the linked-list stack do?",

        options: [
            "Deletes the complete stack",
            "Returns the top element",
            "Adds a new element",
            "Moves an element to a queue"
        ],

        answer: 1,

        explanation:
            "The top() method retrieves and returns the element at the top of the stack."
    },

    {
        question:
            "Which principle is followed by a normal queue?",

        options: [
            "LIFO",
            "FIFO",
            "Random order",
            "Highest value first"
        ],

        answer: 1,

        explanation:
            "A normal queue follows First In First Out (FIFO) behaviour."
    },

    {
        question:
            "Where does enqueue(X) place a new element in a queue?",

        options: [
            "At the front",
            "At the rear",
            "In the middle",
            "At a random position"
        ],

        answer: 1,

        explanation:
            "According to the handout, enqueue(X) places X at the rear of the queue."
    },

    {
        question:
            "What does dequeue() do?",

        options: [
            "Adds an element at the rear",
            "Removes and returns the front element",
            "Returns the rear without removing it",
            "Sorts the queue"
        ],

        answer: 1,

        explanation:
            "dequeue() removes the element at the front of the queue and returns it."
    },

    {
        question:
            "What does the front() operation of a queue do?",

        options: [
            "Returns the front element without removing it",
            "Deletes the rear element",
            "Adds a new front element",
            "Reverses the queue"
        ],

        answer: 0,

        explanation:
            "front() retrieves the front element of the queue without removing it."
    },

    {
        question:
            "In a linked-list implementation of a queue, elements are normally removed from:",

        options: [
            "The rear",
            "The middle",
            "The front",
            "Any random node"
        ],

        answer: 2,

        explanation:
            "The head/front of the linked list is used as the front of the queue so removal takes place there."
    },

    {
        question:
            "In a linked-list queue, a new element is inserted at:",

        options: [
            "The front",
            "The rear",
            "The root",
            "A random position"
        ],

        answer: 1,

        explanation:
            "Queue insertion takes place at the rear while removal takes place at the front."
    },

    {
        question:
            "Which of the following is a non-linear data structure?",

        options: [
            "Queue",
            "Linked list",
            "Tree",
            "Array"
        ],

        answer: 2,

        explanation:
            "The handout introduces a tree as a non-linear data structure used when relationships cannot be represented suitably by linear structures."
    },

    {
        question:
            "A binary tree is either empty or consists of a root and:",

        options: [
            "Exactly four queues",
            "Left and right sub-trees",
            "Only one linked list",
            "Two arrays of equal size"
        ],

        answer: 1,

        explanation:
            "The handout defines a binary tree as empty or consisting of a root together with left and right sub-trees."
    }

],

       CS302: [

    {
        question:
            "A digital system primarily operates using:",

        options: [
            "Continuous values only",
            "Two discrete states",
            "Decimal values only",
            "Mechanical signals only"
        ],

        answer: 1,

        explanation:
            "Digital systems are based on two discrete states represented by binary values."
    },

    {
        question:
            "The binary number system has a base of:",

        options: [
            "2",
            "8",
            "10",
            "16"
        ],

        answer: 0,

        explanation:
            "Binary is a base-2 number system and uses the digits 0 and 1."
    },

    {
        question:
            "Which digits are used in the binary number system?",

        options: [
            "0 and 1",
            "0 to 7",
            "0 to 9",
            "0 to 9 and A to F"
        ],

        answer: 0,

        explanation:
            "The binary number system contains only two digits: 0 and 1."
    },

    {
        question:
            "To convert a decimal integer to binary using repeated division, the decimal number is repeatedly divided by:",

        options: [
            "2",
            "8",
            "10",
            "16"
        ],

        answer: 0,

        explanation:
            "Because binary is base 2, repeated division by 2 is used to convert a decimal integer to binary."
    },

    {
        question:
            "In repeated-division conversion from decimal to binary, the binary result is obtained by reading the remainders:",

        options: [
            "From top to bottom",
            "From bottom to top",
            "From left to right only",
            "In random order"
        ],

        answer: 1,

        explanation:
            "After repeated division by 2, the remainders are read from bottom to top to obtain the binary equivalent."
    },

    {
        question:
            "Which method can be used to convert a decimal fraction into binary?",

        options: [
            "Repeated multiplication by 2",
            "Repeated multiplication by 10",
            "Repeated division by 16 only",
            "ASCII conversion"
        ],

        answer: 0,

        explanation:
            "The handout discusses repeated multiplication by 2 as a method for converting decimal fractions into binary."
    },

    {
        question:
            "The hexadecimal number system has a base of:",

        options: [
            "2",
            "8",
            "10",
            "16"
        ],

        answer: 3,

        explanation:
            "Hexadecimal is a base-16 number system."
    },

    {
        question:
            "Which hexadecimal digit represents decimal 15?",

        options: [
            "A",
            "E",
            "F",
            "10"
        ],

        answer: 2,

        explanation:
            "In hexadecimal, A through F represent decimal values 10 through 15, so F represents 15."
    },

    {
        question:
            "One hexadecimal digit can represent how many binary bits?",

        options: [
            "2 bits",
            "4 bits",
            "8 bits",
            "16 bits"
        ],

        answer: 1,

        explanation:
            "One hexadecimal digit corresponds exactly to a group of four binary bits."
    },

    {
        question:
            "Why is hexadecimal commonly used when working with binary information?",

        options: [
            "Computers internally use only hexadecimal",
            "It provides a compact representation of long binary strings",
            "It eliminates the need for binary",
            "It can represent only decimal fractions"
        ],

        answer: 1,

        explanation:
            "Hexadecimal provides humans with a shorter and more convenient representation of long binary strings."
    },

    {
        question:
            "To convert a binary number to hexadecimal, binary digits are grouped into sets of:",

        options: [
            "2 bits",
            "3 bits",
            "4 bits",
            "8 bits"
        ],

        answer: 2,

        explanation:
            "Binary-to-hexadecimal conversion divides the binary string into groups of four bits."
    },

    {
        question:
            "The hexadecimal equivalent of binary 1010 is:",

        options: [
            "8",
            "9",
            "A",
            "F"
        ],

        answer: 2,

        explanation:
            "Binary 1010 equals decimal 10, which is represented by A in hexadecimal."
    },

    {
        question:
            "Which of the following is considered a basic building block of a digital circuit?",

        options: [
            "Logic gate",
            "Hard disk",
            "Keyboard",
            "Compiler"
        ],

        answer: 0,

        explanation:
            "Logic gates are the basic building blocks used to construct digital circuits."
    },

    {
        question:
            "Which gate produces the complement of its input?",

        options: [
            "AND",
            "OR",
            "NOT",
            "XOR"
        ],

        answer: 2,

        explanation:
            "A NOT gate, also called an inverter, produces the complement of its input."
    },

    {
        question:
            "An AND gate produces output 1 when:",

        options: [
            "At least one input is 1",
            "All of its inputs are 1",
            "All of its inputs are 0",
            "The inputs are different"
        ],

        answer: 1,

        explanation:
            "The AND operation produces a logical 1 only when all required inputs are 1."
    },

    {
        question:
            "An OR gate produces output 1 when:",

        options: [
            "At least one input is 1",
            "All inputs must be 0",
            "The inputs must be different",
            "Only when all inputs are 1"
        ],

        answer: 0,

        explanation:
            "An OR gate produces output 1 when one or more of its inputs are 1."
    },

    {
        question:
            "Which gate produces output 1 when its two inputs are different?",

        options: [
            "AND",
            "OR",
            "XOR",
            "XNOR"
        ],

        answer: 2,

        explanation:
            "For two inputs, XOR produces 1 when the input values are different."
    },

    {
        question:
            "Which gate produces output 1 when its two inputs are the same?",

        options: [
            "XOR",
            "XNOR",
            "OR",
            "NAND"
        ],

        answer: 1,

        explanation:
            "XNOR is the complement of XOR and produces 1 when the two inputs are equal."
    },

    {
        question:
            "In Boolean algebra, the OR operation is commonly represented by:",

        options: [
            "Addition (+)",
            "Multiplication (.)",
            "Division (/)",
            "Subtraction (-)"
        ],

        answer: 0,

        explanation:
            "Boolean OR is represented using the plus (+) symbol and is referred to as logical addition."
    },

    {
        question:
            "In Boolean algebra, the AND operation is commonly represented by:",

        options: [
            "Addition",
            "Multiplication",
            "Subtraction",
            "Division"
        ],

        answer: 1,

        explanation:
            "Boolean AND is represented as multiplication and is often written using a dot or by placing variables together."
    }

],
    },


    finalterm: {

        CS101: [],

        CS201: [],

        CS301: [],

        CS302: []

    }

};