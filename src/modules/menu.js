import cauldronPng from "../assets/images/cauldronYellow.png";
import { changeCauldron } from "../utils/changeCauldron.js";

export function serveMenu() {
    changeCauldron(document.getElementById('menu-icon'), cauldronPng);
}