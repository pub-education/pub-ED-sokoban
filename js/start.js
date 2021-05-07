// **** Program Start ****
function init(board) {
    createSelectBox();
    newGame(board);
    Game.init();
}

function newGame(board) {
    Player.setLocation(Board.createBoard(board));
    Helper.focus("game-content");
    Current.moves = 0;
    Helper.setValue("gameTime", "");
    Helper.setValue("gameMoves", "");
}

function createSelectBox() {

    let html = `<select id="gameList" onchange="javascrip: selectGame(this)">`;
    for (let i = 0; i < mapsArray.length; i++) {
        html += `<option value="${i}">Game ${i}</option>`;
    }
    html += `</select>`;
    Helper.setHtml("select-box", html);
}

function selectGame(board) {
    newGame(board.value);
    document.getElementById("gameList").blur();
}