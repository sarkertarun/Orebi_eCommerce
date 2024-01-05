import React from 'react'
import Heading from '../Components/Heading'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Paragraph from '../Components/Paragraph'
import List from '../Components/List'
import { FaCaretDown } from "react-icons/fa";
import { useRef } from 'react'
import { FaCircle } from "react-icons/fa";
import Products from '../Components/Products'

import Bottol from "../assets/bottol.png"
import Bagone from "../assets/bagone.png"
import Pot from "../assets/pot.png"
import Bagtwo from "../assets/bagtwo.png"
import Sunglass from "../assets/sunglass.png"

import Table from "../assets/table.png"
import Headphone from "../assets/headphone.png"
import Cap from "../assets/cap.png"
import Clock from "../assets/clock.png"
import Watch from "../assets/watch.png"
import Basket from "../assets/basket.png"
import Toy from "../assets/toy.png"
import Header from "../Components/Layouts/Header"
import Category from "../Components/Layouts/Category"
import Footer from "../Components/Layouts/Footer"

const ShopPage = () => {
  let categoryRef = useRef(0);

  let handleCategory = () => {

    if (categoryRef.current.style.display == "block") {
      categoryRef.current.style.display = "none"
    }
    else{
      categoryRef.current.style.display = "block"
    }
  };

  let colorRef = useRef(0);

  let handleColor = () => {

    if (colorRef.current.style.display == "block") {
      colorRef.current.style.display = "none"
    }
    else{
      colorRef.current.style.display = "block"
    }
  };
  let brandRef = useRef(0);

  let handleBrand = () => {

    if (brandRef.current.style.display == "block") {
      brandRef.current.style.display = "none"
    }
    else{
      brandRef.current.style.display = "block"
    }
  };
  let priceRef = useRef(0);

  let handlePrice = () => {

    if (priceRef.current.style.display == "block") {
      priceRef.current.style.display = "none"
    }
    else{
      priceRef.current.style.display = "block"
    }
  };
  return (
    <>
    <Header />
    <Category />
    <Container>
    <Heading  text="Products" as="h3" className="text-5xl font-bold font-dm text-red-800 ml-5 pt-32"/>
      <Flex className="pt-[137px] pb-[300px]">
       <div>
       <div className='w-[372px] relative'>
          <Flex className="items-center justify-between">
          <Paragraph text="Shop by Category" className="text-orange-600 ml-5 text-lg font-dm font-bold"/>
          <FaCaretDown onClick={handleCategory}/>
          </Flex>
          <div ref={categoryRef} className='absolute  w-full ml-5 top-8 left-0 hidden pl-2'>
            <ul>
              <List text="Category 1" className="text-red-800 text-base font-dm font-normal pt-4 pb-2 inline-block"/>
              <List text="Category 2" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Category 3" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Category 4" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Category 5" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
            </ul>
          </div>
        </div>
        <div className='w-[372px] relative pt-[250px]'>
          <Flex className="items-center justify-between">
          <Paragraph text="Shop by Color" className="text-blue-600 ml-5 text-lg font-dm font-bold"/>
          <FaCaretDown onClick={handleColor}/>
          </Flex>
          <div ref={colorRef} className='absolute  w-full ml-5 top-[290px] left-0 hidden pl-2'>
            
             <Flex className=' items-center'>
             <FaCircle className='text-sm pt-1 '/>
              <Paragraph text="Color 1" className="text-secondaryColor text-base font-dm font-normal pt-4 pb-2 pl-2 inline-block"/>
             </Flex>
             <Flex className=' items-center'>
             <FaCircle className='text-sm pt-1 text-red-400'/>
              <Paragraph text="Color 2" className="text-secondaryColor text-base font-dm font-normal pt-4 pb-2 pl-2 inline-block"/>
             </Flex>
             <Flex className=' items-center'>
             <FaCircle className='text-sm pt-1 text-green-400'/>
              <Paragraph text="Color 3" className="text-secondaryColor text-base font-dm font-normal pt-4 pb-2 pl-2 inline-block"/>
             </Flex>
             <Flex className=' items-center'>
             <FaCircle className='text-sm pt-1 text-purple-600'/>
              <Paragraph text="Color 4" className="text-secondaryColor text-base font-dm font-normal pt-4 pb-2 pl-2 inline-block"/>
             </Flex>
             <Flex className=' items-center'>
             <FaCircle className='text-sm pt-1 text-yellow-600'/>
              <Paragraph text="Color 5" className="text-secondaryColor text-base font-dm font-normal pt-4 pb-2 pl-2 inline-block"/>
             </Flex>
           
          </div>
        </div>
        <div className='w-[372px] relative pt-[280px]'>
          <Flex className="items-center justify-between">
          <Paragraph text="Shop by Brand" className="text-blue-600 ml-5 text-lg font-dm font-bold"/>
          <FaCaretDown onClick={handleBrand}/>
          </Flex>
          <div ref={brandRef} className='absolute  w-full top-[320px] ml-5 left-0 hidden pl-2'>
            <ul>
              <List text="Brand 1" className="text-red-800 text-base font-dm font-normal pt-4 pb-2 inline-block"/>
              <List text="Brand 2" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Brand 3" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Brand 4" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="Brand 5" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
            </ul>
          </div>
        </div>
        <div className='w-[372px] relative pt-[250px]'>
          <Flex className="items-center justify-between">
          <Paragraph text="Shop by Price" className="text-blue-600 ml-5 text-lg font-dm font-bold"/>
          <FaCaretDown onClick={handlePrice}/>
          </Flex>
          <div ref={priceRef} className='absolute  w-full top-[290px] left-0 hidden pl-2 ml-5'>
            <ul>
              <List text="$0.00 - $9.99" className="text-red-800 text-base font-dm font-normal pt-4 pb-2 inline-block"/>
              <List text="$10.00 - $19.99" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="$20.00 - $29.99" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="$30.00 - $39.99" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
              <List text="$40.00 - $69.99" className="text-red-800 text-base font-dm font-normal py-2 inline-block"/>
            </ul>
          </div>
        </div>
       </div>
        <div className='w-[1228px]'>
          <Flex className="justify-evenly ml-5 pl-4">
            
            
            <Products 
                  imageUrl={Cap}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
            />
          
          
          
              
              <Products 
                imageUrl={Table}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
             
         
          
            
              <Products 
                imageUrl={Headphone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
            
         
         
          </Flex>
          <Flex className="justify-evenly ml-5 pl-4 pt-12">
            
            
            <Products 
                  imageUrl={Bottol}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
            />
          
          
          
              
              <Products 
                imageUrl={Bagone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
             
         
          
            
              <Products 
                imageUrl={Pot}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
            
         
         
          </Flex>
          <Flex className="justify-evenly ml-5 pl-4 pt-12">
            
            
            <Products 
                  imageUrl={Bagtwo}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
            />
          
          
          
              
              <Products 
                imageUrl={Sunglass}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
             
         
          
            
              <Products 
                imageUrl={Clock}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
            
         
         
          </Flex>
          <Flex className="justify-between pl-4 pt-12">
            
            
            <Products 
                  imageUrl={Watch}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
            />
          
          
          
              
              <Products 
                imageUrl={Basket}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
             
         
          
            
              <Products 
                imageUrl={Toy}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className=""
              />
            
         
         
          </Flex>
        </div>
      </Flex>
    </Container>
    <Footer />
    </>
  )
}

export default ShopPage