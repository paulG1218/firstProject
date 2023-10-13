
const EngineSize = ({isEditing, value}) => {
  return isEditing ? (
    <input type="number" placeholder="Engine size (L)"/>
  ):(
  <div>
      {value}
    </div>
  )
}

export default EngineSize
