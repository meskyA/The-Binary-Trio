const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23e0a26a20msh5f678da7d1f5430p1aa1b0jsnde31ae8d0241',
		'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com'
		//'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
	},
};


function getSchedules(scheduleDate) {
	var url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/matches/' + scheduleDate
	getApiRespong(url, options, showScheduledGames);
	/**
	 * The web service is not delivering data due to exceeded daily quota. The error message is:
"You have exceeded the DAILY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/fluis.lacasse/api/americanfootballapi" 
As son as the service is available again, the hard coded data and the method at line 26 & 27 should be commented and line 20 uncommented. 
	 */
	// var data = JSON.parse('{"events":[{"awayScore":{"current":35,"display":35,"overtime":null,"period1":7,"period2":10,"period3":7,"period4":11},"awayTeam":{"disabled":null,"id":4435,"name":"WinnipegBlueBombers","shortName":"Winnipeg","slug":"winnipeg-blue-bombers","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"changes":{"changeTimestamp":1659231794,"changes":["status.code","status.description","status.type"]},"customId":"INbsKNb","finalResultOnly":false,"hasGlobalHighlights":false,"homeScore":{"current":28,"display":28,"overtime":null,"period1":6,"period2":6,"period3":13,"period4":3},"homeTeam":{"disabled":null,"id":4433,"name":"CalgaryStampeders","shortName":"Calgary","slug":"calgary-stampeders","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"id":10075535,"periods":{"current":"Score","overtime":"Overtime","period1":"1stquarter","period2":"2ndquarter","period3":"3rdquarter","period4":"4thquarter"},"slug":"winnipeg-blue-bombers-calgary-stampeders","startTimestamp":1659222000,"status":{"code":100,"description":"Ended","type":"finished"},"time":{},"tournament":{"category":{"alpha2":"CA","flag":"canada","id":1373,"name":"Canada","slug":"canada","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41257,"name":"CFL,RegularSeason","priority":0,"slug":"cfl-regular-season","uniqueTournament":{"category":{"alpha2":"CA","flag":"canada","id":1373,"name":"Canada","slug":"canada","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":false,"hasEventPlayerStatistics":false,"hasPositionGraph":false,"id":11208,"name":"CFL","slug":"cfl","userCount":0}},"winnerCode":2},{"awayScore":{"current":23,"display":23,"overtime":null,"period1":6,"period2":7,"period3":3,"period4":7},"awayTeam":{"disabled":false,"id":4437,"name":"OttawaRedblacks","shortName":"Ottawa","slug":"ottawa-redblacks","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"changes":{"changeTimestamp":1659311337,"changes":["status.code","status.description","status.type"]},"customId":"LNbsMNb","finalResultOnly":false,"hasGlobalHighlights":false,"homeScore":{"current":13,"display":13,"overtime":null,"period1":3,"period2":10,"period3":0,"period4":0},"homeTeam":{"disabled":null,"id":4436,"name":"TorontoArgonauts","shortName":"Toronto","slug":"toronto-argonauts","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"id":10075536,"periods":{"current":"Score","overtime":"Overtime","period1":"1stquarter","period2":"2ndquarter","period3":"3rdquarter","period4":"4thquarter"},"slug":"ottawa-redblacks-toronto-argonauts","startTimestamp":1659301200,"status":{"code":100,"description":"Ended","type":"finished"},"time":{},"tournament":{"category":{"alpha2":"CA","flag":"canada","id":1373,"name":"Canada","slug":"canada","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41257,"name":"CFL,RegularSeason","priority":0,"slug":"cfl-regular-season","uniqueTournament":{"category":{"alpha2":"CA","flag":"canada","id":1373,"name":"Canada","slug":"canada","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":false,"hasEventPlayerStatistics":false,"hasPositionGraph":false,"id":11208,"name":"CFL","slug":"cfl","userCount":0}},"winnerCode":2},{"awayScore":{"current":23,"display":23,"overtime":null,"period1":6,"period2":3,"period3":14,"period4":0},"awayTeam":{"disabled":null,"id":188337,"name":"RheinFire","shortName":"RheinFire","slug":"rhein-fire","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"changes":{"changeTimestamp":1659209349,"changes":["status.code","status.description","status.type","homeScore.current","homeScore.display","homeScore.period1","homeScore.period2","homeScore.period3","homeScore.period4","awayScore.current","awayScore.display","awayScore.period1","awayScore.period2","awayScore.period3","awayScore.period4"]},"customId":"MqAbsmced","finalResultOnly":false,"hasGlobalHighlights":true,"homeScore":{"current":33,"display":33,"overtime":null,"period1":7,"period2":12,"period3":7,"period4":7},"homeTeam":{"disabled":null,"id":385112,"name":"BarcelonaDragons","shortName":"BarcelonaDragons","slug":"barcelona-dragons","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"id":10300351,"periods":{"current":"Score","overtime":"Overtime","period1":"1stquarter","period2":"2ndquarter","period3":"3rdquarter","period4":"4thquarter"},"slug":"barcelona-dragons-rhein-fire","startTimestamp":1659196800,"status":{"code":100,"description":"Ended","type":"finished"},"time":{},"tournament":{"category":{"alpha2":null,"flag":"europe","id":1371,"name":"Europe","slug":"europe","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":93608,"name":"EuropeanLeagueofFootball,RegularSeason","priority":0,"slug":"european-league-of-football-regular-season","uniqueTournament":{"category":{"alpha2":null,"flag":"europe","id":1371,"name":"Europe","slug":"europe","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":false,"hasEventPlayerStatistics":false,"hasPositionGraph":false,"id":17016,"name":"EuropeanLeagueofFootball","slug":"european-league-of-football","userCount":0}},"winnerCode":1},{"awayScore":{"current":29,"display":29,"overtime":null,"period1":9,"period2":6,"period3":7,"period4":7},"awayTeam":{"disabled":null,"id":188334,"name":"CologneCenturions","shortName":"CologneCenturions","slug":"cologne-centurions","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"changes":{"changeTimestamp":1659447314,"changes":["status.code","status.description","status.type","homeScore.current","homeScore.display","homeScore.period1","homeScore.period2","homeScore.period3","homeScore.period4","awayScore.current","awayScore.display","awayScore.period1","awayScore.period2","awayScore.period3","awayScore.period4"]},"customId":"HqAbsJqAb","finalResultOnly":false,"hasGlobalHighlights":true,"homeScore":{"current":39,"display":39,"overtime":null,"period1":18,"period2":7,"period3":3,"period4":11},"homeTeam":{"disabled":null,"id":188332,"name":"BerlinThunder","shortName":"BerlinThunder","slug":"berlin-thunder","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"subTeams":[],"teamColors":{"primary":"#52b030","secondary":"#52b030","text":"#ffffff"},"type":0,"userCount":0},"id":10300352,"periods":{"current":"Score","overtime":"Overtime","period1":"1stquarter","period2":"2ndquarter","period3":"3rdquarter","period4":"4thquarter"},"slug":"cologne-centurions-berlin-thunder","startTimestamp":1659272400,"status":{"code":100,"description":"Ended","type":"finished"},"time":{},"tournament":{"category":{"alpha2":null,"flag":"europe","id":1371,"name":"Europe","slug":"europe","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":93608,"name":"EuropeanLeagueofFootball,RegularSeason","priority":0,"slug":"european-league-of-football-regular-season","uniqueTournament":{"category":{"alpha2":null,"flag":"europe","id":1371,"name":"Europe","slug":"europe","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":false,"hasEventPlayerStatistics":false,"hasPositionGraph":false,"id":17016,"name":"EuropeanLeagueofFootball","slug":"european-league-of-football","userCount":0}},"winnerCode":1}]}');
	// showScheduledGames(data);

}

