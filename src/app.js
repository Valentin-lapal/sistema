const { collection, getDocs, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.js");

const express = require("express");
const app = express();


app.use(express.json());


const TIENDA_NUBE_API_URL="https://api.tiendanube.com/v1/5676879/products";
const ACCESS_TOKEN="9e839ad691c01ff908903432e79ed3392d138638"; 
const USER_AGENT="Praga (valentin.lapalma25@gmail.com)"

app.get("/sync-products", async (req, res) => {
    try {
        const response = await fetch(TIENDA_NUBE_API_URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json",
                "User-Agent": `${USER_AGENT}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const products = await response.json();
        console.log("Productos obtenidos:", products);
        const productsCollection = collection(db, "products");

        for (const product of products) {
            await addDoc(productsCollection, product);
        }

        res.json({ message: "Productos sincronizados con Firestore", products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Ruta para obtener productos desde Firestore
app.get("/products", async (req, res) => {
    try {
        const productsCollection = collection(db, "products");
        const productsAlmacenados = await getDocs(productsCollection);
        const products = productsAlmacenados.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = app






