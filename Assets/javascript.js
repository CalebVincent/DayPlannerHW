// display time date + date in jumbotron

// store html reference in variable
var currentDayEl = $("#currentDay");
var inputBlockEl = $(".time-block");
var saveBtns = $(".saveBtn");

// create function to add time 
var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var now = moment().hour();
    
    inputBlockEl.each(function (i, element) {
        element = $(element);
        if (now > element.attr("data-hour")) {
            element.addClass("past").removeClass("future present");
        } else if (now == element.attr("data-hour")) {
            element.addClass("present").removeClass("future past");
        }
    });
}

setInterval(update, 1000);
$('.toast').toast(500);


saveBtns.on("click", function (event) {
    $(".toast").toast('show');
        var button = $(this);
        var btnData = $(this).attr("data-time");
        var descriptionTarget = $("#description" + btnData);
        localStorage.setItem(descriptionTarget.attr("id"), descriptionTarget.val());
    });

    $("#description9").text(localStorage.getItem("description9"));
    $("#description10").text(localStorage.getItem("description10"));
    $("#description11").text(localStorage.getItem("description11"));
    $("#description12").text(localStorage.getItem("description12"));
    $("#description13").text(localStorage.getItem("description13"));
    $("#description14").text(localStorage.getItem("description14"));
    $("#description15").text(localStorage.getItem("description15"));
    $("#description16").text(localStorage.getItem("description16"));
    $("#description17").text(localStorage.getItem("description17"));

    $("#clearBtn").on("click", function () {
        localStorage.clear();
        $(".description").text("");
    });

