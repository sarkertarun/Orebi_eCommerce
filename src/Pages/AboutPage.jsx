import Header from '../Components/Layouts/Header'
import Category from '../Components/Layouts/Category'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Footer from '../Components/Layouts/Footer'
import Button from '../Components/Button'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Clock from '../assets/clock.png'
import BasketTwo from '../assets/basketTwo.png'
import Paragraph from '../Components/Paragraph'

const AboutPage = () => {
  return (
    <>
    <Header />
    <Category />
    <Container>
        <Heading  text="About" as="h3" className="text-5xl font-bold font-dm text-green-600 pl-4 py-20"/>
        <Flex className='justify-evenly'>
            <div className="relative">
                <Image src={Clock} alt="clock.png" className="w-[600px]" />
                <Button text="Our Brands" className="absolute left-[215px] rounded-full bottom-[38px] bg-green-500 text-center py-5 px-10 text-red-700
                 text-base font-dm font-bold"/>
            </div>
            <div className="relative">
                <Image src={BasketTwo} alt="basketTwo.png" className="w-[600px]"/>
                <Button text="Our Stores" className="absolute left-[225px] rounded-full bottom-[38px] bg-green-500 text-center py-5 px-10 text-red-700
                 text-base font-dm font-bold"/>
            </div>
        </Flex>
        <Heading as="h4" text="Orebi is one of the world’s leading #ecommerce brands# and is #internationally recognized# for celebrating the essence of classic #Worldwide# cool looking style." className="text-green-700 text-[39px] font-dm font-normal leading-[52px] pl-4 py-[112px]  tracking-wider"/>

        <Flex className='pb-[130px] justify-evenly'>
            <div className='w-[390px]'>
                <Heading as="h4" text="Our Vision" className="text-red-700 text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className="text-yellow-600 text-base leading-[30px] pt-3"/>
            </div>
            <div className='w-[388px]'>
                <Heading as="h4" text="Our Story" className="text-red-700 text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." className="text-yellow-600 text-base leading-[30px] pt-3"/>
            </div>
            <div className='w-[390px]'>
                <Heading as="h4" text="Our Brands" className="text-red-700 text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." className="text-yellow-600 text-base leading-[30px] pt-3"/>
            </div>
        </Flex>
     
        </Container>
        <Footer />
    </>
  )
}

export default AboutPage