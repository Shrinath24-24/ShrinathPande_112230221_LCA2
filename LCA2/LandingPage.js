document.addEventListener('DOMContentLoaded', function() {
  
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.textContent;
      alert(`Loading ${section} section...`);
     
    });
  });


  const learnMoreBtn = document.querySelector('.learn-more-btn');
  learnMoreBtn.addEventListener('click', function() {
    alert('Learn more about our compliance solutions!');
  });

  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const circles = document.querySelectorAll('.blue-circle, .red-circle');
      circles.forEach(circle => {
        circle.style.display = circle.style.display === 'none' ? 'block' : 'none';
      });
    }
  });

  
  const buttons = document.querySelectorAll('.login-btn, .register-btn-top, .register-btn-bottom, .learn-more-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
    
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1.05)';
      }, 100);
    });
  });


  document.addEventListener('mousemove', function(e) {
    const xPos = (e.clientX / window.innerWidth) * 100;
    const yPos = (e.clientY / window.innerHeight) * 100;
    
  
  });
});