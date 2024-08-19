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



function showDetails(id) {
  const details = document.querySelectorAll('.payment-details');
  details.forEach(detail => {
    detail.style.display = 'none';
  });
  
  const activeLink = document.querySelectorAll('.nav-link');
  activeLink.forEach(link => {
    link.classList.remove('active');
  });
  
  document.getElementById(id).style.display = 'block';
  document.querySelector(`a[onclick="showDetails('${id}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the data from local storage
  const donationAmount = localStorage.getItem('donationAmount');
  const donationCurrency = localStorage.getItem('donationCurrency');

  // Check if data exists in local storage
  if (donationAmount && donationCurrency) {
      // Populate the fields with the retrieved data
      document.getElementById('amount').value = donationAmount;

      // Set the selected value in the currency dropdown
      const currencySelect = document.getElementById('currency');
      for (let i = 0; i < currencySelect.options.length; i++) {
          if (currencySelect.options[i].value === donationCurrency) {
              currencySelect.selectedIndex = i;
              break;
          }
      }
  }
});