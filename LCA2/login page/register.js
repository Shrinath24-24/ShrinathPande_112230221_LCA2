document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const passwordToggle = document.querySelector('.toggle');
    const passwordField = document.getElementById('reg-password');
  
 
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('fullname').value;
      const email = document.getElementById('reg-email').value;
      const password = passwordField.value;
      
      if (name && email && password) {
        const successMsg = document.createElement('div');
        successMsg.textContent = `Welcome ${name}! Creating your account...`;
        successMsg.style.color = '#5c6bff';
        successMsg.style.marginTop = '15px';
        successMsg.style.fontWeight = 'bold';
        this.appendChild(successMsg);
        
        setTimeout(() => {
          window.location.href = '../home/dashboard.html';
        }, 2000);
      } else {
        alert('Please fill in all fields');
      }
    });
  
   
    passwordToggle.addEventListener('click', function() {
      const passwordInput = this.parentElement.querySelector('input');
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
  
  
    passwordField.addEventListener('input', function() {
      if (this.value.length < 8) {
        this.style.borderColor = 'red';
      } else {
        this.style.borderColor = '#ddd';
      }
    });
  });