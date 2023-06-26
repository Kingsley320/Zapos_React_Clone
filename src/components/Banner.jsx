import img from '../assets/COOP-SUMMER-EASY-SUMMER-STYLES-HERO-RETINA-2880x1400.gif';

function Banner() {
    return(
        <>
            <div className="relative h-[100vh] bg-no-repeat w-full max-w-full bg-right bg-contain object-contain mb-8"  style={{background: `url(${img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                <div className='bg-white w-80 absolute border-3 right-12 top-96 p-6 h-64'>
                    <h2 className='text-2xl font-semibold pb-4 '>Stylize your Summer in Dolce Vita & More</h2>
                    <p className='text-lg pb-6'>No running, only sunning in these elevated footwear favorites</p>
                    <a href="#" className='text-sm block font-bold border-b-1 border-black w-48 mb-2'>SHOP FASHION FOOTWEAR</a>
                    <a href="#" className='text-sm block font-bold border-b-1 border-black w-28'>SHOP THE LOOK</a>
                </div>
            </div>
        </>
    )
}
export default Banner