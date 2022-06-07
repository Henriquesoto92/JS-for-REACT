import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

//$ - é uma boa pratica, ela guarda uma referencia da tela - da api da DOM

const $root = document.querySelector("#root");

//const $htmlCardGame = CardGame() + CardGame ()// da para colocar varias, somando os parametros tanto aqui quanto no proprio insert

//$root.textContent = "Henrique Soto";

//$root.innerHTML = $htmlCardGame;// não utilizar, dá problemas de segurança

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${ScoreBoard()}   
    ${BoardGame(6)}
    `
);
    //jeito certo de colocar o html dentro do main.