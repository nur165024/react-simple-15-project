import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

const getLocalStoreage =() => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    }else{
        return [];
    }
}

const FormSubmit = () => {
    const [name,setName] = useState('');
    const [formData,setFormData] = useState(getLocalStoreage());
    const [errorMessage,setErrorMessage] = useState({error: false, mag: '', type: ''});
    const [isEditId,setIsEditId] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setErrorMessage({error: true, mag: 'your value is Empty', type: 'danger'});    
        }else if(name && isEditId) {
            setFormData(
                formData.map((items) => {
                    if (items.id === isEditId) {
                        return {...items, title : name}
                    }
                    return items;
                })
            )
            setName('');
            setIsEditId(null);
            setErrorMessage({error: true, mag: 'Updated Successfully!', type: 'success'}); 
        }else {
            const itemData = {
                id : new Date().getTime().toString(),
                title : name
            }
            setFormData([...formData,itemData]);
            setName('');
            setErrorMessage({error: true, mag: 'Submited Successfully!', type: 'success'});   
        }
    }

    const clickCloseButton = () => {
        setErrorMessage({error: false, mag: '', type: ''});
    }

    const editItem = (id) => {
        const findItem = formData.find((data) => data.id === id);
        setName(findItem.title);
        setIsEditId(id);
    }

    const deleteItem = (id) => {
        const findItem = formData.filter((data) => data.id !== id);
        setFormData(findItem);
        setErrorMessage({error: true, mag: 'Deleted Successfully!', type: 'danger'});
    }

    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(formData))
    },[formData])

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Form Submit</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        {
                            errorMessage.error && 
                            <div className={`alert alert-${errorMessage.type} alert-dismissible fade show`} role="alert">
                                <strong>{errorMessage.mag}</strong>
                                <button onClick={clickCloseButton} style={{ position: 'absolute',top: '15%',right: '0' }} type="button" className="close btn" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                        
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Enter Name</label>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                <div className="form-data my-4">
                                    {
                                        formData.map((items) => 
                                            <p className="text-capitalize font-weight-bold">
                                                <span>{items.title}</span>
                                                <strong>
                                                    <button onClick={() => editItem(items.id)} className="btn btn-sm btn-outline-success m-2"><FaEdit /></button>
                                                    <button onClick={() => deleteItem(items.id)} className="btn btn-sm btn-outline-danger m-2"><FaTrash /></button>
                                                </strong>
                                            </p>   
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSubmit;