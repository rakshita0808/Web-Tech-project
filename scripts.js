document.addEventListener("DOMContentLoaded", function() {
	const homeLink = document.getElementById("home-link");
	const homeSection = document.querySelector(".home");
	
	homeLink.addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById('home-section').scrollIntoView({
			behavior: 'smooth'
		});
	});
});
