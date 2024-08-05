let currentStep = 1;

function nextStep(step) {
  if (!validateStep(currentStep)) return;

  document.getElementById("formStep" + currentStep).style.display = "none";
  currentStep = step;
  document.getElementById("formStep" + currentStep).style.display = "block";
  updateProgressBar();
}

function previousStep(step) {
  document.getElementById("formStep" + currentStep).style.display = "none";
  currentStep = step;
  document.getElementById("formStep" + currentStep).style.display = "block";
  updateProgressBar();
}

function validateStep(step) {
  let isValid = true;
  const stepElement = document.getElementById("formStep" + step);
  const inputs = stepElement.querySelectorAll("input, select");

  inputs.forEach((input) => {
    if (input.hasAttribute("required") && !input.value) {
      isValid = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  return isValid;
}

function updateProgressBar() {
  const percentage = (currentStep / 3) * 100;
  document.getElementById("progressBar").style.width = percentage + "%";
  document
    .getElementById("progressBar")
    .setAttribute("aria-valuenow", percentage);
}

function submitForm() {
  if (validateStep(currentStep)) {
    alert("Donation Submitted!");
  }
}
