
import Nav from '@/components/navbar/Navbar'
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Products from '@/components/products/Products';
import Deals from '@/components/giftdeals/Deals';
import Footer from '@/components/footer/Footer';
export default function Home() {
  return (
  < >
  <Nav />
  <div className='overflow-hidden'>
  <Header/>
  <Main />
  <Products />
  <Deals/>
  <Footer />
  </div>
  </>
  );
}
