import React, { useState } from "react";

export default function DummySimulator() {
  const [investmentValue, setInvestmentValue] = useState(0);

  const style = {
    display: "flex",
    "flex-direction": "column"
  };

  function calculateInvestment(v) {
    v = parseFloat(v, 10);
    const value = v + v * 0.042;
    if (!!v) {
      const s = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "EUR"
      }).format(value);
      setInvestmentValue(s);
    }
  }

  return (
    <div className="dummy-simulator" style={style}>
      <h1>DummySimulator</h1>
      <input
        type="number"
        name="investmentValue"
        onChange={ev => calculateInvestment(ev.target.value)}
      />
      <span>{investmentValue}</span>
    </div>
  );
}
