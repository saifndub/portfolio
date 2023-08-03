// JavaScript to handle filtering

// Get the filter list items
const filterItems = document.querySelectorAll('.filters li');

// Get the projects
const projects = document.querySelectorAll('.filters-content .single-portfolio');

// Function to handle filtering
function filterProjects(category) {
    projects.forEach(project => {
        const projectCategories = project.classList;
        if (category === '*' || projectCategories.contains(category)) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

// Add click event listeners to filter items
filterItems.forEach(item => {
    item.addEventListener('click', function() {
        filterItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        const selectedCategory = this.getAttribute('data-filter');
        filterProjects(selectedCategory);
    });
});

// Activate projects with the class '.machine_learning' by default
document.addEventListener("DOMContentLoaded", function() {
    filterProjects('.machine_learning');
});
