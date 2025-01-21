import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { apiGetMoviesNowPlaying } from "../store/action";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function NavbarCompoent() {
    const dispatch = useDispatch()

    const options = [
        'popular', 'now_playing', 'top_rated'
    ];
      
    const handleSelect = (event) => {
        dispatch(apiGetMoviesNowPlaying(event.value))
    }

    // const handleOnSelect = (e) => {
    //     console.log(e.target.value, "==> INI APA");
        
    // }

    return(
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                        <Link class="nav-link active" to="/">Home</Link>
                    </li>
               
                    <li class="nav-item dropdown">
                        <Dropdown options={options} onChange={(event) => handleSelect(event)} value={"now_playing"} placeholder="Select an option" />
                        {/* <select onChange={(e) => handleOnSelect(e)} class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="now_playing">Now Playing</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> */}

                    </li>
                    
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
    )
}