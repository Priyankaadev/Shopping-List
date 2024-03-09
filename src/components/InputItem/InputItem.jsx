//css imports
import './InputItem.css'
import "react-toastify/dist/ReactToastify.css";

//util import
import { showSuccess } from '../../utils/showToasts';

function InputItem(){
    return(
        <div className="item-input-wrapper">
            <input className='item-input'
             type="text"
            placeholder="Add An Item.."
            />
            <button className='additem-button'
            onClick={( )=> showSuccess( "Successfully added item")}
            >
                Add
            </button>
        </div>
    )
}
export default InputItem;