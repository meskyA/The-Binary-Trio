const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde3feb0d9mshfba6ebe84fec58dp1d0f19jsnc5c273e3a60a',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
