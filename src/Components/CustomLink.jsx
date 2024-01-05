import { Link } from 'react-router-dom'

const CustomLink = ({to,text,className}) => {
  return (
    <li><Link to={to} className={`${className} text-green-600 text-sm font-dm font-bold inline-block capitalize leading-6`}>{text}</Link></li>
  )
}

export default CustomLink