import { Badge } from "react-bootstrap";

function Tags({ texto, colorFondo }) {
  return (
    <Badge className="tags" style={{ backgroundColor: colorFondo }}>
      {texto}
    </Badge>
  );
}

export default Tags;
