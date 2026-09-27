// ==========================================
// VUSphere - VU Courses
// ==========================================

const courses = [

    // =========================
    // COMPUTER SCIENCE
    // =========================

    {
        code: "CS101",
        name: "Introduction to Computing",
        description: "Computing fundamentals and concepts."
    },

    {
        code: "CS201",
        name: "Introduction to Programming",
        description: "Programming fundamentals and problem solving."
    },

    {
        code: "CS202",
        name: "Fundamentals of Front End Development",
        description: "HTML, CSS and front-end development fundamentals."
    },

    {
        code: "CS301",
        name: "Data Structures",
        description: "Important data structures and algorithms."
    },

    {
        code: "CS302",
        name: "Digital Logic Design",
        description: "Digital systems, logic gates and circuits."
    },

    {
        code: "CS304",
        name: "Object Oriented Programming",
        description: "Object oriented programming concepts."
    },

    {
        code: "CS401",
        name: "Computer Architecture and Assembly Language Programming",
        description: "Computer architecture and assembly language."
    },

    {
        code: "CS403",
        name: "Database Management Systems",
        description: "Database concepts, SQL and management systems."
    },

    {
        code: "CS408",
        name: "Human Computer Interaction",
        description: "Interaction between humans and computer systems."
    },

    {
        code: "CS411",
        name: "Visual Programming",
        description: "Visual programming concepts and development."
    },

    {
        code: "CS501",
        name: "Advanced Computer Architecture",
        description: "Advanced concepts of computer architecture."
    },

    {
        code: "CS502",
        name: "Fundamentals of Algorithms",
        description: "Algorithms, analysis and problem solving."
    },

    {
        code: "CS504",
        name: "Software Engineering - I",
        description: "Software development processes and engineering."
    },

    {
        code: "CS506",
        name: "Web Design and Development",
        description: "Web technologies and development."
    },

    {
        code: "CS601",
        name: "Data Communication",
        description: "Communication systems and networking fundamentals."
    },

    {
        code: "CS605",
        name: "Software Engineering II",
        description: "Advanced software engineering concepts."
    },

    {
        code: "CS610",
        name: "Computer Networks",
        description: "Computer networking concepts and technologies."
    },

    {
        code: "CS615",
        name: "Software Project Management",
        description: "Managing software projects and development teams."
    },

    {
        code: "CS205",
        name: "Information Security",
        description: "Information security concepts and practices."
    },


    // =========================
    // ENGLISH
    // =========================

    {
        code: "ENG101",
        name: "English Comprehension",
        description: "English language comprehension and communication."
    },

    {
        code: "ENG201",
        name: "Business and Technical English Writing",
        description: "Business and technical communication skills."
    },

    {
        code: "ENG503",
        name: "Introduction to English Language Teaching",
        description: "Introduction to English language teaching."
    },


    // =========================
    // MATHEMATICS
    // =========================

    {
        code: "MTH100",
        name: "General Mathematics",
        description: "Basic mathematical concepts and problem solving."
    },

    {
        code: "MTH101",
        name: "Calculus and Analytical Geometry",
        description: "Calculus and analytical geometry concepts."
    },

    {
        code: "MTH104",
        name: "Sets and Logic",
        description: "Sets, logic and mathematical reasoning."
    },

    {
        code: "MTH202",
        name: "Discrete Mathematics",
        description: "Discrete structures and mathematical concepts."
    },

    {
        code: "MTH401",
        name: "Differential Equations",
        description: "Differential equations and their applications."
    },

    {
        code: "MTH501",
        name: "Linear Algebra",
        description: "Vectors, matrices and linear algebra."
    },


    // =========================
    // STATISTICS
    // =========================

    {
        code: "STA301",
        name: "Statistics and Probability",
        description: "Statistics, probability and data analysis."
    },


    // =========================
    // PHYSICS
    // =========================

    {
        code: "PHY101",
        name: "Physics",
        description: "Fundamental concepts of physics."
    },


    // =========================
    // MASS COMMUNICATION
    // =========================

    {
        code: "MCM101",
        name: "Introduction to Mass Communication",
        description: "Introduction to mass communication."
    },

    {
        code: "MCM301",
        name: "Communication Skills",
        description: "Communication and writing skills."
    },


    // =========================
    // MANAGEMENT / BUSINESS
    // =========================

    {
        code: "MGT101",
        name: "Financial Accounting",
        description: "Fundamentals of financial accounting."
    },

    {
        code: "MGT201",
        name: "Financial Management",
        description: "Financial management concepts and practices."
    },

    {
        code: "MGT211",
        name: "Introduction to Business",
        description: "Basic concepts of business and management."
    },

    {
        code: "MGT301",
        name: "Principles of Marketing",
        description: "Fundamentals of marketing and management."
    },

    {
        code: "MGT411",
        name: "Money & Banking",
        description: "Money, banking and financial systems."
    },

    {
        code: "MGT502",
        name: "Organizational Behaviour",
        description: "Behaviour of individuals and groups in organizations."
    },

    {
        code: "MGT602",
        name: "Entrepreneurship",
        description: "Entrepreneurship and business development."
    },

    {
        code: "MGT611",
        name: "Business & Labor Law",
        description: "Business and labour law concepts."
    },


    // =========================
    // MARKETING
    // =========================

    {
        code: "MKT501",
        name: "Marketing Management",
        description: "Marketing management principles and practices."
    },


    // =========================
    // ACCOUNTING
    // =========================

    {
        code: "ACC311",
        name: "Fundamentals of Auditing",
        description: "Basic concepts of auditing."
    },

    {
        code: "ACC501",
        name: "Business Finance",
        description: "Business finance and financial decisions."
    },


    // =========================
    // ECONOMICS
    // =========================

    {
        code: "ECO401",
        name: "Economics",
        description: "Fundamental concepts of economics."
    },

    {
        code: "ECO404",
        name: "Managerial Economics",
        description: "Economic concepts for managerial decision making."
    },


    // =========================
    // PAKISTAN STUDIES
    // =========================

    {
        code: "PAK301",
        name: "Pakistan Studies",
        description: "Important topics related to Pakistan Studies."
    },

    {
        code: "PAK522",
        name: "Ideology and Constitution of Pakistan",
        description: "Pakistan ideology and constitutional development."
    },


    // =========================
    // ISLAMIC / ETHICS
    // =========================

    {
        code: "ISL202",
        name: "Islamic Studies",
        description: "Fundamental concepts of Islamic Studies."
    },

    {
        code: "ETH202",
        name: "Ethics",
        description: "Ethical concepts and moral reasoning."
    },


    // =========================
    // PSYCHOLOGY
    // =========================

    {
        code: "PSY101",
        name: "Introduction to Psychology",
        description: "Introduction to psychology and human behaviour."
    },

    {
        code: "PSY406",
        name: "Educational Psychology",
        description: "Psychology and learning in educational environments."
    },

    {
        code: "PSY511",
        name: "Environmental Psychology",
        description: "Psychological interaction with the environment."
    },

    {
        code: "PSY631",
        name: "Psychological Testing & Measurements",
        description: "Psychological testing and measurement concepts."
    },


    // =========================
    // SOCIOLOGY
    // =========================

    {
        code: "SOC101",
        name: "Introduction to Sociology",
        description: "Basic concepts of sociology and society."
    },


    // =========================
    // EDUCATION
    // =========================

    {
        code: "EDU101",
        name: "Foundations of Education",
        description: "Basic foundations and concepts of education."
    },


    // =========================
    // LAW
    // =========================

    {
        code: "PSC401",
        name: "Public International Law",
        description: "Introduction to public international law."
    },


    // =========================
    // BANKING
    // =========================

    {
        code: "BNK601",
        name: "Banking Laws & Practices",
        description: "Banking laws and banking practices."
    },

    {
        code: "BNK603",
        name: "Consumer Banking",
        description: "Consumer banking concepts and services."
    },


    // =========================
    // UNIVERSITY
    // =========================

  

    {
        code: "CS001",
        name: "VU-Computer Proficiency License",
        description: "Computer proficiency and basic computing skills."
    }

];


