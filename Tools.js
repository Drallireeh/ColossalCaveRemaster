// /**
//  * Fonction permettant d'afficher un message lettre par lettre à une vitesse donnée
//  * @param {} string Message à afficher
//  * @param {} time_in_ms Temps en milisecondes
//  * @param {} count Ne pas initialiser, est initialisé de base à 0
//  */
// function SlowLog(string, time_in_ms, count = 0) {
//     if (count < string.length) {
//         setTimeout(() => {
//             process.stdout.write(string[count]);
//             count++;
//             SlowLog(string, time_in_ms, count);

//         }, time_in_ms);
//     }
// }

function SlowLog(texte, time, suite) {
    let lettreCourante = 0;
    for (let i = 0; i < texte.length + 1; i++) {
        setTimeout(() => {
            if (i < texte.length) {
                process.stdout.write(texte[lettreCourante]);
                lettreCourante++;
            } else {
                suite();
            }
        }, i * time);
    }
}

exports.SlowLogInTools = SlowLog;