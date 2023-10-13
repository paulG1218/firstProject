import React from 'react'
import'./SideBar.css'

const SideBar = ({cars, carSelect}) => {

    const carTabs = cars.map((car) => {

        const{id, year, make, model} = car
        return (
            <div id='car'>
                <button key={id}> {/*onClick={carSelect}*/}
                    {year} {make} {model}
                </button>
            </div>
        )
    })
  return (
    <div id='carTabs'>
      {carTabs}
    </div>
  )
}

export default SideBar
