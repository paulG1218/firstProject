const EditButton = ({isEditing, editClick, normalClick, deleteFunc}) => {
    return isEditing ? (
        <>
        <button onClick={normalClick} id="EditButton">
            <h2>Save</h2>
        </button>
        <button onClick={deleteFunc} id="Delete">
            <h2>Delete car</h2>
        </button>
        </>
    ) : (
        <button onClick={editClick} id="EditButton">
            <h2> Edit </h2>
        </button>
    )
}

export default EditButton