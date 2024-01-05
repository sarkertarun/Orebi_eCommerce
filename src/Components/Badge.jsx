import React from 'react'

const Badge = ({className,text}) => {
  return (
    <div className={`${className} py-2 px-7 bg-green-500 text-red-600 font-dm font-bold text-sm`}>{text}</div>
  )
}

export default Badge