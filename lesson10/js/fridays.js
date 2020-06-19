function fridays(){
   console.log("daytime");
    var full_date = new Date();
    var daysofWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[full_date.getDay()]; 
    if (dayofWeek == "Friday"){
        let out = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
        document.getElementById("fridays").style.display = "block"
        document.getElementById("fridays").innerHTML = out;
    }
    else{
        document.getElementById("fridays").style.display = "none"
    }
}
fridays();