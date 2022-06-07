//JSX
import CardGame from "../CardGame";
//JSimport "./style.css";

function CardFrontBack() {

    return /*html*/ `
    <article class="Card-Front-Back">
        ${CardGame()}
        ${CardGame("javascript", "Logo do JavaScript")}
    </article >
    `;
}

export default CardFrontBack;