import { useEffect, useState } from "react";
import apiClient from "./api/apiClient";

function App() {
  const [message, setMessage] = useState("Connexion au backend en cours...");

  useEffect(() => {
    apiClient
      .get("/")   
      .then((res) => {
        setMessage(`✅ Code de statut du backend : ${res.status}`);
      })
      .catch((err) => {
        setMessage(`❌ Erreur : ${err.message}`);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Test de connexion Frontend ↔ Backend</h1>
      <p>{message}</p>
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        Adresse du backend actuelle : {import.meta.env.VITE_API_URL}
      </p>
    </div>
  );
}

export default App;
