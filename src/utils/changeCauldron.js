export function changeCauldron (div, source) {
    const cs = Array.from(document.getElementsByClassName('cauldron-div'));
    cs.forEach((c) => {
        c.innerHTML = "";
    });

    const cauldron = new Image();
    cauldron.src = source;
    cauldron.classList.add("cauldron");
    div.appendChild(cauldron);
}