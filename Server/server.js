const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
    res.send("Hello Hakan");
});

app.listen(PORT, (error) => {
    if (error) {
        console.log("Hata");
    }
    else {
        console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    }
});