import { socialMedia } from "../constants"
import { SocialMedia } from "../types"

const Footer = () => {
    return (
        <footer className="py-4 border-t mt-20">
            <div className="sm:flex justify-between items-center">
                <div className="mb-4">
                    <span className="text-2xl font-semibold font-serif">Edrian's Auto Import</span>
                    <div className="flex gap-1 mt-2">
                        {socialMedia.map((media: SocialMedia) => (
                            <img key={media.id} src={media.icon} alt={media.name} className="sm:size-13 size-8" />
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <span>Links</span>
                    <ul>
                        <li>Horizon Car Rentals</li>
                        <li>CityCruise Hire</li>
                        <li>PrimeAuto Rentals</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <span>Links</span>
                    <ul>
                        <li>RoadTrip Rentals</li>
                        <li>DriveEasy Car Hire</li>
                        <li>GoWheels Rentals</li>
                    </ul>
                </div>
                <div>
                    <p className="leading-10">+1800-555-4000 <br />1234 Maple Street Springfield, IL 62704 <br />edrian_autoimport@google.com</p>
                </div>
            </div>
            <div className="sm:flex justify-between border-t py-2 mt-10">
                <p className="text-center">©2025 Edrian's Auto Import</p>
                <p className="text-center">Terms of conditions</p>
                <p className="text-center">Privacy policy</p>
            </div>
        </footer>
    )
}

export default Footer