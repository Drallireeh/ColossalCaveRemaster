const module_map = require("./Map.js");
const module_log = require('./Tools.js');

let monster = undefined;

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
                    monster = module_map.GoTo("N");
                    break;
                case "go e":
                    monster = module_map.GoTo("E");
                    console.log(monster);
                    break;
                case "go s":
                    monster = module_map.GoTo("S");
                    break;
                case "go w":
                    monster = module_map.GoTo("W");
                    break;
                case "go ne":
                    monster = module_map.GoTo("NE");
                    break;
                case "go nw":
                    monster = module_map.GoTo("NW");
                    break;
                case "go se":
                    monster = module_map.GoTo("SE");
                    break;
                case "go sw":
                    monster = module_map.GoTo("SW");
                    break;
            }

        }

        if (monster != undefined) {
            game_mode = "fight";
            console.log("FIGHT")
        }

        if (rep == "take") {

        }

        if (rep == "equip") {

        }

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