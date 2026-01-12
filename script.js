document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
        });
    });

    // Interactive Definition Highlighter
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            item.classList.toggle('highlight-term');
        });
    });
});