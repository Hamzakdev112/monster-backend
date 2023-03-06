const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    spaceId: {
        type: mongoose.Schema.Types.ObjectId,
        required:[true, "Please enter your workspace id"]
    },
    name: {
        type: String,
        required:[true, "Please enter task name"]
    },
    description: {
        type: String,
        required:[true, "Please enter description"]
    },
    attachments: {
        type:Array,

    },
    status: {
        type: String,
        default: 'IN PROGRESS'
    },
    priority: {
        type: String,
        required: true  
    },
    dueDate: {
        type: Date,
            
    },
    assigner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:[true, 'must have an assigner'],
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:[true, 'must have an assignee'],
    },
    watchers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Users',
    },
},{
    timestamps:true
});

module.exports = new mongoose.model('Tasks', taskSchema);