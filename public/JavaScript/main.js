$("#tab-bar a").bind('click', function(e) {  e.preventDefault();  var nextPage = $(e.target.hash);  $("#pages .current").removeClass("current");  nextPage.addClass("current");$("#tab-bar").attr("className", e.target.hash.slice(1));}); 

var schedule = {
 "september": [
   {"match": "1","date": "9/01","team1": "U1","team2": "U4","location": "AJ Katzenmaier","time": "9:30 a.m.","status": "end","score1": 4, "score2": 2},
   {"match": "2","date": "9/01","team1": "U3","team2": "U2","location": "Greenbay","time": "1:00 p.m.","status": "end","score1": 2,"score2": 3},
   {"match": "3","date": "9/08","team1": "U5","team2": "U6","location": "Howard A Yeager","time": "9:30 a.m.","status": "end","score1": 3,"score2": 5},
   {"match": "4","date": "9/08","team1": "U6","team2": "U1","location": "Marjorie P Hart","time": "1:00 p.m.","status": "end","score1": 2,"score2": 3},
   {"match": "5","date": "9/15","team1": "U2","team2": "U4","location": "North","time": "9:30 a.m.","status": "end","score1": 3,"score2": 3},
   {"match": "6","date": "9/15","team1": "U3","team2": "U5","location": "AJ Katzenmaier","time": "1:00 p.m.","status": "end","score1": 3,"score2": 2},
   {"match": "7","date": "9/22","team1": "U1","team2": "U3","location": "South","time": "9:30 a.m.","status": "end","score1": 6,"score2": 4},
   {"match": "8","date": "9/22","team1": "U3","team2": "U2","location": "Howard A Yeager","time": "1:00 p.m.","status": "end","score1": 4,"score2": 4},
   {"match": "9","date": "9/29","team1": "U4","team2": "U5","location": "Greenbay","time": "9:30 a.m.","status": "suspended","score1": null,"score2": null},
 ],
 "october": [
   {"match": "10","date": "10/06","team1": "U2","team2": "U5","location": "Marjorie P Hart","time": "9:30 a.m.","status": "to be played"},
   {"match": "11","date": "10/06","team1": "U1","team2": "U6","location": "South","time": "1:00 p.m.","status": "to be played"},
   {"match": "12","date": "10/13","team1": "U3","team2": "U4","location": "Howard A Yeager","time": "9:30 a.m.","status": "to be played"},
   {"match": "13","date": "10/13","team1": "U5","team2": "U1","location": "Greenbay","time": "1:00 p.m.","status": "to be played"},
   {"match": "14","date": "10/20","team1": "U6","team2": "U3","location": "North","time": "9:30 a.m.","status": "to be played"},
   {"match": "15","date": "10/20","team1": "U2","team2": "U4","location": "Marjorie P Hart","time": "1:00 p.m.","status": "to be played"},
   {"match": "16","date": "10/27","team1": "U3","team2": "U1","location": "AJ Katzenmaier","time": "9:30 a.m.","status": "to be played"},
   {"match": "17","date": "10/27","team1": "U3","team2": "U5","location": "Howard A Yeager","time": "1:00 p.m.","status": "to be played"},
 ],
};
var statistics = [{
	    team: "U1",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	}, {
		team: "U2",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	}, {
		team: "U3",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	},{
		team: "U4",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	},{
		team: "U5",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	}, {
		team: "U6",
		pts: 0,
		w: 0,
		l: 0,
		d: 0,
	}]	



function makeStats(){
	schedule.september.forEach(function(i){
		statistics.forEach(function(j){
			if(i.score1 > i.score2){
				if(i.team1 == j.team){
					j.w += 1
				} else if(i.team2 == j.team){
					j.l += 1
				}
			} else if (i.score1 < i.score2){
				if(i.team2 == j.team){
					j.w += 1
				} else if(i.team1 == j.team){
					j.l += 1
				}
			} else{
				if(i.team2 == j.team){
					j.d += 1
				} else if(i.team1 == j.team){
					j.d += 1
				}
			}
		})
		
	})
}

makeStats()

function sumaPuntos(){
	statistics.forEach(function(i){
		i.pts = i.w*3 + i.d
	})
}
sumaPuntos()


var app = new Vue({  
  el: '#app',  
  data: {
	  stats: statistics,
	  
  }
}); 



/*
var teams = ["U1","U2","U3","U4","U5","U6"]
	var positionTeam = []
	var scoreOne = schedule.september.score1
	var scoreTwo = schedule.september.score2
function resultados (score1, score2){ 
 positionTeam = scheule.teams.length.
	
 }*/