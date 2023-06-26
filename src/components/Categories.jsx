import { BsFillCaretDownFill } from "react-icons/bs";

function Categories() {
    return (
        <>
            <div className='flex px-2 mx-auto text-xl border bg-gray-100 overflow-hidden h-16 relative'>
                <div className=' flex my-auto  h-14 font-verdana'>
                    <ul className="flex  gap-6 text-2xl font-semibold ml-5 my-auto  ">
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">New <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Women <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Men <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Kids <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Departments <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Brands <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Sale <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 mt-3 flex">Clothing <BsFillCaretDownFill className="text-gray-400 text-sm my-auto" /></button>  </li>
                    </ul>
                </div>
                <div className='flex theblue my-auto ml-auto mr-14  font-bold justify-end'>
                    <a href="#" className="my-auto mb-3 mt-3 ">Sign In / Register</a>

                </div>
            </div>

        </>
    )
}
export default Categories