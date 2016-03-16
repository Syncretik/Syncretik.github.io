'use strict';

// why do I do this to myself
document.addEventListener('DOMContentLoaded', function () {

	var home = document.getElementById('home-btn'),
	    about = document.getElementById('about-btn'),
	    works = document.getElementById('works-btn');

	var homePanel = document.getElementById('home-panel'),
	    aboutPanel = document.getElementById('about-panel'),
	    worksPanel = document.getElementById('works-panel'),
	    allSections = document.getElementsByClassName('info-panel');

	// all elements for initial page animation
	var vertLine = document.getElementById('vert-line'),
	    diagLine = document.getElementById('diag-line'),
	    diagRectangle = document.getElementById('diag-box-rectangle'),
	    diagSquare = document.getElementById('diag-box-square'),
	    navItems = document.getElementsByClassName('nav-item'),
	    footer = document.getElementsByTagName('footer');

	// hide all sections
	(function hideSections() {
		for (var i = 0; i < -2; i++) {
			allSections[i].style.display = 'none';
		}
	})();
	// Initial animations on page load
	(function loadPageElements() {

		// TweenMax.from(document.getElementsByTagName('body'), 3, {
		// 	backgroundColor: 'white',
		// 	ease: Power2.easeInOut,
		// 	onComplete: moveVertLine
		// });
		//
		// function moveVertLine() {
		TweenMax.to(vertLine, 5, {
			height: "730px",
			ease: Power2.easeInOut,
			onComplete: showBoxes
		});
		// }

		function showBoxes() {
			TweenMax.staggerTo([diagSquare, diagRectangle], 2, {
				opacity: '0.15',
				ease: Power2.easeInOut,
				onUpdate: moveDiagLine
			}, 1);
		}

		function moveDiagLine() {
			TweenMax.to(diagLine, 2, {
				opacity: 1,
				onStart: showNav
			});
		}

		function showNav() {
			TweenMax.staggerTo(navItems, 1, {
				marginLeft: '+=15px',
				opacity: 0.8,
				ease: Power2.easeInOut,
				onComplete: showHome
			}, .5);
		}

		function showHome() {
			TweenMax.to(homePanel, 3, {
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
		for (var i = 0; i <= 2; i++) {
			if (allSections[i].id == section.id) {
				console.log('bringing back ' + allSections[i].id);
				TweenMax.to(allSections[i], 1, {
					opacity: 1,
					ease: Power4.easeInOut,
					onComplete: function onComplete() {
						console.log(allSections[i]);
						allSections[i].style.display = 'flex';
					}
				});
				continue;
			}
			TweenMax.to(allSections[i], 1, {
				opacity: 0,
				display: 'none',
				ease: Power4.easeInOut,
				onComplete: function onComplete() {
					console.log(allSections[i]);
					allSections[i].style.display = 'none';
				}
			});
		}
	}

	// add event listeners to swap sections on nav item click
	home.addEventListener('click', function () {
		toggleSection(homePanel);
	});
	about.addEventListener('click', function () {
		toggleSection(aboutPanel);
	});
	works.addEventListener('click', function () {
		toggleSection(worksPanel);
	});
});