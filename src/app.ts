import express from "express"

const app = express()
const PORT = 3000

app.get("/", (_, res) => {
    res.send("Welcome to server again")
})

app.listen(PORT, () =>{
    console.log("server on port"+PORT) 
})

export default app