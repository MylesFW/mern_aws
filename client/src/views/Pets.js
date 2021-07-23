//INSTALLS
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'

const Pets = (props) => {
    const [pets, setPets] = useState([])
        
        useEffect (() => {
            axios.get('http://localhost:5000/api/pets')
            .then((res) => {
                setPets(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])
    

    return (
        <div style={{display: 'inline-block', width: '75%'}}>
            <h3 style={{textAlign: 'left'}}>These pets are looking for a good home!</h3>
            <p><Link to='/pets/new'>Add New Pet</Link></p>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <tr >
                    <th style={{textAlign: 'left', border: '1px solid black'}}>Name</th>
                    <th style={{border: '1px solid black'}}>Type</th>
                    <th style={{border: '1px solid black'}}>Actions</th>
                </tr>
                {pets.map((pet) => {
                    return (
                        <tr key={pet._id} style={{border: '1px solid black'}}>
                            <td style={{textAlign: 'left', border: '1px solid black'}}>{pet.name}</td>
                            <td style={{textAlign: 'left', border: '1px solid black'}}>{pet.type}</td>
                            <td style={{textAlign: 'left', border: '1px solid black'}}>
                                <Link style={{ marginRight: '25px'}}to={'/pets/' + pet._id + '/edit'}>Edit</Link> {' | '}
                                <Link to={'/pets/' + pet._id}>Details</Link>
                            </td>
                    </tr>
                )})}
            </table>
        </div>
    )
}


export default Pets