import { useState, useEffect } from "react";
import currencyToCountryCode from "./constants/currencyCodes";
import CurrencyTable from "./components/CurrencyTable";
import CurrencyForm from "./components/CurrencyForm";

export default function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD"); // Initial currency selection
  const [targetCurrency, setTargetCurrency] = useState("INR"); // Initial currency selection
  const [rates, setRates] = useState({});
  const [updatedTargetCurrency , setUpdatedTargetCurrency] = useState(null);

  //Supported Currencies based on the mapping above
  const currencies = Object.keys(currencyToCountryCode);

  useEffect(() => {
    if (baseCurrency) {
      const getData = async () => {
        try {
          console.log("Fetching exchange rates...");
          const response = await fetch(
            `https://open.er-api.com/v6/latest/${baseCurrency}`
          );
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

  const swapCountry = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  const baseCurrencyChange = (event) => {
     const value = event.target.value;
     setUpdatedTargetCurrency(value);
  }

  return (
    <>
      <div className="flex  flex-col justify-center items-center mt-24">
        <CurrencyForm
          fromCurrency={baseCurrency}
          toCurrency={targetCurrency}
          baseCurrencyHandler={handleBaseCurrencyChange}
          targetCurrencyHandler={handleTargetCurrencyChange}
          allCurrencies={currencies}
          currencyToCountryCode={currencyToCountryCode}
          setBaseCurrency={setBaseCurrency}
          setTargetCurrency={setTargetCurrency}
          handleSwap={swapCountry}
        />

        <CurrencyTable
          fromCurrency={baseCurrency}
          toCurrency={targetCurrency}
          rates={rates}
          currencyToCountryCode={currencyToCountryCode}
          handleSwap={swapCountry}
         
        />

        
      </div>
    </>
  );
}
