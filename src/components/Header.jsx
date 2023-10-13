import Editbutton from "./EditButton";
import './Header.css'


let Header = ({isEditing, cars, editClick, normalClick}) => {
    return (
        <span>
                <Editbutton 
                    editClick={editClick}
                    normalClick={normalClick}
                    isEditing={isEditing}
                />
                
                
        </span>
    )
}

export default Header