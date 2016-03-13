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

	var diagLine = document.getElementById('diag-line');
	var vertLine = document.getElementById('vert-line');

	// Initial animations on page load
	(function moveVertLine() {
		TweenMax.to(vertLine, 5, {
			height: "750px",
			ease: Power2.easeInOut
		});
	})();
	function moveDiagLine() {
		TweenMax.to(diagLine, 5, {
			width: "1010px",
			ease: Power2.easeInOut
		});
	};

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
	(function showHome() {
		TweenMax.to(homePanel, 10, {
			opacity: 1,
			marginBottom: '5em',
			ease: Power4.easeInOut
		});
	})();

	function toggleSection(section) {

		var splitId;

		for (var i = 0; i < allSections.length; i++) {
			// trim id of selected section so that we can pattern match with nav item id
			splitId = allSections[i].id.split("-");
			if (splitId[0] == section.id) {
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
	}

	// add event listeners to swap sections on nav item click
	home.addEventListener('click', function() {
		toggleSection(home);
	});
	about.addEventListener('click', function() {
		toggleSection(about);
	});
	works.addEventListener('click', function() {
		toggleSection(works);
	});
});
