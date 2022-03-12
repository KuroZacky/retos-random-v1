import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fingerprint from "@mui/icons-material/Fingerprint";
import "./App.css";

function App() {
  const retos = [
    "Tener una conversación con una persona aleatoria",
    "Pedirle el número de teléfono a alguien",
    "Shot",
    "Abraza a la primera persona que encuentres",
    "Grita que estas enamorad@",
    "Besa a alguien en el cuello",
    "Shot",
    "Fondo a tu bebida",
    "Dar un beso en la boca a un desconocido",
    "Shot",
    "gritar: «Hago un oral gratis»",
  ];

  const [indice, setIndice] = React.useState(
    Math.floor(Math.random() * (retos.length - 0) + 0)
  );

  const nuevoReto = () =>
    setIndice(Math.floor(Math.random() * (retos.length - 0) + 0));

  return (
    <div className="App App-header">
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gridTemplateColumns: { md: "1fr 1fr" },
          gap: 2,
        }}
      >
        <h1>Reto:</h1>
        <h2>{retos[indice]}</h2>
        <Button
          onClick={nuevoReto}
          color="success"
          sx={{ maxWidth: "300px", fontWeight: "bold" }}
          variant="contained"
          endIcon={<Fingerprint />}
        >
          <h3>OTRO</h3>
        </Button>
      </Box>
    </div>
  );
}

export default App;
