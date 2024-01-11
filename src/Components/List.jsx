import { Link } from "react-router-dom"


const List = ({text,className,to}) => {
  return (
    
    <li><Link className={`${className} text-green-600 text-sm font-dm font-bold inline-block capitalize leading-6`} to={to}>{text}</Link></li>
  )
}

export default List