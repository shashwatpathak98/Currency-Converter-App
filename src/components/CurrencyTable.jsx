function CurrencyTable({
  fromCurrency,
  toCurrency,
  rates,
  currencyToCountryCode,
}) {
  const conversionRate = rates[toCurrency];

  const getFlagUrl = (currencyCode) => {
    return `https://flagsapi.com/${currencyToCountryCode[currencyCode].code}/shiny/32.png`;
  };

  return (
    <div>
      {conversionRate ? (
        <table style={{ border: "2px solid red" }}>
          <thead>
            <tr>
              <th> {fromCurrency} ⇄ </th>
              <th> {toCurrency}</th>
              <th> Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <img
                  src={
                    fromCurrency === "EUR"
                      ? "https://flagpedia.net/data/org/w580/eu.webp"
                      : getFlagUrl(fromCurrency)
                  }
                  width={32}
                />{" "}
              </td>
              <td>
                {" "}
                <img src={getFlagUrl(toCurrency)} />{" "}
              </td>

              <td> {conversionRate}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>
          No ${fromCurrency} exchange rate for {toCurrency}
        </p>
      )}
    </div>
  );
}

export default CurrencyTable;
