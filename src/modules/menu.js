import cauldronPng from "../assets/images/cauldronYellow.png";
import fireWhiskeyPng from "../assets/images/firewhiskey.png";
import butterbeerPng from "../assets/images/butterbeer.png";
import peaSoupPng from "../assets/images/peaSoup.png";
import { changeCauldron } from "../utils/changeCauldron.js";


function createCard(obj) {
    const main = document.querySelector('main');
    const card = document.createElement('div');

    card.classList.add('food-info');
    const name = document.createElement('h2');
    name.textContent = obj.name;
    const price = document.createElement('h4');
    price.textContent = obj.price;
    const description = document.createElement('p');
    description.textContent = obj.description;

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(description);

    main.appendChild(obj.image);
    main.appendChild(card);
} 

export function serveMenu() {
    const main = document.querySelector('main');
    main.innerHTML = "";
    changeCauldron(document.getElementById('menu-icon'), cauldronPng);

    const firewhiskey = new Image();
    firewhiskey.src = fireWhiskeyPng;
    firewhiskey.classList.add('food-img');
    // main.appendChild(firewhiskey);
    const butterbeer = new Image();
    butterbeer.src = butterbeerPng;
    butterbeer.classList.add('food-img');
    // main.appendChild(butterbeer);
    const peaSoup = new Image();
    peaSoup.src = peaSoupPng;
    peaSoup.classList.add('food-img');


    const food = [
        {
            name: "Pea Soup",
            price: "5 Sickles",
            description: "Make sure you eat it before it eats you.",
            image: peaSoup,
        }
    ];

    const drink = [
        {
            name: "Fire Whiskey",
            price: "5 Sickles",
            description: "Choose from Ogden's Old or Blishen's",
            image: firewhiskey,
        },
        {
            name: "Butterbeer",
            price: "2 Sickles",
            description: "Sweet, floral ale",
            image: butterbeer,
        }
    ]

    // main.appendChild(food[0].image);
    createCard(food[0]);
    drink.forEach(obj => {
        createCard(obj);
    });
}