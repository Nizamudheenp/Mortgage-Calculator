import React, { useMemo } from 'react';

// Inline SVG illustration for empty state
const EmptyIllustration = () => (
  <svg
    className="empty-illustration"
    viewBox="0 0 200 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    {/* House body */}
    <rect x="55" y="90" width="90" height="65" rx="4" fill="#1e2340" />
    {/* Roof */}
    <polygon points="40,92 100,42 160,92" fill="#2a3060" />
    {/* Door */}
    <rect x="85" y="118" width="30" height="37" rx="3" fill="#111327" />
    {/* Door knob */}
    <circle cx="111" cy="138" r="3" fill="hsl(62,70%,52%)" />
    {/* Left window */}
    <rect x="64" y="103" width="22" height="18" rx="2" fill="#111327" />
    <line x1="75" y1="103" x2="75" y2="121" stroke="hsl(62,70%,52%)" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="64" y1="112" x2="86" y2="112" stroke="hsl(62,70%,52%)" strokeWidth="1.5" strokeOpacity="0.5" />
    {/* Right window */}
    <rect x="114" y="103" width="22" height="18" rx="2" fill="#111327" />
    <line x1="125" y1="103" x2="125" y2="121" stroke="hsl(62,70%,52%)" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="114" y1="112" x2="136" y2="112" stroke="hsl(62,70%,52%)" strokeWidth="1.5" strokeOpacity="0.5" />
    {/* Chimney */}
    <rect x="128" y="54" width="14" height="26" rx="2" fill="#1e2340" />
    {/* Smoke dots */}
    <circle cx="132" cy="46" r="4" fill="rgba(180,200,80,0.18)" />
    <circle cx="138" cy="40" r="3" fill="rgba(180,200,80,0.12)" />
    <circle cx="143" cy="34" r="2" fill="rgba(180,200,80,0.08)" />
    {/* Ground line */}
    <line x1="30" y1="156" x2="170" y2="156" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    {/* Currency coin */}
    <circle cx="155" cy="72" r="14" fill="hsl(62,70%,52%)" fillOpacity="0.18" />
    <circle cx="155" cy="72" r="10" fill="hsl(62,70%,52%)" fillOpacity="0.28" />
    <text x="150" y="77" fontSize="12" fill="hsl(62,70%,52%)" fontWeight="bold" fontFamily="sans-serif">₹</text>
    {/* Stars / sparkles */}
    <circle cx="46" cy="68" r="2" fill="hsl(62,70%,52%)" fillOpacity="0.5" />
    <circle cx="38" cy="80" r="1.5" fill="hsl(62,70%,52%)" fillOpacity="0.35" />
    <circle cx="160" cy="98" r="1.5" fill="hsl(62,70%,52%)" fillOpacity="0.35" />
  </svg>
);

// Format number with commas for Indian locale
const formatCurrency = (value) =>
  parseFloat(value).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function Result({ monthAmount, totalAmount, payType }) {

  const formattedMonth = useMemo(() => monthAmount ? formatCurrency(monthAmount) : null, [monthAmount]);
  const formattedTotal = useMemo(() => totalAmount ? formatCurrency(totalAmount) : null, [totalAmount]);

  return (
    <div id='resultContainer' role="region" aria-label="Calculation results" aria-live="polite">
      {monthAmount && totalAmount ? (
        <div className='result'>
          <h2 className='resultHead'>Your results</h2>
          <p className='resultpara'>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &ldquo;Calculate Repayments&rdquo; again.
          </p>
          <div className='repayResult'>
            <div className="result-row">
              <h4>Your monthly {payType === "Repayment" ? "repayments" : "interest"}</h4>
              <span className='monthPay' aria-label={`Monthly payment ₹${formattedMonth}`}>
                ₹{formattedMonth}
              </span>
            </div>
            <hr />
            <div className="result-row">
              <h4>Total you will repay over the term</h4>
              <span className='totalPay' aria-label={`Total payment ₹${formattedTotal}`}>
                ₹{formattedTotal}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='empty'>
          <EmptyIllustration />
          <h2 className='emptyHead'>Results shown here</h2>
          <p className='emptyPara'>
            Complete the form and click &ldquo;Calculate Repayments&rdquo; to see
            what your monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}

export default Result;