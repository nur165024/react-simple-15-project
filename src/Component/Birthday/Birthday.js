import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Birthday = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const handleClick = () => {
        setUsers([])
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-12 mb-3">
                    <h1>Birthday Info</h1>
                    <h5>Total Birthday : {users.length}</h5>
                    <Link className="btn btn-success" style={{ marginRight: '15px' }} to="/">Back</Link>
                    <button className="btn btn-primary" onClick={handleClick}>Clear All</button>
                </div>
                <hr />
                {
                    users.length === 0 ? <h3>Lodding...</h3> :
                    users.map(user => (
                        <div className="col-md-4">
                            <div key={user.id} className="card my-3">
                                <div className="card-body">
                                <h4>Name : {user.name}</h4>
                                <h4>Email : {user.email}</h4>
                                <h4>Address : {user.address.city}</h4>
                                <h4>Website : {user.website}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
};

export default Birthday;