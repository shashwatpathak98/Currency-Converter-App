const CurrencyForm = ({fromCurrency , toCurrency}) => {
  return (
    <div>
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

    </div>
  )
}

export default CurrencyForm