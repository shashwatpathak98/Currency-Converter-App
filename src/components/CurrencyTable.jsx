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
    <div className="overflow-x-auto">
      {conversionRate ? (
        <table className="table text-2xl">
          <thead className="">
            <tr className="text-3xl text-gray-100 bg-slate-500">
              <th > {fromCurrency}  </th>
            
<th ></th>
              <th> {toCurrency}</th>
             
              <th > Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr lassName="flex">
              <td>
               
                <img
                className="mask mask-squircle h-12 w-12 "
                  src={
                    fromCurrency === "EUR"
                      ? "https://flagpedia.net/data/org/w580/eu.webp"
                      : getFlagUrl(fromCurrency)
                  }
                  width={32}
                />
                
              </td>
              <td></td>
              <td >
                
                <img className="h-12 col-span-2" src={getFlagUrl(toCurrency)} />{" "}
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
