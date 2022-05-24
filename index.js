const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const { Task } = require('./model/tast')
mongoose.connect('mongodb+srv://sungjun:3603132w@todo-list.qmch0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })  .then(() => console.log('Mongodb Connected...'))
        .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('todo list')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

