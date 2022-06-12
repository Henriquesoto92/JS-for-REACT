//import PlayerWin from "../../components/PlayerWin";
import PlayerScore from "../../components/PlayerScore";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/`

    <header class="score-board">
        ${PlayerName("Player1")}
        ${PlayerScore(1)} 
        ${VsPlayer()}
        ${PlayerScore(3)} 
        ${PlayerName("Player2")}   
    </header>
    `;
}

export default ScoreBoard;