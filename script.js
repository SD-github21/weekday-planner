// Add Current Day to header tag
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;

// Add background styling dependent on time of day
var events = {};

// Save button is clicked
$("#calendar .saveBtn").click(function() {
    // Get values for event and hour
    var eventText = $("#eventDescription").val();
    var eventHour = $("#eventHour").val();

        // Save in events array
        events.push({
            event: eventText,
            hour: eventHour
          });
        });

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};
          
  