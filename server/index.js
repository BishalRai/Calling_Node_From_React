const  express = require('express')
const app = express()
const port = 3001

app.get("/",(req,res) => {
    res.status(200).json({message: "Node server is responding"})
})
app.listen(port,() => {
    console.log('Server running on port ${port}')
})