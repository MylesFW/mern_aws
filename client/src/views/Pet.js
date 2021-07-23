//INSTALLS
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'
import { navigate } from "@reach/router"

const Pet = (props) => {
    const [pet, setPet] = useState(null)
    const [pets, setPets] = useState([])

    useEffect (() => {
        axios.get('http://localhost:5000/api/pets/' + props.id)
            .then((res) => {
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props.id])

        if (pet === null) {
            return "Loading..."
        }

        const handleDelete = (delId) => {
            axios.delete('http://localhost:5000/api/pets/' + delId)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
        }

        const handleLikes = (likedPet) => {
            const updateBody = {
                likes: likedPet.likes + 1
            }
            axios.put(`http://localhost:5000/api/pets/${likedPet._id}`, updateBody)
            .then((res) => {
                const updatedPets = pets.map((pet) => {
                    if (likedPet._id === pet._id) {
                        return res.data
                    }
                    return pet
                })
                setPets(updatedPets)
            })
            .catch((err) => {
                console.log(err)
            })
        }


    return (
        <div>
            <p><Link to='/'>Home</Link></p>
            <div>
                <button onClick={(e) => {
                    handleDelete(pet._id)
                }}
                style={{borderRadius: '5px',border:'10px solid red', backgroundColor: 'red', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Adopt {pet.name}</button>
            </div>
                <p>Details about: <p style={{}}>{pet.name}</p></p>


                <div>
                    <p>Pet Name: {pet.name}</p>
                    <p>Pet Type: {pet.type}</p>
                    <p>Pet Description: {pet.description}</p>
                </div>

                <div>
                <h5>Skills: </h5>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>

                </div>
                <span onClick={(e) => {
                    handleLikes(pet)
                    }}
                style={{marginRight: 30, borderRadius: '5px',border:'10px solid green', backgroundColor: 'green', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>{pet.likes} &#10084; {pet.name}
                </span>
        </div>
    )
}

export default Pet