import Image from '../Image'
import BannerImg from '../../assets/bannerimg.jpg'
import { RiNumber2 } from "react-icons/ri";
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph';
import { MdLocalShipping } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <section>
      <Link to="#"><Image src={BannerImg} className="bg-cover bg-no-repeat bg-center"/></Link>
      <div className="py-6 bg-categoryBgColor border-y border-red-600">
      <Container>
        <Flex>
          <Flex className="py-4 items-end">
           <RiNumber2 className="ml-[120px] text-[26px]"/>
           <Paragraph text="Two years warranty" className="text-green-400 text-base pl-1"/>
          </Flex>
          <Flex className="py-4 items-end">
           <MdLocalShipping className="ml-[300px] text-[26px]"/>
           <Paragraph text="Free Shipping" className="text-red-400 text-base pl-2"/>
          </Flex>
          <Flex className="py-4 items-end">
           <FaArrowRotateLeft className="ml-[300px] text-[26px]"/>
           <Paragraph text="Return policy in 30 days" className="text-green-400 text-base pl-2"/>
          </Flex>
        </Flex>
      </Container>
      </div>
    </section>
  )
}

export default Banner