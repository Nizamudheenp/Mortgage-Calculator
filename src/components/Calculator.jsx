import React from 'react';

function Calculator({ formData, setFormdata, calculateData }) {



  const handleChange = (event) => {
    setFormdata(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    calculateData()
  }

  return (
    <div>
      <h2>Mortgage  Calculator</h2>
      <p
        onClick={() => {
          setFormdata({
            amount: "",
            term: "",
            rate: "",
            type: "Repayment"
          })
        }}
      >Clear All</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Mortgage  Amount</label>
        <input type="number" onChange={handleChange} id="amount" name='amount' value={formData.amount} />
        <label htmlFor="term">Mortgage  Term</label>
        <input type="number" onChange={handleChange} id="term" name='term' value={formData.term} />
        <label htmlFor="rate">Interest Rate</label>
        <input type="number" onChange={handleChange} id="rate" name='rate' value={formData.rate} />
        <label htmlFor="type">Mortgage  Type</label>
        <select onChange={handleChange} id="type" name='type' value={formData.type}>
          <option value="Repayment">Repayment</option>
          <option value="Interest Only">Interest Only</option>
        </select>
        <button type="submit">Calculate Repayments</button>
      </form>
    </div>
  )
}

export default Calculator