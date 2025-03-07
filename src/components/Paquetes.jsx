import React, { useState, useEffect } from 'react';
import styles from "../styles/paquetes.module.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function Paquetes() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');  

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
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos. Inténtalo de nuevo más tarde."); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  

  useEffect(() => {
    const filtered = products.filter(product => 
      product.numero_orden.toString().includes(search)
    );
    setFilteredProducts(filtered);
  }, [search, products]);

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
      <Form.Group className={`${styles.formContainer} mb-3`} controlId="searchOrder">
        <Form.Control 
          type="text" 
          placeholder="Buscar por número de orden" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </Form.Group>
      <div className={styles.OrdersContainer}>
        <Row>
          {filteredProducts.map(product => (
            <Col md={4} key={product.id}>
              <Card className={styles.OrdersContainer}>
                <ListGroup variant="flush">
                  <ListGroup.Item ><h2>Número de orden: {product?.orden || ''}</h2></ListGroup.Item>
                  <ListGroup.Item><h6>Nombre: {product?.name || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Contacto: {product?.contacto || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Email: {product?.email || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Dirección: {product?.direccion || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Número: {product?.numero || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Localidad: {product?.localidad || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>CP: {product?.codigo_postal || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Ciudad: {product.ciudad || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Provincia: {product.provincia || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Note: {product.note || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Nota: {product.nota || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Estado: {product.estado || ''}</h6></ListGroup.Item>
                  <ListGroup.Item><h6>Estadoshi: {product.estadoshi || ''}</h6></ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>  
          ))}
        </Row>
      </div>
    </div>
  );
}
 
export default Paquetes;



