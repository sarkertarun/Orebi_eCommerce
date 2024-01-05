import Header from '../Components/Layouts/Header'
import Category from '../Components/Layouts/Category'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Footer from '../Components/Layouts/Footer'
import Paragraph from '../Components/Paragraph'


const MyAccount = () => {
  return (
    <>
    <Header />
    <Category />
    <Container>
        <Heading  text="My Account" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32 pb-36"/>
        <div>
          <Paragraph text="Dashboard" className="text-primaryColor text-base font-dm font-bold"/>
        <div>
          <Paragraph text="Hello admin (not admin? Log out) From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
          
           className="text-secondaryColor text-base font-dm font-normal"/>
          </div>
          
        </div>
        </Container>
        <Footer />
    </>
  )
}

export default MyAccount