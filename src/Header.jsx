import { useInvest } from "./InvestProvider";

function Header() {
  const { userInput, handleChange } = useInvest();

  return (
    <>
      <header id="header">
        <img src="/investment-calculator-logo.png" />
        <h1>Investment Calculator</h1>
        <div id="user-input">
          <div className="input-group">
            <p>
              <label htmlFor="initial">Initial investment </label>
              <input
                value={userInput.initialInvestment}
                onChange={(e) =>
                  handleChange("initialInvestment", Number(e.target.value))
                }
                id="initial"
                type="number"
              />
            </p>
            <p>
              <label htmlFor="annual">Annual investment </label>
              <input
                value={userInput.annualInvestment}
                onChange={(e) =>
                  handleChange("annualInvestment", Number(e.target.value))
                }
                id="annual"
                type="number"
              />
            </p>
            </div>
            <div className='input-group'>
            <p>
              <label htmlFor="expected">Expected return </label>
              <input
                value={userInput.expectedReturn}
                onChange={(e) => handleChange("expectedReturn", Number(e.target.value))}
                id="expected"
                type="number"
              />
            </p>
            <p>
              <label htmlFor="duration">Duration</label>
              <input
                value={userInput.duration}
                onChange={(e) => handleChange("duration", Number(e.target.value))}
                id="duration"
                type="number"
              />
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
