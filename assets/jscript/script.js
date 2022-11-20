/***
 * This code provides the following functions for auto referee page
 * - Hide and show brief sport information based on selected type of sport
 * - Retrieve game scheduler from web api based on selected date 
 * - Show teams member of selected team
 */

 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23e0a26a20msh5f678da7d1f5430p1aa1b0jsnde31ae8d0241',
		'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com'
		//'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
	},
};


function GetSchedules(ScheduleDate) {
	var url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/matches/' + ScheduleDate
	GetApiRespond(url, options, ShowScheduledGames);

}

function GetTeamMembers(TeamID) {
	var url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/' + TeamID + '/players';
	GetApiRespond(url, options, ShowTeamPlaysers);
	
}
function GetApiRespond(url, options, CallBack) {

	fetch(url, options)
		.then(response => response.text())

		.then((data) => {
			//if the response data contains empty string return to callback function empty object else a JSON object
			var returndata = data ? JSON.parse(data) : {};

			//if the first key in the return object is message, this is error message. Instead of returning the value, throw exception 
			if (Object.keys(returndata)[0] == "message")
				return Promise.reject(returndata.message);
			else
				CallBack(data ? JSON.parse(data) : {})
		})
		.catch(error => {
			var ErrorCode = 'Error : Service is unavailable -> ' + error;
			console.error(ErrorCode);
			$("#messagediv").text(ErrorCode).show();
		});


}

function ShowScheduledGames(response) {
	var ScheduleTable = document.getElementById('TeamSchedules');


	//Cleanup table rows beside the header
	for (r = ScheduleTable.rows.length - 1; r > 1; r--)
		ScheduleTable.deleteRow(r);


	//If the API response has values, display the result table. Otherwise terminate this function by returning 
	if (response === undefined || typeof (response) === String || !response.hasOwnProperty('events') || response.events.length == 0) {
		ScheduleTable.style.display = 'none';
		$("#messagediv").text("Return value for scheduled games is empty").show();
		return;
	}

	ScheduleTable.style.display = 'block';
	PlaysersTable.style.display = 'none';


	$("#messagediv").hide();

	TeamAttributs = ["homeTeam", "awayTeam"];
	var Team;
	//First loop through plaster list and get each player. 
	response.events.forEach(function (event) {

		Team = event;

		//Create for each player a table row and append it to the result table
		var tr = document.createElement("TR");
		ScheduleTable.appendChild(tr);

		TeamAttributs.forEach(function (attribute) {
			//For each attribute create a column and attach it to the table row created before 



			if (attribute === "awayTeam") {
				CreateAndAppendColumnToRow("<a href='javascript:GetTeamMembers(" + Team[attribute].id + ");'>" + Team[attribute].name + "</a>", tr)

			}
			else if (attribute === "homeTeam") {
				CreateAndAppendColumnToRow("<a href='javascript:GetTeamMembers(" + Team[attribute].id + ");'>" + Team[attribute].name + "</a>", tr);
			}
			else {
				CreateAndAppendColumnToRow(Team[attribute], tr);
			}

		});
	});

}
var PlaysersTable = document.getElementById('Playsers');

function ShowTeamPlaysers(response) {

	var PlayerAttributs = ["id", "name", "shortName", "dateOfBirthTimestamp", "shirtNumber", "height", "country", "team"];

	//Cleanup table rows beside the header
	for (r = PlaysersTable.rows.length - 1; r > 1; r--)
		PlaysersTable.deleteRow(r);




	//If the API response has values, display the result table. Otherwise terminate this function by returning 
	if (response === undefined || typeof (response) === String || !response.hasOwnProperty('players') || response.players.length == 0) {
		PlaysersTable.style.display = 'none';
		$("#messagediv").text("Return value for players is empty").show();
		return;
	}

	PlaysersTable.style.display = 'block';
	$("#messagediv").hide();


	var Plalyer;
	var IsTeamNameEmpty = true;
	//Remove team name from the team member table befre adding new team
	$("#nameofteammembers").empty();
	//hide error message
	$("#messagediv").hide();
	//First loop through plaster list and get each player. 
	response.players.forEach(function (playerItem) {

		Plalyer = playerItem.player;

		//Create for each player a table row and append it to the result table
		var tr = document.createElement("TR");
		PlaysersTable.appendChild(tr);

		PlayerAttributs.forEach(function (attribute) {
			//For each attribute create a column and attach it to the table row created before 


			switch (attribute) {
				case "dateOfBirthTimestamp":
					CreateAndAppendColumnToRow(new Date(Plalyer[attribute]).toLocaleDateString(), tr);
					break;
				case "country":
					CreateAndAppendColumnToRow(Plalyer[attribute].name, tr);
					break;
				case "team":
					if ($("#nameofteammembers").text() == "") {
						$("#nameofteammembers").text(Plalyer[attribute].name);
						IsTeamNameEmpty = false;
					}

					break;
				default:
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

function openTab(TabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	var SectorName = TabName.replace("tab", "Sector");
	document.getElementById(SectorName).style.display = "block";
	document.getElementById(TabName).className += " active";
}

openTab('tab_Game');

$("#SchedulesDate").change(function () {
	var scheduelddate = this.value.split('-');
	var formatedDate = scheduelddate[2] + '/' + scheduelddate[1] + '/' + scheduelddate[0]

	GetSchedules(formatedDate)
});
// This is the section that controls the buttons
$("#baseballButton").click(function () {
	openTab('tab_Game');
	$(".descriptions").not("#outerBaseballContainer").hide();
	$("#outerBaseballContainer").toggle();
});

$("#goalsBButton").click(function () {
	$(".B_rule").hide();
	$("#goalsBBlock").toggle();
});

$("#basicsBButton").click(function () {
	$(".B_rule").hide();
	$("#basicsBBlock").toggle();
});

$("#scoringBButton").click(function () {
	$(".B_rule").hide();
	$("#scoringBBlock").toggle();
});


$("#footballButton").click(function () {
	openTab('tab_Game');
	$(".descriptions").not("#outerFootballContainer").hide();
	$("#outerFootballContainer").toggle();
});

$("#goalsFButton").click(function () {
	$(".F_rule").hide();
	$("#goalsFBlock").toggle();
});

$("#basicsFButton").click(function () {
	$(".F_rule").hide();
	$("#basicsFBlock").toggle();
});

$("#scoringFButton").click(function () {
	$(".F_rule").hide();
	$("#scoringFBlock").toggle();
});

$("#tennisButton").click(function () {
	openTab('tab_Game');
	$(".descriptions").not("#outerTennisContainer").hide();
	$("#outerTennisContainer").toggle();
});

$("#goalsTbutton").click(function () {
	$(".T_rule").hide();
	$("#goalsTblock").toggle();
});

$("#basicsTbutton").click(function () {
	$(".T_rule").hide();
	$("#basicsTblock").toggle();
});

$("#scoringTButton").click(function () {
	$(".T_rule").hide();
	$("#scoringTblock").toggle();
});

$("#golfButton").click(function () {
	openTab('tab_Game');
	$(".descriptions").not("#outerGolfContainer").hide();
	$("#outerGolfContainer").toggle();
});

$("#goalsGbutton").click(function () {
	$(".G_rule").not("#goalsGbutton").hide();
	$("#goalsGblock").toggle();
});

$("#basicsGbutton").click(function () {
	$(".G_rule").not("#basicsGbutton").hide();
	$("#basicsGblock").toggle();
});

$("#scoringGbutton").click(function () {
	$(".G_rule").not("#scoringGbutton").hide();
	$("#scoringGblock").toggle();
});