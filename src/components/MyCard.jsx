import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard({ imagen, nombre, descripcion, tagTexto, tagColorFondo }) {
  return (
    <Card className="my-card">
      <div className="my-card__imagen">
        <Card.Img variant="top" src={imagen} alt={nombre} />
      </div>
      <Card.Body className="my-card__cuerpo">
        <Tags texto={tagTexto} colorFondo={tagColorFondo} />
        <Card.Title className="my-card__nombre">{nombre}</Card.Title>
        <Card.Text className="my-card__descripcion">{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
