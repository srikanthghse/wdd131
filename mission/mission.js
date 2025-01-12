// Select the dropdown element
const themeSelector = document.querySelector('#themeSelector');

// Function to change the theme
function changeTheme() {
    // Get the current value of the theme selector
    const theme = themeSelector.value;

    // If the selected value is 'dark', add the dark class to the body
    if (theme === "dark") {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        document.getElementById('logo').src = 'BYUI-Logo-white.webp'; // Switch logo to white for dark theme
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.getElementById('logo').src = 'BYUI-Logo.webp'; // Switch logo to blue for light theme
    }
}

// Add event listener to detect changes in the theme selector
themeSelector.addEventListener('change', changeTheme);