module.exports = (sequelize, dataTypes) => {
    let alias = "Aspirantes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        telefono: {
            type: dataTypes.INTEGER,
        },
        linkedinUrl: {
            type: dataTypes.STRING(255),
        },
        fechaNac: {
            type: dataTypes.DATE,
        },
        sexo: {
            type: dataTypes.ENUM('Femenino', 'Masculino', 'Otro'),
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(20),
        },
        profesionId: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "aspirantes",
        timestamps: false
    }
    
    const Aspirante = sequelize.define(alias, cols, config);

    Aspirante.associate = function(models) {
        Aspirante.belongsTo(models.Profesiones, {
            as: "profesiones",
            foreignKey: "id_profesion",
        })
    }

    return Aspirante;
}