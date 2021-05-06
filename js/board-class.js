

class BoardClass {
    constructor() { }

    createBoard(boardNo) {
        boardNo++;
        let playerStartLocation = "";
        let rows, columns, html;
        let targetCounter = 0;
        if (boardNo > mapsArray.length) {
            console.log(`Requested board number ${boardNo.toString()} is greater than availabel number of boards "${mapsArray.length}".`);
        }
        else {
            rows = mapsArray[boardNo - 1].mapGrid;
            //console.log(`createBoard1 rows=${rows}, rows.length=${rows.length}`);
            html = "";
            for (let i = 0; i < rows.length; i++) {
                columns = rows[i];
                //console.log(`createBoard2 columns=${columns}`);
                html += `<div class="row">`;
                for (let j = 0; j < columns.length; j++) {
                    //console.log(`createBoard3 switch square=${columns[j]}`);
                    html += `<div id="${i}:${j}" class="board-square column"><img class="`;
                    switch (columns[j].toString()) {
                        case ' ':
                            html += `empty-square" src="/images/board-box.gif" `;
                            break;
                        case 'W':
                            html += `wall-square" src="/images/wall-box.gif" `;
                            break;
                        case 'B':
                            html += `box-square" src="/images/move-box.gif" `;
                            break;
                        case 'G':
                            html += `target-square" src="/images/target-box.gif" `;
                            Target[targetCounter] = `${i}:${j}`;
                            targetCounter++;
                            break;
                        case 'P':
                            html += `player-square" src="images/player-box.gif" `;
                            playerStartLocation = `${i}:${j}`;
                            break;
                        default:
                            html += `"/>`;
                    }
                    html += `height="36px" width="36px" /></div>`;
                }
                html += `</div>`;
            }
            Helper.setHtml("game-content", html);
        }
        return playerStartLocation;
    }

    getBoxType(position) {
        //console.log(`getBoxType in: ${position}`)
        let elem = document.getElementById(position);
        return elem.querySelector('img').attributes["class"].value;
    }
}