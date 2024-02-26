const express = require('express')
const app = express()
const port = 3080;
const cors = require('cors');
const path = require('path')

const aspirantesRoutes = require('./src/routes/aspirantesRoutes');
const profesionesRoutes = require('./src/routes/profesionesRoutes');

app.use(express.json());
app.use(cors());

app.use('/api', aspirantesRoutes);
app.use('/api', profesionesRoutes);
app.use('/uploads', express.static(path.join(__dirname, '/src/uploads')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})