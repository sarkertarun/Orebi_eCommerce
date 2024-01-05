import Container from "../Container"
import Heading from "../Heading"
import Product from "../Products"
import Cap from '../../assets/cap.png'
import Table from '../../assets/table.png'
import Headphone from '../../assets/headphone.png'
import Sunglass from '../../assets/sunglass.png'
import Clock from '../../assets/clock.png'
import Watch from '../../assets/watch.png'
import Basket from '../../assets/basket.png'
import Toy from '../../assets/toy.png'
import Bottol from '../../assets/bottol.png'
import Bagone from '../../assets/bagone.png'
import Pot from '../../assets/pot.png'
import Bagtwo from '../../assets/bagtwo.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Specialoffer = () => {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <section>
        <Container>
            <Heading text="Spacial #Offers#" className="text-[39px] text-green-600 font-dm font-bold py-[48px]" as="h2"/>
            <Slider {...settings}>
          <div>
          <Product 
                imageUrl={Cap}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Table}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Headphone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Sunglass}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Clock}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Watch}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Basket}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Toy}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Bottol}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Bagone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Pot}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
          <div>
          <Product 
                imageUrl={Bagtwo}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
            />
          </div>
        </Slider>
        </Container>
    </section>
  )
}

export default Specialoffer