function getTeamMembers(teamID) {
	var url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/' + teamID + '/players';
	getApiRespong(url, options, showTeamPlaysers);

// 	 * The web service is not delivering data due to exceeded daily quota. The error message is:
// "You have exceeded the DAILY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/fluis.lacasse/api/americanfootballapi" 
// As son as the service is available again, the hard coded data and the method at line 39 & 40 should be commented and line 33 uncommented. 
// 	 */
	// var data = JSON.parse('{"players":[{"player":{"country":{"alpha2":"US","name":"USA"},"dateOfBirthTimestamp":239414400,"firstName":"","height":193,"id":853680,"jerseyNumber":"12","lastName":"","name":"TomBrady","position":"QB","retired":false,"shirtNumber":12,"shortName":"T.Brady","slug":"brady-tom","team":{"country":{"alpha2":"US","name":"USA"},"disabled":false,"gender":"M","id":4388,"name":"TampaBayBuccaneers","nameCode":"TBB","national":false,"primaryUniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965},"shortName":"TampaBayBuccaneers","slug":"tampa-bay-buccaneers","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"teamColors":{"primary":"#d50a0a","secondary":"#34302b","text":"#34302b"},"tournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41244,"name":"NFL,RegularSeason","priority":5,"slug":"nfl-regular-season","uniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965}},"type":0,"userCount":12953},"userCount":9851}},{"player":{"country":{"alpha2":null,"name":null},"dateOfBirthTimestamp":624412800,"firstName":null,"height":195,"id":854268,"jerseyNumber":"11","lastName":null,"name":"BlaineGabbert","position":"QB","retired":false,"shirtNumber":11,"shortName":"B.Gabbert","slug":"gabbert-blaine","team":{"country":{"alpha2":"US","name":"USA"},"disabled":false,"gender":"M","id":4388,"name":"TampaBayBuccaneers","nameCode":"TBB","national":false,"primaryUniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965},"shortName":"TampaBayBuccaneers","slug":"tampa-bay-buccaneers","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"teamColors":{"primary":"#d50a0a","secondary":"#34302b","text":"#34302b"},"tournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41244,"name":"NFL,RegularSeason","priority":5,"slug":"nfl-regular-season","uniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965}},"type":0,"userCount":12953},"userCount":5}},{"player":{"country":{"alpha2":null,"name":null},"dateOfBirthTimestamp":627264000,"firstName":null,"height":195,"id":854699,"jerseyNumber":"4","lastName":null,"name":"RyanGriffin","position":"QB","retired":false,"shirtNumber":4,"shortName":"R.Griffin","slug":"griffin-ryan","team":{"country":{"alpha2":"US","name":"USA"},"disabled":false,"gender":"M","id":4388,"name":"TampaBayBuccaneers","nameCode":"TBB","national":false,"primaryUniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965},"shortName":"TampaBayBuccaneers","slug":"tampa-bay-buccaneers","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"teamColors":{"primary":"#d50a0a","secondary":"#34302b","text":"#34302b"},"tournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41244,"name":"NFL,RegularSeason","priority":5,"slug":"nfl-regular-season","uniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965}},"type":0,"userCount":12953},"userCount":5}},{"player":{"country":{"alpha2":null,"name":null},"dateOfBirthTimestamp":889142400,"firstName":"","height":195,"id":1132732,"jerseyNumber":"2","lastName":"","name":"KyleTrask","position":"QB","retired":false,"shirtNumber":2,"shortName":"K.Trask","slug":"trask-kyle","team":{"country":{"alpha2":"US","name":"USA"},"disabled":false,"gender":"M","id":4388,"name":"TampaBayBuccaneers","nameCode":"TBB","national":false,"primaryUniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965},"shortName":"TampaBayBuccaneers","slug":"tampa-bay-buccaneers","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"},"teamColors":{"primary":"#d50a0a","secondary":"#34302b","text":"#34302b"},"tournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"id":41244,"name":"NFL,RegularSeason","priority":5,"slug":"nfl-regular-season","uniqueTournament":{"category":{"alpha2":"US","flag":"usa","id":1370,"name":"USA","slug":"usa","sport":{"id":63,"name":"AmericanFootball","slug":"american-football"}},"displayInverseHomeAwayTeams":true,"id":9464,"name":"NFL","slug":"nfl","userCount":37965}},"type":0,"userCount":12953},"userCount":1}}]}');
	// showTeamPlaysers(data);

}
function getApiRespong(url, options, CallBack) {

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

function showScheduledGames(response) {
	var scheduleTable = document.getElementById('TeamSchedules');


	//Cleanup table rows beside the header
	for (r = scheduleTable.rows.length - 1; r > 1; r--)
		scheduleTable.deleteRow(r);


	//If the API response has values, display the result table. Otherwise terminate this function by returning 
	if (response === undefined || typeof (response) === String || !response.hasOwnProperty('events') || response.events.length == 0) {
		scheduleTable.style.display = 'none';
		$("#messagediv").text("Return value for scheduled games is empty").show();
		return;
	}

	scheduleTable.style.display = 'block';
	// playsersTable.style.display = 'none';


	$("#messagediv").hide();

	teamAttributs = ["homeTeam", "awayTeam"];
	var Team;
	//First loop through plaster list and get each player. 
	response.events.forEach(function (event) {

		Team = event;

		//Create for each player a table row and append it to the result table
		var tr = document.createElement("TR");
		scheduleTable.appendChild(tr);

		teamAttributs.forEach(function (attribute) {
			//For each attribute create a column and attach it to the table row created before 



			if (attribute === "awayTeam") {
				createAndAppendColumnToRow("<a href='javascript:getTeamMembers(" + Team[attribute].id + ");'>" + Team[attribute].name + "</a>", tr)

			}
			else if (attribute === "homeTeam") {
				createAndAppendColumnToRow("<a href='javascript:getTeamMembers(" + Team[attribute].id + ");'>" + Team[attribute].name + "</a>", tr);
			}
			else {
				createAndAppendColumnToRow(Team[attribute], tr);
			}

		});
	});

}
var playsersTable = document.getElementById('Playsers');

function showTeamPlaysers(response) {

	var playerAttributs = ["id", "name", "shortName", "dateOfBirthTimestamp", "shirtNumber", "height", "country", "team"];

	//Cleanup table rows beside the header
	for (r = playsersTable.rows.length - 1; r > 1; r--)
		playsersTable.deleteRow(r);




	//If the API response has values, display the result table. Otherwise terminate this function by returning 
	if (response === undefined || typeof (response) === String || !response.hasOwnProperty('players') || response.players.length == 0) {
		playsersTable.style.display = 'none';
		$("#messagediv").text("Return value for players is empty").show();
		return;
	}

	playsersTable.style.display = 'block';
	$("#messagediv").hide();


	var player;
	var IsTeamNameEmpty = true;
	//Remove team name from the team member table befre adding new team
	$("#nameofteammembers").empty();
	//hide error message
	$("#messagediv").hide();
	//First loop through plaster list and get each player. 
	response.players.forEach(function (playerItem) {

		player = playerItem.player;

		//Create for each player a table row and append it to the result table
		var tr = document.createElement("TR");
		playsersTable.appendChild(tr);

		playerAttributs.forEach(function (attribute) {
			//For each attribute create a column and attach it to the table row created before 


			switch (attribute) {
				case "dateOfBirthTimestamp":
					createAndAppendColumnToRow(new Date(player[attribute]).toLocaleDateString(), tr);
					break;
				case "country":
					createAndAppendColumnToRow(player[attribute].name, tr);
					break;
				case "team":
					if ($("#nameofteammembers").text() == "") {
						$("#nameofteammembers").text(player[attribute].name);
						IsTeamNameEmpty = false;
					}

					break;
				default:
					createAndAppendColumnToRow(player[attribute], tr);
			}

		});
	});

}

function createAndAppendColumnToRow(AttributeValue, Row) {
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
	var scheduleDate = this.value.split('-');
	var formatedDate = scheduleDate[2] + '/' + scheduleDate[1] + '/' + scheduleDate[0]

	getSchedules(formatedDate)
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