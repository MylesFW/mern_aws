//INSTALLS
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'
import { navigate } from "@reach/router"

const EditPet = (props) => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")

    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")

    const [errors, setErrors] = useState(null)


    useEffect (() => {
        axios.get('http://localhost:5000/api/pets/' + props.id)
            .then((res) => {
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props.id])

    const handleEditPetSubmit = (event) => {
        event.preventDefault()

        const editedPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
        }

        axios.put('http://localhost:5000/api/pets/' + props.id, editedPet)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
        }


    return (
        <div>
            <p><Link to='/'>Home</Link></p>
            <h3>Edit Pet: </h3>
                <h5>Name: {name}</h5>
                <form onSubmit={(e) => {
                handleEditPetSubmit(e)
            }}>

                <div>
                    <label>Pet Name: </label>
                    {errors?.name && (
                        <span style={{color: "red"}}>{errors.name.message}</span>
                    )}
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }}
                    type='text'
                    value={name}
                    />
                </div>

                <div>
                    <label>Pet Type: </label>
                    {errors?.type && (
                        <span style={{color: "red"}}>{errors.type.message}</span>
                    )}
                    <input onChange={(e) => {
                        setType(e.target.value)
                    }}
                    type='text'
                    value={type}
                    />
                </div>

                <div>
                    <label>Pet Description: </label>
                    {errors?.description && (
                        <span style={{color: "red"}}>{errors.description.message}</span>
                    )}
                    <input onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    type='text'
                    value={description}
                    />
                </div>

                    <h3>Skills (these are optional)</h3>

                <div>
                    <label>Skill 1: </label>
                    {errors?.skill1 && (
                        <span style={{color: "red"}}>{errors.skill1.message}</span>
                    )}
                    <input onChange={(e) => {
                        setSkill1(e.target.value)
                    }}
                    type='text'
                    value={skill1}
                    />
                </div>

                <div>
                    <label>Skill 2: </label>
                    {errors?.skill2 && (
                        <span style={{color: "red"}}>{errors.skill2.message}</span>
                    )}
                    <input onChange={(e) => {
                        setSkill2(e.target.value)
                    }}
                    type='text'
                    value={skill2}
                    />
                </div>

                <div>
                    <label>Skill 3: </label>
                    {errors?.skill3 && (
                        <span style={{color: "red"}}>{errors.skill3.message}</span>
                    )}
                    <input onChange={(e) => {
                        setSkill3(e.target.value)
                    }}
                    type='text'
                    value={skill3}
                    />
                </div>

                <button>Update Pet</button>
            </form>
        </div>
    )
}

export default EditPet