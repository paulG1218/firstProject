import Header from "./Header";
import CarPage from "./CarPage"
import SideBar from "./SideBar";
import { useState } from "react";

const MainPage = ({cars}) => {

    const [selectedId, setSelectedId] = useState(0)

    const carSelect = () => {
        setSelectedId(car.id)
    }

    let filteredCar = cars.filter(car => car.id === selectedId)

    const tabs = filteredCar.map((car) => {
        const{img, year, make, model, mileage, engineSize, id, isEditing} = car
        return(
            <CarPage
                key={id}
                initialCars={{img, year, make, model, mileage, engineSize}}
                initialIsEditing={isEditing}
                id={id}
            />
        )
    })

    return (
        <>
         <SideBar 
            cars={cars}
            carSelect={carSelect}
        />
         {tabs}
        </>
    )
}

export default MainPage