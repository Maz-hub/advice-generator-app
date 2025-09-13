import { useState, useEffect } from "react";

const App = () => {
  const [adviceData, setAdviceData] = useState({});

  const API_URL = "https://api.adviceslip.com/advice";

  async function fetchAdvice() {
    const res = await fetch(API_URL);
    const data = await res.json();

    setAdviceData(data.slip);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="mx-auto h-screen flex flex-col justify-center items-center">
      <div className="card">
        <div>
          <p className="adviceID">Advice #{adviceData.id || "..."} </p>
        </div>

        <div>
          <p className="adviceData">
            "{adviceData.advice || "Loading advice..."}"
          </p>
        </div>

        <div>
          <button onClick={fetchAdvice}>Get Advice </button>
        </div>
      </div>
    </div>
  );
};

export default App;
