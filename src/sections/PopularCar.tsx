import CustomCard from "../components/CustomCard";
import { useEffect, useState } from "react";
import CustomListBox from "../components/CustomListBox";
import { brands, fuels, models, years } from "../constants";
import { CarProps, ItemProps } from "../types";

const PopularCar = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedFuel, setSelectedFuel] = useState(fuels[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://rent-car-api-eqk2.onrender.com/autos/"
        );
        const data = await response.json();
        setCars(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    let filtered = cars;

    if (selectedBrand.name !== "All Brands") {
      filtered = filtered.filter(
        (car) => car.brand.toLowerCase() === selectedBrand.name.toLowerCase()
      );
      setSelectedFuel(fuels[0]);
      setSelectedModel(models[0]);
      setSelectedYear(years[0]);
    }

    if (selectedModel.name !== "All Models") {
      filtered = filtered.filter(
        (car) => car.model.toLowerCase() === selectedModel.name.toLowerCase()
      );
      setSelectedFuel(fuels[0]);
      setSelectedYear(years[0]);
      setSelectedBrand(brands[0]);
    }

    if (selectedYear.name !== "All Years") {
      filtered = filtered.filter(
        (car) =>
          car.yearofproduction.toLowerCase() === selectedYear.name.toLowerCase()
      );
      setSelectedFuel(fuels[0]);
      setSelectedModel(models[0]);
      setSelectedBrand(brands[0]);
    }

    if (selectedFuel.name !== "All Fuels") {
      filtered = filtered.filter(
        (car) => car.fuels.toLowerCase() === selectedFuel.name.toLowerCase()
      );
      setSelectedModel(models[0]);
      setSelectedYear(years[0]);
      setSelectedBrand(brands[0]);
    }

    setFilteredCars(filtered);
  }, [selectedBrand, selectedModel, selectedYear, selectedFuel, cars]);

  const handleBrandChange = (brand: ItemProps) => {
    setSelectedBrand(brand);
    setSelectedModel(models[0]);
    setSelectedYear(years[0]);
    setSelectedFuel(fuels[0]);
  };

  const handleModelChange = (model: ItemProps) => {
    setSelectedModel(model);
    setSelectedBrand(brands[0]);
    setSelectedYear(years[0]);
    setSelectedFuel(fuels[0]);
  };

  const handleYearChange = (year: ItemProps) => {
    setSelectedYear(year);
    setSelectedBrand(brands[0]);
    setSelectedModel(models[0]);
    setSelectedFuel(fuels[0]);
  };

  const handleFuelChange = (fuel: ItemProps) => {
    setSelectedFuel(fuel);
    setSelectedBrand(brands[0]);
    setSelectedModel(models[0]);
    setSelectedYear(years[0]);
  };

  return (
    <section>
      <div className="sm:flex justify-between mt-16">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-4 bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-transparent bg-clip-text">
          Our Most Popular Cars
        </h1>
        <div className="flex flex-wrap gap-4">
          <CustomListBox
            items={brands}
            selected={selectedBrand}
            onChange={handleBrandChange}
          />
          <CustomListBox
            items={models}
            selected={selectedModel}
            onChange={handleModelChange}
          />
          <CustomListBox
            items={years}
            selected={selectedYear}
            onChange={handleYearChange}
          />
          <CustomListBox
            items={fuels}
            selected={selectedFuel}
            onChange={handleFuelChange}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {loading ? (
          <div className="flex justify-center items-center w-full mt-10">
            <p className="text-lg font-semibold text-gray-500">
              Your cars will appear in a few seconds...
            </p>
          </div>
        ) : (
          filteredCars.map((car, i) => <CustomCard key={i} car={car} />)
        )}
      </div>
    </section>
  );
};

export default PopularCar;
