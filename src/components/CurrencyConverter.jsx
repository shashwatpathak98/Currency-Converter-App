import React from "react";
import { useState } from "react";
import eu from "../../public/eu.png";

const CurrencyConverter = ({
  fromCurrency,
  toCurrency,
  targetConversionRate,
  getFlagUrl,
}) => {
  const [displayNewTarget, setDisplayNewTarget] = useState(null);
  const [displayNewBase, setDisplayNewBase] = useState(null);

  const setTargetCurrency = (event) => {
    const newTargetCurrency = Number(event.target.value) * rates[toCurrency];
    setDisplayNewTarget(newTargetCurrency);
  };

  return (
    <div className="flex flex-col items-center justify-center my-3 px-12 text-2xl ">
      <div className="flex items-center justify-center w-full max-w-md mb-3">
        <div className="flex w-full items-center justify-center gap-2 ">
          <div>{fromCurrency}</div>

          <img
            src={fromCurrency === "EUR" ? eu : getFlagUrl(fromCurrency)}
            width={32}
            height={32}
            className="inline-block"
          />
        </div>

        <input
          type="number"
          className=" input input-bordered input-accent w-full max-w-xs"
          onChange={setTargetCurrency}
          defaulValue={displayNewBase}
          autoFocus
        />
      </div>

      <div className="flex items-center justify-center w-full max-w-md ">
        <div className="flex w-full items-center justify-center gap-2">
          <div>{toCurrency}</div>

          <img
            src={toCurrency === "EUR" ? eu : getFlagUrl(toCurrency)}
            width={32}
            height={32}
            className="inline-block "
          />
        </div>

        <input
          type="number"
          className=" input input-bordered input-accent w-full max-w-xs"
          onChange={setTargetCurrency}
          defaulValue={displayNewBase}
          autoFocus
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
