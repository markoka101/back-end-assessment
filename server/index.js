const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createName, getName, clear, updateName } = require('./controller')

app.post("/api/user", createName);
app.get("/api/getName", getName);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.delete("/api/delete", clear);
app.put("/api/updateName/:newName", updateName);




app.listen(4000, () => console.log("Server running on 4000"));
