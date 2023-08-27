const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hey, I have received a request")
    socket.on("data", data =>{
        console.log(data.toString())
    })
})

server.listen(8080)