// Static serving with Express

// npm init --y
// npm install -s express
// npm install -s socket.io
// npm install -s mongoose
// npm install --save-dev jasmine
// ./node_modules/.bin/jasmine init

const { response } = require('express')
var express = require('express')

// To see a JSON format in a post API
// npm i -s body-parser
var bodyParser = require('body-parser')
const { Socket } = require('socket.io')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// Connection to mLab
// https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
const mongoose = require('mongoose')
const { request } = require('http')
const uri = "mongodb+srv://user:user@cluster0.e7o2v.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Promise
mongoose.Promise = Promise

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


var Message = mongoose.model('Message', {
    name: String,
    message: String
})

// Array of messages
// var messages = [
//     {name: "Leo", message: "Hi"},
//     {name: "Jane", message: "Hello"},
// ]

// URL and method send to send a message in the console
app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.get('/messages/:user', (req, res) => {
    var user = req.params.user
    Message.find({name: user}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', async (req, res) => {

    // Try - catch
    try {
        // throw 'some error'

        var message = new Message(req.body)
        // Async await
        var savedMessage = await message.save()
        console.log('saved')

        var censored = await Message.findOne({ message: 'badword' })
        if (censored)
            await Message.remove({ _id: censored._id })
        else
            io.emit('message', req.body)

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
        return console.error(error);
    } finally {
        console.log('message post called')
    }

    // Promises(then)
    // message.save().then(() => {
    //     console.log('saved')
    //     return Message.findOne({ message: 'badword' })
    // })
    //     .then(censored => {
    //         if (censored) {
    //             console.log('censored words found', censored)
    //             return Message.remove({ _id: censored._id })
    //         }
    //         io.emit('message', req.body)
    //         res.sendStatus(200)
    //     })
    //     .catch((err) => {
    //         res.sendStatus(500)
    //         return console.error(err);
    //     })
    //db.collection('messages').insertOne(message);  
})

io.on('connection', (socket) => {
    console.log('A user connected');
})

// Needs to be chance app to http to socket.io
var server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port);
})
// http://localhost:3000/




// Extra 1
// MyFunction() {
//  GetMessages((list) => {
// 		console.log(list);
// 	})
// }

// async MyFunction() {
// 	let list = await GetMessages();
// 	console.log(list)
// }

// Extra 2
// MyFunction() {
//     request((result, err) => console.log(result, err))
// }

// async MyFunction() {
//     try {
//         let result = await request()
//         console.log(result);
//     } catch (error) {
//         console.log(err);
//     }
// }