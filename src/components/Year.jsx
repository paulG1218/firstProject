
const Year = ({isEditing, value}) => {
  return isEditing ? (
    <input type="number" placeholder="Year"/>
  ) : (
    <div>
      {value}
    </div>
  )
}

export default Year
