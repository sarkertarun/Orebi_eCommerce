import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import List from '../List'
import CustomLink from '../CustomLink';


const Header = () => {
  return (
    <nav className="py-8">
      <Container>
        <Flex>
         <div className="w-[10%] px-8">
          <Image src={Logo} alt=""/>
         </div> 
         <div className="w-[90%] pl-[450px]">
            <ul className="flex gap-10">
              <CustomLink to="/" text="Home" className="hover:text-red-500 hover:font-bold duration-500"/>
              <CustomLink to="/shop" text="Shop" className="hover:text-red-500 hover:font-bold duration-500"/>
              <CustomLink to="/about" text="About" className="hover:text-red-500 hover:font-bold duration-500"/>
              <CustomLink to="/contacts" text="Contacts" className="hover:text-red-500 hover:font-bold duration-500"/>
              <CustomLink to="/" text="Journal" className="hover:text-red-500 hover:font-bold duration-500"/>
            </ul>
         </div>  

        </Flex>
      </Container>

    </nav>
  )
}

export default Header