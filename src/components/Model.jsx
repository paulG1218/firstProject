
const Model = ({isEditing, value, onValueChange}) => {
  return isEditing ? (
    <input 
        type="text" 
        value={value} 
        placeholder="Model" 
        onChange={(e) => onValueChange(e.target.value)}
    />
  ):(
    <div>
      {value}
    </div>
  )
}

export default Model
