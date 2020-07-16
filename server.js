const express = require('express')
var fs = require("fs")

const app = express()
const port = process.env.PORT || 3000

app.set('views', __dirname + '/frontend/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('frontend'))
app.get('/', (req, res) => res.render('index'))
app.get('/profile', (req, res) => res.render('profile'))

function getJsonDataFromFile(fileName){
    encoding = 'utf8';
    filepath = __dirname +'/frontend/json/'+fileName;
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}
app.get('/user/get_stopstalk_user_stats.json', (req, res) => res.json(getJsonDataFromFile('get_stopstalk_user_stats.json')));
app.get('/user/get_graph_data.json', (req, res) => res.json(getJsonDataFromFile('get_graph_data.json')));
app.get('/user/get_solved_unsolved.json', (req, res) => res.json(getJsonDataFromFile('get_solved_unsolved.json')));
app.get('/user/handle_details.json', (req, res) => res.json(getJsonDataFromFile('handle_details.json')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))