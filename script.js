/**********************
 * GESTION TP + SOUMISSION
 **********************/
const enseignants = {
    web: "hilairesitele@gmail.com",
    js: "hilairesitele@gmail.com"
};

// TP → soumission
const tpSelect = document.getElementById("tpSelect");
const emailEnseignant = document.getElementById("emailEnseignant");
const formSoumission = document.getElementById("formSoumission");
const message = document.getElementById("messageConfirmation");

// Vérifie si TP select existe (seulement sur soumission.html)
if(tpSelect && emailEnseignant && formSoumission) {

    // remplir l'email automatiquement
    tpSelect.addEventListener("change", function() {
        const tpChoisi = tpSelect.value;
        if(tpChoisi && enseignants[tpChoisi]) {
            emailEnseignant.value = enseignants[tpChoisi];
        } else {
            emailEnseignant.value = "";
        }
    });

    // soumission TP
    formSoumission.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche envoi réel

        if(emailEnseignant.value === "") {
            alert("Veuillez choisir un TP pour obtenir l'adresse de l'enseignant !");
            return;
        }

        // Message de confirmation
        message.textContent = "Votre TP a été soumis avec succès à " + emailEnseignant.value + " !";
        message.style.display = "block";

        // Ouvre le mail
        window.location.href = `mailto:${emailEnseignant.value}?subject=Soumission TP&body=Bonjour, je soumets mon TP.`;

        // Réinitialise le formulaire
        formSoumission.reset();
        emailEnseignant.value = "";
    });
}

/**********************
 * CONTACT RAPIDE (Appel / WhatsApp / Facebook)
 **********************/
// Tous les boutons avec classe "btn" sont déjà fonctionnels via <a href="">, donc pas besoin de JS supplémentaire
// Si tu veux, on peut ajouter une animation ou un alert sur clic
const boutonsContact = document.querySelectorAll(".boutons-contact .btn");
boutonsContact.forEach(function(btn){
    btn.addEventListener("click", function() {
        console.log("Bouton cliqué : " + btn.textContent.trim());
        // Si tu veux un message ou effet, tu peux l'ajouter ici
    });
});

/**********************
 * TP.HTML → Lien vers enseignants.html
 * (optionnel si tu veux garder la navigation TP → Enseignant)
 **********************/
const tpLien = document.querySelectorAll(".voir-enseignant");
tpLien.forEach(function(lien){
    lien.addEventListener("click", function(e){
        // tu peux ajouter des actions avant de rediriger
        console.log("Redirection vers enseignant...");
    });
});