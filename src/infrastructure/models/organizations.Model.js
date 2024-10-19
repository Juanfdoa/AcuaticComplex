import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Organizations = sequelize.define("Organizations", {
    id: {
        type: DataTypes.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true,
    },
    organization: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "organismo",
    },
    initial:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "sigla",
    },
    program:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "programa",
    },
    modality:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "modalidad",
    },
    trainer:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "formador",
    }
 },{
        tableName: "organismos",
        timestamps: false,
 });

 export default Organizations;