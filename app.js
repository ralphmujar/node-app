const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('ok sure'))
app.listen(3000, () => console.log('Server ready'))
