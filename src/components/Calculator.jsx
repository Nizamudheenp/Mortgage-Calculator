import React, { useCallback } from 'react';

function Calculator({ formData, setFormdata, calculateData, clearAll, errors }) {

  const handleChange = useCallback((event) => {
    setFormdata(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }, [setFormdata]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    calculateData();
  }, [calculateData]);

  return (
    <div id='calculatorContainer'>
      <div className='calculatorHead'>
        <h2>Mortgage Calculator</h2>
        <p onClick={clearAll} role="button" aria-label="Clear all form fields">Clear All</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>

        {/* Mortgage Amount */}
        <div className="form-group">
          <label htmlFor="amount" className='formLabel'>Mortgage Amount</label>
          <div className={`input-wrapper ${errors.amount ? 'has-error' : ''}`}>
            <span className="input-badge" aria-hidden="true">₹</span>
            <input
              type="number"
              onChange={handleChange}
              id="amount"
              name='amount'
              value={formData.amount}
              placeholder='0'
              aria-label="Mortgage amount in rupees"
              aria-invalid={!!errors.amount}
              aria-describedby={errors.amount ? 'amount-error' : undefined}
              min="0"
            />
          </div>
          {errors.amount && (
            <p className="error-text" id="amount-error" role="alert">{errors.amount}</p>
          )}
        </div>

        {/* Term & Rate Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="term" className='formLabel'>Mortgage Term</label>
            <div className={`input-wrapper ${errors.term ? 'has-error' : ''}`}>
              <input
                type="number"
                onChange={handleChange}
                id="term"
                name='term'
                value={formData.term}
                placeholder='0'
                aria-label="Mortgage term in years"
                aria-invalid={!!errors.term}
                aria-describedby={errors.term ? 'term-error' : undefined}
                min="1"
                max="40"
              />
              <span className="input-badge suffix" aria-hidden="true">yrs</span>
            </div>
            {errors.term && (
              <p className="error-text" id="term-error" role="alert">{errors.term}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="rate" className='formLabel'>Interest Rate</label>
            <div className={`input-wrapper ${errors.rate ? 'has-error' : ''}`}>
              <input
                type="number"
                onChange={handleChange}
                id="rate"
                name='rate'
                value={formData.rate}
                placeholder='0'
                aria-label="Annual interest rate percentage"
                aria-invalid={!!errors.rate}
                aria-describedby={errors.rate ? 'rate-error' : undefined}
                min="0"
                step="0.01"
              />
              <span className="input-badge suffix" aria-hidden="true">%</span>
            </div>
            {errors.rate && (
              <p className="error-text" id="rate-error" role="alert">{errors.rate}</p>
            )}
          </div>
        </div>

        {/* Mortgage Type */}
        <div className="form-group">
          <label className='formLabel'>Mortgage Type</label>
          <div className="toggle-type" role="radiogroup" aria-label="Mortgage type">
            <label className={`toggle-option ${formData.type === 'Repayment' ? 'active' : ''}`}>
              <input
                type="radio"
                name="type"
                value="Repayment"
                checked={formData.type === 'Repayment'}
                onChange={handleChange}
                aria-label="Repayment mortgage"
              />
              Repayment
            </label>
            <label className={`toggle-option ${formData.type === 'Interest Only' ? 'active' : ''}`}>
              <input
                type="radio"
                name="type"
                value="Interest Only"
                checked={formData.type === 'Interest Only'}
                onChange={handleChange}
                aria-label="Interest only mortgage"
              />
              Interest Only
            </label>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className='calculate-btn' aria-label="Calculate mortgage repayments">
          <i className="bi bi-calculator-fill" aria-hidden="true"></i>
          Calculate Repayments
        </button>

      </form>
    </div>
  );
}

export default Calculator;