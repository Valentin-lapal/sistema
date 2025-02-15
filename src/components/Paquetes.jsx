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
        const response = await fetch("https://sistema-snowy.vercel.app/products");  //¿Debo colocar en el parametro de fetch "https://sistema-snowy.vercel.app/products"?
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error si la respuesta no es ok
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  if (error) {
    return <div>Error al cargar productos: {error.message}</div>; // Muestra un mensaje de error si ocurre uno
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
            <p className={styles.productDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paquetes;




// import styles from "../styles/paquetes.module.css";


// function Paquetes() {
  
//   return (
//     <div className="div-fondo">
//       <div className={styles.containerTitulos}>
//         <h1 className="titulos">Productos</h1>
//       </div>
//     </div>
//   );
// }

// export default Paquetes;
