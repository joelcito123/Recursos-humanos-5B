const express = require("express");
const app = express();

const aspirantesRoutesApi = require("./routes/aspirantesRoutesApi");
const profesionesRoutesApi = require("./routes/profesionesRoutesApi");

app.use("/aspirantes", aspirantesRoutesApi);
app.use("/profesiones", profesionesRoutesApi);