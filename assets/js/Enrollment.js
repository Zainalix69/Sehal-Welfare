// function showForm(type) {
//   document.getElementById("studentForm").style.display = "none";
//   document.getElementById("teacherForm").style.display = "none";
  
//   document.getElementById("studentButton").classList.remove("active");
//   document.getElementById("studentButton").classList.add("inactive");
//   document.getElementById("studentButton").style.backgroundColor = "black";
  
//   document.getElementById("teacherButton").classList.remove("active");
//   document.getElementById("teacherButton").classList.add("inactive");
//   document.getElementById("teacherButton").style.backgroundColor = "black";
  
//   if (type === "student") {
//     document.getElementById("studentForm").style.display = "block";
//     document.getElementById("studentButton").classList.add("active");
//     document.getElementById("studentButton").style.backgroundColor = "#e05c0d";
//   } else if (type === "teacher") {
//     document.getElementById("teacherForm").style.display = "block";
//     document.getElementById("teacherButton").classList.add("active");
//     document.getElementById("teacherButton").style.backgroundColor = "#e05c0d";
//   }
// }

// showForm("student");

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
    teacherCoursesSelect.value = newOption.value;
    customCourseInput.value = "";
    document.getElementById("customCourseGroup").style.display = "none"; 
  }
}
document.getElementById('paymentMethod').addEventListener('change', function() {
  var easypaisaDetails = document.getElementById('easypaisaDetails');
  var bankAccountDetails = document.getElementById('bankAccountDetails');
  
  if (this.value === 'easypaisa') {
      easypaisaDetails.style.display = 'block';
      bankAccountDetails.style.display = 'none';
  } else if (this.value === 'bank_account') {
      easypaisaDetails.style.display = 'none';
      bankAccountDetails.style.display = 'block';
  } else {
      easypaisaDetails.style.display = 'none';
      bankAccountDetails.style.display = 'none';
  }
});


function showForm(formType) {
  document.getElementById('studentForm').style.display = formType === 'student' ? 'block' : 'none';
  document.getElementById('teacherForm').style.display = formType === 'teacher' ? 'block' : 'none';
  document.getElementById('studentButton').classList.toggle('btn-active', formType === 'student');
  document.getElementById('studentButton').classList.toggle('btn-inactive', formType !== 'student');
  document.getElementById('teacherButton').classList.toggle('btn-active', formType === 'teacher');
  document.getElementById('teacherButton').classList.toggle('btn-inactive', formType !== 'teacher');
}
