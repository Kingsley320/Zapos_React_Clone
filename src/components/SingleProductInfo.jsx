import { Link } from "react-router-dom"
import img1 from '../assets/images/61Z8rLU86QL-_AC_SR768-1024__FMwebp_.jpg'
import img2 from '../assets/images/single-product-img2.jpg'
import img3 from '../assets/images/single-product-img3.jpg'
import img4 from '../assets/images/single-product-img4.jpg'
import img5 from '../assets/images/single-product-img5.jpg'
import img6 from '../assets/images/single-product-img6.jpg'
import img7 from '../assets/images/ugg_header_092116.jpg'
import img8 from '../assets/images/amazon-prime.2821774c351a0e9079f230ad4b312a71.svg'
import { BsFillCaretUpFill, BsHeart, BsBoxArrowUp } from "react-icons/bs";
import { Disclosure } from '@headlessui/react'

function SingleProductInfo() {
    return (
        <>
            <div>

                <div className=" my-12 flex justify-center">
                    <div className="flex gap-5 ml-7">
                        <div className=" ">
                            <div className="  text-md ">
                                <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg">Best Seller</span>
                                    <img src={img1} alt="product info" className=" mix-blend-multiply" />
                                </div>
                                <div className="flex gap-2 mt-2">

                                    <div className=' bg-gray-100  p-5  flex items-center h-[80vh] relative'>
                                        <img src={img2} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                    <div className=' bg-gray-100  p-5 flex items-center h-[80vh] relative'>
                                        <img src={img3} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2">

                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img4} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img5} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2 w-[50%]">
                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img6} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div >

                            <div className="sticky top-0 mr-7 ">
                                <div className=" w-[430px]   rounded-md  mb-4">
                                    <div className="mx-4 my-6 relative">

                                        <div className="flex  gap-3">
                                            <h2 className=" my-3 text-3xl font-bold">UGG </h2>
                                            <BsBoxArrowUp className="text-md my-auto font-bold" />
                                        </div>

                                        <div className="flex justify-between text-xl font-semibold text-gray-900"><p>Couquette</p></div>

                                        <div className="flex justify-between text-gray-600"><p>SKU 7138704</p></div>

                                        <div className="flex justify-between text-gray-700"><h1>$119.95</h1></div>

                                        <div className="flex justify-between text-gray-700">
                                            <p>or 4 interest-free payments of $29.99 with </p>
                                        </div>

                                        <div className="flex justify-between text-xl font-semibold mt-4 border-t-1 pt-4"><p>Subtotal (1 item)</p> <p>$74.99</p></div>


                                    </div>
                                </div>
                                <button className='sticky bottom-0  w-full flex my-auto  rounded py-2.5 mb-2 bg-green font-semibold text-sm border-1  disabled:bg-gray-100/75 hover:brightness-110 '>
                                    <p className='capitalize  text-blue-custom mx-auto'>Add to Cart</p>
                                </button>
                                <div className="my-7 text-center">
                                    <div>
                                        <small className=""><b>Free</b> upgraded shipping & returns with</small>
                                    </div>
                                    <img src={img8} alt="amazon prime" className="w-28 block mx-auto" />
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200 mb-4">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 ">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <h3 className="capitalize text-lg">Size Chart</h3>
                                                        <BsFillCaretUpFill
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-3 text-gray-500 `}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        <div className="flex">
                                                            <ol className="list-disc text-lg pl-5">
                                                                <li>UGG Women's Size Chart
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

                                    </div>
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 text-black">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <div className="w-full my-auto flex justify-between">
                                                            <h3 className="text-lg capitalize">Product Information</h3>
                                                            <BsFillCaretUpFill
                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                    } h-5 w-3 text-gray-500 `}
                                                            />
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm h-96 text-clip overflow-hidden ">
                                                        <div>
                                                            <img src={img7} alt="UGG" className="mix-blend-multiply w-40 mb-4 ml-0" />
                                                        </div>
                                                        <div>
                                                            <ol className="list-disc text-lg pl-5">
                                                                <li>This shoe runs big and is available in whole sizes only. Order one size down than usual and if between sizes, order 1 1/2 sizes down from your usual size (for example, if you wear a size 9 1/2, order a size 8).</li>
                                                                <li>The Coquette embraces the essence of a slipper with the radiant style UGG® is known for.</li>
                                                                <li>Signature Twinface upper with a sheepskin cuff for a cute can cozy wear.</li>
                                                                <li>UGG® signature Twinface sheepskin is treated on both sides to provide maximum softness and comfort.</li>
                                                                <li>Polyester binding.</li>
                                                                <li>Genuine 17mm sheepskin sockliner wicks moisture away and allows air to circulate, keeping feet dry.</li>
                                                                <li>Treadlite by UGG® outsole delivers traction control.</li>
                                                                <li>Fit should be snug, but not uncomfortable. Footwear will give a little as fleece footbeds form to each individual's foot.</li>
                                                                <li>Please Note: Slight dye transfer may occur with darker colored sheepskin during first few wears.</li>
                                                                <li>Care and Cleaning Instructions</li>
                                                                <li>This product contains real fur from sheep or lamb.
                                                                    Fur Origin: Australia, European Union or United States.
                                                                    Real fur has been artificially dyed and treated.</li>
                                                                <li>Imported</li>
                                                                <li>Product measurements were taken using size 7, width B - Medium. Please note that measurements may vary by size</li>
                                                                <li>Measurements:
                                                                    <ol className="list-disc pl-6">
                                                                        <li>weight: 7 oz</li>
                                                                    </ol>
                                                                </li>
                                                            </ol>
                                                            <div>
                                                                <p className="capitalize"><a href="#">View Zappos.com Glossary of Terms</a></p>
                                                                <small>Find something wrong in this description? Help us to fix it! <a href="#" className="text-sky-800 ">Report An Error</a></small>
                                                            </div>
                                                        </div>

                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

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
export default SingleProductInfo