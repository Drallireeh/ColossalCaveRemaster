const module_map = require("./Map.js");
const module_log = require('./Tools.js');

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
    if (rep == "suite") {
        process.stdin.pause(); //stopper l'entrée
        module_log.SlowLogInTools(suite, 50, () => {
            module_log.SlowLogInTools("on fait quoi 2 ?\n", 50, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep.indexOf("go") != -1) {
        switch(rep) {
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
    if (rep == "quit") {
        process.exit();
    }
});


/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte
module_log.SlowLogInTools(intro, 50, () => {
    module_log.SlowLogInTools("on fait quoi ?\n", 50, () => {
        process.stdin.resume();//réactiver l'entrée
    });
});