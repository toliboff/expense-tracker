import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <div key={transaction.id}>
      <h2>{transaction.title}</h2>
      <span>{transaction.amount}</span>
    </div>
  )
}

export default Transaction
