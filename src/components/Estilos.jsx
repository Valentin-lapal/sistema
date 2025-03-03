import styles from "../styles/paquetes.module.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Estilos (){
    return(
        <div className="div-fondo">
            <div className={styles.containerTitulos}>
             <h1 className="titulos">Historial de envíos</h1>
            </div>
            <Row>
                <Col md={4}>
                    <Card className={styles.OrdersContainer} >
                        <ListGroup  variant="flush">
                            <ListGroup.Item ><h2>Número de orden: 101</h2></ListGroup.Item>
                            <ListGroup.Item><h6>Nombre: Mariela Torres</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Contacto: 1167894566</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Dirección: Argerich 4555</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Nota: Oficina. Los horarios para recibir paquetería es de 09:00hs a 18:00hs</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Localidad: Caba</h6></ListGroup.Item>
                            <ListGroup.Item><h6>CP: 1412</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Email: Mari@gmail.com</h6></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.OrdersContainer} >
                        <ListGroup  variant="flush">
                            <ListGroup.Item ><h2>Número de orden: 101</h2></ListGroup.Item>
                            <ListGroup.Item><h6>Nombre: Mariela Torres</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Contacto: 1167894566</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Dirección: Argerich 4555</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Nota: Oficina. Los horarios para recibir paquetería es de 09:00hs a 18:00hs</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Localidad: Caba</h6></ListGroup.Item>
                            <ListGroup.Item><h6>CP: 1412</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Email: Mari@gmail.com</h6></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.OrdersContainer} >
                        <ListGroup  variant="flush">
                            <ListGroup.Item ><h2>Número de orden: 101</h2></ListGroup.Item>
                            <ListGroup.Item><h6>Nombre: Mariela Torres</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Contacto: 1167894566</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Dirección: Argerich 4555</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Nota: Oficina. Los horarios para recibir paquetería es de 09:00hs a 18:00hs</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Localidad: Caba</h6></ListGroup.Item>
                            <ListGroup.Item><h6>CP: 1412</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Email: Mari@gmail.com</h6></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
    
}

export default Estilos


