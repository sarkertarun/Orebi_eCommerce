import Container from "../Container"
import Heading from "../Heading"
import Flex from "../Flex"
import Product from "../Products"
import Bottol from '../../assets/bottol.png'
import Bagone from '../../assets/bagone.png'
import Pot from '../../assets/pot.png'
import Bagtwo from '../../assets/bagtwo.png'

const Bestseller = () => {
  return (
    <section>
        <Container>
            <Heading text="Our #Bestsellers#" className="text-[39px] text-green-600 font-dm font-bold py-[48px]" as="h2"/>

           <Flex className="justify-evenly">
           <Product 
                imageUrl={Bottol}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Product 
                imageUrl={Bagone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Product 
                imageUrl={Pot}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Product 
                imageUrl={Bagtwo}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
           </Flex>
        </Container>
    </section>
  )
}

export default Bestseller