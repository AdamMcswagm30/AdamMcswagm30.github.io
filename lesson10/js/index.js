const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

document.addEventListener("DOMContentLoaded", () => {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/style.css'
    head.appendChild(link);
});

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');


            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.towns').appendChild(card);


            p1.textContent = towns[i].motto;
            p1.setAttribute('class', 'mottos');
            card.appendChild(p1);
            document.querySelector('div.towns').appendChild(card);

            p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(p2);
            document.querySelector('div.towns').appendChild(card);

            p3.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(p3);
            document.querySelector('div.towns').appendChild(card);

            p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(p4);
            document.querySelector('div.towns').appendChild(card);

            let image = document.createElement('img');
            image.setAttribute('src', ('./images/' + towns[i].photo));
            card.appendChild(image);
            document.querySelector('div.towns').appendChild(card);
        }

    });