import Container from "../Container"
import Heading from "../Heading"
import Flex from "../Flex"
import Clock from '../../assets/clock.png'
import Watch from '../../assets/watch.png'
import Basket from '../../assets/basket.png'
import Toy from '../../assets/toy.png'
import Products from "../Products"

const Newarrivals = () => {
  return (
    <section>
        <Container>
            <Heading text="New #Arrivals#" className="text-[39px] text-green-600 font-dm font-bold py-[48px]" as="h2"/>

           <Flex className="justify-evenly">
           <Products 
                imageUrl={Clock}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Products 
                imageUrl={Watch}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Products 
                imageUrl={Basket}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
             <Products 
                imageUrl={Toy}
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

export default Newarrivals