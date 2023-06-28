import { BsEnvelopeOpen } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className='grid grid-cols-12 bg-blue-custom text-white h-36 '>
                <div className="col-span-5 bg-inherit mx-8 ">
                    <h3 className="mt-4 text-xl ">Make Zappos (Emails) Your New BFF!</h3>
                    <div className="flex gap-4 mx-auto my-4">
                        <div className="">
                            <label htmlFor="email" >Email</label><br />
                            <input type="email" name="email" placeholder='Email Address' className="text-gray-400 rounded-md px-2 h-10 my-auto" />
                        </div>
                            <button className="group flex gap-2 uppercase focus:outline-2 focus:outline-dashed px-3 py-2 mt-5 my-auto rounded-md border-2 hover:bg-white hover:text-black "> <BsEnvelopeOpen className="text-white group-hover:text-black my-auto"/> Subscribe to Zappos Emails</button>
                    </div>
                </div>
            </div>

            <div>

            </div>
            <div className="bg-blue-custom text-white border-t-1 border-black/70 pt-6">
                <div>
                    <ul className="flex divide-x gap-3 text-center text-sm mx-6">
                        <li className="pl-3 hover:underline">Terms of Use</li>
                        <li className="pl-3 hover:underline">Privacy Policy</li>
                        <li className="pl-3 hover:underline">Fur Policy</li>
                        <li className="pl-3 hover:underline">Interest-Based Ads</li>
                        <li className="pl-3 hover:underline">24/7 Customer Service (800) 927-7671</li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm px-8 py-5 pb-8">© 2009 - 2023 - Zappos.com LLC or it's affiliates</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer