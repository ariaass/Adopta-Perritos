import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "./App.css";

const perritos = [
  {
    id: 1,
    imagen:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Rocky",
    descripcion:
      "Cachorro juguetón y lleno de energía. Le encanta jugar con pelotas y es muy cariñoso con las personas.",
    tagTexto: "En adopción",
    tagColorFondo: "#f0ad4e",
  },
  {
    id: 2,
    imagen:
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Luna",
    descripcion:
      "Hembra tranquila y educada. Ideal para departamentos, se lleva bien con otros perros y gatos.",
    tagTexto: "Cachorra",
    tagColorFondo: "#0d6efd",
  },
  {
    id: 3,
    imagen:
      "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Max",
    descripcion:
      "Perro adulto, muy fiel y protector. Disfruta de los paseos largos y aprende muy rápido.",
    tagTexto: "Adulto",
    tagColorFondo: "#198754",
  },
  {
    id: 4,
    imagen:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Coco",
    descripcion:
      "Pequeña y curiosa, perfecta para familias con niños. Su pelaje blanco la hace inconfundible.",
    tagTexto: "Pequeña",
    tagColorFondo: "#dc3545",
  },
  {
    id: 5,
    imagen:
      "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Toby",
    descripcion:
      "Manso y sociable, convive muy bien con otros animales. Busca un hogar donde lo mimen.",
    tagTexto: "En adopción",
    tagColorFondo: "#6f42c1",
  },
  {
    id: 6,
    imagen:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=600",
    nombre: "Nala",
    descripcion:
      "Activa y alegre, ideal para personas que disfrutan del aire libre y el ejercicio.",
    tagTexto: "Joven",
    tagColorFondo: "#0dcaf0",
  },
];

function App() {
  return (
    <div className="app">
      <Header titulo="Adopta un perrito" />

      <main className="galeria">
        {perritos.map((perrito) => (
          <MyCard
            key={perrito.id}
            imagen={perrito.imagen}
            nombre={perrito.nombre}
            descripcion={perrito.descripcion}
            tagTexto={perrito.tagTexto}
            tagColorFondo={perrito.tagColorFondo}
          />
        ))}
      </main>

      <Footer descripcion="Galería de perritos en adopción. Cada imagen representa una vida que espera un hogar. ¡Adopta, no compres!" />
    </div>
  );
}

export default App;
