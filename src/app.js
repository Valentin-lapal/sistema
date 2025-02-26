const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
require("dotenv").config();

const allowedOrigins = [
    "https://sistema-snowy.vercel.app", 
    "http://localhost:3000", 
];

pp.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origen no permitido por CORS'));
        }
    },
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






