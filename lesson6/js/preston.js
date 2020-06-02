function dayTime(){
    var full_date = new Date();
    var daysofWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[full_date.getDay()];
    var monthsofyear = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var monthofYear = monthsofyear[full_date.getMonth()];

    var output = dayofWeek + ', ' + full_date.getDate() + ' ' +  monthofYear + ' ' + full_date.getFullYear();
    document.getElementById('date_time').innerHTML = output;
}

dayTime();


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



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


function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
myMap();
