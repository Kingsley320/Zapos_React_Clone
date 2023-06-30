import { BsCaretRightFill, } from 'react-icons/bs'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ShopItems from '../components/ShopItems';
import RecentlyViewed from '../components/RecentlyViewed';

function Shop() {
    return (
        <>
            <Navigation />
            <ShopItems />
            <RecentlyViewed />
            <Footer />
        </>
    )
}
export default Shop