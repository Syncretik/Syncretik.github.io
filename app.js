window.onload = function() {

	function toggleSection(section) {
		console.log(section);
		var display = section.style.display;
		console.log(display);
		var otherDisplays = allSections.style.display;
		if (display == 'none') {
			display = 'flex';
			for (var i in otherDisplays) {
				if (otherDisplays[i] == section) {
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

	home.addEventListener('click', toggleSection(home));
	about.addEventListener('click', toggleSection(about));
	works.addEventListener('click', toggleSection(works));
}
