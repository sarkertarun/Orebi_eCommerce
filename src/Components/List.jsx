

const List = ({text,className,href}) => {
  return (
    <li><a className={`${className} text-green-600 text-sm font-dm font-bold inline-block capitalize leading-6`} href={href}>{text}</a></li>
  )
}

export default List