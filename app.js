// why do I do this to myself
document.addEventListener('DOMContentLoaded', function() {
	/* move lines across screen on load */
	var diag = document.getElementById('diag-line');
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


	var vertLine = document.getElementById('vert-line');
	.then(function moveDiagLine() {
		TweenMax.from(diag, 2, {
			width: "440px",
			ease: Power4.easeInOut
		});
	})();

	var home = document.getElementById('home'),
		about = document.getElementById('about'),
		works = document.getElementById('works');

	var homePanel = document.getElementById('home-panel'),
		aboutPanel = document.getElementById('about-panel'),
		worksPanel = document.getElementById('works-panel'),
		allSections = document.getElementsByClassName('info-panel');

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

	function toggleSection(section) {

		var splitId;

		for (var i = 0; i < allSections.length; i++) {
			// trim id of selected section so that we can pattern match with nav item id
			splitId = allSections[i].id.split("-");
			if (splitId[0] == section.id) {
				allSections[i].style.display = 'flex';
				continue;
			}
			allSections[i].style.display = 'none';
		}
		console.log()
	}

	function fadeIn() {

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
