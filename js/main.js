    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Mobile dropdown toggles
    const mobileDropdowns = document.querySelectorAll('.mobile-nav > li.has-dropdown > a');
    mobileDropdowns.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        const dropdown = this.nextElementSibling;
        
        // Close other open dropdowns
        document.querySelectorAll('.mobile-dropdown.active').forEach(openDropdown => {
          if (openDropdown !== dropdown) {
            openDropdown.classList.remove('active');
            openDropdown.previousElementSibling.parentElement.classList.remove('active');
          }
        });
        
        parent.classList.toggle('active');
        dropdown.classList.toggle('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function() {
      if (mobileNav.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.querySelectorAll('.mobile-dropdown.active').forEach(dropdown => {
          dropdown.classList.remove('active');
          dropdown.previousElementSibling.parentElement.classList.remove('active');
        });
      }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Prevent mobile menu from closing when clicking inside
    mobileNav.addEventListener('click', function(e) {
      e.stopPropagation();
    });