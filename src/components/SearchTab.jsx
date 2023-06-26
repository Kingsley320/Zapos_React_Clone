import img1 from '../assets/zapposPBS-_CB1509642213_.svg';
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Button from './Button';

function SearchTab() {
    return (
        <>
            <div className='flex  h-32 mx-auto text-xl '>

                <div className='px-11 py-2 my-auto'>
                    <img src={img1} alt="zappos" srcSet="" className='h-16 inline align-middle text-white ' />
                </div>
                <div className=' flex my-auto border-3 border-gray-300 rounded  font-verdana'>
                    <IoSearchOutline className='icon w-12 my-auto text-gray-500'/>
                    <input type="text" placeholder='Search for shoes, clothes...' className='bg-transparent outline-none  mr-32 pr-48 text-2xl'/>
                    <Button title={'SEARCH'} background={'#003953'} color={'white'} border={'2px solid inherit'} height={'100%'} radius={'30px'} fontWeight="700" width="140px" padding="15px 0" className="p-4 "/>
                </div>
                <div className='flex space-x-3 my-auto ml-auto mr-14  rounded px-5 py-3 theblue btn_green font-bold'>
                    < IoCartOutline className='my-auto icon hover:scale-110'/>
                    <p>MY CART</p>
                </div>
            </div>

        </>
    )
}
export default SearchTab