import React from 'react'

const CarImage = ({isEditing, value, onValueChange}) => {
return isEditing ? (
    <input 
        type='text' 
        placeholder='Image URL'
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
    />
    ):(
    <img src={value} alt="{value}" />
    )
}

export default CarImage
