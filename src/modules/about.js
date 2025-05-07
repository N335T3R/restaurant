import cauldronPng from "../assets/images/cauldron.png";

export function serveAbout(div) {
    const bio = "The Leaky Cauldron was built in 1550 by Daisy Dodderidge. Prior to the institution of the International Statute of Secrecy, The Leaky Cauldron hosted both magical and non-magical guests. The Leaky Cauldron now serves as a tavern and pub to magical beings from all over the world.";
    const location = "The Leaky Cauldron is located in London at #1 Diagon Alley. The Leaky Cauldron is connected to the Floo Network.";
    const hours = "The Leaky Cauldron does not close";

    const cauldron = new Image();
    cauldron.src = cauldronPng;
    document.body.appendChild(cauldron);
}