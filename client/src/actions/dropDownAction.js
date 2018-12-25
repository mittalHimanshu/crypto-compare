import { GET_DETAILS, DD_CHOICE} from './types'
import axios from 'axios'

export const getDetails = details => dispatch => {
    const currencyName = details['currency']
    const coinName = details['coin']
    axios.post('/api/data', {
        coinName, currencyName
    }).then(res => dispatch({
        type: GET_DETAILS,
        payload: {
            coin: coinName,
            currency: currencyName,
            value: res.data[currencyName]
        }
    }))
}

export const dd1Choice = (coin, details) => {
    const currencyName = details['currency']
    const value = details['value']
    return{
        type: DD_CHOICE,
        payload:{
            coin,
            currency: currencyName,
            value
        }
    }
}

export const dd2Choice = (currency, details) => {
    const coinName = details['coin']
    const value = details['value']
    return{
        type: DD_CHOICE,
        payload: {
            coin: coinName,
            currency,
            value
        }
    }
}