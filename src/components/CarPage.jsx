import Year from "./Year"
import Make from "./Make"
import Model from "./Model"
import { useState } from 'react'
import Editbutton from "./EditButton"
import EngineSize from "./EngineSize"
import Mileage from "./Mileage"
import axios from "axios"
import './CarPage.css'

const CarPage = ({initialIsEditing, initialCars, id}) => {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [year, setYear] = useState(initialCars.year)
    const [make, setMake] = useState(initialCars.make)
    const [model, setModel] = useState(initialCars.model)
    const [mileage, setMileage] = useState(initialCars.mileage)
    const [engineSize, setEngineSize] = useState(initialCars.engineSize)
    const [img, setImg] = useState(initialCars.img)

    

    const changeEditMode = async () => {
        setEditMode(true)
    }

    const changeNormalMode = async () => {

        let bodyObj = {
            img: img,
            year: year,
            make: make,
            model: model,
            mileage: mileage,
            engineSize: engineSize
        }

        const response = await axios.put(`/editCar/${id}`, bodyObj)

        if (!response.data.error) {
            setEditMode(false)
        } else {
            console.log('oh shit')
        }
    }

         return (
            <div key={id}>
                <Editbutton 
                    isEditing={editMode} 
                    editClick={changeEditMode}
                    normalClick={changeNormalMode}
                />
                
                <img 
                    src={img}
                />
                <h1>
                    <Year 
                        value={year}
                        isEditing={editMode} 
                        onValueChange={setYear}
                    />
                    <br />
                    <Make 
                        value={make}
                        isEditing={editMode} 
                        onValueChange={setMake}
                    />
                    <br />
                    <Model 
                        value={model}
                        isEditing={editMode} 
                        onValueChange={setModel}
                    />
                </h1>
                <Mileage
                    value={mileage}
                    isEditing={editMode} 
                    onValueChange={setMileage}
                />
                <EngineSize 
                    value={engineSize}
                    isEditing={editMode} 
                    onValueChange={setEngineSize}
                />
            </div>
         )
}

export default CarPage