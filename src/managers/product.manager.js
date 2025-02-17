const { collection, getDocs } = require("firebase/firestore");
const { db } = require("../db/config");

require('dotenv').config();

const ID_TIENDA = process.env.ID_TIENDA;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const USER_AGENT = process.env.USER_AGENT;


const productsTiendaNube = async () => {
    try {
        const response = await fetch(`https://api.tiendanube.com/v1/${ID_TIENDA}/products`, {
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

        return { message: "Productos sincronizados con Firestore", products }; // Retorna el objeto con el mensaje y los productos
    } catch (error) {
        console.error("Error sincronizando productos:", error);
        throw error; 
    }
};



const getAllProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const productsAlmacenados = await getDocs(productsCollection);
      const products = productsAlmacenados.docs.map(doc => ({ id: doc.id,...doc.data() }));
      return products;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error; 
    }
};

module.exports = { getAllProducts, productsTiendaNube };

