document.addEventListener("DOMContentLoaded", function() {
    
    const scrollBtn = document.getElementById("scrollBtn");

    // Function to check if the user has scrolled enough to display the button
    function toggleScrollBtn() {
        if (window.scrollY > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0
        });
    }

    // Function to hide the scrollbar
    function hideScrollbar() {
        document.body.style.overflow = "hidden";
    }

    // Function to show the scrollbar
    function showScrollbar() {
        document.body.style.overflow = "auto";
    }

    // Add scroll event listener to the window
    window.addEventListener("scroll", toggleScrollBtn);
    
    // Add click event listener to the scroll button
    scrollBtn.addEventListener("click", scrollToTop);
    
    // Add touchmove event listener to hide scrollbar when scrolling
    document.addEventListener('touchmove', hideScrollbar);
    
    // Add touchend event listener to show scrollbar when touch ends
    document.addEventListener('touchend', showScrollbar);
    
    // Initially hide the scroll button on page load
    toggleScrollBtn();
});
