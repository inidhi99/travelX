const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

if (process.env.NODE_ENV === "producion"){
    app.use(express.static(path.join(__dirname,"../client/build")));
}

// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname,"../client/build/index.html"))
// })

app.get("/api/hello", (req, res) => {
    res.json({
        message:"Hello ... you're being very reactive today."
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!!!`))