//component imports
import Item from '../Item/Item';
import React from 'react';


//css imports
import './ItemList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'



function ItemList({shoppingItems, addQuantity, decQuantity}){

   
    return (
        <div className="shopping-items-wrapper">
            {
               shoppingItems && shoppingItems.map(item=>{
                    return (
                        <div key={item.id} className='items-list'>
                        <div className='change-quantity add-item'
                            onClick={( )=> addQuantity(item.id)}
                        >
                        <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <Item 
                            itemName={item.name}
                            quantity = {item.quantity}
                                                 
                        />
                        <div className='change-quantity remove-item'
                            onClick={( )=> {
                                if(item.quantity == 1)
                                decQuantity(item.id)
                            }}
                        >
                        <FontAwesomeIcon icon={faMinus} />
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ItemList );