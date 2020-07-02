// Weather API
function weatherApi() {
    const prestonURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9d9f72be67a23278732a4344d3daa9f8';
    const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9d9f72be67a23278732a4344d3daa9f8';
    fetch(prestonURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const obj = jsObject;
            console.table(obj); // temporary checking for valid response and data parsing

            let currWeather = obj.main.temp_max;
            let high = Math.round(kelvinFar(currWeather) * 100.0) / 100.0;
            document.getElementById('high').innerHTML = high + '\xB0' + 'F';

            let humidity = obj.main.humidity;
            document.getElementById('humidity').innerHTML = humidity;

            let desc = obj.weather[0].description;
            document.getElementById('currently').innerHTML = desc;

            let wind = obj.wind.speed;
            document.getElementById('wind-speed').innerHTML = wind;

            let temp = obj.main.temp;
            let currTemp = Math.round(kelvinFar(temp) * 100) / 100 + '\xB0' + 'F';
            document.getElementById('currTemp').innerHTML = currTemp;
        });


    fetch(forcastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const forcast = jsObject;
            console.table(forcast); // temporary checking for valid response and data parsing


            for (let i = 0; i < 5; i++) {
                let x = forcast.list[i].main.temp;
                let temp = Math.round(kelvinFar(x) * 100) / 100;
                document.getElementById('deg' + i).textContent = temp;
            }
            for (let i = 0; i < 5; i++) {
                let imagesrc = 'https://openweathermap.org/img/w/' + forcast.list[i].weather[0].icon + '.png';
                let desc = forcast.list[i].weather[0].description;
                document.getElementById('img' + i).setAttribute('src', imagesrc);
                document.getElementById('img' + i).setAttribute('alt', desc);
            }

        });

    document.addEventListener("DOMContentLoaded", () => {
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/style.css'
        head.appendChild(link);
    });

}
weatherApi();


// Kelvin to Fahrenheit Calculator:
function kelvinFar(x) {
    x -= 273.15;
    x *= 9 / 5;
    x += 32;
    return x;
}

const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
}

const options = { threshold: [0.1] };

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, options
);

images.forEach(image => {
    io.observe(image);
});

function dayTime() {
    var full_date = new Date();
    var daysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[full_date.getDay()];
    var monthsofyear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthofYear = monthsofyear[full_date.getMonth()];

    var output = dayofWeek + ', ' + full_date.getDate() + ' ' + monthofYear + ' ' + full_date.getFullYear();
    document.getElementById('date_time').innerHTML = output;
}

dayTime();


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);



function fridays() {
    var full_date = new Date();
    var daysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[full_date.getDay()];
    if (dayofWeek == "Friday") {
        let out = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
        document.getElementById("fridays").style.display = "block"
        document.getElementById("fridays").innerHTML = out;
    } else {
        document.getElementById("fridays").style.display = "none"
    }
}
fridays();


function windChill(t, s) {
    let f = 35.74 + 0.6125 * t - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
}

function getwindchill() {
    let t = parseInt(document.getElementById('high').value);
    let s = parseInt(document.getElementById('wind-speed').value);
    let answer = windChill(t, s);
    if (answer <= 0) {
        document.getElementById('wind-chill').innerHTML = f + '\xB0';
    } else {
        document.getElementById('wind-chill').innerHTML = 'N/A';
    }
}
getwindchill();