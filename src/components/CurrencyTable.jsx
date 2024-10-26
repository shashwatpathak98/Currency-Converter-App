import { useEffect, useState } from "react";

function CurrencyTable({
  fromCurrency,
  toCurrency,
  rates,
  currencyToCountryCode,
  handleSwap,
}) {
  const conversionRate = rates[toCurrency];
  const [displayNewTarget, setDisplayNewTarget] = useState(null);
  const [displayNewBase, setDisplayNewBase] = useState(null);

  const getFlagUrl = (currencyCode) => {
    return `https://flagsapi.com/${currencyToCountryCode[currencyCode].code}/shiny/32.png`;
  };

  const setTargetCurrency = (event) => {
    const newTargetCurrency = Number(event.target.value) * rates[toCurrency];
    setDisplayNewTarget(newTargetCurrency);
  };

  const makeBlur = (event) => {
    setDisplayNewBase((event.target.value = null));
    setDisplayNewTarget(0);
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
                  className="mask mask-squircle h-12 w-12 "
                  src={
                    fromCurrency === "EUR"
                      ? "https://flagpedia.net/data/org/w580/eu.webp"
                      : getFlagUrl(fromCurrency)
                  }
                  width={32}
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

      <div className="flex flex-col items-center justify-center mt-3 text-2xl">
        <div className="flex items-center gap-3">
          <div>{fromCurrency}</div>
          <div>
            <img src={getFlagUrl(fromCurrency)} />
          </div>
          <div className="flex items-start ">
            <input
              type="number"
              className=" pl-3 input input-bordered input-accent w-full max-w-xs"
              onChange={setTargetCurrency}
              defaulValue={displayNewBase}
              autoFocus
              onBlur={makeBlur}
            />
          </div>
        </div>
        <button onClick={handleSwap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div>{toCurrency}</div>
          <div>
            <img src={getFlagUrl(toCurrency)} />
          </div>
          <div className="flex items-start ">
            <input
              type="text"
              value={displayNewTarget === 0 ? " " : displayNewTarget}
              className=" input input-bordered input-accent w-full max-w-xs"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyTable;
