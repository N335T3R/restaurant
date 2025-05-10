import cauldronPng from "../assets/images/cauldronGreen.png";
import { changeCauldron } from "../utils/changeCauldron";


export function serveCredits() {
    const main = document.querySelector('main');
    document.querySelector('main').innerHTML = "";
    changeCauldron(document.getElementById('credits-icon'), cauldronPng);

    const cauldron = document.createElement('p');
    cauldron.textContent = "Cauldron by sestspond: https://wallpapers.com/png/witchcraft-magic-cauldron-png-mgx65-o4258gj7a2v5brdq.html"
    cauldron.classList.add('credit');
    main.appendChild(cauldron);

    const font = document.createElement('p');
    font.textContent = "Harry Potter font by GemFonts / Typotheticals: https://www.dafont.com/harry-p.font";
    font.classList.add('credit');
    main.appendChild(font);   

    const dingbats = document.createElement('p');
    dingbats.textContent = "Harry Potter and the Dingbats by xstreamed.tv: https://www.dafont.com/harry-potter-and-the-dingbats.font";
    dingbats.classList.add('credit');
    main.appendChild(dingbats);
    
    const images = document.createElement('p');
    images.textContent = "Hero and menu images by Microsoft Copilot";
    images.classList.add('credit');
    main.appendChild(images);
}