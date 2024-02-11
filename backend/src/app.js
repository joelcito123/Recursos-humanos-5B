const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
// configure express
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());


const aspirantesRoutesApi = require("./routes/aspirantesRoutesApi");
const profesionesRoutesApi = require("./routes/profesionesRoutesApi");


app.use("/api/aspirantes", aspirantesRoutesApi);
app.use("/api/profesiones", profesionesRoutesApi);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})