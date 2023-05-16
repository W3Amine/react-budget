import React from "react";

export default function Counter({ Total, Revenue, Depense }) {
  const cards = [
    { CardName: "Total", CardContent: (Total = Revenue - Depense) },
    { CardName: "Revenue", CardContent: Revenue, Style: { color: "green" } },
    { CardName: "Depense", CardContent: Depense, Style: { color: "red" } },
  ];

  return (
    <div id="card-container">
      {cards.map((card) => (
        <div key={card.CardName} className="card" style={card.Style}>
          <h3>{card.CardName}</h3>
          <p>{card.CardContent} DH</p>
        </div>
      ))}
    </div>
  );
}
