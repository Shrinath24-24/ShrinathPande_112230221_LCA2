document.addEventListener('DOMContentLoaded', function() {
 
  const navItems = document.querySelectorAll('.nav-item:not(.active)');
  

  navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#d4e3f1';
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'all 0.3s ease';
    });
    
    
    item.addEventListener('mouseout', function() {
      this.style.backgroundColor = '';
      this.style.transform = '';
    });
  });
});