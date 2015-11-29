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
				allSections[i].style.display = 'flex';
				continue;
			}
			allSections[i].style.display = 'none';
		}
	})();

	function toggleSection(section) {
		console.log('in toggleSection');
		console.log(section);
		console.log(allSections);

		var splitId;

		for (var i = 0; i < allSections.length; i++) {
			// trim id of selected section so that we can pattern match with nav item id
			console.log(i);
			splitId = allSections[i].id.split("-");
			console.log(splitId);
			if (splitId[0] == section.id) {
				console.log('ayy lmao');
				allSections[i].style.display = 'flex';
				continue;
			}
			allSections[i].style.display = 'none';
		}
		console.log()
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
