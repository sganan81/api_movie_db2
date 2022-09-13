const {request, response} = require('express');
const axios = require('axios').default;

const getPersonas = (req = request, res = response) => {
    
    const query = req.query;
    res.status(200).json({        
        ...query,
        msg:'get Personas'
    })
   /*  // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
        .then((response) =>{
            // handle success
            res.status(200).json({data:response.data});            
        }).catch(
          (error) => {
            res.status(400).json({
                    code: response.status,
                    msg: error
            });  
          }
        ); */
    
}

const postPersonas = (req = request, res) => {
    const {id} = req.params;
    res.status(200).json({
        id:id,
        msg:'POST Personas'
    })
}


module.exports = {
    getPersonas,
    postPersonas
}