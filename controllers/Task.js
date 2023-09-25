const { Task } = require("../models")

exports.getTask = async (req, res) => {
    try {
        var get_task = await Task.findAndCountAll({
            where: {
                isDelete: false,
                task_status: [1, 2, 3]
            },
            limit: req.body.limit,
            offset: req.body.offset,
        })
        if (!get_task) {
            return res.status(200).json({
                message: "no task available"
            })
        } else {
            return res.status(200).json({
                message: "Success",
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })
    }
}

exports.addTask = async (req, res) => {
    try {
        const { task } = req.body
        var add_task = await Task.create(task)
        if (!add_task) {
            return res.status(400).json({
                message: "failed to create"
            })
        } else {
            return res.status(200).json({
                message: "task create successfully"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "server error"
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const { task } = req.body
        const update_task = await Task.update(
            task,
            {
                where: {
                    id: task.id
                }
            }
        )
        return res.status(200).json({
            message: "task update successfully",
            update_task
        })
    } catch (error) {
        return res.status(500).json({
            message: "server error"
        })
    }
}

exports.getById = async (rea, res) => {
    try {

    } catch (error) {

    }
}