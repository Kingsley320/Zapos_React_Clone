
function ShippingNote() {
    return (
        <>
            <div className='flex  text-white bg-sky-600 text-lg hover:text-blue-200 h-[2.48rem]'>

                {/* <div className=' bg-opacity-60 px-12 py-2 border-r-2 border-black'> */}
                    {/* <p className="text-xl font-bold ">Customer Service <span>^</span></p>
                     */}

                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white text-md hover:text-blue-200  focus:ring-4 focus:outline-none  font-medium  px-6  text-center inline-flex items-center border-r-2" type="button">Customer Service <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Return An Item</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Get Help</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FAQS</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Give Us Feedback</a>
                            </li>
                        </ul>
                    </div>

                {/* </div> */}
                <div className='my-auto ml-auto mr-4 '>
                    <p className="text-lg">Every Zappos order comes FAST, FREE Shipping, plus a FREE 365-Day Return Policy! <b>More About Shipping & Returns</b></p>
                </div>
            </div>
        </>
    )
}
export default ShippingNote