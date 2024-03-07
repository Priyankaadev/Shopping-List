//component imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
//css imports
import "./ShoppingList.css"

function ShoppingList(){
    return (
        <>
        <Header />
        <div className="current-shopping-list">
            <InputItem/>
        </div>
        </>
    )
}
export default ShoppingList;