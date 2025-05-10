import "./styles.css";
import { serveAbout } from "./modules/about";
import { serveMenu } from "./modules/menu";
import { serveCredits } from "./modules/credits";
import { serveHome } from "./modules/home";

function serveSite() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    const creditsBtn = document.getElementById('credits-btn');

    homeBtn.addEventListener('click', serveHome);
    menuBtn.addEventListener('click', serveMenu);
    aboutBtn.addEventListener('click', serveAbout);
    creditsBtn.addEventListener('click', serveCredits);

    serveHome();
}
serveSite();