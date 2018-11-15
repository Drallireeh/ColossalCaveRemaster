let map = [
    ["_SS", "_", "_", "_R", "_", "_H", "_", "_SQ", "_"],
    ["_", "_", "_SQG", "_", "_S", "_", "_", "_H", "_"],
    ["_R", "_", "_", "_", "F", "FH", "F", "_S", "_R"],
    ["_", "L", "_H", "F", "FS", "F", "FH", "_", "_"],
    ["L", "L", "_", "FS", "F", "FB", "_", "L", "L"],
    ["_S", "L", "_", "_", "CH", "CG", "_", "L", "L"],
    ["_", "_SQ", "_", "CSQ", "CA", "CG", "_", "_", "_"],
    ["_SS", "_", "_", "C", "C", "C", "_", "_SS", "_H"],
];

let player_coord = {
    x: 0,
    y: 5
};

/**
 * 
 * @param {} direction N, NE, NW, E, W, SE, SW ou S 
 */
function go(direction) {
    switch (direction) {
        case "W":
            if (player_coord.x > 0) {
                player_coord.x--;
                console.log("Vous vous déplacez à l'ouest");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "N":
            if (player_coord.y > 0) {
                player_coord.y--;
                console.log("Vous vous déplacez au nord");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "E":
            if (player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                console.log("Vous vous déplacez à l'est");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "S":
            if (player_coord.y < map.length - 1) {
                player_coord.y++;
                console.log("Vous vous déplacez au sud");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "NW":
            if (player_coord.y > 0 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y--;
                console.log("Vous vous déplacez au nord-ouest");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "NE":
            if (player_coord.y > 0 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y--;
                console.log("Vous vous déplacez au nord-est");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "SW":
            if (player_coord.y < map.length - 1 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y++;
                console.log("Vous vous déplacez au sud-ouest");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        case "SE":
            if (player_coord.y < map.length - 1 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y++;
                console.log("Vous vous déplacez au sud-est");
            }
            else {
                console.log("Action Impossible");
                return undefined;
            }
            break;
        default:
    }

    switch (map[player_coord.y][player_coord.x]) {
        case "_":
            console.log("Vous êtes dans une plaine");
            break;
        case "C":
            console.log("Vous êtes dans un chateau");
            break;
        case "F":
            console.log("Vous êtes dans une forêt");
        case "FS":
            console.log(`Vous êtes dans une forêt.
            Une araignée géante surgit tout à coup devant vous.`);
        case "FB":
            console.log(`Vous êtes dans une forêt.
            Vous voyez sous une souche morte une paire de botte en cuir.`);
        case "_S":
            console.log(`Vous êtes dans une plaine.
            Vous voyez un objet briller dans l'herbe.`);
        case "_SS":
            console.log(`Vous êtes dans une plaine.
            Une araignée géante surgit tout à coup devant vous.`);
        case "_SQ":
            console.log(`Vous êtes dans une plaine.
            Un Squelette se dresse devant vous, prêt à en découdre.`);
        case "_SQG":
            console.log(`Vous êtes dans une plaine.
            Un Squelette se dresse devant vous, prêt à en découdre.
            Il porte une paire de gants en cuir de mauvaise facture`);
        case "_R":
            console.log(`Vous êtes dans une plaine.
            Un roturier surgit de derrière une pierre pour vous détrousser.`);
        case "L":
            console.log(`Vous êtes au pied d'un lac.`);
        case "_H":
            console.log(`Vous êtes dans une plaine.
            Une bouteille au contenu indéterminé gît non loin de là.`);
        case "CSQ":
            console.log(`Vous êtes dans un chateau.
            Un Squelette se dresse devant vous, prêt à en découdre.`);
        case "CG":
            console.log(`Vous êtes dans un chateau.
            Un garde est en plein milieu de votre couloir, et il ne semble pas décider à vous laisser passer !`);
        case "CA":
            console.log(`Vous êtes dans un chateau.
            Une hallebarde s'abat là ou vous étiez une demi seconde plus tôt. Mais que ...
            Une armure vivante ! C'est probablement un adversaire corriace !`);
        case "CH":
            console.log(`Vous êtes dans un chateau.
            Vous voyez dans un coin de la pièce une bouteille au contenu rougeatre.`);
    }
}
