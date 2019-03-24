// Testing one two three
// Sticky header make it from scratch: https://www.w3schools.com/howto/howto_js_sticky_header.asp 


// Execute when user scrolls page
window.onscroll = function() {myFunction()};


// Get navbar
var navbar = document.getElementById("navbar");

// Get offset postition of navbar
var sticky = navbar.offsetTop;


// Add sticky class to navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky"); 
	}
}
