// why do I do this to myself
document.addEventListener('DOMContentLoaded', function() {

    const home = document.getElementById('home-btn'),
        about = document.getElementById('about-btn'),
        works = document.getElementById('works-btn'),
        navItems = document.getElementsByClassName('nav-item');

    const homePanel = document.getElementById('home-panel'),
        aboutPanel = document.getElementById('about-panel'),
        worksPanel = document.getElementById('works-panel'),
        allSections = document.getElementsByClassName('info-panel');

    let activeSection = homePanel;

    // all elements for initial page animation
    const vertLine = document.getElementById('vert-line'),
        diagLine = document.getElementById('diag-line'),
        diagRectangle = document.getElementById('diag-box-rectangle'),
        diagSquare = document.getElementById('diag-box-square'),
        footer = document.getElementsByTagName('footer');

    // hide all sections
    (function hideSections() {
        for (let i = 0; i <= 2; i++) {
            if (i == 0) {
                allSections[i].style.display = 'flex';
                continue;
            }
            allSections[i].style.display = 'none';
        }
    })();
    // Initial animation on page load
    (
        function loadPageElements() {

            // TweenMax.from(document.getElementsByTagName('body'), 2, {
            // 	backgroundColor: 'white',
            // 	// ease: Power2.easeInOut,
            // 	onComplete: moveVertLine
            // });
            //
            // function moveVertLine() {
            TweenMax.to(vertLine, 4.85, {
                height: "100vh",
                ease: Power2.easeInOut,
                onComplete: moveDiagLine
            });
            // }

            function moveDiagLine() {
                TweenMax.to(diagLine, 2, {
                    opacity: 1,
                    onStart: showBoxes
                });
            }

            function showBoxes() {
                TweenMax.staggerTo([diagRectangle, diagSquare], 1, {
                    opacity: 0.15,
                    ease: Power2.easeInOut,
                    onUpdate: showNav
                }, 1);
            }

            function showNav() {
                TweenMax.staggerTo(navItems, 1.0, {
                    // marginLeft: '+=15px',
                    opacity: 0.8,
                    ease: Power2.easeInOut,
                    onComplete: showHome
                }, .5);
            }

            function showHome() {
                TweenMax.to(homePanel, 2, {
                    opacity: 1,
                    marginBottom: '5em',
                    ease: Power2.easeInOut,
                    onStart: showFooter
                });
            }

            function showFooter() {
                TweenMax.to(footer, 2, {
                    opacity: 1,
                    ease: Power4.easeInOut
                });
            }
        })();

    function toggleSection(section) {
        if (activeSection == section) return;
        TweenMax.to(activeSection, .5, {
            opacity: 0,
            display: 'none',
            onComplete: showSection
        });

        function showSection() {
            TweenMax.to(section, 1.0, {
                opacity: 1,
                transform: 'rotate(360deg)',
                display: 'flex',
                onStart: rotateCircle
            });
            activeSection = section;
        }

        function rotateCircle() {
            if (section.id == 'about-panel') {
                TweenMax.from(activeSection, 1.5, {
                    // transform: 'scale(.5)',
                    ease: Power4.easeOut
                });
            }
        }
    }

    // add event listeners to swap sections on nav item click
    home.addEventListener('click', function() {
        toggleSection(homePanel);
    });
    about.addEventListener('click', function() {
        toggleSection(aboutPanel);
    });
    works.addEventListener('click', function() {
        toggleSection(worksPanel);
    });

    // for (const i = 0; i <= 2; i++) {
    // 	navItems[i].addEventListener('mouseover', function() {
    // 		TweenMax.to(this, 0.2, {
    // 			borderLeft: '1.5em solid #2d2d2d'
    // 		});
    // 	});
    //
    // 	navItems[i].addEventListener('mouseout', function() {
    // 		TweenMax.to(this, 1, {
    // 			borderLeft: ''
    // 		});
    // 	});
    // }
});
