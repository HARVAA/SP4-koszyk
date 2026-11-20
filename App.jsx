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

   const calkowitaSuma = koszyk.reduce((acc, item) => acc + item.cena * item.ilosc, 0);

  return (
    <div className="container mt-4" style={{ maxWidth: '800px' }}>
      <h2 className="mb-3">Sklepik szkolny</h2>
      <ul className="list-group mb-4">
        {produkty.map((produkt) => (
          <li
            key={produkt.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {produkt.nazwa} – {produkt.cena.toFixed(2)} zł
            </span>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => dodajdoKoszyka(produkt)}
            >
              Do koszyka
            </button>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">Koszyk ({koszyk.length} pozycji)</h3>

      {koszyk.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Koszyk jest pusty
        </div>
      ) : (
        <div>
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Ilość</th>
                <th>Cena</th>
                <th>Suma</th>
                <th>Akcja</th>
              </tr>
            </thead>
            <tbody>
              {koszyk.map((pozycja) => (
                <tr key={pozycja.id}>
                  <td>{pozycja.nazwa}</td>
                  <td>{pozycja.ilosc}</td>
                  <td>{pozycja.cena.toFixed(2)} zł</td>
                  <td>{(pozycja.cena * pozycja.ilosc).toFixed(2)} zł</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => usunZKoszyka(pozycja.id)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fw-bold">Suma: {calkowitaSuma.toFixed(2)} zł</p>
        </div>
      )}
    </div>
  );
}

export default App;
