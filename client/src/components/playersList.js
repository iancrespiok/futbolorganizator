import React from 'react'

const PlayersList = ({players}) => {
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
                </tr>
            </thead>
            <tbody>
                {players.map(player => (
                    <tr key={player.id}>
                        <th>{player.id}</th>
                        <th>{player.name}</th>
                        <th>{player.surname}</th>
                        <th>{player.cbu}</th>
                        <th>{player.email}</th>
                        <th>{player.createdAt}</th>
                        <th>{player.updatedAt}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayersList;