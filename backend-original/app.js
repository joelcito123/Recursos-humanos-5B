const express = require('express')
const app = express()
const port = 3080;
const cors = require('cors');

const aspirantesRoutes = require('./src/routes/aspirantesRoutes');
const profesionesRoutes = require('./src/routes/profesionesRoutes');

app.use(express.json());
app.use(cors());

app.use('/api', aspirantesRoutes);
app.use('/api', profesionesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})