import CurrencyConverter from "./CurrencyConverter";
import eu from "../../public/eu.png";
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
              <th> {fromCurrency} </th>

              <th></th>
              <th> {toCurrency}</th>

              <th> Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="h-auto w-12"
                  src={fromCurrency === "EUR" ? eu : getFlagUrl(fromCurrency)}
                  width={32}
                  height={32}
                />
              </td>
              <td>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </td>
              <td>
                <img
                  className="h-12 col-span-2"
                  src={toCurrency === "EUR" ? eu : getFlagUrl(toCurrency)}
                />{" "}
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

      <CurrencyConverter
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        targetConversionRate={conversionRate}
        getFlagUrl={getFlagUrl}
      />
    </div>
  );
}

export default CurrencyTable;
