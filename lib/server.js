const express = require('express')
const reddit = require('./reddit.js')
const app = express()

const port = 3000

app.use(express.static('dist'))

app.get('/r/:subName', (req, res) => {
  reddit.getPosts(req.params.subName).then(json => res.send(json))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
