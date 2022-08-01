var tickerBox = document.createElement("p");
tickerBox.textContent = "Nostrud velit eu sunt labore aute velit dolore ea deserunt quis magna minim proident.";

tickerComplete = document.getElementById("sportsTicker");
tickerComplete.appendChild(tickerBox);


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
