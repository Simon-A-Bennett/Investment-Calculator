
function TableItems() {
  const { userInput, calculateInvestmentResults, formatter } = useInvest();
  const resData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resData[0].valueEndOfYear -
    resData[0].interest -
    resData[0].annualInvestment;
  console.log(resData);
  return (
    <>
      {resData.map((data) => {
        const totalInterest =
          data.valueEndOfYear -
          data.annualInvestment * data.year -
          initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterest

        return (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TableItems;
