import { DataTypes } from "sequelize";
import db from "../db/connections";

const Event = db.define('Event', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    cbu: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
        
        
    },
}); 

export default Event;