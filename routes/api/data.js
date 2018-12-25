const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/', (req, res) => {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${req.body.coinName}&tsyms=${req.body.currencyValue}`)
        .then(response => {
            res.json(response.data)
        })
})

module.exports = router