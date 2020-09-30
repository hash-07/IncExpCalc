import React, {useState} from 'react'

const Sample = () => {
    
const [expenses, setExpenses] = useState([]);

const [incomeAmount, setIncomeAmmount] = useState(0);
const [incometext, setIncomeText] = useState("")

const submitHandle = () => {
  const newTransaction = {
    id: uuidv4(),
    incomeText,
    IncomeAmmout
  }
  setExpenses([...expenses, newTransaction])
  
}


const getTotalAmount = () => {
  let total = 0;
  
  if( expenses.length == 0) return 0;
  expenses.forEach(d => (total = total + d.incomeAmount));
  return total;
}

return (
  
  <div>
    <form onSubmit={handleSubmit}>
      <input name="incomeAmmount" type="number" onChange={e => setIncomeAmount(e.target.value)}/>
      <input name="incomeText" type="text" onChange={e => setIncomeText(e.target.value)}/>
    
    </form>
 <section>
        <ul>
         {!!expenses ? expenses.map(e => {
             <li key={e.id}>{`${e.incomeText}  : ${e.incomeAmount}`} </li>
         })};
        </ul>
         

  <h3>{`Total Ammout = ${getTotalAmount()}`}</h3>
    </section>
  </div>
  )
        }
    }
        


export default Sample;
