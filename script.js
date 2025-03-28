<script>
    // Function to handle the search input dynamically
    function searchRecipes() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu-item');

        // Loop through each menu item and hide/show based on the search term
        menuItems.forEach(item => {
            const recipeName = item.querySelector('a').getAttribute('title').toLowerCase();
            if (recipeName.includes(searchTerm)) {
                item.style.display = 'block'; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    }
</script>
