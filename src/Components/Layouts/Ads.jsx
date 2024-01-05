import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import ADONE from '../../assets/adone.png'
import ADTWO from '../../assets/adtwo.png'
import ADTHREE from '../../assets/adthree.png'



const Ads = () => {
  return (
    <section className="py-8">
        <Container>
         <Flex>
            <div className="pl-2 pr-8">
                <a href="#"><Image className="w-[600px] h-[610px]" src={ADONE}/></a>
            </div>
            <div>
                <a href="#"><Image className="w-[610px] pb-8" src={ADTWO}/></a>
                <a href="#"><Image className="w-[610px]"  src={ADTHREE}/></a>
            </div>
         </Flex>
        </Container>
    </section>
  )
}

export default Ads