
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { useEffect, useState } from 'react'
import axios from 'axios'


const LoginPage = () => {
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

    <Container>
        <Heading  text="Login" as="h3" className="text-5xl font-bold font-dm text-red-700 ml-5 pt-32"/>
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-green-700 text-base font-dm font-normal ml-5 pt-[100px] pr-[630px] border-b border-yellow-300 pb-20"/>
        <Heading text="Returning Customer" as="h4" className="text-4xl font-bold font-dm text-teal-400 ml-5 pt-[57px] pb-10"/>
    
        <Flex>
        <div className='w-[508px]'>
           <Label labelName="Email address" className="pb-4 ml-5"/>
           <Input inType="email" inPh="company@domain.com" className="pb-2 ml-5 text-red-400"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Password" className="pb-4 ml-5"/>
           <Input inType="password" inPh="Password" className="pb-2 ml-5 text-red-400"/>
        </div>
        </Flex>
        <Button text="Log in" className=" bg-green-600 text-center ml-5  py-4 px-20 text-primaryColortext-sm font-dm font-bold border rounded-lg  hover:bg-red-600 hover:text-yellow-400 mt-12 mb-32"/>

        <Heading text="New Customer" as="h4" className="text-4xl ml-5 font-bold font-dm text-orange-600 pt-[57px]"/>
       
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-yellow-700 text-base font-dm font-normal ml-5 pt-10 pr-[630px] pb-16"/>



         
         <Button text="Continue" className=" bg-green-600 text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border  hover:bg-red-600 hover:text-yellow-400 mt-12 mb-32 ml-5 rounded-lg"/>
       
    </Container>
        

    </>
  )
}

export default LoginPage