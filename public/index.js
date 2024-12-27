const express = require("express");
const app = express();

app.get("/api/:date?", (req, res) => {
  const { date } = req.params;

  let parsedDate;

  if (!date) {
    parsedDate = new Date(); // Date actuelle
  } else if (!isNaN(date)) {
    parsedDate = new Date(parseInt(date)); // Timestamp Unix
  } else {
    parsedDate = new Date(date); // Chaîne de date
  }

  if (parsedDate.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
