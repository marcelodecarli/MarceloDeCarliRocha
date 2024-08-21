
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.opacity = "0";
        dropdownContent.style.transform = "translateY(-10px)";
        setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300); // Matches the duration of the transition
    } else {
        dropdownContent.style.display = "block";
        setTimeout(() => {
            dropdownContent.style.opacity = "1";
            dropdownContent.style.transform = "translateY(0)";
        }, 0);
    }
}

// Optional: Close the dropdown if clicking outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.opacity = "0";
            dropdownContent.style.transform = "translateY(-10px)";
            setTimeout(() => {
                dropdownContent.style.display = "none";
            }, 300);
        }
    }
}