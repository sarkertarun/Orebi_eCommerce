import Image from "./Image"
import Flex from "./Flex"
import Paragraph from "./Paragraph"
import Heading from "./Heading"
import Price from "./Price"
import Badge from "./Badge"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const Products = ({imageUrl,alt,title,price,tag,href}) => {
  return (
    <div className= "w-[370px]  group">
       <div className="relative overflow-hidden"> 
        <a href={href}><Image src={imageUrl} alt={alt} className="w-[300px]"/></a>
        <Badge text={tag} className='absolute top-[20px] left-[26px] py-2 px-7'/>
        <div className='w-[300px] bg-green-400  py-6 group-hover:bottom-0 duration-500 absolute left-0 -bottom-[160px]'>
            <div>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="add to Wish List" className=" text-red-500 text-base"/><a href="#"><FaHeart /></a>
              </Flex>
            </div>
            <div className='py-5'>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="Compare" className=" text-red-600 text-base"/> <a href="#"><FaArrowsRotate /></a>
              </Flex>
            </div>
            <div>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="Add to Cart" className=" text-red-800 text-base"/> <a href="#"><FaShoppingCart /></a>
              </Flex>
            </div>
        </div>
      </div> 
        <Flex className='pt-[15px]'>
          <Heading text={title} as='h5' className="text-green-300 text-[15px] pl-1 font-dm font-bold"/>
          <Price text={price} className="text-[15px] pl-[90px]" />
        </Flex>
        
    </div>
  )
}

export default Products