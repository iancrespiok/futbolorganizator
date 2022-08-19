import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/userForm';
import UsersList from './components/usersList'

function App() {
  const [users, setUsers] = useState([])
  
  const [user, setUser] = useState({
    name: '',
    surname: '',
    cbu: '',
    email: ''
  })

  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    obtenerDatos();
    setListUpdated(false)
  }, [listUpdated])

  const obtenerDatos = async() => {
    const data = await fetch('http://localhost:8000/users')
    const users = await data.json()
    setUsers(users.users)
  }

  return (
    <Fragment>
      <Navbar brand1='Users' brand2='Events'/>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <h2 style={{textAlign: 'center'}}>Users</h2>
            <UsersList users={users} listUpdated={listUpdated} setListUpdated={setListUpdated} />
          </div>
          <div className='col-3'>
            <h2 style={{textAlign: 'center'}}>New user</h2>
            <Form user={user} setUser={setUser}></Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
