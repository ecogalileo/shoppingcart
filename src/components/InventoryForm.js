import React from 'react'

const InventoryForm = ({prodName,amt,handleName,handleAmt,handleSubmit,handleDelete}) => {

    return(
        <>
        <form className="row justify-content-center g-5" onSubmit={handleSubmit}>
        <div className="col-md-4">
            <label className="mx-3 form-label">Product Name</label>
                <input type="text" className="me-5 form-control" placeholder="Product Name" onChange={handleName} value={prodName}/>
        </div>
        <div className="col-md-4">
            <label className="mx-3 form-label">Amount</label>
                <input type="number" className="me-5 form-control" placeholder="0" onChange={handleAmt} value={amt}/>
        </div>    
        <div className="col-md-2">
            <button type="submit" className="btn btn-primary" style={{marginTop:"2rem",marginRight:"10px"}}>Submit</button>
            <button type="submit" className="btn btn-primary" onClick={handleDelete} style={{marginTop:"2rem"}}>Clear</button>
        </div>
        </form>
        </>
    )
}

export default InventoryForm;