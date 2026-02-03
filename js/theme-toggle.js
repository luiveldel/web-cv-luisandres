// Theme Toggle Functionality
(function() {
    const root = document.documentElement;
    const themeToggle = document.querySelectorAll('input[name="theme-toggle"]');

    // Get current theme
    function getCurrentTheme() {
        return root.classList.contains('theme-dark') ? 'dark' : 'light';
    }

    // Update active state on labels
    function updateActiveState(theme) {
        themeToggle.forEach(input => {
            const label = input.parentElement;
            if (input.value === theme) {
                label.classList.add('active');
                input.checked = true;
            } else {
                label.classList.remove('active');
                input.checked = false;
            }
        });
    }

    // Set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            root.classList.add('theme-dark');
        } else {
            root.classList.remove('theme-dark');
        }
        localStorage.setItem('theme', theme);
        updateActiveState(theme);
    }

    // Initialize
    function init() {
        const currentTheme = getCurrentTheme();
        updateActiveState(currentTheme);

        // Listen for changes
        themeToggle.forEach(input => {
            input.addEventListener('change', (e) => {
                setTheme(e.target.value);
            });
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
