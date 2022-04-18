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



var events = {};

// Save button is clicked

// Successfully coded for each timeblock
// $("#9am").on("click", "button", (function() {
//     var eventText = $("#9amText").val();
//     console.log(eventText);
//     // Save in events array
//     events.push(eventText);
//     console.log(events);
//     localStorage.setItem("events", JSON.stringify(events));
//      }));
   
// $("#10am").on("click", "button", (function() {
//     var eventText = $("#10amText").val();
//     console.log(eventText);
//     // Save in events array
//     events.push(eventText);
//     console.log(events);
//     localStorage.setItem("events", JSON.stringify(events));
//     }));


// Attempts to consolidate above code into a more "DRY" function
//Attempt #1
// $each(".row").on("click", "button", function(id) {
//     var eventText = $("id").val();
//     console.log(eventText);
//     // Save in events array
//     events.push(eventText);
//     console.log(events);
//     localStorage.setItem("events", JSON.stringify(events));
// }));

//Attempt#2
// $(".row").each(function() {
//     $(".saveBtn").on("click", function(){
//         $(this).parent().find("textarea");
//         var eventText = $("textarea").val();
//         var eventID = $("textarea").attr("id");
//         console.log(eventText); 
//         console.log(eventID)
//         $("textarea").each(function(){
//             events.push($(this).attr("id"));

// Attempt#3
    $(".saveBtn").each(function() {
        $(this).on("click", function(){
        $(this).parent().find("textarea");
        var eventText = $("textarea").val();
        var eventID = $("textarea").attr("id");
        console.log(eventText); 
        console.log(eventID)
        // $("textarea").each(function(){
                
        //     events.push($(this).attr("id"));


    // Save in events array
    // events.push(eventText);
    // console.log(events);
    // localStorage.setItem("events", JSON.stringify(events));
    })

  });


//   object of time: "id"; events: value change events to an object with key value pairs

// $(".row").each(function() {
//     $(".saveBtn").on("click", function(){
//       $(this) // RETURNS THE BUTTON CLICKED
//     })
// });

// $(".saveBtn").parent() will give the div.row that the .saveBtn is in

// $("div.row").find("textarea") would find a textarea inside of the div.row

// $("div.row").find("section") will return the first section element that it finds in div.row