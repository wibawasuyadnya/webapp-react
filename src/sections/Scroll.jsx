import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrolltoTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Smooth Scrolling to top
    // Set value before function run and scroll behavior
    const ScrollEffect = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

	useEffect(() => {
        const toggleVisibility = () => {
          // Button is displayed after scrolling for 300 pixels
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      
  },[]);


    return (
	    <div className="relative h-25 w-25 bg-black ">
            {isVisible && (
            <div href="#top" onClick={ScrollEffect} className=" text-[color:var(--clr-heading)] hover:text-white cursor-pointer opacity-100 hover:opacity-100"> 
                <FaArrowUp className="  transition-transform duration-200 ease-in-out hover:scale-110 bg-[color:var(--clr-bg-card)] hover:bg-[color:var(--clr-link)] py-2 px-2 border-2 hover:border-[color:var(--clr-link)] border-[color:var(--clr-bg-card)] rounded-full fixed bottom-[32px] right-[32px] h-12 w-12"/>
            </div>
            )}
     </div>
    ) 
}

export default ScrolltoTop;
