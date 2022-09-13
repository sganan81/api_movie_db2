const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'));
    }

    routes(){        
        this.app.use('/api/v1/personas', require('../routes/personas.js'))        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })          
    }
}

module.exports = Server;