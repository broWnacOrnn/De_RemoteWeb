// Store the currently open dropdown id
let openDropdownId = null;

function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);

    if (openDropdownId && openDropdownId !== dropdownId) {
        // Close the previously open dropdown
        const openDropdown = document.getElementById(openDropdownId);
        if (openDropdown) {
            openDropdown.style.display = "none";
        }
    }

    if (dropdownContent.style.display === "block") {
        // Close this dropdown
        dropdownContent.style.display = "none";
        openDropdownId = null;
    } else {
        // Open this dropdown
        dropdownContent.style.display = "block";
        openDropdownId = dropdownId;
    }
}

// Close dropdowns if clicking outside any dropdown button
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
        if (openDropdownId) {
            const openDropdown = document.getElementById(openDropdownId);
            if (openDropdown) {
                openDropdown.style.display = "none";
            }
            openDropdownId = null;
        }
    }
}

