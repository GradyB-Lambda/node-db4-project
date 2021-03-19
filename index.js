const server = require('./api/server')

const PORT = 1234

server.listen(PORT, () => {
    console.log(`listening on port:${PORT}`)
})