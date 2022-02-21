document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
    if(!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return;

    if(isDropdownBtn) {
        e.target.closest('[data-dropdown]').classList.toggle('active');
        console.log(e.target);
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === e.target.closest('[data-dropdown]')) return;
        dropdown.classList.remove('active');
    });
}, false);