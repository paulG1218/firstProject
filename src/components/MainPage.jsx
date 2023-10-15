import Header from "./Header";
import CarPage from "./CarPage"
import SideBar from "./SideBar";
import { useState } from "react";

const MainPage = ({cars}) => {

    const [selectedId, setSelectedId] = useState(0)
    const [currentData, setCurrentData] = useState(cars)

    const carSelect = (id) => {
        setSelectedId(id)
    }

    let filteredCar = currentData.filter(car => car.id == selectedId)

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
            cars={currentData}
            carSelect={carSelect}
        />
         {tabs}
        </>
    )
}

export default MainPage