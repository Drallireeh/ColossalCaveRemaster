const module_tools = require("./Tools.js");
const monster_module = require("./Monsters.js");
const game_mode_module = require("./Console.js");

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
    x: 4,
    y: 0
};

let monster = undefined;

/**
 * 
 * @param {} direction N, NE, NW, E, W, SE, SW ou S 
 */
function Go(direction) {
    process.stdin.pause();

    switch (direction) {
        case "W":
            if (player_coord.x > 0) {
                player_coord.x--;
                module_tools.SlowLogInTools("Vous vous déplacez à l'ouest\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "N":
            if (player_coord.y > 0) {
                player_coord.y--;
                module_tools.SlowLogInTools("Vous vous déplacez au nord\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "E":
            if (player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                module_tools.SlowLogInTools("Vous vous déplacez à l'est\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "S":
            if (player_coord.y < map.length - 1) {
                player_coord.y++;
                module_tools.SlowLogInTools("Vous vous déplacez au sud\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "NW":
            if (player_coord.y > 0 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y--;
                module_tools.SlowLogInTools("Vous vous déplacez au nord-ouest\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "NE":
            if (player_coord.y > 0 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y--;
                module_tools.SlowLogInTools("Vous vous déplacez au nord-est\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "SW":
            if (player_coord.y < map.length - 1 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y++;
                module_tools.SlowLogInTools("Vous vous déplacez au sud-ouest\n", 100, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        case "SE":
            if (player_coord.y < map.length - 1 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y++;
                module_tools.SlowLogInTools("Vous vous déplacez au sud-est\n", 10, () => {
                    Description();
                });
            }
            else {
                module_tools.SlowLogInTools("Action Impossible\n", 10, () => {
                    Description();
                });
            }
            break;
        default:
    }
    console.log(monster);
    return monster;
}

function Description() {
    process.stdin.pause();

    switch (map[player_coord.y][player_coord.x]) {
        case "_":
            module_tools.SlowLogInTools("Vous êtes dans une plaine\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "C":
            module_tools.SlowLogInTools("Vous êtes dans un chateau\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "F":
            module_tools.SlowLogInTools("Vous êtes dans une forêt\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "FS":
            module_tools.SlowLogInTools("Vous êtes dans une forêt.\nUne araignée géante surgit tout à coup devant vous.\n", 10, () => {
                monster = monster_module.monsters["Spider"];
                process.stdin.resume();
            });
            break;
        case "FB":
            module_tools.SlowLogInTools("Vous êtes dans une forêt.\nVous voyez sous une souche morte une paire de botte en cuir.\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "_S":
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nVous voyez un objet briller dans l'herbe.\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "_SS":
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nUne araignée géante surgit tout à coup devant vous.\n", 10, () => {
                monster = monster_module.monsters["Spider"];
                process.stdin.resume();
            });
            break;
        case "_SQ":
            monster = monster_module.monsters["Squeleton"];
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nUn Squelette se dresse devant vous, prêt à en découdre.\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "_SQG":
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nUn Squelette se dresse devant vous, prêt à en découdre.\nIl porte une paire de gants en cuir de mauvaise facture\n", 10, () => {
                monster = monster_module.monsters["Squeleton"];
                process.stdin.resume();
            });
            break;
        case "_R":
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nUn roturier surgit de derrière une pierre pour vous détrousser.\n", 10, () => {
                monster = monster_module.monsters["Commoner"];
                process.stdin.resume();
            });
            break;
        case "L":
            module_tools.SlowLogInTools("Vous êtes au pied d'un lac.", 10, () => {
                process.stdin.resume();
            }); break;
        case "_H":
            module_tools.SlowLogInTools("Vous êtes dans une plaine.\nUne bouteille au contenu indéterminé gît non loin de là.\n", 10, () => {
                process.stdin.resume();
            });
            break;
        case "CSQ":
            module_tools.SlowLogInTools("Vous êtes dans un chateau.\nUn Squelette se dresse devant vous, prêt à en découdre.\n", 10, () => {
                monster = monster_module.monsters["Squeleton"];
                process.stdin.resume();
            });
            break;
        case "CG":
            module_tools.SlowLogInTools("Vous êtes dans un chateau.\nUn garde est en plein milieu de votre couloir, et il ne semble pas décider à vous laisser passer !\n", 10, () => {
                monster = monster_module.monsters["Guard"];
                process.stdin.resume();
            });
            break;
        case "CA":
            module_tools.SlowLogInTools("Vous êtes dans un chateau.\nUne hallebarde s'abat là ou vous étiez une demi seconde plus tôt. Mais que ...\nUne armure vivante ! C'est probablement un adversaire corriace !\n", 10, () => {
                monster = monster_module.monsters["LivingArmor"];
                process.stdin.resume();
            });
            break;
        case "CH":
            module_tools.SlowLogInTools("Vous êtes dans un chateau.\nVous voyez dans un coin de la pièce une bouteille au contenu rougeatre.\n", 10, () => {
                process.stdin.resume();
            });
            break;
    }
}

exports.GoTo = Go;