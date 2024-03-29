import React from 'react'

const Price = ({text,className}) => {
  return (
    <div className={`${className} text-red-500 text-base font-dm font-normal`}>{text}</div>
  )
}

export default Price