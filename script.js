document.addEventListener("DOMContentLoaded", () => {

    // smoother scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // highlight the selected / clicked nav items
    const navItems = document.querySelectorAll("main ul li");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
        });
    });


    // fades sections into view
    const sections = document.querySelectorAll(
        "section, .card, .glossary-box, .table-container"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });


    // progress indicator for scrolling
    const progressBar = document.querySelector(".scroll-progress");

    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            progressBar.style.width = `${progress}%`;
        });
    }


    // scroll  to top button
    const scrollTopButton = document.querySelector(".scroll-top");

    if (scrollTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollTopButton.classList.add("show");
            } else {
                scrollTopButton.classList.remove("show");
            }
        });

        scrollTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});