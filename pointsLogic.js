// Add bonus points for collaborating
if (workout.buddy) {
  user.bonus_points += 50;
}
//Start workout
function onClick () {
  // Save start_time to database
  workout.time_started = new Date();
}
//End workout
function onClick () {
  // Save end_time to database
  workout.time_finished = new Date();
  // Complete workout
  workout.completed = true;
  // Add points based on workout time completed
  var ms_completed = workout.time_finished - workout.time_started;
  var minutes_completed = Math.round(((ms_completed % 86400000) % 3600000) / 60000);
  var percentage_completed = minutes_completed / workout.goal_time;
  var final_points = Math.round((minutes_completed / goal_time) * total_points);
  if (hero.sport === "Tennis" ) {
    user.tennis_points += final_points;
  } else if (user.hero.sport === "Basketball") {
    user.basketball_points += final_points;
  } else {
    user.soccer_points += final_points;
  }
}

// Calculate points percentage
function points_percentage(points) {
  return Math.round((points/1000) * 100);
}
