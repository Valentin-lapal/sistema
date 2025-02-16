const { collection, getDocs } = require("firebase/firestore");
const { db } = require("../db/config");

const TIENDA_NUBE_API_URL = "https://api.tiendanube.com/v1/5676879/products";
const ACCESS_TOKEN = "9e839ad691c01ff908903432e79ed3392d138638";
const USER_AGENT = "Praga (valentin.lapalma25@gmail.com)";


const productsTiendaNube = async () => {
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

        return { message: "Productos sincronizados con Firestore", products }; // Retorna el objeto con el mensaje y los productos
    } catch (error) {
        console.error("Error sincronizando productos:", error);
        throw error; // Re-lanza el error para que sea manejado en la ruta
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
      throw error; // Re-lanza el error para que pueda ser manejado en la ruta
    }
};

module.exports = { getAllProducts, productsTiendaNube };

