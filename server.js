const express = require('express')
const bodyParser = require('body-parser')
const data = require('./routes/api/data')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use('/api/data', data)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})