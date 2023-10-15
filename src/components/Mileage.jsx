
const Mileage = ({isEditing, value, onValueChange}) => {
  return isEditing?(
    <input 
        type="number" 
        placeholder="Mileage"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
    />
  ):(
    <h3>
      {value} Miles
    </h3>
  )
}

export default Mileage
