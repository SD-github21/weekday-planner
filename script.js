// Add Current Day to header tag
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;
let currentHour = moment().hour()

// Add background styling dependent on time of day
// 9:00am
nineAmText = $("#9am").find("textarea");
if (currentHour ===9 ) {
    $(nineAmText).addClass("past")
} else if (currentHour > 9) {
    $(nineAmText).addClass("past")
} else {
    $(nineAmText).addClass("future")
};

// 10:00am
tenAmText = $("#10am").find("textarea");
if (currentHour===10 ) {
    $(tenAmText).addClass("present")
} else if (currentHour > 10) {
    $(tenAmText).addClass("past")
} else {
    $(tenAmText).addClass("future")
};

//11:00am
elevenAmText = $("#11am").find("textarea");
if (currentHour === 11) {
    $(elevenAmText).addClass("present")
} else if (currentHour > 11) {
    $(elevenAmText).addClass("past")
} else {
    $(elevenAmText).addClass("future")
};

// 12:00pm
twelvePmText = $("#12pm").find("textarea");
if (currentHour === 12) {
    $(twelvePmText).addClass("present")
} else if (currentHour > 12) {
    $(twelvePmText).addClass("past")
} else {
    $(twelvePmText).addClass("future")
};

// 1:00pm
onePmText = $("#1pm").find("textarea");
if (currentHour === 13) {
    $(onePmText).addClass("present")
} else if (currentHour > 13) {
    $(onePmText).addClass("past")
} else {
    $(onePmText).addClass("future")
};

// 2:00pm
twoPmText = $("#2pm").find("textarea");
if (currentHour === 14 ) {
    $(twoPmText).addClass("present")
} else if (currentHour > 14) {
    $(twoPmText).addClass("past")
} else {
    $(twoPmText).addClass("future")
};


// 3:00pm
threePmText = $("#3pm").find("textarea");
if (currentHour === 15) {
    $(threePmText).addClass("present")
} else if (currentHour > 15) {
    $(threePmText).addClass("past")
} else {
    $(threePmText).addClass("future")
};


// 4:00pm
fourPmText = $("#4pm").find("textarea");
if (currentHour === 16) {
    $(fourPmText).addClass("present")
} else if (currentHour > 16) {
    $(fourPmText).addClass("past")
} else {
    $(fourPmText).addClass("future")
};

// 5:00pm
fivePmText = $("#5pm").find("textarea");
if (currentHour === 17) {
    $(fivePmText).addClass("present")
} else if (currentHour > 17) {
    $(fivePmText).addClass("past")
} else {
    $(fivePmText).addClass("future")
};


// Save button is clicked
//Successfully was able to grab each calendar event and time, push to an array, and store in localStorage using each!
events = [];

$(".saveBtn").each(function() {
    $(this).on("click", (function(){
     events.push({ 
         event: ($(this).parent().find("textarea").val().trim()),
         time: ($(this).parent().attr("id").trim())});
     console.log(events);
    localStorage.setItem("events", JSON.stringify(events));
 
}))

});

$(document).ready(function() {   
    events = JSON.parse(localStorage.getItem("events"));
    console.log(events);
      // loop over object properties

      for (var i = 0; i < events.length; i++) {
        if (events[i].time == $(".row").attr("id")) {
            console.log(events[i].event);
            } 
    };
  });


// attempt #1
//   $(document).ready(function() {   
//     events = JSON.parse(localStorage.getItem("events"));
//     console.log(events);
//       // loop over object properties
//   $(events).each(function() {
//         if (events.time = $(".row").attr("id")) {
//             console.log(events.time);
//             // events.event = $(".row").attr("id").find("textarea").val()
//             } else {
//                 console.log("not working");
//             }
//     });
//   });



    //   $(events).each(function() {
    //     if (events.time = ) {
    //         console.log(events.time);
    //         // events.event = $(".row").attr("id").find("textarea").val()
