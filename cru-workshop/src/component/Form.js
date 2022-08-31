import React from 'react'

const From = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const addList =() => {
      const listData={
        title:title,
        amount:amount
      }
      props.addItem(listData)
    }
  return (
    <>
    
    <h3>{title}</h3>
    <h3>{amount}</h3>
    <form onSubmit={addlist}>
    <div>
      <label>รายการ</label>
      <input type="text" name="list" onChange={(event) => setTitle(event.target.value)}/>
    </div>
    <div>
      <label>จำนวนเงิน</label>
      <input type="number" name="amount" onChange={(event) => setAmount(event.target.value)}/>
    </div>
    <div></div>
    <buttons></buttons>
    </form>
    </>
  )
}

export default from