$(document).ready(function(){
    
    $("#submit").click(function () { 
        let bodytext = $("#body").val();
        let fname = $("#fname").val();
        let lname = $("#lname").val();

        window.open("mailto:eli.develops@gmail.com?subject="+fname+"%20"+lname+"%20Wishes%20To%20Connect&body="+bodytext+"%0a%0aBest,%0a"+fname+"%20"+lname+"");
    });
});