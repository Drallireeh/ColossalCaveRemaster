let map = [
    ["_", "_", "_"],
    ["_", "C", "_"],
    ["_", "_", "_"],
];

let player_coord = {
    x: 1,
    y: 2
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
            console.log("C'est une plaine");
            break;
        case "C":
            console.log("C'est un chateau");
            break;
    }
}
