const express = require("express");
const app = express();

// This is configured in docker-compose.yml
// It's loaded via Docker Compose "secrets" to avoid leaking them.
// https://docs.docker.com/compose/compose-file/#secrets
require("dotenv").config({ path: "/run/secrets/env" });

app.get("/", (req, res) => res.send("Hello world!"));
app.get("/:name", (req, res) => res.send(`Hello ${req.params.name}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
