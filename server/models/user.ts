import { DataTypes } from "sequelize";
import db from "../db/connections";

const User = db.define('User', {
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

export default User;