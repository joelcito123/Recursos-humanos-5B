const express = require("express");

const app = express();

const aspirantesRoutesApi = require("./routes/aspirantesRoutesApi");
const profesionesRoutesApi = require("./routes/profesionesRoutesApi");
const config = require("./config/config");



app.use("/api/aspirantes", aspirantesRoutesApi);
app.use("/api/profesiones", profesionesRoutesApi);



app.listen(config.port, () => {
    console.log(`listening on ${config.port}`);
})