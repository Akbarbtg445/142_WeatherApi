const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/lokasi", async (req, res) => {
    const kota = "jakarta";

    const apiKey = "TmW3n2IbOKaZxkghOoYB";

    const url = `https://maptiler.com/geocoding?/${kota}.json?key={apiKey}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);

        const data = response.data;