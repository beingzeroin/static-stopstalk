const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('views', __dirname + '/frontend/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('frontend'))
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))