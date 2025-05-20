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

const navContent = document.getElementById('nav-content');

function displayNavContent(contentType){
    switch (contentType) {
        case 'test':
            fetch('test.html')
                .then(response => {
                    if(!response.ok) {
                        throw new Error('Network response bad');
                    }
                    return response.text();
                })
                .then(html => {
                    navContent.innerHTML = html;
                })
                .catch(error => {
                    navContent.innerHTML = '<p> Fail to load test content.</p>';
                    console.error('Error loading test/html', error);
                });
            break;
        default:
            navContent.innerHTML = '<p> Hello.</p>';
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
        const contentType = event.target.getAttribute('data-content');
        displayNavContent(contentType);
    });
});