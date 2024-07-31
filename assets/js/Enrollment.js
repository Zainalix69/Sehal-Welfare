function showForm(type) {
  // Hide both forms
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("teacherForm").style.display = "none";

  // Set default styles for buttons
  document.getElementById("studentButton").classList.remove("active");
  document.getElementById("studentButton").classList.add("inactive");
  document.getElementById("studentButton").style.backgroundColor = "black";

  document.getElementById("teacherButton").classList.remove("active");
  document.getElementById("teacherButton").classList.add("inactive");
  document.getElementById("teacherButton").style.backgroundColor = "black";
  if (type === "student") {
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("studentButton").classList.add("active");
    document.getElementById("studentButton").style.backgroundColor = "#e05c0d";
    document.getElementById("teacherButton").classList.remove("active");
    document.getElementById("teacherButton").style.backgroundColor = "black";
  } else if (type === "teacher") {
    document.getElementById("teacherForm").style.display = "block";
    document.getElementById("teacherButton").classList.add("active");
    document.getElementById("teacherButton").style.backgroundColor = "#e05c0d";
    document.getElementById("studentButton").classList.remove("active");
    document.getElementById("studentButton").style.backgroundColor = "black";
  }
}

// Default to showing student form
showForm("student");

// Toggle custom course input visibility
document
  .getElementById("teacherCourses")
  .addEventListener("change", function () {
    var customCourseGroup = document.getElementById("customCourseGroup");
    if (this.value === "custom") {
      customCourseGroup.style.display = "block";
    } else {
      customCourseGroup.style.display = "none";
    }
  });

// Add custom course to dropdown
function addCustomCourse() {
  var customCourseInput = document.getElementById("customCourse");
  var customCourseName = customCourseInput.value.trim();
  if (customCourseName) {
    var teacherCoursesSelect = document.getElementById("teacherCourses");
    var newOption = document.createElement("option");
    newOption.value = customCourseName.toLowerCase().replace(/\s+/g, "_");
    newOption.textContent = customCourseName;
    teacherCoursesSelect.appendChild(newOption);
    teacherCoursesSelect.value = newOption.value; // Set newly added course as selected
    customCourseInput.value = ""; // Clear input
    document.getElementById("customCourseGroup").style.display = "none"; // Hide custom course input
  }
}
