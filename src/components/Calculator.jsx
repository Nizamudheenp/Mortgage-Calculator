import React from 'react';

function Calculator({ formData, setFormdata, calculateData,clearAll,errors }) {



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
        <p onClick={clearAll}>Clear All</p>

      </div>


      <form onSubmit={handleSubmit}>
        <label htmlFor="amount" className='formLabel'>Mortgage  Amount</label>
        <input type="number" onChange={handleChange} id="amount" name='amount' value={formData.amount} placeholder='₹'  className={errors.amount ? 'input-error' : ''} />
        {errors.amount && <p className="error-text">{errors.amount}</p>}
        <div className="form-row">
            <div className="form-group">
          <label htmlFor="term" className='formLabel'>Mortgage  Term</label>
          <input type="number" onChange={handleChange} id="term" name='term' value={formData.term} placeholder='years' className={errors.term ? 'input-error' : ''} />
          {errors.term && <p className="error-text">{errors.term}</p>}
          </div>
          <div className="form-group">
          <label htmlFor="rate" className='formLabel'>Interest Rate</label>
          <input type="number" onChange={handleChange} id="rate" name='rate' value={formData.rate} placeholder='%' className={errors.rate ? 'input-error' : ''} />
          {errors.rate && <p className="error-text">{errors.rate}</p>}
        </div>
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