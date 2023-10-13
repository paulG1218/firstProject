
const Make = ({isEditing, value}) => {
  return isEditing ? (
    <input type="text" placeholder="Make"/>
    
  ):(<div>
      {value}
    </div>
    )
}

export default Make
