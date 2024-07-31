function showForm(type) {
  // Hide both forms and reset button styles
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("teacherForm").style.display = "none";
  
  document.getElementById("studentButton").classList.remove("active");
  document.getElementById("studentButton").classList.add("inactive");
  document.getElementById("studentButton").style.backgroundColor = "black";
  
  document.getElementById("teacherButton").classList.remove("active");
  document.getElementById("teacherButton").classList.add("inactive");
  document.getElementById("teacherButton").style.backgroundColor = "black";
  
  // Show the selected form and update button styles
  if (type === "student") {
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("studentButton").classList.add("active");
    document.getElementById("studentButton").style.backgroundColor = "#e05c0d";
  } else if (type === "teacher") {
    document.getElementById("teacherForm").style.display = "block";
    document.getElementById("teacherButton").classList.add("active");
    document.getElementById("teacherButton").style.backgroundColor = "#e05c0d";
  }
}

// Initialize with Student form
showForm("student");

// Event listener for custom course selection
document.getElementById("teacherCourses").addEventListener("change", function () {
  var customCourseGroup = document.getElementById("customCourseGroup");
  if (this.value === "custom") {
    customCourseGroup.style.display = "block";
  } else {
    customCourseGroup.style.display = "none";
  }
});

function addCustomCourse() {
  var customCourseInput = document.getElementById("customCourse");
  var customCourseName = customCourseInput.value.trim();
  if (customCourseName) {
    var teacherCoursesSelect = document.getElementById("teacherCourses");
    var newOption = document.createElement("option");
    newOption.value = customCourseName.toLowerCase().replace(/\s+/g, "_");
    newOption.textContent = customCourseName;
    teacherCoursesSelect.appendChild(newOption);
    teacherCoursesSelect.value = newOption.value; // Select the newly added option
    customCourseInput.value = ""; // Clear the input field
    document.getElementById("customCourseGroup").style.display = "none"; // Hide the custom course input
  }
}
