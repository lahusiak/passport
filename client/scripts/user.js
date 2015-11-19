$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data);
            $("#welcome").append("<div>" + "Welcome, " +  data.username + "!" + "<p>" + data.firstName + " " + data.lastName + "</p>" + "<p>" + data.email + "</p></div>");
        }
    });
});