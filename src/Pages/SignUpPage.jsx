import Header from '../Components/Layouts/Header'
import Category from '../Components/Layouts/Category'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Footer from '../Components/Layouts/Footer'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { useEffect, useState } from 'react'
import axios from 'axios'




const SignUpPage = () => {
   let [all, setAll] = useState([])
 useEffect(()=>{
   async function all(){
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setAll(data.data)
      }
      all()
    },[]);


    
  return (
    <>
    <Header />
    <Category />
    <Container>
        <Heading  text="Sign up" as="h3" className="text-5xl font-bold font-dm text-orange-500 ml-5 pt-32"/>
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-green-600 text-base font-dm font-normal pt-[100px] pr-[630px] border-b border-yellow-600 ml-5 pb-16"/>
        <Heading text="Your Personal Details" as="h4" className="text-4xl font-bold font-dm text-red-600 ml-5 pt-[57px] pb-10"/>
    
        <Flex>
        <div className='w-[508px]'>
           <Label labelName="First Name" className="pb-2.5 ml-5"/>
           <Input inType="text" inPh="First Name" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Last Name" className="  pb-2.5 ml-5"/>
           <Input inType="text" inPh="Last Name" className=" pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>
        <Flex className='border-b border-borderBotColor pb-16 pt-6'>
        <div className='w-[508px]'>
           <Label labelName="Email address" className="pb-2.5 ml-5"/>
           <Input inType="email" inPh="company@domain.com" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Telephone" className=" pb-2.5 ml-5"/>
           <Input inType="number" inPh="Your phone number" className="pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>

        <Heading text="New Customer" as="h4" className="text-4xl font-bold font-dm text-orange-500 pt-[57px] pb-10 ml-5"/>
        <Flex>
        <div className='w-[508px]'>
           <Label labelName="Address 1" className="pb-2.5 ml-5"/>
           <Input inType="text" inPh="4279 Zboncak Port Suite 6212" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Address 2" className="  pb-2.5 ml-5"/>
           <Input inType="text" inPh="—" className=" pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>
        <Flex className='pt-6'>
        <div className='w-[508px]'>
           <Label labelName="City" className="pb-2.5 ml-5"/>
           <Input inType="text" inPh="Your city" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Post Code" className="pb-2.5 ml-5"/>
           <Input inType="text" inPh="05228" className=" pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>
        <Flex className='border-b border-borderBotColor pb-16 pt-6'>
        <div className='w-[508px]'>
           <Label labelName="Country" className=" ml-5"/>
           <select className='border-b border-borderBotColor ml-5 py-5 outline-none pr-[80px]'>
               {all.map(item=><option>{item.name.common}</option>)}
               
            </select>
        </div>
        <div className='w-[508px]'>
        <Label labelName="Region/State" className=" ml-5"/>
           <select className='border-b border-borderBotColor ml-5 py-5 outline-none pr-[320px]'>
               {all.map(item=><option>{item.region}</option>)}
               
            </select>
        </div>
        </Flex>




        <Heading text="Your Password" as="h4" className="text-4xl font-bold font-dm text-teal-500 pt-[57px] ml-5 pb-10"/>
        <Flex className='border-b border-borderBotColor pb-16 pt-6 mb-10'>
        <div className='w-[508px]'>
           <Label labelName="Password" className="pb-2.5 ml-5"/>
           <Input inType="password" inPh="Password" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Repeat Password" className="pb-2.5 ml-5"/>
           <Input inType="password" inPh="Repeat password" className=" pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>

        <div >
         <Flex className=' '>
         <Input inType="checkbox" className="mr-3 ml-5" inValue='yes' />
     

         <Paragraph text='I have read and agree to the Privacy Policy' className='text-yellow-500 text-sm font-dm font-normal '/>
         </Flex>

         <Flex className='items-center pt-5  gap-x-3'>
         
         <Paragraph text='Subscribe Newsletter' className='text-red-500 text-sm font-dm font-normal pr-4 ml-5'/>
         <Input inType="checkbox" className="mr-3 ml-5"/>
         <Paragraph text='Yes' className='text-yellow-500 text-sm font-dm font-normal pr-6'/>
         <Input inType="checkbox" className="mr-3"/>
         <Paragraph text='No' className='text-yellow-500 text-sm font-dm font-normal '/>
         </Flex>
         <Button text="Log in" className="  bg-green-600 text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border  hover:bg-red-600 hover:text-yellow-400 mt-12 mb-32 ml-5 rounded-lg"/>
        </div>
        
    </Container>
    
        <Footer />
    </>
  )
}

export default SignUpPage