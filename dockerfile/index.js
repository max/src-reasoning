const ffmpeg = require('ffmpeg')
const http = require('http')
const path = require('path')
const port = process.env.PORT || 3000

const video = new ffmpeg(path.join(__dirname, 'example.mov'))

const server = http.createServer((req, res) => {
  video.then(v => res.end(JSON.stringify(v)))
})

server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Server listening on ${port}`)
})
