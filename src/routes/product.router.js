const express = require ("express")
const router = express.Router()
const {getAllProducts, productsTiendaNube} = require("../controllers/product.controller")

// Rutas para productos
router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/sync", async (req, res) => {
    try {
        const result = await productsTiendaNube();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router