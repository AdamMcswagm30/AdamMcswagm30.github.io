function dayTime(){
    var full_date = new Date();
    var daysofWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[full_date.getDay()];
    console.log(dayofWeek);
    var monthsofyear = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var monthofYear = monthsofyear[full_date.getMonth()];

    var output = dayofWeek + ', ' + full_date.getDate() + ' ' +  monthofYear + ' ' + full_date.getFullYear();
    document.getElementById('date_time').innerHTML = output;
}
dayTime();

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);