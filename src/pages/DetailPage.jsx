import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDetailMovie } from "../store/action";
import { useDispatch, useSelector } from "react-redux"

export default function Detailpage() {
    const movieDetail = useSelector(state => state.movieDetail)

    let param = useParams()
    let dispatch = useDispatch()
    console.log(param);

    useEffect(() => {
        dispatch(getDetailMovie(param.id))
    }, [])
    
    return(
        <>
            <h1>This is Detail Page</h1>
            <h1>After</h1>
            <h1>Pak ari</h1>
            {JSON.stringify(movieDetail)}
        </>
    )
}