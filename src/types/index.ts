export interface BrandLogo {
    name: string;
    icon: string;
    id: number;
}

export interface SocialMedia {
    name: string;
    icon: string;
    id: number;
}

export interface CarProps {
    id: string;
    brand: string;
    model: string;
    yearofproduction: string;
    fuels: string;
    drive: string;
    color: string;
    price: number;
    image: {
        secure_url: string;
        public_id: string;
    };
}

export interface ItemProps {
    id: number;
    name: string;
}  

export interface BrandsProps {
    id: number;
    name: string;
}

export interface ModelsProps {
    id: number;
    name: string;
}

export interface YearsProps {
    id: number;
    name: string;
}

export interface FuelsProps {
    id: number;
    name: string;
}

export interface Car {
    id: string;
    brand: string;
    model: string;
    yearofproduction: string;
    fuels: string;
}