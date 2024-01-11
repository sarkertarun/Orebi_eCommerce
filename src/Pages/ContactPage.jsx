import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'

const ContactPage = () => {
  return (
    <>

    <Container>
        <Heading  text="Contacts" as="h3" className="text-5xl font-bold font-dm text-teal-600 pl-4 pt-32"/>
        <Heading text="#Fill up# a Form" as="h4" className="text-4xl text-green-500 font-bold font-dm pl-4 pt-32 pb-10"/>
    
    <div>
           <Label labelName="Name" className="pb-2.5 pl-4"/>
           <Input inType="text" inPh="Your Name here" className="pb-4 ml-4"/>
        </div>
        <div>
           <Label labelName="Email" className=" pt-6 pb-2.5 pl-4"/>
           <Input inType="text" inPh="Your email here" className=" pb-4 ml-4"/>
        </div>
        <div>
           <Label labelName="Message" className="pt-6 pb-2.5 pl-4 "/>
           <textarea type="text" placeholder="Your message here"  className="w-1/2 font-dm text-base ml-4 pb-20 focus:outline-none border-b-2 border-yellow-500"/>
        </div>
            <Button text="Post" className="bg-green-700 text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border  hover:bg-red-700 hover:text-white mt-12 mb-32 ml-5 rounded-3xl"/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116754.20361548685!2d90.1790059368856!3d23.869438711678747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d6df9569%3A0x277b3819d4da3e91!2sSavar!5e0!3m2!1sen!2sbd!4v1703510945244!5m2!1sen!2sbd" width="100%" height="572"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mb-36 mx-4 w-[1230px]'></iframe>
        </Container>

    </>
  )
}

export default ContactPage