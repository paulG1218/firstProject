import React from 'react'
import'./SideBar.css'
import AddCar from './AddCar'

const SideBar = ({cars, carSelect, addTab}) => {
    const addClick = addTab

    const carTabs = cars.map((car) => {

        const{id, year, make, model} = car

        const experiment = () => {
            carSelect(id)
        }

        return (
            <div id='car' key={id}>
                <button id='carBtn'key={id} onClick={experiment}> 
                    {year} {make} {model}
                </button>
            </div>
        )
    })
  return (
    <div id='carTabs'>
      {carTabs}
      <AddCar
        addClick={addClick}
        id='addBtn'
      />
    </div>
  )
}

export default SideBar
