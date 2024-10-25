const CurrencyForm = ({
  fromCurrency,
  toCurrency,
  baseCurrencyHandler,
  targetCurrencyHandler,
  allCurrencies,
  currencyToCountryCode,
  handleSwap,
}) => {
  console.log(toCurrency, fromCurrency);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center justify-center">
        <label>
          <em className="text-gray-400">
            {" "}
            <p className="btn btn-error w-12">From</p>{" "}
          </em>
          <select
            value={fromCurrency}
            onChange={baseCurrencyHandler}
            className="select select-bordered w-full max-w-xs select-md"
          >
            {allCurrencies.map((cur) => (
              <option key={cur} value={cur}>
                {`${cur} - ${currencyToCountryCode[cur].name}`}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button onClick={handleSwap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
        <br />
        <label>
          <em className="text-gray-400">
            {" "}
            <p className="btn btn-success w-12">To</p>{" "}
          </em>
          <select
            value={toCurrency}
            onChange={targetCurrencyHandler}
            className="select select-bordered w-full max-w-xs select-md"
          >
            {allCurrencies.map((cur) => (
              <option key={cur} value={cur}>
                {`${cur} - ${currencyToCountryCode[cur].name}`}
              </option>
            ))}
          </select>
        </label>
        <br />
      </div>
    </div>
  );
};

export default CurrencyForm;
