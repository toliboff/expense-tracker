import React from 'react'
import Transaction from './Transaction'

const TransactionList = () => {
  const transactions=[
    { id: 1, title: 'Transaction 1', amount: 50 },
    { id: 2, title: 'Transaction 2', amount: 75 },
    { id: 3, title: 'Transaction 3', amount: 95 },
  ]
  return (
    <>
      <h3>History</h3>
      {transactions.map((transaction)=><Transaction transaction = {transaction}/>)}
      
    </>
  )
}

export default TransactionList
