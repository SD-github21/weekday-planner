// Add Current Day to header tag
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;
let currentHour = moment().hour()
console.log(currentHour);

// Add background styling dependent on time of day
// 9:00am
nineAm = $("#9am").find("p.hour").text();
nineAm = parseInt(nineAm.replace("am", ""));
console.log(nineAm);
nineAmText = $("#9am").find("textarea");
console.log(nineAmText);

if (nineAm < currentHour ) {
    console.log(nineAm + "is less than" + currentHour)
    $(nineAmText).addClass("past")
} else if (nineAm.replace("am", "") >= currentHour) {
    $(nineAmText).addClass("future")
} else {
    $(nineAmText).addClass("present")
};

// 10:00am
tenAm = $("#10am").find("p.hour").text();
tenAm = parseInt(tenAm.replace("am", ""));
console.log(tenAm);
tenAmText = $("#10am").find("textarea");
console.log(tenAmText);

if (tenAm < currentHour ) {
    console.log(tenAm + "is less than" + currentHour)
    $(tenAmText).addClass("past")
} else if (nineAm.replace("am", "") >= currentHour) {
    $(tenAmText).addClass("future")
} else {
    $(tenAmText).addClass("present")
};


tenAm = $("#10am").find("p.hour").text();
tenAm = parseInt(tenAm.replace("am", ""));
console.log(tenAm);
tenAmText = $("#10am").find("textarea");
console.log(tenAmText);

if (tenAm < currentHour ) {
    console.log(tenAm + "is less than" + currentHour)
    $(tenAmText).addClass("past")
} else if (nineAm.replace("am", "") >= currentHour) {
    $(tenAmText).addClass("future")
} else {
    $(tenAmText).addClass("present")
};












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