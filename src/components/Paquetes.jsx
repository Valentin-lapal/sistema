import React, { useState, useEffect } from 'react';
import styles from "../styles/paquetes.module.css";

function Paquetes() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null);   // Estado para errores

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Indica que la carga está en curso
      setError(null);    // Reinicia el estado de error

      try {
        const response = await fetch('/products'); // URL de tu backend en Vercel. Si está en el mismo dominio, solo la ruta.
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error si la respuesta no es ok
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError(err); // Guarda el error para mostrarlo en la interfaz
      } finally {
        setLoading(false); // Indica que la carga ha terminado, independientemente del resultado
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
