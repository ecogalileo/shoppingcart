import React from 'react'

const InventoryList = ({grandTotal}) => {

    return(
        // <div>
        //     {grandTotal.map(item =>(
        //         <p>{item.productName} ₱{item.totalAmt}</p>
        //     ))}
        // </div>
        <div>
        <table className="container">
            <tr>
                <th><h3>Product Name</h3></th>
                <th><h3>Amount</h3></th>
            </tr>
            <tr>
                <td>{grandTotal.map(item =>(
                <p>{item.productName}</p>))}
                </td>
                <td>{grandTotal.map(item =>(
                <p>₱{item.totalAmt}</p>))}
                </td>
            </tr>

        </table>
    </div>
    )
}
export default InventoryList