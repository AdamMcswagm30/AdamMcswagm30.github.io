const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

document.addEventListener("DOMContentLoaded", () => {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/prophets.css'
    head.appendChild(link);
});

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');


            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);


            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            card.appendChild(p1);
            document.querySelector('div.cards').appendChild(card);

            p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(p2);
            document.querySelector('div.cards').appendChild(card);

            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }

    });