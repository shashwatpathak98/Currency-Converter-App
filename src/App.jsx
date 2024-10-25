import { useState, useEffect } from "react";
import currencyToCountryCode from "./constants/currencyCodes";
import CurrencyTable from "./components/CurrencyTable";





export default function App() {

  const [baseCurrency, setBaseCurrency] = useState("USD"); // Initial currency selection
  const [targetCurrency, setTargetCurrency] = useState("INR"); // Initial currency selection
  const [rates, setRates] = useState({});

  
  //Supported Currencies based on the mapping above
  const currencies = Object.keys(currencyToCountryCode);

  useEffect(() => {
    if (baseCurrency) {
      const getData = async () => {
        try {
          console.log("Fetching exchange rates...");
          const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
          const responseData = await response.json();
          setRates(responseData.rates || {});
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      };
      getData();
    }
  }, [baseCurrency]);


  const handleBaseCurrencyChange = (event) => {
    const oldCurrency = event.target.value.toUpperCase();
    setBaseCurrency(oldCurrency);
  };

  const handleTargetCurrencyChange = (event) => {
    const newCurrency = event.target.value.toUpperCase();
    setTargetCurrency(newCurrency);
  };

  
 

  return (
    <>
      <form>
        <label>
          <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                <img src={`https://flagsapi.com/${currencyToCountryCode[cur].code}/shiny/32.png`} /> 
                  {`${cur} - ${currencyToCountryCode[cur].name}`}  
              </option>
            ))}
          </select>
        </label>
        <br />
        <br/>
        <label>
          
          <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                <img src={`https://flagsapi.com/${currencyToCountryCode[cur].code}/shiny/32.png`} />
                {`${cur} - ${currencyToCountryCode[cur].name}`}
              </option>
            ))}
          </select>
        </label>
        <br />
      </form>

      <br />

     <CurrencyTable fromCurrency={baseCurrency} toCurrency={targetCurrency} rates={rates} currencyToCountryCode={currencyToCountryCode}/>
      {/* <div>
        { conversionRate ? (
          <table style={{ border: "2px solid red" }}>
            <thead>
              <tr>
                <th> {baseCurrency} ⇄  </th>
                <th> {targetCurrency}</th>
                <th> Rate</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <img src={baseCurrency === "EUR" ? "https://flagpedia.net/data/org/w580/eu.webp" : getFlagUrl(baseCurrency)} width={32}/> </td>
                <td> <img src={getFlagUrl(targetCurrency)} /> </td>
                {console.log(rates)}

                <td> {conversionRate}</td>
              </tr>



            </tbody>
          </table>
        ) : (
           <p>No ${baseCurrency} exchange rate for {targetCurrency}</p>
          )}
      </div> */}
    </>
  );
}