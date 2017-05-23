const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.end('Hello World')
})

server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Server listening on ${port}`)
})
