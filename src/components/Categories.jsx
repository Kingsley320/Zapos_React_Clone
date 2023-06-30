import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";

function Categories() {
    return (
        <>
            <div className='flex px-2 mx-auto  bg-gray-100/75 overflow-hidden h-12 relative'>
                <div className=' flex my-auto  h-14 font-verdana'>
                    <ul className="flex  gap-3 text-md font-semibold ml-5 my-auto  ">
                        <li className="flex theblue"><button className=" mb-3 flex">New <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Women <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Men <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Kids <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Departments <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Brands <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Sale <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">🔥 Clothing <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                    </ul>
                </div>
                <div className='flex theblue my-auto ml-auto mr-14  font-bold justify-end'>
                    <Link to={'/sign-up'} element={<SignUp />} className="my-auto mb-3 mt-3 ">Sign In / Register</Link>

                </div>
            </div>

        </>
    )
}
export default Categories