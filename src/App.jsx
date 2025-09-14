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
          <img
            className="shrink-0 my-6 sm:my-10 w-full hidden sm:block"
            src="img/pattern-divider-desktop.svg"
            alt="Pattern divider desktop"
          />
          <img
            className="shrink-0 my-6 w-full sm:hidden"
            src="img/pattern-divider-mobile.svg"
            alt="Pattern divider mobile"
          />
        </div>

        <div>
          <button onClick={fetchAdvice} className="btn">
            <img
              className="shrink-0"
              src="img//icon-dice.svg"
              alt="Dice button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
