const { Task } = require('../models')

exports.get = async (req, res) => {
    try {
        var getTask
        if (req.body.id === undefined) {
            getTask = await Task.findAndCountAll({
                where: {
                    isDelete: false,
                    task_status: req.body.task_status
                },
                limit: req.body.limit,
                offset: req.body.offset
            })
        } else {
            getTask = await Task.findOne({
                where: {
                    id: req.body.id
                }
            })
        }
        if (!getTask) {
            return res.status(404).json({
                message: "Data not found"
            })
        } else {
            return res.status(200).json({
                getTask
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

exports.post = async (req, res) => {
    try {
        const { task } = req.body
        await Task.create(task).then((result) => {
            return res.status(200).json({
                result
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "Something went wrong"
            })
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { task } = req.body
        await Task.update(task, {
            where: {
                id: task.id
            }
        }).then((resp) => {
            if (task.isDelete) {
                return res.status(200).json({
                    message: "task delete successfully",
                    resp
                })
            } else {
                return res.status(200).json({
                    message: "task update successfully",
                    resp
                })
            }
        }).catch((err) => {
            return res.status(400).json({
                message: "Something went wrong"
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

