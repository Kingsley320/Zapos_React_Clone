import img11 from '../assets/images/71UkXThsG9L-_AC_SR255-340__FMwebp_.jpg'
import img12 from '../assets/images/71eXzB0mQxL-_AC_SR255-340__FMwebp_.jpg'
import img13 from '../assets/images/81KEyTA20DL-_AC_SR255-340__FMwebp_.jpg'
import img14 from '../assets/images/6075812.jpg'
import img15 from '../assets/images/6075817.jpg'
import img16 from '../assets/images/6075819.webp'
import img17 from '../assets/images/6075818.webp'
import img18 from '../assets/images/6075823.webp'
import img28 from '../assets/images/71ZZBgvpNXL-_AC_SR255-340__FMwebp_.jpg'
import img29 from '../assets/images/61k4CryrRtL._AC_SR255,340__FMwebp_.webp'
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import img31 from '../assets/images/71mm3hVIXwL-_AC_SR255-340_.jpg'
import img32 from '../assets/images/71zLOzX7HcL-_AC_SR255-340__FMwebp_.jpg'
import img33 from '../assets/images/81mC2R6AGfL-_AC_SR255-340__FMwebp_.jpg'
import { BsFillCaretUpFill, BsHeart } from 'react-icons/bs'
import Cart from '../pages/cart'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

function ShopItems() {
    const sizes = ['2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14', '14.5', '15', '15.5', '16', '16.5', '17', '17.5', '18', '18.5', '19', '19.5', '20'];

    const widths = ['N', 'M', 'W', 'WW', '2A', 'B', 'C', 'D', 'E', 'EE', '3E', '4E', '5E', '6E', '9E'];

    return (
        <>
            <div className='my-4 '>
                <div className="flex justify-between mx-10">
                    <h1 className="text-3xl font-bold">Men's Size 2 Sneakers & Athletic Shoes</h1>
                    <div className=" flex gap-2 text-right">
                        <small className="my-auto">Sort By</small>
                        <select className="my-2 rounded-md w-44 py-2 pl-3 border-1 border-gray-300">
                            <option value="">RELEVANCE</option>
                            <option value="new arrivals">NEW ARRIVALS</option>
                            <option value="customer rating">Customer Ratings</option>
                            <option value="best sellers">Best Sellers</option>
                            <option value="Brand Name"></option>
                        </select>

                    </div>
                </div>
                <div className="ml-10">
                    <p className="text-black">12345 items found</p>
                    <small className="text-sky-800">Find what you're looking for?</small>
                </div>

                <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1 mx-6">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Men's Size</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-700 px-2 text-center mb-5">
                                        <div className=' border-t-1 mt-2 pl-2 h-40 overflow-scroll overflow-x-hidden scroll'>
                                            <div className="grid grid-cols-4 gap-2 my-2">
                                                {sizes.map(size => {
                                                    return(
                                                <div className=' border-1 rounded-sm flex items-center h-8 w-8 hover:border-black hover:border-1 hover:text-sky-600'>
                                                    <p className=" mx-auto ">{size}</p>
                                                </div>
                                                );
                                                })}


                                            </div>
                                        </div>

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Men's Width</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-700 px-2 text-center mb-5">
                                        <div className=' border-t-1 mt-2 pl-2 h-40 overflow-scroll overflow-x-hidden'>
                                            <div className="grid grid-cols-4 gap-2 my-2">
                                                {widths.map(width => {
                                                    return(
                                                <div className=' border-1 rounded-sm flex items-center h-8 w-8 hover:border-black hover:border-1 hover:text-sky-600'>
                                                    <p className=" mx-auto ">{width}</p>
                                                </div>
                                                );
                                                })}


                                            </div>
                                        </div>

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Subcategory</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Brand</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Price</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Color</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Features</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Shoe Weight</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Closures</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Accents</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Accents</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className="col-span-4 mx-4">
                        <div className="text-xl text-gray-900">Single Shoes</div>
                        <div>tabs</div>
                        <div className="grid grid-cols-4 gap-4 gap-y-6">

                            <Link to={'/cart'} element={<Cart />}>
                                <div className="  text-md ">
                                    <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                        <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg flex gap-2 group">Best Seller</span>
                                        <img src={img30} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                    </div>
                                    <div className='mt-4 group'>
                                        <div className="flex justify-start gap-2">
                                            <img src={img14} alt="" className="rounded-full border-black border-1" />
                                            <img src={img15} alt="" className="rounded-full border-black border-1" />
                                            <img src={img16} alt="" className="rounded-full border-black border-1" />
                                            <img src={img17} alt="" className="rounded-full border-black border-1" />
                                            <img src={img18} alt="" className="rounded-full border-black border-1" />
                                        </div>
                                        <div>
                                            <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                            <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                            <p className="text-green-800">$124.95</p>
                                            <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img12} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img13} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>

                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img12} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>

                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img13} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative text-md group">
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <div className='bg-gray-100 h-68 p-3 flex items-center'>
                                    <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="  text-md ">
                                <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <img src={img28} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1 hover:animate-spin" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1 hover:animate-spin" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>

                            <div className="  text-md ">
                                <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <img src={img29} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                                    </div>
                                </div>
                            </div>

                            <div className="  text-md ">
                                <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <img src={img31} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-red-800 flex gap-3">$32.95 <small className='text-gray-500 my-auto'>MSRP: $49.95</small></p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="  text-md ">
                                <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <img src={img32} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="  text-md ">
                                <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <img src={img33} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                                </div>
                                <div className='mt-4 group'>
                                    <div className="flex justify-start gap-2">
                                        <img src={img14} alt="" className="rounded-full border-black border-1" />
                                        <img src={img15} alt="" className="rounded-full border-black border-1" />
                                        <img src={img16} alt="" className="rounded-full border-black border-1" />
                                        <img src={img17} alt="" className="rounded-full border-black border-1" />
                                        <img src={img18} alt="" className="rounded-full border-black border-1" />
                                    </div>
                                    <div>
                                        <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                        <p className="text-green-800">$124.95</p>
                                        <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopItems