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
} else if (tenAm.replace("am", "") >= currentHour) {
    $(tenAmText).addClass("future")
} else {
    $(tenAmText).addClass("present")
};

//11:00am
elevenAm = $("#11am").find("p.hour").text();
elevenAm = parseInt(elevenAm.replace("am", ""));
elevenAmText = $("#11am").find("textarea");

if (elevenAm < currentHour ) {
    $(elevenAmText).addClass("past")
} else if (elevenAm.replace("am", "") >= currentHour) {
    $(elevenAmText).addClass("future")
} else {
    $(elevenAmText).addClass("present")
};

// 12:00pm
twelvePm = $("#12pm").find("p.hour").text();
twelvePm = parseInt(twelvePm.replace("am", ""));
twelvePmText = $("#12pm").find("textarea");

if (twelvePm < currentHour ) {
    $(twelvePmText).addClass("past")
} else if (twelvePm.replace("pm", "") >= currentHour) {
    $(twelvePmText).addClass("future")
} else {
    $(twelvePmText).addClass("present")
};

// 1:00pm
onePm = $("#1pm").find("p.hour").text();
onePm = parseInt(onePm.replace("am", ""));
onePmText = $("#1pm").find("textarea");

if (currentHour===13) {
    $(onePmText).addClass("past")
} else if (currentHour>=13) {
    $(onePmText).addClass("future")
} else {
    $(onePmText).addClass("present")
};

// 2:00pm
twoPm = $("#2pm").find("p.hour").text();
twoPm = parseInt(twoPm.replace("am", ""));
twoPmText = $("#2pm").find("textarea");

if (currentHour <=14 ) {
    $(twoPmText).addClass("past")
} else if (currentHour === 14) {
    $(twoPmText).addClass("present")
} else {
    $(twoPmText).addClass("future")
};


// 1:00pm
threePm = $("#3pm").find("p.hour").text();
threePm = parseInt(threePm.replace("am", ""));
threePmText = $("#3pm").find("textarea");

if (currentHour < 15) {
    $(threePmText).addClass("past")
} else if (currentHour===15) {
    $(threePmText).addClass("present")
} else {
    $(threePmText).addClass("future")
};


// 3:00pm
threePm = $("#3pm").find("p.hour").text();
threePm = parseInt(threePm.replace("am", ""));
threePmText = $("#3pm").find("textarea");

if (threePm < currentHour ) {
    $(threePmText).addClass("past")
} else if (threePm.replace("pm", "") >= currentHour) {
    $(threePmText).addClass("future")
} else {
    $(threePmText).addClass("present")
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