const CurrencyForm = ({
  fromCurrency,
  toCurrency,
  baseCurrencyHandler,
  targetCurrencyHandler,
  allCurrencies,
  currencyToCountryCode,
}) => {
  return (
    <div className="flex flex-row">
      <form className="flex flex-col items-center justify-center">
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
      </form>
    </div>
  );
};

export default CurrencyForm;
