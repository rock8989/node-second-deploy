module.exports = (sequelize, DataTypes) => {
    return sequelize.define('notice', {
        tp: {
            type: DataTypes.STRING(10),
        },
        subj: {
            type: DataTypes.STRING(100),
        },
        conts: {
            type: DataTypes.TEXT,
        },
        init: {
            type: DataTypes.STRING(20),
        },
    },
    {
        timestamps: true,
        paranoid: true
    })
}

