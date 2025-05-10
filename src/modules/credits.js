import cauldronPng from "../assets/images/cauldronGreen.png";
import { changeCauldron } from "../utils/changeCauldron";


export function serveCredits() {
    document.querySelector('main').innerHTML = "";
    changeCauldron(document.getElementById('credits-icon'), cauldronPng);
}