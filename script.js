//Burger menu script
{
    const burgerToggle = document.querySelector('.icon');
    const burgerMenu = document.querySelector('.nav-burger');

    function setMenuOpen(isOpen) {
        burgerMenu.classList.toggle('open', isOpen);
        burgerToggle.setAttribute('aria-expanded', isOpen);
        burgerToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }

    burgerToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        setMenuOpen(!burgerMenu.classList.contains('open'));
    });

    document.addEventListener('click', function (event) {
        if (!burgerMenu.contains(event.target)) {
            setMenuOpen(false);
        }
    }, true);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && burgerMenu.classList.contains('open')) {
            setMenuOpen(false);
            burgerToggle.focus();
        }
    });

    burgerMenu.querySelectorAll('.burger-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            setMenuOpen(false);
        });
    });
}

// Search bar script
{
    const searchButton = document.querySelector('.btn-search');
    const searchPanel = document.querySelector('.search-panel');
    const searchInput = document.querySelector('#device-search-input');

    searchButton.addEventListener('click', function (event) {
        const isOpen = searchPanel.classList.toggle('open');
        searchButton.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter') {
            return;
        }

        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `devices.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });

    document.addEventListener('click', function (event) {
        if (!searchPanel.contains(event.target) && !searchButton.contains(event.target)) {
            searchPanel.classList.remove('open');
            searchButton.setAttribute('aria-expanded', 'false');
        }
    });
}

// Homepage category shortcut script
{
    const quickFilterButtons = document.querySelectorAll('.quick-filter-button');

    quickFilterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.location.href = `devices.html?category=${encodeURIComponent(button.dataset.filter)}`;
        });
    });
}