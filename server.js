const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/views/index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))