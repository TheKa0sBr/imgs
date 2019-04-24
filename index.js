const express = require('express')
const cors = require('express')
const auth = require('./auth')

const app = express()

app.use(cors())
app.use('/api', auth, express.static('./imgs'))

const port = process.env.PORT || 3000

app.listen(port)
