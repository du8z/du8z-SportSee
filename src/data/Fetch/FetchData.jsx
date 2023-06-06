// import { useParams } from "react-router-dom"
// import React from "react"

import { useParams } from "react-router-dom";

// const { id } = this.props
const fetchData = async () => {
    let {id} = useParams
    await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then(res => res.json() )
    .then()
    .catch ( err => {
        console.log(err.message);
    })
}

export default fetchData
