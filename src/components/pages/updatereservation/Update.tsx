import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IUpdateProps {
    oneReservation: any;
}

export default function Update(props: IUpdateProps) {

    console.log(props)

    let id = useParams();
    console.log("id från params", id)
    useEffect(() => {
        axios.get("http://localhost:5000/updateBooking/"+id).then(response => {
            console.log(id)
        })
    })
    return <div>tjna</div>
}