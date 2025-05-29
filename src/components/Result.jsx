import React from 'react';

function Result({monthAmount,totalAmount,payType}) {
  return (
    <div id='resultContainer'>
      {monthAmount && totalAmount ? (
        
        <div className='result'>
        <h2 className='resultHead'>Your results</h2>
      <p className='resultpara'>Your results are shown below based on the information you 
        provided.To adjust the results,edit the form and click "calculate repayments"
        again.
      </p>
      <div className='repayResult'>
        <h4>Your monthly {payType === "Repayment" ? "repayments" : "Interest" } </h4>
      <h1 className='monthPay'>₹{monthAmount}</h1>
      <hr />
      <h4>Total you will repay over the term</h4>
      <h2 className='totalPay'>₹{totalAmount}</h2>
      </div>
      
       </div>
      ) :
      (
        <div className='empty'>
        <img src="images.jpeg" alt="logo" />
        <h2 className='emptyHead'>results shown here</h2>
        <p className='emptyPara'>Complete the form and click "calculate repayments" 
          to see what your monthly repayments would be.
        </p>
       </div>
      )
      }
      
    </div>
  )
}

export default Result