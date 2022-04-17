// Add Current Day to header tag
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;

// Add background styling dependent on time of day
var events = [];

// Save button is clicked
$(".time-block").click(function() {
    // Get values for event and hour
    var eventText = $(this).find(".description").val();
    // var eventHour = $(this).find("p.hour").text();

    console.log(eventText);
    // console.log(eventHour);

        // Save in events array
        events.push({
            event: eventText
          });
        
        console.log(events);

        });

// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(events));
// };