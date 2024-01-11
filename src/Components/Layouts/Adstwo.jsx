import Image from "../Image"
import ADstwo from '../../assets/adstwo.png'
import { Link } from "react-router-dom"

const Adstwo = () => {
  return (
   <section>
    <Link to="#"><Image src={ADstwo} className="w-[1250px] pl-1 py-8 bg-cover bg-no-repeat bg-center"/></Link>
   </section>
  )
}

export default Adstwo