// ==========================================
// DISPLAY COURSES
// ==========================================

// ==========================================
// COURSE CATEGORIES
// ==========================================

const categories = [
    {
        name: "Computer Science",
        icon: "💻",
        page: "computer-science.html"
    },
    {
        name: "Mathematics",
        icon: "📐",
        page: "mathematics.html"
    },
    {
        name: "Management & Business",
        icon: "📊",
        page: "management.html"
    },
    {
        name: "Mass Communication",
        icon: "📢",
        page: "mass-communication.html"
    },
    {
        name: "English",
        icon: "📚",
        page: "english.html"
    },
    {
        name: "Psychology",
        icon: "🧠",
        page: "psychology.html"
    }
];

function displayCategories() {

    const coursesGrid = document.getElementById("coursesGrid");

    if (!coursesGrid) return;

    coursesGrid.innerHTML = "";

    categories.forEach(category => {

        const card = document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `
            <div style="font-size: 35px; margin-bottom: 15px;">
                ${category.icon}
            </div>

            <h3>${category.name}</h3>

            <p>
                View all ${category.name} courses and study resources.
            </p>

            <button onclick="openCategory('${category.page}')">
                View Courses →
            </button>
        `;

        coursesGrid.appendChild(card);
    });
}

function openCategory(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
    displayCategories();
});

// ==========================================
// SEARCH COURSES
// ==========================================

function searchCourses() {

    const searchInput =
        document.getElementById("courseSearch");

    if (!searchInput) return;

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const filteredCourses = courses.filter(course => {

        return (

            course.code
                .toLowerCase()
                .includes(searchValue)

            ||

            course.name
                .toLowerCase()
                .includes(searchValue)

        );

    });


    displayCourses(filteredCourses);

}


function openCourse(courseCode) {
    const course = courses.find(c => c.code === courseCode);
    const resources = document.getElementById("courseResources");

    if (!course || !resources) return;

    resources.innerHTML = `
        <div class="selected-course">
            <div class="course-code">${course.code}</div>

            <h2>${course.name}</h2>

            <p>${course.description}</p>

            <div class="resource-buttons">
            <button onclick="openHandout('${course.code}')">📚 Handouts</button>
                
                <button>📋 Assignments</button>
                <button>💬 GDB</button>
                <button>❓ Quizzes</button>
                <button>📄 Past Papers</button>
                <button>📖 Midterm</button>
                <button>📕 Finalterm</button>
            </div>

            <button class="close-course" onclick="closeCourse()">
                ✕ Close
            </button>
        </div>
    `;

    resources.classList.add("show");

    resources.scrollIntoView({
        behavior: "smooth"
    });
}

function closeCourse() {
    const resources = document.getElementById("courseResources");

    resources.classList.remove("show");
    resources.innerHTML = "";
}


// ==========================================
// LOAD COURSES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    displayCourses(courses.slice(0, 4));

});
function openHandout(courseCode) {

    if (courseCode === "CS101") {
        window.open("handouts/CS101-Handouts.pdf", "_blank");
    } else {
        alert("Handout abhi available nahi hai.");
    }

}