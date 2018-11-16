const module_map = require("./Map.js");
const module_log = require('./Tools.js');
const module_item = require('./Items.js');
const module_player = require("./Player.js");

let game_mode = "exploration";

// function SlowLog(texte, time, suite) {
//     let lettreCourante = 0;
//     for (let i = 0; i < texte.length + 1; i++) {
//         setTimeout(() => {
//             if (i < texte.length) {
//                 process.stdout.write(texte[lettreCourante]);
//                 lettreCourante++;
//             } else {
//                 suite();
//             }
//         }, i * time);
//     }
// }

let intro =
    `Bienvenue dans le désert de la mort ... ☼
Partout des ossements de chameaux morts et une odeur de 
putréfaction.
`;

let suite =
    `Suite à taper
`

//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donée
process.stdin.on('data', (d) => {
    let rep = d.toString().trim();
    rep = rep.toLowerCase();
    if (game_mode == "exploration") {

        if (rep.indexOf("go") != -1) {
            switch (rep) {
                case "go n":
                    module_map.GoTo("N");
                    break;
                case "go e":
                    module_map.GoTo("E");
                    break;
                case "go s":
                    module_map.GoTo("S");
                    break;
                case "go w":
                    module_map.GoTo("W");
                    break;
                case "go ne":
                    module_map.GoTo("NE");
                    break;
                case "go nw":
                    module_map.GoTo("NW");
                    break;
                case "go se":
                    module_map.GoTo("SE");
                    break;
                case "go sw":
                    module_map.GoTo("SW");
                    break;
            }
        }

        // A bouger dans map à la fin

        if (module_map.monster != undefined) {
            game_mode = "fight";
        }

        ////////////////// RAMASSAGE SCOLAIRE //////////////////

        // take what a faire après 
        if (rep == "take healthpotion") {
            if (module_map.item == module_item.items["HealthPotion"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take sword") {
            if (module_map.item == module_item.items["Sword"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take leatherboots") {
            if (module_map.item == module_item.items["LeatherBoots"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take shield") {
            if (module_map.item == module_item.items["Shield"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take leathergloves") {
            if (module_map.item == module_item.items["LeatherGloves"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take leatherpants") {
            if (module_map.item == module_item.items["LeatherPants"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take leatherhelmet") {
            if (module_map.item == module_item.items["LeatherHelmet"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }
        if (rep == "take leatherchest") {
            if (module_map.item == module_item.items["LeatherChest"]) {
                module_player.Take(module_map.item);
            }
            else {
                process.stdin.pause();
                module_log.SlowLogInTools("Action impossible, ce n'est pas le bon objet", 20, () => {
                    process.stdin.resume();
                });
            }
        }

        ///////////////////// EQUIPEMENT ///////////////////////

        if (rep == "equip sword") {
            module_player.Equip(module_item.items["Sword"]);
        }
        if (rep == "equip leatherboots") {
            module_player.Equip(module_item.items["LeatherBoots"]);
        }
        if (rep == "equip shield") {
            module_player.Equip(module_item.items["Shield"]);
        }
        if (rep == "equip leathergloves") {
            module_player.Equip(module_item.items["LeatherGloves"]);
        }
        if (rep == "equip leatherpants") {
            module_player.Equip(module_item.items["LeatherPants"]);
        }
        if (rep == "equip leatherhelmet") {
            module_player.Equip(module_item.items["LeatherHelmet"]);
        }
        if (rep == "equip leatherchest") {
            module_player.Equip(module_item.items["LeatherChest"]);
        }

        ///////////////////////////////////////////////////////

        if (rep == "quit") {
            process.exit();
        }
    }
    else if (game_mode == "fight") {
        if (rep == "attack") {
            console.log(monster);
        }
        else {
            process.stdin.pause();
            module_log.SlowLogInTools("Action impossible en plein combat", 20, () => {
                process.stdin.resume();
            });
        }
    }
});


/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte
module_log.SlowLogInTools(intro, 10, () => {
    module_log.SlowLogInTools("on fait quoi ?\n", 10, () => {
        process.stdin.resume();//réactiver l'entrée
    });
});

exports.SetGameMode = game_mode;