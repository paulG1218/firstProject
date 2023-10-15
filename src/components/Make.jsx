
const Make = ({isEditing, value, onValueChange,}) => {
  return isEditing ? (
    <input 
        type="text" 
        placeholder="Make"
        value={value} 
        onChange={(e) => onValueChange(e.target.value)}
    />

  ):(<div>
      {value}
    </div>
    )
}

export default Make
