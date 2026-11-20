import React, { useState } from 'react';

function App() {
  const produkty = [
    { id: 1, nazwa: 'Notes', cena: 12.50 },
    { id: 2, nazwa: 'Długopis', cena: 3.20 },
    { id: 3, nazwa: 'Plecak', cena: 89.00 },
    { id: 4, nazwa: 'Kalkulator', cena: 45.90 },
    { id: 5, nazwa: 'Zakreślacz', cena: 4.75 }
  ];

  const [koszyk, setKoszyk] = useState([]);

  const wypiszStanKonsoli = (aktualnyKoszyk) => {
    const liczbaPozycji = aktualnyKoszyk.length;
    const suma = aktualnyKoszyk.reduce((acc, item) => acc + item.cena * item.ilosc, 0);
    console.log(`Koszyk: ${liczbaPozycji} pozycji; suma: ${suma.toFixed(2)}`);
  };

}