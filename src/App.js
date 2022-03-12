import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fingerprint from '@mui/icons-material/Fingerprint';
import "./App.css";

function App() {
  const retos = [
    "Tener una conversación con una persona aleatoria",
    "Pedirle el número de teléfono a alguien",
    "Abraza a la primera persona que encuentres",
    "Grita que estas enamorad@",
  ];
  const [indice, setIndice] = React.useState(
    Math.floor(Math.random() * (retos.length - 0) + 0)
  );
  const generarNumero = () =>
    setIndice(Math.floor(Math.random() * (4 - 0) + 0));

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
        <Button color="success" sx={{maxWidth: '300px', fontWeight: 'bold'}} variant="contained" endIcon={<Fingerprint />}>
        <h3>
        OTRO
        </h3>
      </Button>
      </Box>
    </div>
  );
}

export default App;
