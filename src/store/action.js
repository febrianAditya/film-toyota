import axios from "axios";
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const url2 = 'https://api.themoviedb.org/3/movie/939243?language=en-US';
const baseUrl = "https://api.themoviedb.org/3/movie"

export const apiGetMoviesNowPlaying = (paramData = "now_playing") => {
    console.log("aku terpanggil di action");
    
    return async (dispatch) => {
        try {
            const data = await axios({
                method: 'GET',
                url: `${baseUrl}/${paramData}?language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MzE2OTIxZjk0MjI3ZTVjNjEwYzZkMjY3OTgyZSIsIm5iZiI6MTczNjk5MzcxMy43NTcsInN1YiI6IjY3ODg2YmIxYTY0ZmViMTZjOTFkMzBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wyaW4Fv7lb2bJr4BdQmEckq2JBfSK9iBVEAfyYgO30'
                }
            });

            console.log(data.data.results, "==> BEFORE");
            dispatch({
                type: "CHANGE_DATA_MOVIES",
                payload: data.data.results
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }


    // return {
    //     type: "coba",
    //     payload: "hahaha"
    // }
}


export const getDetailMovie = (movieId) => {

    return async (dispatch) => {
        try {
            const data = await axios({
                method: 'GET',
                url: `${baseUrl}/${movieId}?language=en-US`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MzE2OTIxZjk0MjI3ZTVjNjEwYzZkMjY3OTgyZSIsIm5iZiI6MTczNjk5MzcxMy43NTcsInN1YiI6IjY3ODg2YmIxYTY0ZmViMTZjOTFkMzBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wyaW4Fv7lb2bJr4BdQmEckq2JBfSK9iBVEAfyYgO30'
                }
            })

            // console.log(data, "===> APA SIH INI");
            dispatch({
                type: "CHANGE_DETAIL",
                payload: data
            })
            
        } catch (error) {
            console.log(error, "==> INI ERROR");
            
        }
    }
}