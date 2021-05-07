

class PlayerClass {
    constructor() {
        let _loaction = "";
    }

    setLocation(loc) {
        this._location = loc;
    }
    getLocation() {
        return this._location;
    }

    move(originBoxId, targetBoxId, afterTargetBoxId, targetBoxType, afterTargetBoxType) {
        let origin = document.getElementById(originBoxId);
        let target = document.getElementById(targetBoxId);
        let afterTarget = document.getElementById(afterTargetBoxId);
        let tmpBox, base = "/images/";
        let ok = false;

        if (Current.moves == 0) {
            Current.start = Date.now();
        }
        Current.moves++;

        if (targetBoxType == "empty-square" || targetBoxType == "target-square") {
            tmpBox = target.querySelector('img');
            tmpBox.setAttribute('src', base + "player-box.gif");
            tmpBox.setAttribute('class', "player-square");
            if (Target.indexOf(originBoxId) < 0) {
                tmpBox = origin.querySelector('img');
                tmpBox.setAttribute('src', base + "board-box.gif");
                tmpBox.setAttribute('class', "empty-square");
            }
            else {
                tmpBox = origin.querySelector('img');
                tmpBox.setAttribute('src', base + "target-box.gif");
                tmpBox.setAttribute('class', "target-square");
            }
            ok = true;
        }
        else if (targetBoxType == "box-square" && (afterTargetBoxType == "empty-square" || afterTargetBoxType == "target-square")) {
            tmpBox = target.querySelector('img');
            tmpBox.setAttribute('src', base + "player-box.gif");
            tmpBox.setAttribute('class', "player-square");
            if (Target.indexOf(originBoxId) < 0) {
                tmpBox = origin.querySelector('img');
                tmpBox.setAttribute('src', base + "board-box.gif");
                tmpBox.setAttribute('class', "empty-square");
            }
            else {
                tmpBox = origin.querySelector('img');
                tmpBox.setAttribute('src', base + "target-box.gif");
                tmpBox.setAttribute('class', "target-square");
            }

            tmpBox = afterTarget.querySelector('img');
            tmpBox.setAttribute('src', base + "move-box.gif");
            tmpBox.setAttribute('class', "box-square");
            ok = true;
        }
        else {
            ok = false;
        }
        if (ok) this._location = targetBoxId;
        if (Board.getNumberOfRemainingTargets() == 0) {
            Current.end = Date.now();
            Game.gameEnd();
        }
    }
}