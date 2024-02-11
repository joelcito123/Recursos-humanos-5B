const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const aspirantesRoutesApi = require("./routes/aspirantesRoutesApi");
const profesionesRoutesApi = require("./routes/profesionesRoutesApi");


app.use("/api/aspirantes", aspirantesRoutesApi);
app.use("/api/profesiones", profesionesRoutesApi);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})