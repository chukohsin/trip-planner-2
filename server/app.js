const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const models = require('../models/model')

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:true }))

app.use(express.static(__dirname + "../public"))




app.use((req, res, next) => {
	let err = new Error('Not Found!')
	err.status = 404;
	next(err);
})


app.use('/', (err, req, res, next) => {
	res.status(err.status || 500)
	console.error(err);
	res.send(err.message || "Internal Server Error")
})


models.db.sync({force: true})
.then(() => {
	app.listen(3000, () => {
		console.log("Listening on port 3000!!")
	})
})