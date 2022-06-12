import "./style.css";
//const Player = Player1

function PlayerScore(points = 0) {

    return /*html*/`
    <ol data-points="${points}" class="player-score">
        <li class="pointer -active"></li>
        <li class="pointer"></li>
        <li class="pointer"></li>
</ol>
    `;
}

export default PlayerScore;