import cauldronPng from "../assets/images/cauldronBlue.png";
import { changeCauldron } from "../utils/changeCauldron";

export function serveAbout(div) {
    document.querySelector('main').innerHTML = "";
    changeCauldron(document.getElementById('about-icon'), cauldronPng);

    const bio = "The Leaky Cauldron was built in 1550 by Daisy Dodderidge. Prior to the institution of the International Statute of Secrecy, The Leaky Cauldron hosted both magical and non-magical guests. The Leaky Cauldron now serves as a tavern and pub to magical beings from all over the world.";
    const location = "The Leaky Cauldron is located in London at #1 Diagon Alley. The Leaky Cauldron is connected to the Floo Network.";
    const hours = "The Leaky Cauldron does not close";
}

