const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde3feb0d9mshfba6ebe84fec58dp1d0f19jsnc5c273e3a60a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

function GetTeams() {
	// Make API call here
	fetch('https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2022', options)
		.then(response => response.json())
		//.then(response => console.log(response))
		.then(response => PopulateOptionSet(response))
		.catch(err => console.error(err));


}
GetTeams();

function PopulateOptionSet(response) {
	var TeamOptionSet = document.getElementById("soccerteam");
	console.log("response",response)
	response.response.forEach(function (item) {
		var opt = document.createElement("option");
		opt.text = item.team.name;
		opt.value = item.team.id;
		TeamOptionSet.append(opt);
		//console.log('Team Name : '+item.team.name + ' | ' +'Team ID : '+item.team.id);

	});
}
function GetTeamMembers(TeamOptionSet) {
fetch('https://api-football-v1.p.rapidapi.com/v3/teams?id=33', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
function ShowTeamPlaysers(response) {

	var PlaserAttributs = ["id", "name", "firstname", "lastname", "age", "birth", "nationality", "height", "weight", "photo"];
	var PlaserBirthAttributs = ["date", "place", "country"];
	var PlaysersTable = document.getElementById('Playsers');

	//Cleanup table rows beside the header
	for (r = PlaysersTable.rows.length - 1; r > 0; r--)
		PlaysersTable.deleteRow(r);


	//If the API response has values, display the result table. Otherwise terminate this function by returning 
	if (response.results > 0) {
		PlaysersTable.style.display = 'block';
	}
	else {
		PlaysersTable.style.display = 'none';
		return;
	}


	var Plalyer;
	//First loop through plaster list and get each player. 
	response.response.forEach(function (playerItem) {

		Plalyer = playerItem.player;

		//Create for each player a table row and append it to the result table
		var tr = document.createElement("TR");
		PlaysersTable.appendChild(tr);

		PlaserAttributs.forEach(function (attribute) {
			//For each attribute create a column and attach it to the table row created before 



			if (attribute === "birth") {
				CreateAndAppendColumnToRow(Plalyer[attribute].date, tr);
				CreateAndAppendColumnToRow(Plalyer[attribute].place, tr);
				CreateAndAppendColumnToRow(Plalyer[attribute].country, tr);
			} else if (attribute === "photo") {

				var img = document.createElement("img");
				img.src = Plalyer[attribute];
				img.alt = Plalyer["name"]
				img.style = "width:auto;"
				var td = document.createElement("TD");
				td.appendChild(img);
				tr.appendChild(td);
			}
			else {
				CreateAndAppendColumnToRow(Plalyer[attribute], tr);
			}

		});
	});

}

function CreateAndAppendColumnToRow(AttributeValue, Row) {
	var td = document.createElement("TD");
	td.innerHTML = AttributeValue;
	Row.appendChild(td);
}


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

$( "#baseballButton" ).click(function() {
	$( "#outerBaseballContainer" ).toggle();
  });

  $( "#goalsButton" ).click(function() {
	$( "#goalsBlock" ).toggle();
  });

  $( "#basicsButton" ).click(function() {
	$( "#basicsBlock" ).toggle();
  });

  $( "#scoringButton" ).click(function() {
	$( "#scoringBlock" ).toggle();
  });


$( "#footballButton" ).click(function() {
	$( "#outerFootballContainer" ).toggle();
  });

  $( "#goalsButton" ).click(function() {
	$( "#goalsBlock" ).toggle();
  });

  $( "#basicsButton" ).click(function() {
	$( "#basicsBlock" ).toggle();
  });

  $( "#scoringButton" ).click(function() {
	$( "#scoringBlock" ).toggle();
  });

  $( "#tennisButton" ).click(function() {
	$( "#outerTennisContainer" ).toggle();
  });

  $( "#goalsTbutton" ).click(function() {
	$( "#goalsTblock" ).toggle();
  });

  $( "#basicsTbutton" ).click(function() {
	$( "#basicsTblock" ).toggle();
  });

  $( "#scoringTButton" ).click(function() {
	$( "#scoringTblock" ).toggle();
  });

  $( "#golfButton" ).click(function() {
	$( "#outerGolfContainer" ).toggle();
  });

  $( "#goalsGbutton" ).click(function() {
	$( "#goalsGblock" ).toggle();
  });

  $( "#basicsGbutton" ).click(function() {
	$( "#basicsGblock" ).toggle();
  });

  $( "#scoringGbutton" ).click(function() {
	$( "#scoringGblock" ).toggle();
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
