import express, {Application} from 'express';
import router from '../routes/player';
import cors from 'CORS'
import { textChangeRangeIsUnchanged } from 'typescript';
import db from '../db/connections';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        players: '/players'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online")  
        } catch (error: any ) {
            throw new Error( error );
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura body
        this.app.use(express.json())

        //Carpeta publica
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

    routes() {
        this.app.use( this.apiPaths.players, router)
    }
}

export default Server;