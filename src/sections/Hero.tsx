import tesla from "../assets/images/tesla.png";
import { brandLogo } from "../constants";
import { BrandLogo } from "../types";

const Hero = () => {
    return (
        <section>
            <div className="md:flex sm:py-20">
                <div className="flex-1">
                    <h1 className="capitalize text-7xl font-bold pt-16 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-transparent bg-clip-text">the best platform for car rental</h1>
                    <p className="mt-8 text-xl">We open the door for you to explore the world in comfort and style.<br />Being your trusted travel partner.</p>
                </div>
                <div className="flex sm:justify-center items-center">
                    <img src={tesla} alt="tesla" width={700} height={700} />
                </div>
            </div>
            <div className="flex sm:flex-wrap justify-between sm:gap-x-24 gap-2">
                {brandLogo.map((logo: BrandLogo) => (
                    <img key={logo.id} src={logo.icon} alt="brand-logo" className="sm:size-20 size-10" />
                ))}
            </div>
        </section>

    );
};

export default Hero;
