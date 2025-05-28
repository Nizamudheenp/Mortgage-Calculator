import React from 'react';

function Result({monthAmount,totalAmount,payType}) {
  return (
    <div id='resultContainer'>
      {monthAmount && totalAmount ? (
        <>
        <h2>Your results</h2>
      <p>Your results are shown below based on the information you 
        provided.To adjust the results,edit the form and click "calculate repayments"
        again.
      </p>
      <hr />
      <h4>Your monthly {payType === "Repayment" ? "repayments" : "Interest" } </h4>
      <h1>₹{monthAmount}</h1>
      <hr />
      <h4>Total you will repay over the term</h4>
      <h2>₹{totalAmount}</h2>
        </>
      ) :
      (
        <>
        <img src="public\images.jpeg" alt="" />
        <h2>results shown here</h2>
        <p>Complete the form and click "calculate repayments" 
          to see what your monthly repayments would be.
        </p>
        </>
      )
      }
      
    </div>
  )
}

export default Result