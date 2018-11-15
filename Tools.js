/**
 * Fonction permettant d'afficher un message lettre par lettre à une vitesse donnée
 * @param {} string Message à afficher
 * @param {} time_in_ms Temps en milisecondes
 * @param {} count Ne pas initialiser, est initialisé de base à 0
 */
function SlowLog(string, time_in_ms, count = 0) {
    if (count < string.length) {
        setTimeout(() => {
            process.stdout.write(string[count]);
            count++;
            SlowLog(string, time_in_ms, count);

        }, time_in_ms);
    }
}

exports.SlowLogInTools = SlowLog;