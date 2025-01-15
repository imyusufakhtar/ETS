// import { useState, useEffect } from "react";
import { About } from "./About-Section/About";
import { Career } from "./Career-Section/Career";
import { Contact } from "./Contact-Section/Contact";
import { LandingHero } from "./Hero-Section/LandingHero";
import { Services } from "./Services-Section/Services";
import { Values } from "./Values-Section/Values";

export const Landing = () => {

    return(
        <>
        <LandingHero />
        <Values />
        <About />
        <Services />
        <Career />
        <Contact />
        </>
    )
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, []);

    // return (
    //     <>
    //         {isLoading ? (
    //             <Loader/>
    //         ) : (
    //             <>
    //                 <LandingHero />
    //                 <Values />
    //                 <About />
    //                 <Services />
    //                 <Career />
    //                 <Contact />
    //             </>
    //         )}
    //     </>
    // );
};
