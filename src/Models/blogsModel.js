import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const Blog = conn.define("blogs",{ 
    titulo:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true 
    }, 
    conteudo:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true 
    },
    autor: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true 
    },
    dataPublicao:{
        type: DataTypes.DATE
    }, 
    // image:{
    //     type: DataTypes.image
    // }
    
})

export default Blog; 