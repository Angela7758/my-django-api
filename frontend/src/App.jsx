import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connexion au backend en cours...");

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    console.log("VITE_API_URL =", url);

    fetch(url)
      .then((res) => {
        console.log("Réponse du backend :", res.status);
        setMessage(`✅ Code de statut du backend : ${res.status}`);
      })
      .catch((err) => {
        console.error("Échec de la requête :", err);
        setMessage(`❌ Échec de la requête : ${err.message}`);
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
