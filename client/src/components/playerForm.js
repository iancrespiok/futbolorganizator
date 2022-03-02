import React from "react";

const Form = () => {
    return(
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Name</label>
                <input type="text" id="surname" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cbu" className="form-label">Name</label>
                <input type="text" id="cbu" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">Name</label>
                <input type="text" id="mail" className="form-control"/>
            </div>
        </form>
    )
}

export default Form;