import "./style.css";
//const Player = Player1

function ArrowDown(CurrentPlayer = 1) {

    return /*html*/`
        <img class="arrow-down"
             data-currentPlayer="${CurrentPlayer}"
             src="images/IconArrowDown.png" 
             alt="Icone de uma seta para baixo">
    `;
}

export default ArrowDown;