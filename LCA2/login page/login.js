document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const forgotPasswordLink = document.getElementById('forgot-password');
  
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email && password) {
        const loading = document.createElement('div');
        loading.textContent = 'Authenticating...';
        loading.style.color = '#4e63f4';
        loading.style.marginTop = '15px';
        this.appendChild(loading);
        
        setTimeout(() => {
          window.location.href = "../Dashboard/dashboard.html";
        }, 1500);
      } else {
        alert('Please fill in all fields');
      }
    });
  
  
    forgotPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Password recovery link sent to your email!');
    });
  

    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginForm.requestSubmit();
      }
    });
  });