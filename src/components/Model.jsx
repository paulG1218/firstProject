
const Model = ({isEditing, value}) => {
  return isEditing ? (
    <input type="text" placeholder="Model"/>
  ):(
    <div>
      {value}
    </div>
  )
}

export default Model
