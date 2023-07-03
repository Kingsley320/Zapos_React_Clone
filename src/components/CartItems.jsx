import { Link } from "react-router-dom"
import Checkout from "../pages/Checkout"
    import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import Button from "./Button"
import { BsHeart } from "react-icons/bs"
import { useState } from "react"

function CartItems() {
    const [cartItems, setCartItems] = useState(1);
    return (
        <>
            <div>
                <h1 className="capitalize text-3xl mx-3 mb-4">1 item in My Cart</h1>
            </div>
            <div className="grid grid-cols-12 gap-4 mx-3 mb-2">
                <div className='col-span-8 border-1 border-gray-300 '>
                    <div className="flex justify-between bg-blue-custom text-white px-4 py-2">
                        <p>Item</p>
                        <p>Price/Quantity</p>
                    </div>
                    <div className="flex justify-between pr-6  ">
                        <div className="flex p-3">
                            <div className='bg-gray-100 h-68 p-3 mx-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-sm text-black my-auto group-hover:animate-bounce" /></span>
                                <img src={img30} alt="cart item" className="w-28 mix-blend-multiply my-auto" />
                            </div>
                            <div>
                                <p className="text-blue-custom">Carhartt</p>
                                <p className="capitalize text-sm font-semibold mb-2 hover:text-sky-600 hover:underline">Flame-resistant (FR) Force Cotton long sleeve t-shirt</p>
                                <p > Color: <span>Dark Navy</span></p>
                                <p >Size: <span>XL (Reg)</span></p>
                            </div>
                        </div>
                        <div className="text-center pt-4">
                            <p className="text-blue-custom font-bold mb-2">$74.99</p>
                            <select name="quantity" value={cartItems} className="p-2 ml-8 border-1 border-gray-300 tracking-tighter outline-2 focus:outline-dashed rounded-md outline-offset-1 focus:outline-sky-600">
                                <option value="0">Remove</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <Button title={"Remove"} color={"#003953"} textDecoration={"underline"} className="text-blue-custom "/>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='col-span-4 bg-gray-100 border-1 border-gray-300 p-3'>

                        <Link to={'/checkout'} element={<Checkout />} className='flex my-auto rounded py-2.5 mb-2 bg-green font-semibold text-sm hover:brightness-110'>
                            <p className='uppercase mx-auto text-blue-custom'>Proceed to Checkout</p>
                        </Link>

                        <small className="">Have a Promotional Code? Proceed to checkout to redeem it.</small>

                        <h2 className="my-3 text-xl fonr-semibold">Cart Summary (1 item)</h2>

                        <div className="flex justify-between text-md font-semibold text-gray-700"><p>Subtotal (1 item)</p> <p>$74.99</p></div>
                    </div>
                    <div className="text-gray-600 mt-1 mb-3 leading-4">
                        <small className=" ">Zappos.com LLC is required by law to collect <a href="#" className="text-md text-sky-900 underline hover:text-sky-500">sales tax</a> on orders shipped to specific states. Appropriate charges will be added to your merchandise total and displayed for your review at checkout.
                        </small>
                    </div>
                    <div className="text-gray-600">
                        <small>
                            Unless otherwise noted, all products are sold by Zappos.com LLC.
                        </small>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartItems