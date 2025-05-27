import { useState } from "react"
import Calculator from "./components/Calculator"
import Result from "./components/Result"


function App() {

  const [formData,setFormdata]= useState(
        {
            amount:"",
            term:"",
            rate:"",
            type:"Repayment"
        }
    )
  const [monthAmount,setMonthAmount] = useState(null)
  const [totalAmount,setTotalAmount] = useState(null) 
  const [payType,setPayType]=useState("")
  
  const calculateData = () => {
  const amount = parseFloat(formData.amount);
  const term = parseFloat(formData.term);
  const rate = parseFloat(formData.rate);
  const type = formData.type;

  const monthlyRate = rate / 100 / 12;
  const totalMonths = term * 12;

  if (type === "Repayment") {
    const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
    const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
    const monthlyPayment = numerator / denominator;
    const totalRepayment = monthlyPayment * totalMonths;

    setMonthAmount(monthlyPayment.toFixed(2));
    setTotalAmount(totalRepayment.toFixed(2));
    setPayType("Repayment")
  }
  else if(type === "Interest Only"){
    const monthlyInterestOnlyPayment = amount * monthlyRate 
    const totalInterest = monthlyInterestOnlyPayment * totalMonths;

    setMonthAmount(monthlyInterestOnlyPayment.toFixed(2));
    setTotalAmount(totalInterest.toFixed(2));
    setPayType("Interest Only")
  }
};


  return (
    <>
      <Calculator formData={formData} setFormdata={setFormdata} calculateData={calculateData} />
      <Result monthAmount={monthAmount} totalAmount={totalAmount} payType={payType}/>
    </>
  )
}

export default App
