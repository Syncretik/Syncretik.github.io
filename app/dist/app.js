// why do I do this to myself
document.addEventListener('DOMContentLoaded', function() {
	/* move lines across screen on load */
	// (function moveLines() {
	// 	var diagWidth = 0;
	// 	var id = setInterval(function() {
	// 		diag.style.border = diagWidth + 'px solid $prim-white';
	// 		diagWidth++;
	// 		if (diagWidth > 70) {
	// 			clearInterval(id);
	// 		}
	// 	}, 40);
	// })();

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

	// hide all sections except home
	(function hideSections() {
		for (var i = 0; i < 2; i++) {
			if (i == 0) {
				allSections[i].style.display = 'flex';
				continue;
			}
			allSections[i].style.display = 'none';
		}
	})();
	// Initial animations on page load
	(
		function loadPageElements() {

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
				}, .7);
			}

			function moveDiagLine() {
				TweenMax.to(diagLine, 2, {
					opacity: '1',
					onStart: showNav
				});
			}

			function showNav() {
				TweenMax.staggerTo(navItems, 2, {
					marginLeft: '+=15px',
					opacity: '0.8',
					ease: Power2.easeInOut,
					onComplete: showHome
				}, .5);
			}

			function showHome() {
				TweenMax.to(homePanel, 2, {
					opacity: 1,
					marginBottom: '5em',
					onStart: showFooter
				});
			}

			function showFooter() {
				TweenMax.to(footer, 2,{
					opacity: 1,
					ease: Power4.easeInOut
				});
			}
		})();

	function toggleSection(section) {
		for (var i = 0; i < allSections.length; i++) {
			// trim id of selected section so that we can pattern match with nav item id
			var splitId = allSections[i].id.split("-");
			console.log(splitId);
			if (splitId[0] == section.id) {
				console.log('bringing back ' + splitId[0]);
				TweenMax.to(allSections[i], 1, {
					opacity: 1,
					ease: Power3.easeInOut
				});
				continue;
			}
			TweenMax.to(allSections[i], 1, {
				opacity: 0,
				ease: Power3.easeInOut
			});
		}
		allSections.forEach(){

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
});
