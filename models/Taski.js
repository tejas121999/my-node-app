const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {

    }

    Task.init({
        task_name: {
            type: DataTypes.STRING,
            field: 'task_name'
        },
        start_date: {
            type: DataTypes.DATE,
            field: 'start_date'
        },
        end_date: {
            type: DataTypes.DATE,
            field: 'end_date'
        },
        task_status: {
            type: DataTypes.INTEGER,
            field: 'task_status'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'task',
        modelName: 'Task',
        timestamps: true
    })
    return Task
}