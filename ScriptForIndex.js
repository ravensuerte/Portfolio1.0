    // Function to add hover effect
    function addHoverEffect(element) {
        element.style.backgroundColor = "rgba(0,0,0,0.3)";
        element.style.color = "yellow";
        element.style.transition = "color 0.3s ease";
        element.style.cursor = "pointer"; 
    }
    // Function to remove hover effect
    function removeHoverEffect(element) {
        element.style.backgroundColor = "";
        element.style.color = "red";
    }
    function navigateToMoreAbout() {
        window.location.href = "MoreAboutMe.html";
    }