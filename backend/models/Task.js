import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    title: String,
    completed: Boolean,
    deadline: Date,
    remindAt: Date,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export default mongoose.model('Task', taskSchema);