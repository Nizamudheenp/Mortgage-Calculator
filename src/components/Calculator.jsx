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
    <div id='calculatorContainer'>
      <div className='calculatorHead'>
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
      </div>


      <form onSubmit={handleSubmit}>
        <label htmlFor="amount" className='formLabel'>Mortgage  Amount</label>
        <input type="number" onChange={handleChange} id="amount" name='amount' value={formData.amount} placeholder='₹' />
        <div className="form-row">
          <label htmlFor="term" className='formLabel'>Mortgage  Term</label>
          <input type="number" onChange={handleChange} id="term" name='term' value={formData.term} placeholder='years' />
          <label htmlFor="rate" className='formLabel'>Interest Rate</label>
          <input type="number" onChange={handleChange} id="rate" name='rate' value={formData.rate} placeholder='%' />
        </div>
        <label htmlFor="type" className='formLabel'>Mortgage  Type</label>
        <div className="toggle-type">
          <label
            className={`toggle-option ${formData.type === 'Repayment' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="type"
              value="Repayment"
              checked={formData.type === 'Repayment'}
              onChange={handleChange}
            />
            Repayment
          </label>
          <label
            className={`toggle-option ${formData.type === 'Interest Only' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="type"
              value="Interest Only"
              checked={formData.type === 'Interest Only'}
              onChange={handleChange}
            />
            Interest Only
          </label>
        </div>

        <button type="submit" className='calculate-btn'>
           <i className="bi bi-calculator" style={{ marginRight: '30px' }}></i>
           Calculate Repayments</button>
      </form>
    </div>
  )
}

export default Calculator