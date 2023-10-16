import Header from "./Header";
import CarPage from "./CarPage"
import SideBar from "./SideBar";
import { useState } from "react";
import axios from "axios";

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
                deleteFunc={() => deleteCar(id)}
            />
        )
    })

    const addTab = async () => {
        const res = await axios.post('/addCar')
        setCurrentData([...currentData, res.data])
    }

    const deleteCar = async (id) => {
        const res = await axios.delete(`/deleteCar/${id}`)

        console.log(res.data)

        const deletedCar = currentData.filter((car) => car.id != id)

        setCurrentData(deletedCar)
    }

    return (
        <>
         <SideBar 
            cars={currentData}
            carSelect={carSelect}
            addTab={addTab}
        />
         {tabs}
        </>
    )
}

export default MainPage