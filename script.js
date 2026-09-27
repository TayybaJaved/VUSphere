// ================= NAVIGATION =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu when link is clicked

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Remember theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";

}


// ================= RESOURCE BUTTON =================

function showComingSoon(resource) {

    alert(
        resource +
        " section is coming soon! 🚀\n\n" +
        "We will add complete resources in the next step."
    );

}


// ================= COURSE OPEN =================

function openCourse(courseCode) {

    alert(
        "You selected " +
        courseCode +
        ". 📚\n\n" +
        "Course resources page will be connected next."
    );

}


// ================= COURSE SEARCH =================

const courseSearch = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");

if (courseSearch) {

    courseSearch.addEventListener("input", () => {

        const searchValue = courseSearch.value.toLowerCase().trim();

        courseCards.forEach(card => {

            const courseCode =
                card.dataset.course.toLowerCase();

            const courseText =
                card.innerText.toLowerCase();

            if (
                courseCode.includes(searchValue) ||
                courseText.includes(searchValue)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ================= HERO SEARCH =================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchMessage = document.getElementById("searchMessage");

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        performSearch();
    }

});


function performSearch() {

    const value =
        searchInput.value.trim().toUpperCase();

    if (value === "") {

        searchMessage.textContent =
            "Please enter a course code.";

        return;

    }


    const availableCourses = [
        "CS101",
        "CS201",
        "CS301",
        "MCM301",
        "MGT301",
        "PAK301"
    ];


    if (availableCourses.includes(value)) {

        searchMessage.textContent =
            "✓ " + value + " found! Scroll down to view the course.";

        document.getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

        courseSearch.value = value;

        filterCourses(value);

    } else {

        searchMessage.textContent =
            "No course found for: " + value;

    }

}


// Search helper

function filterCourses(value) {

    courseCards.forEach(card => {

        const courseCode =
            card.dataset.course.toUpperCase();

        if (courseCode.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


function hideAllCourses() {
    displayCourses(courses.slice(0, 4));

    document.getElementById("viewAllCourses").style.display = "block";
    document.getElementById("hideCourses").style.display = "none";

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
}
