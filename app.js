document.addEventListener('DOMContentLoaded', function() {
	/* move lines across screen on load */
	(function moveLines() {
		var diag = document.getElementById('diag-line');
		var diagWidth = 0;
		var id = setInterval(function() {
			diag.style.border = diagWidth + 'px solid $prim-white';
			diagWidth++;
			if (diagWidth > 70) {
				clearInterval(id);
			}
		}, 40);
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
				console.log('unhiding home');
				allSections[i].style.display = 'flex';
				continue;
			}
			allSections[i].style.display = 'none';
			console.log(allSections[i]);
		}
	})();

function toggleSection(section) {
		console.log('in toggleSection');
		var display = section.style.display;
		console.log(display);
		var otherDisplays = [3];
		for (var i = 0; i < 3; i++) {
			otherDisplays[i] = allSections[i].style.display;
		}
		if (display == 'none') {
			display = 'flex';
			for (var i in otherDisplays) {
				if (i === 3) {
					break;
				}
				if (allSections[i] == section) {
					continue;
				}
				otherDisplays[i] = 'none';
			}
		}
	}
// Event listeners are not calling functions, why?

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
