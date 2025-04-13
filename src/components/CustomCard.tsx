// import honda from '../assets/images/honda.png'
import fuel from '../assets/icons/fuel.png'
import wheel from '../assets/icons/wheel.png'
import coloricon from '../assets/icons/coloricon.png'
import { CarProps } from '../types'

interface CarCardProps {
    car: CarProps;
}

const CustomCard = ({ car }: CarCardProps) => {
    const { brand, model, yearofproduction, fuels, drive, color, price, image } = car;

    return (
        <div className="w-80 rounded overflow-hidden shadow-2xl p-4 bg-white">
            <div className='flex justify-between mb-4'>
                <div>
                    <span className='font-semibold uppercase'>{brand}</span>
                    <p className='text-gray-400 uppercase'>{model}</p>
                </div>
                <p className='font-semibold'>{yearofproduction}</p>
            </div>
            <img src={image.secure_url} alt={model} className='h-44'/>
            <div className="flex justify-between mt-4">
                <div className='flex gap-1 items-center'>
                    <img src={fuel} alt="fuel" />
                    <p>{fuels}</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={wheel} alt="wheel" />
                    <p>{drive}</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={coloricon} alt="color" />
                    <p>{color}</p>
                </div>
            </div>
            <div className="flex justify-between mt-3 items-end">
                <p className='font-bold'>${price} / Day</p>
                <button className='bg-blue-700 hover:bg-transparent border-blue-700 border hover:border hover:border-blue-700 text-white hover:text-blue-700 rounded-full px-4 py-1'>Rent now</button>
            </div>
        </div>
    )
}

export default CustomCard