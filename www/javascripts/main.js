$(document).ready(
  function(){
  //   $( "#btn" ).click(function() {
  // alert( "Handler for .click() called." );
  var user = {
  name: "Emma",
  soccer_points: 250,
  basketball_points: 800,
  tennis_points: 100,
  bonus_points: 50
}
var hero = {
  name: "Serena Williams",
  image: "/images/cutoutSerena.png",
  sport: "Tennis"
}
var workout = {
  name: "Lunges",
  points: 100,
  url: "http://gph.is/1SGJCkm",
  goal_time: 5,
  completed: false,
  buddy: false,
  time_started: "",
  time_finished: ""
}
$("#startLunges").click(function () {
  alert("Start your workout!");
  $(".start").hide();
  workout.time_started = new Date();
  $(".end").show();
  console.log(workout.time_started);
})
$("#endLunges").click(function () {
  alert("You have completed your workout!")
  // Save end_time to database
  workout.time_finished = new Date();
  // Complete workout
  workout.completed = true;
  // Add points based on workout time completed
  var ms_completed = workout.time_finished - workout.time_started;
  var minutes_completed = Math.round(((ms_completed % 86400000) % 3600000) / 60000);
  var percentage_completed = minutes_completed / workout.goal_time;
  var final_points = Math.round((minutes_completed / workout.goal_time) * workout.points);
  console.log('round points', final_points);
  if (hero.sport === "Tennis" ) {
    user.tennis_points += final_points;
  } else if (user.hero.sport === "Basketball") {
    user.basketball_points += final_points;
  } else {
    user.soccer_points += final_points;
  }
  console.log('user points', user.tennis_points);
})
});
  });
