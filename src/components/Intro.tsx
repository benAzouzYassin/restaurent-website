import { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
function Intro() {
    const [bgImg, setBgImg] = useState('/images/hero-slider-3.jpg')


    const getNextBg = useCallback(() => {
        const allBackgrounds = ["/images/hero-slider-1.jpg", "/images/hero-slider-2.jpg", "/images/hero-slider-3.jpg"]
        return allBackgrounds[Math.floor(Math.random() * 3)]
    }, [])
    const changeBg = () => {
        setBgImg(getNextBg())
    }
    //setInterval(changeBg, 2000)
    return (
        <div
            style={{ backgroundImage: `url(${bgImg})`, }}
            className="h-[1000px] bg-center bg-no-repeat bg-cover relative transition-all duration-700 "
        >
            <Navbar />
            <Idk />
            <svg
                className="absolute bottom-[0%]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 250"
            >
                <path
                    fill="#191919"
                    fillOpacity="1"
                    d="M0,192L40,170.7C80,149,160,107,240,85.3C320,64,400,64,480,101.3C560,139,640,213,720,218.7C800,224,880,160,960,117.3C1040,75,1120,53,1200,48C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}
export default Intro
function Idk() {
    return (<div className="mt-[15vh] flex flex-col">
        <p className="text-[#e4c590] text-lg  text-center font-semibold tracking-widest	">AMAZING & DELICIOUS</p>
        <p className="bg-[url(/images/separator.svg)] w-full h-4 mt-5 bg-no-repeat bg-center" > </p>
        <h1 className="text-5xl lg:text-9xl leading-tight font-serif font-light italic text-white text-center">For the love of<br /> delicious food</h1>
        <h4 className="text-white text-lg lg:text-xl text-center tracking-wide">Come with family & feel the joy of mouthwatering food</h4>

        <a className="hover:bg-[#e4c590]  hover:text-black transition-all text-[#e4c590] border-2 border-[#e4c590] px-8 py-4 font-semibold ml-auto mr-auto mt-8 z-50" href="/menu">VIEW OUR MENU</a>
    </div>)

}