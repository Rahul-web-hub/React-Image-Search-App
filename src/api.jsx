import axios from "axios";
import React from 'react'

const SearchImages = async(term) => {
   const response =await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
           Authorization:'Client-ID kW0bAWCgXgPj3I6Z0-d6f23o1x0h_DlBg5TopR1Nlkk',
        },
        params:{
            query:term,
        },
    })
    return response.data.results;
};

export default SearchImages