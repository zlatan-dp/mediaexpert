document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('submit-politicka');
    const submitButton = document.getElementById('submit-btn');
  
    checkbox.addEventListener('change', function () {
      submitButton.disabled = !checkbox.checked; 
    });
  });