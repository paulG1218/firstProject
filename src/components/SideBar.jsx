import React from 'react'
import AddCar from './AddCar'
import'./SideBar.css'

const SideBar = ({cars, carSelect}) => {

    const carTabs = cars.map((car) => {

        const{id, year, make, model} = car

        const experiment = () => {
            carSelect(id)
            console.log(id)
        }

        return (
            <div id='car' key={id}>
                <button key={id} onClick={experiment}> 
                    {year} {make} {model}
                </button>
            </div>
        )
    })
  return (
    <div id='carTabs'>
      {carTabs}
      <AddCar/>
    </div>
  )
}

export default SideBar
