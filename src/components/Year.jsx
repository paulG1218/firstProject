
const Year = ({isEditing, value, onValueChange}) => {
  return isEditing ? (
    <input 
        type="number"  
        placeholder="Year"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
    />
  ) : (
    <div>
      {value}
    </div>
  )
}

export default Year
