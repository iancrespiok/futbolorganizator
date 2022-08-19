import React from 'react'

const UsersList = ({users, setListUpdated}) => {
    const handleDelete = (id) => {
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:8000/users/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        
        setListUpdated(true);
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>CBU</th>
                    <th>Email</th>
                    <th>Created at</th>
                    <th>Upadated at</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.cbu}</td>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                        <td>
                            <div className='mb-3'>
                                <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersList;