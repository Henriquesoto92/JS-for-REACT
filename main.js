

//$ - é uma boa pratica, ela guarda uma referencia da tela - da api da DOM
import CardGame from "./src/components/CardGame"; //não precisa colocar o nome index.js, porque ele indentifica automaticamente, 
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';


const $root = document.querySelector("#root");

const $htmlCardGame = CardGame()

//const $htmlCardGame = CardGame() + CardGame ()// da para colocar varias, somando os parametros tanto aqui quanto no proprio insert

console.log($htmlCardGame)

//$root.textContent = "Henrique Soto";

//$root.innerHTML = $htmlCardGame;// não utilizar, dá problemas de segurança

$root.insertAdjacentHTML("beforeend", $htmlCardGame);//jeito certo de colocar o html dentro do main.