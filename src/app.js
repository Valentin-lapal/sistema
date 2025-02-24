const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
require("dotenv").config();



app.use(cors({
    origin: "https://sistema-snowy.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));


app.options('/api/*', cors());



app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});


module.exports = app






