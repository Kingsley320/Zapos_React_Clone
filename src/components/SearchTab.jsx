import img1 from '../assets/zapposPBS-_CB1509642213_.svg';
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Button from './Button';
import { Link } from 'react-router-dom';
import Cart from '../pages/cart';

function SearchTab() {
    return (
        <>
            <div className='flex  h-24 mx-auto text-md '>

                <div className='px-6 py-2 my-auto mr-0.5'>
                    <Link to={'/'}><img src={img1} alt="zappos" srcSet="" className='h-12 inline align-middle text-white'/></Link>
                </div>
                <div className=' flex my-auto border-2 border-gray-300 rounded-r-md  font-verdana mx-3.5 overflow-hidden'>
                    <IoSearchOutline className='icon w-5 mx-3 my-auto text-gray-500'/>
                    <input type="text" placeholder='Search for shoes, clothes...' className='bg-transparent outline-none  mr-12 pr-48 text-lg'/>
                    <Button title={'SEARCH'} background={'#003953'} color={'white'} height={'100%'} fontWeight="700" width="110px" padding="9px 0"  className=" rounded-r-lg"/>
                </div>
                <Link to={'/cart'} element={<Cart />} className='flex space-x-3 my-auto ml-auto mr-7  rounded px-3 py-2.5 btn_green font-semibold text-sm group'>
                    < IoCartOutline className='my-auto group-hover:scale-125 text-xl'/>
                    <p>MY CART</p>
                </Link>
            </div>

        </>
    )
}
export default SearchTab