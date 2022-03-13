import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cached from "@mui/icons-material/Cached";
import "./App.css";

function App() {
  const retos = [
    "Tener una conversación con un desconocido",
    "Saca a bailar a un desconocido",
    "Pedirle el número de teléfono a un desconocido",
    "Shot",
    "Abraza a la primera persona que encuentres",
    "Grita que estas enamorad@",
    "Da una nalgada a alguien",
    "Besa a alguien en el cuello",
    "Shot",
    "Saca a bailar a un amigo",
    "Fondo a tu bebida",
    "Da un beso a un desconocido",
    "Shot",
    "Grita: «Hago un oral gratis»",
    "Besa a una chica",
    "Cachetada a alguien (solo si eres chica)",
    "Saca a bailar a un amigo",
    "Fondo a tu bebida",
    "Pide una bebida especial",
    "Haz el 4",
    "¿Otra botella?",
    "Pide MOET",
    "Invitale un shot a alguien",
    "Decide quien toma",
    "De la mesa, ¿a quien le darías?",
    "Baila con la persona a tu derecha",
    "Baila con la persona a tu izquierda",
    "Comparte un shot con quien quieras (ambos toman)",
    "Baila sexy",
    "Da tu número de cel a alguien",
    "¿Posición sexual favorita?",
    "Regala un beso",
    "Despeina a alguien",
    "Muerde a alguien",
    "Da una nalgada a alguien",
    "Ronda de shots",
    "Sacudele la cabeza a alguien",
  ];

  const [indice, setIndice] = React.useState(
    Math.floor(Math.random() * (retos.length - 0) + 0)
  );

  const [timer, setTimer] = React.useState(3);
  const [showTimer, setShowTimer] = React.useState(false);

  const updateTimer = (timer) => {
    setTimeout(() => {
      if (timer === 0) {
        setShowTimer(false);
        return;
      }
      if (timer - 1 > 0) {
        setTimer((prevState) => --prevState);
        updateTimer(timer);
      }
     } , 1000)
  }

  const nuevoReto = () => {
    setShowTimer(true);
    updateTimer(timer);
    setIndice(Math.floor(Math.random() * (retos.length - 0) + 0));
  }



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
        <h2>LA CULPABLE - Centro</h2>
        <h1>Reto:</h1>
        <h2>{retos[indice]}</h2>
        <Button
          onClick={nuevoReto}
          color="error"
          sx={{ maxWidth: "300px", fontWeight: "bold" }}
          variant="outlined"
          endIcon={<Cached />}
        >
          {<h3>SIGUIENTE</h3>}
        </Button>
      </Box>
    </div>
  );
}

export default App;
