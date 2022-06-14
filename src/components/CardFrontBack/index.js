import "./style.css";

import CardGame from "../CardGame";

function CardFrontBack(icon, altIcon) {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back");
        //const $cardFrontBack = $origin.parentNode.parentNode.parentNode; // forma manual

        $cardFrontBack.classList.toggle("-active");
        // o toggle substitui todo esse codigo a baixo
        // if ($cardFrontBack.classList.contains('.-active')) {
        //     $cardFrontBack.classList.remove('.-active')
        // } else {
        //     $cardFrontBack.classList.add("-active")
        // }
        //console.log($cardFrontBack)
    }

    return /*html*/ `
    <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
        <div class="card -front">
        ${CardGame()}
        </div>
        <div class="card -back">
        ${CardGame(icon, altIcon)}
        </div>
    </article >
    `;
}

export default CardFrontBack;