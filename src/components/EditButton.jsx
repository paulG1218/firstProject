const Editbutton = ({isEditing, editClick, normalClick}) => {
    return isEditing ? (
        <button onClick={normalClick} id="EditButton">
            <h2>Save</h2>
        </button>
    ) : (
        <button onClick={editClick} id="EditButton">
            <h2> Edit </h2>
        </button>
    )
}

export default Editbutton