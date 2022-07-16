const Datagrid = require('../models/Datagrid');

const getData = async (req, res) => {
    try {
        const data = await Datagrid.find();

        if (data.length < 1) return res.status(200).json({
            success: true,
            data: "There isn't any data currently"
        })

        res.status(200).json({
            success: true,
            data
        })

    } catch (error) {
        res.sendStatus(500)
    }
}

const updateData = async (req, res) => {
    const id = req.body.id;

    if (!id) return res.sendStatus(400)

    try {
        await Datagrid.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            success: true,
            message: "Data updated successfully"
        })
    } catch (error) {
        res.sendStatus(500)
    }
}

const deleteData = async (req, res) => {
    const id = req.body.id;

    if (!id) return res.sendStatus(400)

    try {
        await Datagrid.findByIdAndDelete(id)

        res.status(204).json({
            success: true,
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = { getData, updateData, deleteData }