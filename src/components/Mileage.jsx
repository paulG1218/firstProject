
const Mileage = ({isEditing, value}) => {
  return isEditing?(
    <input type="number" placeholder="Mileage"/>
  ):(
    <div>
      {value}
    </div>
  )
}

export default Mileage
