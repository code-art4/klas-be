const mongoose = require('mongoose');

const DatagridSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: String
        },
        country: {
            type: String,
            required: true
        }        
    }
);

const Datagrid = mongoose.model('datagrid', DatagridSchema);

module.exports = Datagrid;
