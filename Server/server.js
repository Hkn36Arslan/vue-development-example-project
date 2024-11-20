const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "Public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});

app.listen(PORT, (error) => {
    if (error) {
        console.log("Hata");
    }
    else {
        console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    }
});