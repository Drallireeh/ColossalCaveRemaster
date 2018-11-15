process.openStdin().addListener("data", d => {
    console.log("You entered: [" + d.toString().trim() + "]");
});

function Demande(question) {
    let reponse;
// afficher la réponse
    console.log(question);
// chopper la réponse
    process.openStdin.addListener("data", d => {
        return d.toString().trim();
    });
    return reponse;
}