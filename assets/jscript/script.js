// This is the Section That will control the ticker
var tickerBox = document.createElement("p");
tickerBox.textContent = "Nostrud velit eu sunt labore aute velit dolore ea deserunt quis magna minim proident.";

tickerComplete = document.getElementById("sportsTicker");
tickerComplete.appendChild(tickerBox);
// End Section that Controls Ticker

// This is the section that controls the buttons
var goalsBox = document.getElementById("goalsBlock")
var goalsbtn = document.getElementById("goalsRules")

goalsbtn.addEventListener("click", function handleClick() {
	if (goalsBox.style.display === "none") {
		goalsBox.style.display = "block";
	} else {
		basicBox.style.display = "none";
	}
});

// end section that controls Buttons

// Nav bar targeting containers of the different sports
const navBar = document.querySelector("#navbar")
navBar.addEventListener('click', ()=> {
    navBar.classList.toggle("is-active")
})
function toggle() {
    const navBar = document.querySelector("#navbar")
	if ($navBar.length > 0) {
		$navBar.forEach(function($el){
			$el.addEventListener('click', function(){
				var target = $el.dataset.target;
				var $target = document.getElementById(target);
			})
		})
	}  
    myNav.classList.toggle("is-active")

}
