// Calculate user level
var user_level = Math.floor(user.points/100);
// Check in with buddy
function onClick () {
  workout.buddy = true;
}
// Add bonus points for collaborating
if (workout.buddy) {
  user.bonus_points += 50;
}
// Save start_time to database
function onClick () {
  workout.time_started = new Date();
}
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
  if (user.current_hero.sport === "tennis" ) {
    user.tennis_points += final_points;
  } else if (user.current_hero.sport === "basketball") {
    user.basketball_points += final_points;
  } else {
    user.soccer_points += final_points;
  }
}

// Calculate points percentage
function points_percentage(points) {
  return Math.round((points/1000) * 100);
}
