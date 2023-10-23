import { createContext, useContext, useState } from "react";
const InvestContext = createContext();

const InvestProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const handleChange = (inputIdentifier, newValue) => {
  setUserInput(prevUserInput => {
  return {
    ...prevUserInput,
    [inputIdentifier]: +newValue,

  }
})
}

  // This function expects a JS object as an argument
  // The object should contain the following properties
  // - initialInvestment: The initial investment amount
  // - annualInvestment: The amount invested every year
  // - expectedReturn: The expected (annual) rate of return
  // - duration: The investment duration (time frame)
  function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, // year identifier
        interest: interestEarnedInYear, // the amount of interest earned in this year
        valueEndOfYear: investmentValue, // investment value at end of year
        annualInvestment: annualInvestment, // investment added in this year
      });
    }
    return annualData;
  }

  // The browser-provided Intl API is used to prepare a formatter object
  // This object offers a "format()" method that can be used to format numbers as currency
  // Example Usage: formatter.format(1000) => yields "$1,000"
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <InvestContext.Provider
      value={{
        handleChange,
        userInput,
        calculateInvestmentResults,
        formatter,       
      }}
    >
      {children}
    </InvestContext.Provider>
  );
};

const useInvest = () => {
  const context = useContext(InvestContext);
  if (context === undefined)
    throw new Error("InvestContext was used outside of the InvestProvider");
  return context;
};

export { InvestProvider, useInvest }
