import { useEffect, useRef, useState} from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bars from '../Icons/Bars'
import List from '../List'
import Paragraph from '../Paragraph'
import { FaUser, FaCaretDown, FaShoppingCart, FaTimes } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import CartPopup from '../../assets/CartPopup.png'
import Price from '../Price'
import Image from '../Image'
import Button from '../Button'
import { Link } from 'react-router-dom'
const Category = () => {
  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);

  let handleClick = (dropRefCmn, btnRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);
  return (
    <section className="py-6 bg-categoryBgColor border-y border-borderColor">
    <Container>
     <Flex className="items-center">
      {/* Catagory Left Bar part start */}
      <div className="w-1/4">
        <Flex className="items-center gap-2 pl-8">
        <div onClick={() => {
                  handleClick(dropRef, btnRef);
                }}

           ref={btnRef}><Link><Bars className="cursor-pointer"/></Link>
           </div>
           <div ref={dropRef} className="bg-gray-600 w-44 text-sm font-dm absolute top-[150px] left-10 hidden z-50">  
             <ul>
                <List to="#" text="Accesories" className="border-b border-yellow-400 block py-2 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                <List to="#" text="Furniture" className="border-b border-yellow-400 block py-2 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                <List to="#" text="Electronics" className="border-b border-yellow-400 block py-2 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                <List to="#" text="Clothes" className="border-b border-yellow-400 block py-2 pl-5  hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                <List to="#" text="Bags" className="border-b border-yellow-400 block py-2 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                <List to="#" text="Home appliances" className="border-b border-yellow-400 block py-2 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
              </ul>
            </div>
          <a href="#"><Paragraph text="Shop by Category" className="text-green-500 text-sm"/></a>
        </Flex>
      </div>
      {/* Catagory Left Bar part end */}
      {/* Searchbox part start */}
      <Flex className="items-center text-center justify-end">
      <div className="w-1/2 ">
          <input type="text" className="w-[600px] py-3 px-5 outline-transparent placeholder:text-red-700 placeholder:text-sm placeholder:font-dm placeholder:font-normal rounded-lg" placeholder="Search Products"/>
      </div>
      <Link to="#"><FcSearch className="ml-[170px]"/></Link>
      </Flex>
      {/* Searchbox part end */}
       {/* Catagory right-side Icon part start */}
      <div className="w-1/4">
        <Flex className="items-center pl-[150px]">
                  
                  <div  onClick={() => {
                    handleClick(dropRefOne, btnRefOne);
                  }}
                  ref={btnRefOne}><Link to="#" className='flex' ><FaUser className="cursor-pointer" /><FaCaretDown className=" cursor-pointer" /></Link>
                  </div>
                  
                  <div ref={dropRefOne} className="bg-teal-200 rounded-md w-48 text-sm font-dm text-center absolute top-[150px] right-16 hidden z-50">
                               
                  <ul>
                  <List to="/login" text="Login" className="border rounded-md border-solid border-yellow-400 block px-[77px] py-3 hover:bg-orange-400 text-red-600 hover:text-blue-600  hover:font-bold cursor-pointer duration-500"/>
   
                  <List to="/signup" text="Sign up" className="border rounded-md border-solid border-yellow-400 block px-[69px] py-3 hover:bg-orange-400 text-red-600 hover:text-blue-600  hover:font-bold cursor-pointer duration-500"/>
                  </ul>
                  </div>
                  <div onClick={() => {
                    handleClick(dropRefTwo, btnRefTwo);
                  }}
                  ref={btnRefTwo}><FaShoppingCart className='ml-5 cursor-pointer'/></div>
                  <div ref={dropRefTwo} className="bg-teal-600 w-[250px] rounded-md border border-solid border-yellow-400 absolute top-36 right-[28px] hidden z-50">
                  <Link to="#"><Image  src={CartPopup} alt="CartPopup.png" className="w-[330px] rounded-md relative "/></Link>
                  <Link to="#"><FaTimes className='absolute top-6 right-5'/></Link>
                  <Flex className='gap-x-1 py-3.5 pl-5'>
                  <Paragraph text="Subtotal:" className='text-red-300 text-base'/>
                  <Price text="$44.00" className="text-yellow-300 text-base font-dm font-bold "/>
                  </Flex>
                  <Flex className=' justify-between pb-4'>
                  <Button text="View Cart" className="bg-orange-600 py-3 px-5 ml-3 border border-solid border-red-400 text-green-800 text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                  <Button text="Checkout" className="bg-orange-600  py-3 px-5 mr-3 border border-solid border-red-400 text-green-800 text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                  </Flex>
                </div>
        </Flex>
      </div>
      {/* Catagory right-side Icon part end */}
     </Flex>
    </Container>
    </section>
  )
}

export default Category