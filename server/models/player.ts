import { DataTypes } from "sequelize";
import db from "../db/connections";

const Player = db.define('Player', {
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    cbu: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
}); 

export default Player;