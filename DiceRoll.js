/**
 * 
 * @param {*} nb_faces Nombre de faces du ou des dés
 * @param {*} nb_dice Nombre de dés, initialement un
 */
function DicesRoll(nb_faces, nb_dice = 1) {
    dices = []

    if (nb_dice > 1) {
        for (let i = 0; i < nb_dice; i++) {
            dices.push(GetRandomInt(1, nb_faces))
        }
    }
    else {
        dices.push(GetRandomInt(1, nb_faces))
    }

    return dices;
}

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.DicesRoll = DicesRoll;