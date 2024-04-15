    
    document.addEventListener('DOMContentLoaded', function() {
        // Get all the links in the navigation
        var navLinks = document.querySelectorAll('nav a');
        
        // Loop through each link
        navLinks.forEach(function(link) {
          // Add click event listener to each link
          link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Get the target section ID from the link's href attribute
            var targetId = link.getAttribute('href');
            
            // Get the target section element
            var targetSection = document.querySelector(targetId);
            
            // Scroll to the target section
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
        
        // Add event listener to the "Go Back" button
        document.getElementById('goBackButton').addEventListener('click', function() {
          // Navigate back to index.html
          window.location.href = 'index.html';
        });
        
      });