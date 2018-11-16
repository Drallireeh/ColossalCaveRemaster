const module_tools = require("./Tools.js");
const monster_module = require("./Monsters.js");
const item_module = require('./Items.js');
const game_mode_module = require("./Console.js");

let game_mode = "exploration";

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

text = {
    Castle: "Vous êtes dans un chateau\n",
    Forest: "Vous êtes dans une forêt\n",
    Plaine: "Vous êtes dans une plaine\n",
    Lake: "Vous êtes au pied d'un lac.\n",
    Spider: "Une araignée géante surgit tout à coup devant vous.\n",
    Squeleton: "Un Squelette se dresse devant vous, prêt à en découdre.\n",
    Guard: "Un garde est en plein milieu de votre chemin, et il ne semble pas décider à vous laisser passer !\n",
    Commoner: "Un roturier surgit de derrière une pierre pour vous détrousser.\n",
    LivingArmor: "Une hallebarde s'abat là ou vous étiez une demi seconde plus tôt. Mais que ...\nUne armure vivante ! C'est probablement un adversaire corriace !\n",
    Sword: "Vous voyez une garde d'épée dépasser d'un amas rocheux.\n",
    LeatherBoots: "Vous voyez sous une souche morte une paire de botte en cuir.\n",
    HealthPotion: "Une bouteille au contenu rougeatre gît non loin de là. On dirait une potion de soins\n"
}

let monster = undefined;
let item = undefined;
let text_info = "";

/**
 * 
 * @param {} direction N, NE, NW, E, W, SE, SW ou S 
 */
function Move(direction) {
    text_info = "";

    switch (direction) {
        case "W":
            if (player_coord.x > 0) {
                player_coord.x--;
                text_info += "Vous vous déplacez à l'ouest\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "N":
            if (player_coord.y > 0) {
                player_coord.y--;
                text_info += "Vous vous déplacez au nord\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "E":
            if (player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                text_info += "Vous vous déplacez à l'est\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "S":
            if (player_coord.y < map.length - 1) {
                player_coord.y++;
                text_info += "Vous vous déplacez au sud\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "NW":
            if (player_coord.y > 0 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y--;
                text_info += "Vous vous déplacez au nord-ouest\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "NE":
            if (player_coord.y > 0 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y--;
                text_info += "Vous vous déplacez au nord-est\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "SW":
            if (player_coord.y < map.length - 1 && player_coord.x > 0) {
                player_coord.x--;
                player_coord.y++;
                text_info += "Vous vous déplacez au sud-ouest\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        case "SE":
            if (player_coord.y < map.length - 1 && player_coord.x < map[player_coord.y].length - 1) {
                player_coord.x++;
                player_coord.y++;
                text_info += "Vous vous déplacez au sud-est\n";
            }
            else {
                text_info += "Action Impossible\n";
            }
            break;
        default:
    }

    DescDest();
    LogText(text_info);
}

function DescDest() {
    monster = undefined;
    item = undefined;

    switch (map[player_coord.y][player_coord.x]) {
        case "_":
            text_info += text["Plaine"];
            break;
        case "C":
            text_info += text["Castle"];
            break;
        case "F":
            text_info += text["Forest"];
            break;
        case "FS":
            monster = monster_module.monsters["Spider"];
            text_info += text["Forest"] + text["Spider"];
            break;
        case "FB":
            item = item_module.items["LeatherBoots"];
            text_info += text["Forest"] + text["LeatherBoots"];
            break;
        case "_S":
            item = item_module.items["Sword"];
            text_info += text["Plaine"] + text["Sword"];
            break;
        case "_SS":
            monster = monster_module.monsters["Spider"];
            text_info += text["Plaine"] + text["Spider"];
            break;
        case "_SQ":
            monster = monster_module.monsters["Squeleton"];
            text_info += text["Plaine"] + text["Squeleton"];
            break;
        case "_SQG":
            monster = monster_module.monsters["Squeleton"];
            item = item_module.items["LeatherGloves"];
            text_info += text["Plaine"] + text["Squeleton"] + "Il porte une paire de gants en cuir de mauvaise facture\n";
            break;
        case "_R":
            monster = monster_module.monsters["Commoner"];
            text_info += text["Plaine"] + text["Commoner"];
            break;
        case "L":
            text_info += text["Lake"];
            break;
        case "_H":
            item = item_module.items["HealthPotion"];
            text_info += text["Plaine"] + text["HealthPotion"];
            break;
        case "CSQ":
            monster = monster_module.monsters["Squeleton"];
            text_info += text["Castle"] + text["Squeleton"];
            break;
        case "CG":
            monster = monster_module.monsters["Guard"];
            ttext_info += text["Castle"] + text["Guard"];;
            break;
        case "CA":
            monster = monster_module.monsters["LivingArmor"];
            text_info += text["Castle"] + text["LivingArmor"];;
            break;
        case "CH":
            item = item_module.items["HealthPotion"];
            text_info += text["Castle"] + text["HealthPotion"];;
            break;
    }

    if (monster != undefined) {
        UpdateGameMode("fight");
    }

    exports.monster = monster;
    exports.item = item;
}

function LogText(text) {
    process.stdin.pause();
    module_tools.SlowLogInTools(text, 15, () => {
        process.stdin.resume();
    });
}

function UpdateGameMode(string) {
    game_mode = string;
    exports.game_mode = game_mode;
}

UpdateGameMode("exploration");
exports.UpdateGameMode = UpdateGameMode;
exports.GoTo = Move;