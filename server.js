const express = require('express')
const bodyParser = require('body-parser')
const data = require('./routes/api/data')

const app = express()

app.use(bodyParser.json())
app.use('/api/data', data)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})