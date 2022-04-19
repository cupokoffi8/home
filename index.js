const PORT = 8000
const express = require('express') 
const cors = require('cors') 
const axios = require('axios') 
require('dotenv').config() 

const app = express() 

app.get('/', (req,res) => {
    const options = {
        'stripe-key': process.env.REACT_APP_STRIPE_PUBLIC_KEY, 
        'commerce-key': process.env.REACT_APP_CHEC_PUBLIC_KEY
    }
    axios.request(options).then((response) => { 
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
}) 

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))