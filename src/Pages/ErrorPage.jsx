import Container from "../Components/Container"
import Heading from "../Components/Heading"
import Paragraph from "../Components/Paragraph"
import Flex from "../Components/Flex"
import Button from "../Components/Button"
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
    <Container>
    <Heading text="404" as="h2" className="text-[200px] font-dm font-bold text-red-600 ml-5"/>
    <Paragraph className="text-base font-dm text-secondaryColor ml-5 pr-[550px] py-10" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
    <div className='w-[643px]'>
        <Flex className='items-center text-center justify-center'>
        <input type="text" className="w-[600px] py-3 px-5 outline outline-red-800 placeholder:text-red-700 placeholder:text-sm placeholder:font-dm placeholder:font-normal rounded-lg" placeholder="Search Products"/>
            <Link to="#"><FcSearch  className='ml-[-30px]'/></Link>
        </Flex>
    </div>
    <Link to="http://localhost:5173/">
        <Button text="Back to Home" className="bg-green-700 text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border  hover:bg-red-700 hover:text-white mt-12 mb-32 ml-5 rounded-3xl"/>
    </Link>
    </Container>
    </>
  )
}

export default ErrorPage