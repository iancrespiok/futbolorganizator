import React from "react";

const Form = ({user, setUser}) => {
    let{name, surname, cbu, email} = user;
    
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        if(name === '' || surname === '' || cbu === '' || email === '') {
            alert('Every camp is mandatory')
        }else{
            console.log("HOLAAA")
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            }
            fetch('http://localhost:8000/users', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
            setUser({
                name: '',
                surname: '',
                cbu: '',
                email: ''
            })
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={name} name='name' onChange={handleChange} type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname</label>
                <input value={surname} name='surname' onChange={handleChange} type="text" id="surname" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cbu" className="form-label">CBU</label>
                <input value={cbu} name='cbu' onChange={handleChange} type="text" id="cbu" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">Mail</label>
                <input value={email} name='email' onChange={handleChange} type="text" id="mail" className="form-control"/>
            </div>
            <button type='submit' className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;