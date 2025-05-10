import cauldronPng from "../assets/images/cauldronRed.png";
import { changeCauldron } from "../utils/changeCauldron";

export function serveHome() {
    document.querySelector('main').innerHTML = "";
    changeCauldron(document.getElementById('home-icon'), cauldronPng);
}