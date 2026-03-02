document.addEventListener('DOMContentLoaded', () => {
    
    
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Smoother Scrolling,,
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }

        });
    });

    // Interactive Definition 
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            item.classList.toggle('highlight-term');
        });
    });

    
const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry =>  {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.topic, .glossary-box, .intro-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});



});


// JQuery addition below  on top of vanilla JS 


$(document).ready(function() {
    // Progress Bar Logic
    $(window).on('scroll', function() {
        var winScroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var scrolled = (winScroll / height) * 100;
        $('#myBar').css('width', scrolled + '%');
    });

    // Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
});

