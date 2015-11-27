window.onload = function() {
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

	var home = document.getElementById('home'),
		about = document.getElementById('about'),
		works = document.getElementById('works');

	var home = document.getElementById('home-panel'),
		about = document.getElementById('about-panel'),
		works = document.getElementById('works-panel'),
		allSections = document.getElementsByClassName('info-panel');

	(function hideSections() {
		for (var i in allSections) {
			if (i == 'length') break;
			console.log(allSections[i]);
			allSections[i].style.display = 'none';
		}
	})();

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
}
