import img1 from '../assets/logo-blue-small._CB485919770_.svg';
import { BsCaretRightFill, } from 'react-icons/bs'
import Footer_2 from '../components/Footer_2';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

function SignUp() {


    return (
        <>
            <div className='my-4 text-center'>
                <Link to={'/'} ><img src={img1} alt="logo" className='h-11 inline align-middle text-white' /></Link>
                <div className='border-1 border-gray-400 text-left w-85 mx-auto mt-4 rounded-md px-4 py-3 my-8 font-sans'>
                    <h1 className='text-3xl font-Arial'>Create account</h1>
                    <form action="POST">
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Your name</label>
                            <input type="text" placeholder='First and last name' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black'/></div>
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Email</label>
                            <input type="text" placeholder='Example: JonDoe@gmail.com' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black'/></div>
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Password</label>
                            <input type="text" placeholder='At least 6 chsracters' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black'/>
                            <small><i className='text-blue-600 mr-1 px-1 font-bold'>i  </i> Passwords must be at least 6 characters.</small>
                            </div>
                        <div className='my-2'>
                        <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Re-enter Password</label>
                            <input type="text"className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black'/>
                        </div>

                        <button className=' w-full bg-blue-custom text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md'>Create your Zappos account</button>
                    </form>

                    <small className='mt-2 block mb-3'>Don't have an email address or need additional help? <br /> Don't worry! Give us a call at <a href="#" className='text-blue-custom'>(800) 927-7671</a></small>
                    <small className='mb-5 pb-6 shadow-md block '>Registering means you agree to the Zappos terms of use and <a href="#" className='text-blue-custom'> Privacy Policy </a></small>
                    <small className='mt-7 flex gap-1'>Already have an account? <Link to={"/sign-in"} element={<SignIn />} className='text-blue-custom hover:underline flex gap-0.5'>Sign in <BsCaretRightFill className='my-auto p-0.5 text-gray-500'/></Link></small>
                </div>
            </div>

            <Footer_2 />
        </>
    )
}
export default SignUp