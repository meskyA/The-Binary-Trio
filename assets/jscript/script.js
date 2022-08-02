// This is the Section That will control the ticker
var tickerBox = document.createElement("p");
tickerBox.textContent = "Nostrud velit eu sunt labore aute velit dolore ea deserunt quis magna minim proident.";

tickerComplete = document.getElementById("sportsTicker");
tickerComplete.appendChild(tickerBox); //attaches text to the div
// End Section that Controls Ticker

// Make API call here

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde3feb0d9mshfba6ebe84fec58dp1d0f19jsnc5c273e3a60a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/teams?id=33', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// function getApi(requestUrl) {
// 	console.log(requestUrl)
// 	fetch(requestUrl)
// 	  .then(function (response) {
// 		console.log(response.status);
// 		//  Conditional for the the response.status.
// 		if (response.status !== 200) {
// 		  // Place the response.status on the page.
// 		  responseText.textContent = response.status;
// 		}
// 		return response.json();
// 	  })
// 	  .then(function (data) {
// 		// Make sure to look at the response in the console and read how 404 response is structured.
// 		console.log(data);
// 	  });
//   }

// getApi()


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
// const navBar = document.querySelector("#navbar")
// navBar.addEventListener('click', ()=> {
//     navBar.classList.toggle("is-active")
// })
// function toggle() {
//     const navBar = document.querySelector("#navbar")
// 	if ($navBar.length > 0) {
// 		$navBar.forEach(function($el){
// 			$el.addEventListener('click', function(){
// 				var target = $el.dataset.target;
// 				var $target = document.getElementById(target);
// 			})
// 		})
// 	}  
//     myNav.classList.toggle("is-active")

// }
