let currentStep = 1;

function nextStep(step) {
  document.getElementById('formStep' + currentStep).style.display = 'none';
  currentStep = step;
  document.getElementById('formStep' + currentStep).style.display = 'block';
  updateProgressBar();
}

function previousStep(step) {
  document.getElementById('formStep' + currentStep).style.display = 'none';
  currentStep = step;
  document.getElementById('formStep' + currentStep).style.display = 'block';
  updateProgressBar();
}

function updateProgressBar() {
  const percentage = (currentStep / 3) * 100;
  document.getElementById('progressBar').style.width = percentage + '%';
  document.getElementById('progressBar').setAttribute('aria-valuenow', percentage);
}

function submitForm() {
  alert('Donation Submitted!');
}