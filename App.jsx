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

  const dodajDoKoszyka = (produkt) => {
    const istniejeWKoszyku = koszyk.some((item) => item.id === produkt.id);
    let nowyKoszyk;

    if (istniejeWKoszyku) {
      nowyKoszyk = koszyk.map((item) =>
        item.id === produkt.id ? { ...item, ilosc: item.ilosc + 1 } : item
      );
    } else {
      nowyKoszyk = [...koszyk, { ...produkt, ilosc: 1 }];
    }

    setKoszyk(nowyKoszyk);
    wypiszStanKonsoli(nowyKoszyk);
  };

  const usunZKoszyka = (idProduktu) => {
    const nowyKoszyk = koszyk.filter((item) => item.id !== idProduktu);
    setKoszyk(nowyKoszyk);
    wypiszStanKonsoli(nowyKoszyk);
  };



}