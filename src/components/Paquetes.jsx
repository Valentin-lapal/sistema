import React, { useState, useEffect } from 'react';
import styles from "../styles/paquetes.module.css";

function Paquetes() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);   

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      setError(null);

      try {
        const response = await fetch("https://backend-sistema-srda.onrender.com/api/products");  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos. Inténtalo de nuevo más tarde."); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>; 
  }

  if (error) {
    return <div>Error al cargar productos: {error}</div>; 
  }

  return (
    <div className="div-fondo">
      <div className={styles.containerTitulos}>
        <h1 className="titulos">Productos</h1>
      </div>
      <div className={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.position}</p>
            <p>{product.stock_management}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Paquetes;




