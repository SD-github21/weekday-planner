// Add Current Day to header tag
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;
let currentHour = moment().hour()
console.log(currentHour);


// Add background styling dependent on time of day
// 
nineAm = $("#9am").find("p.hour").text();
nineAm = parseInt(nineAm.replace("am", ""));
console.log(nineAm);

if (nineAm < currentHour ) {
    $("textarea").addClass(".past")
} else if (nineAm >= currentHour) {
    $("textarea").addClass(".future")
} else {
    $("textarea").addClass(".present")
}


var events = [];


// $(".time-block").click(function() {
//     // Get values for event and hour
//     var eventText = $(this).find(".description").val();
//     var eventHour = $(this).find("p.hour").text();

//     console.log(eventText);
//     console.log(eventHour);

// });

// Save button is clicked

$(".time-block").on("click", "button", (function() {
    var eventText = $("textarea.description").val();
    var eventHour = $("p.hour").text();
    console.log(eventText);
    console.log(eventHour);

    // Save in events array
    events.push(eventText);
    console.log(events);


    }));



// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(events));
// };