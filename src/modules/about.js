import cauldronPng from "../assets/images/cauldronBlue.png";
import { changeCauldron } from "../utils/changeCauldron";

export function serveAbout(div) {
    const main = document.querySelector('main');
    main.innerHTML = "";
    changeCauldron(document.getElementById('about-icon'), cauldronPng);

    const header = document.createElement('h2')
    header.textContent = "About";
    main.appendChild(header);

    const info = {
        bio: "The Leaky Cauldron was built in 1550 by Daisy Dodderidge. Prior to the institution of the International Statute of Secrecy, The Leaky Cauldron hosted both magical and non-magical guests. The Leaky Cauldron now serves as a tavern and pub to magical beings from all over the world.",
        location: "The Leaky Cauldron is located in London at #1 Diagon Alley. The Leaky Cauldron is connected to the Floo Network.",
        hours: "The Leaky Cauldron does not close"
    }

    const bio = document.createElement('p');
    const location = document.createElement('p');
    const hours = document.createElement('p');
    bio.textContent = info.bio;
    location.textContent = info.location;
    hours.textContent = info.hours;
    main.appendChild(bio);
    main.appendChild(location);
    main.appendChild(hours);

}


