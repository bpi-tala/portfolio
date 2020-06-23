/*************************************************************************
This little bit of javascript simply adds or removes a classs called
"toggle-active" to the main nav when the menu button is clicked
**************************************************************************/

document.addEventListener("DOMContentLoaded", function(event) { //Initialized this script after the page is finished loading

	var element = document.getElementById('main-navigation');// reference the main navigation by ID
	var trigger = document.getElementById('navlist-toggle'); // reference the toggle button by ID

	trigger.addEventListener('click', function(e) { // Listen for when the toggle is clicked
		e.preventDefault(); // Prevent any default button action
		element.classList.toggle('toggle-active'); // Toggle the class on or off, depending on if it is already there or not
	});

});

/*************************************************************************
Cycle Through Text Effect
**************************************************************************/
var thisIsMe = [
	'aspiring princess',
	'bubble tea addict',
	'wannabe fairy',
	'happy human',
	'pixel pusher',
	'short person',
	'UX researcher',
	'minimalist',
	'bubbly Asian',
	'work in progress',
	'visual designer',
	'Texan',
	'perfectionist',
	'friend',
	'coffee afficionado',
	'doodler',
	'dog person',
	'smiler',
	'singer',
	'low key nerd',
	'casual gamer',
	'problem solver',
];

function getrandom(existingVal){
	var newie = Math.floor(Math.random()*thisIsMe.length);
	if(thisIsMe[newie] == existingVal) {
		getrandom(existingVal);
	} else {
		return newie;
	}
}
$('#whoami').click(function(){
	$(this).html(thisIsMe[getrandom($(this).html())]).addClass('on');
});


/*************************************************************************
Aos init
**************************************************************************/
AOS.init();
