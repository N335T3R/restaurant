import cauldronPng from "../assets/images/cauldronRed.png";
import { changeCauldron } from "../utils/changeCauldron";

export function serveHome() {
    const main = document.querySelector('main');
    main.innerHTML = "";
    changeCauldron(document.getElementById('home-icon'), cauldronPng);

    const h1 = document.createElement('h2');
    h1.textContent = "Welcome to The Leaky Cauldron";
    h1.classList.add('home-header');
    main.appendChild(h1);
    
    const h2 = document.createElement('h4');
    h2.textContent = "Where Magic Meets Tradition";
    h2.classList.add('home-header-2');
    main.appendChild(h2);

    const ps = [
        "Step into our time-honored tavern, nestled between the wizarding world and the bustling streets of London. Whether you're a weary traveler, a curious witch or wizard, or simply seeking a taste of enchantment, you'll find warmth, camaraderie, and the finest Butterbeer this side of Diagon Alley",
        "Sip, chat, and let the magic unfold—because here, the stories are as rich as the firewhiskey and the laughter echoes long after the candles dim",
        "So come on in, grab a seat, and experience the magic firsthand. The Leaky Cauldron awaits!",
    ];

    ps.forEach(p => {
        const para = document.createElement('p');
        para.textContent = p;
        main.appendChild(para);
    });
}