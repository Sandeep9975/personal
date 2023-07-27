<script>
    // Add a click event listener to all "View" buttons in the blog cards
    document.addEventListener("DOMContentLoaded", function () {
        const viewButtons = document.querySelectorAll(".btn-view");
        viewButtons.forEach(button => {
            button.addEventListener("click", handleViewButtonClick);
        });
    });

    // Function to handle the click event of "View" buttons
    function handleViewButtonClick(event) {
        event.preventDefault();
        const blogPageUrl = event.target.getAttribute("href");

        // Add a 3D effect here (e.g., you can use GSAP or other animation libraries)

        // Redirect the user to the blog page after a short delay to allow the 3D effect to play
        setTimeout(() => {
            window.location.href = blogPageUrl;
        }, 500); // Change the delay time (in milliseconds) as needed
    }
</script>
