

const EditButton = ({isEditing, editClick, normalClick, deleteFunc, year, make, model}) => {

    const confirmFunc = () => {
        if (confirm(`Are you sure you want to delete your ${year} ${make} ${model}?`)) {
            deleteFunc()
        } else {
            return
        }
    }
    return isEditing ? (
        <>
        <button onClick={normalClick} id="EditButton">
            <h2>Save</h2>
        </button>
        <button onClick={confirmFunc} id="Delete">
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