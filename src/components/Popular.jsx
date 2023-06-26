import img1 from '../assets/71Q7UD62m8L-_AC_SX380_.jpg';
import img2 from '../assets/51zUfH2NZDL-_AC_SX380_.jpg';
import img3 from '../assets/71phLcbyppL-_AC_SX380_.jpg';
import img4 from '../assets/61eAKrmeINL-_AC_SX380_.jpg';
import img5 from '../assets/71Rc6Sgv4cL-_AC_SX380_.jpg';
import img6 from '../assets/81XUlTnfheL-_AC_SX380_.jpg';

function Popular() {
    return(
        <>
            <div>
                <h1 className="text-black text-2xl ml-8 mb-7" >Shop Popular Categories</h1>
                <div className="flex ">
                    <div className='bg-gray-100 w-40 p-11'>
                        <img src={img1} alt="" srcset="" className='w-80'/>
                        <a href="#">Sneaker & Athletic Shoes</a>
                    </div>
                    <div className='bg-gray-100 h-40 w-40 p-11'>
                        <img src={img2} alt="" srcset="" className='w-24'/>
                        <a href="#">Lifestyle Sneakers</a>
                    </div>
                    <div className='bg-gray-100 h-40 w-40 p-11'>
                        <img src={img3} alt="" srcset="" className='w-24'/>
                        <a href="#">Heeted Sandals</a>
                    </div>
                    <div className='bg-gray-100 h-40 w-40 p-11'>
                        <img src={img4} alt="" srcset="" className='w-24'/>
                        <a href="#">Summer Bags</a>
                    </div>
                    <div className='bg-gray-100 h-40 w-40 p-11'>
                        <img src={img5} alt="" srcset="" className='w-24'/>
                        <a href="#">Birkenstock</a>
                    </div>
                    <div className='bg-gray-100 h-40 w-40 p-11'>
                        <img src={img6} alt="" srcset="" className='w-24'/>
                        <a href="#">Vacation-Ready Styles</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Popular