import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function NewInfoSlider() {
    const [slideIndex, setIndex] = useState(0);
    const slides = [
        {
            info: ' Find sandals, swimwear, and other reasons to turn on your OOO.☀️ Shop Summer Essentials',
        },
        {
            info: " 10 Hey Dude shoes you'll want to wear all summer long. 🔥Shop Hey Dude",
        },
        {
            info: ' FREE 365-Day Returns and Exchanges',
        },
    ]
    
    return (
        <>
            <div className="w-100 h-10 m-auto py-4 relative bg-yellow-300 flex my-auto mx-auto">
                <div className=" duration-500  text-center mx-auto transition-all ease-in-out delay-300 relative top-[-7px]" >
                    {slides[slideIndex].info}
                </div>
                <div className="text-black absolute top-[40%] left-[20px] cursor-pointer" onClick={() => slideIndex > 0? setIndex(slideIndex - 1) : setIndex((slides.length) -1)}>
                    <BsChevronLeft className="text-black cursor-pointer"/>
                </div>
                <div onClick={() => slideIndex < 2? setIndex(slideIndex + 1) : setIndex(0)} className="absolute top-[40%] right-[20px] cursor-pointer">
                    <BsChevronRight className=""/>
                </div>
            </div>
        </>
    )
}
export default NewInfoSlider