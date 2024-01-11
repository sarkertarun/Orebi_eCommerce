import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import List from '../List'
import Paragraph from '../Paragraph'
import Logo from "../../assets/logo.png"
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className='bg-categoryBgColor py-[60px]'>
        <Container>
            <Flex>
                <div className='w-[945px] pl-2'>
                    <Flex className='justify-between'>
                        <div>
                            <Heading text="#M#ENU" className="text-blue-500 text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul>
                            <List to="#" text="Home" className="pb-[6px]"/>
                            <List to="#" text="Shop" className="pb-[6px]"/>
                            <List to="#" text="About" className="pb-[6px] text-red-700"/>
                            <List to="#" text="Contact" className="pb-[6px]"/>
                            <List to="#" text="Journal" className=""/>
                            </ul>
                        </div>
                        <div>
                            <Heading text="SH#O#P" className="text-blue-500 text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul>
                            <List to="#" text="Category 1" className="pb-[6px]" />
                            <List to="#" text="Category 2" className="pb-[6px]"/>
                            <List to="#" text="Category 3" className="pb-[6px] text-red-700"/>
                            <List to="#" text="Category 4" className="pb-[6px]"/>
                            <List to="#" text="Category 5" className=""/>
                            </ul>
                        </div>
                        <div>
                            <Heading text="H#E#LP" className="text-blue-500 text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul>
                            <List to="#" text="Privacy Policy" className="pb-[6px]" />
                            <List to="#" text="Terms & Conditions" className="pb-[6px]"/>
                            <List to="#" text="Special E-shop" className="pb-[6px] text-red-700"/>
                            <List to="#" text="Shipping" className=" pb-[6px]"/>
                            <List to="#" text="Secure Payments" className=""/>
                            </ul>
                        </div>
                        <div className='w-[264px]'>
                            <Paragraph text="(052) 611-5711 
                            company@domain.com" className="text-red-800 text-base font-dm font-bold pb-[17px]"/>
                            <Paragraph text="575 Crescent Ave. Quakertown, PA 18951" className="text-yellow-600 font-dm text-sm font-normal leading-[24px]"/>
                        </div>
                    </Flex>
                </div>
                <div>
                    <Image className='pl-[230px]' src={Logo}/>
                </div>
            </Flex>
            <Flex className="justify-between pt-[65px]">
                <div>
                 <Flex className="items-center gap-4 text-xl ml-2">
                    <Link to="#"><BsFacebook /></Link>
                    <Link to="#"><IoLogoLinkedin /></Link>
                    <Link to="#"><FaInstagramSquare /></Link>
                 </Flex>
                </div>
                <div>
                    <Paragraph text="2020 Orebi Minimal eCommerce Figma Template by Adveits" className="text-blue-600 font-dm text-sm font-normal leading-[24px] pr-2 "/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer