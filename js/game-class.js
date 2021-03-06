

class GameClass {
    // I know constructor isn't necessary but I keep them there anyhow for convenience.
    constructor() { }

    init() {
        document.addEventListener('keydown', event => {
            //console.log(event.toString());
            event.preventDefault();
            switch (event.code) {
                case "ArrowDown":
                    Game.move('down');
                    break;
                case "ArrowUp":
                    Game.move('up');
                    break;
                case "ArrowLeft":
                    Game.move('left');
                    break;
                case "ArrowRight":
                    Game.move('right');
                    break;
            }
        })
    }

    move(direction) {
        let position = Player.getLocation();
        let tmpPos = position.split(":");
        let nextPos = position.split(":");

        let tmpNumb, tmpNextNumb;

        if (direction == "up") {
            tmpNumb = parseInt(tmpPos[0]);
            tmpNumb--;
            tmpPos[0] = tmpNumb.toString();
            tmpNumb--;
            nextPos[0] = tmpNumb.toString();
        }
        else if (direction == "down") {
            tmpNumb = parseInt(tmpPos[0]);
            tmpNumb++;
            tmpPos[0] = tmpNumb.toString();
            tmpNumb++;
            nextPos[0] = tmpNumb.toString();
        }
        else if (direction == "left") {
            tmpNumb = parseInt(tmpPos[1]);
            tmpNumb--;
            tmpPos[1] = tmpNumb.toString();
            tmpNumb--;
            nextPos[1] = tmpNumb.toString();
        }
        else if (direction == "right") {
            tmpNumb = parseInt(tmpPos[1]);
            tmpNumb++;
            tmpPos[1] = tmpNumb.toString();
            tmpNumb++;
            nextPos[1] = tmpNumb.toString();
        }

        let boxType = Board.getBoxType(tmpPos[0] + ":" + tmpPos[1]);
        let nextBoxType = Board.getBoxType(nextPos[0] + ":" + nextPos[1]);

        Player.move(position, tmpPos[0] + ":" + tmpPos[1], nextPos[0] + ":" + nextPos[1], boxType, nextBoxType);
    }

    gameEnd() {
        Helper.setValue("gameMoves", Current.moves.toString() + " moves.");
        let xTime = Current.end - Current.start;
        let min = Math.floor(xTime / 60000);
        let sek = Math.round((xTime / 60000 - min) * 60, 2);
        Helper.setValue("gameTime", min.toString() + "min and " + sek.toString() + "sek");
    }
}