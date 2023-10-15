
const EngineSize = ({isEditing, value, onValueChange}) => {
  return isEditing ? (
    <input 
        type="number" 
        placeholder="Engine size (L)"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
    />
  ):(
  <div>
      {value}L engine
    </div>
  )
}

export default EngineSize
