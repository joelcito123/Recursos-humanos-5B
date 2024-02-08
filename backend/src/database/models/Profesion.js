module.exports = (sequelize, dataTypes) => {
    let alias = "Profesiones";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(20),
            allowNull: false,
        }
    };
    let config = {
        tableName: "profesiones",
        timestamps: false
    }
    
    const Profesion = sequelize.define(alias, cols, config);

    Profesion.associate = function(models) {
        Profesion.hasMany(models.Aspirantes, {
            as: "aspirante",
            foreignKey: "id_profesion",
        })
    }

    return Profesion;
}