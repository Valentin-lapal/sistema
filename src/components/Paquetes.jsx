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
        <h1 className="titulos">Paquetes</h1>
      </div>
      <div className={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <h2>Número de orden: {product.numero_orden}</h2>
            <p>Nombre: {product.name}</p>
            <p>Contacto: {product.contacto}</p>
            <p>Dirección: {product.direccion}</p>
            <p>Nota: {product.nota}</p>
            <p>Localidad: {product.localidad}</p>
            <p>CP: {product.codigo_postal}</p>
            <p>Email: {product.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Paquetes;




