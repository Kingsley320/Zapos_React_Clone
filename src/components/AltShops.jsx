import img1 from '../assets/black-logo.svg';
import img2 from '../assets/vrsnl-logo-_CB1564076501_.svg'

function AltShops() {
    return (
        <>
            <div className='flex h-15'>

                <div className='bg-sky-600 hover:bg-sky-500 px-11 py-2 border-t-4 border-blue-900'>
                    <img src={img1} alt="zappos" srcSet="" className='h-6 inline align-middle text-white '/>
                </div>
                <div  className='px-10 py-2 border-r-2'>
                <img src={img2} alt="vrsnl" srcSet="" className='h-3 inline align-middle'/>
                </div>
            </div>
        </>
    )
}
export default AltShops