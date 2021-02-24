const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello k8s!'))
app.listen(3000, () => console.log('Server ready'))
