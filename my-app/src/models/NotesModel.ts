import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        require: true,
        type: String,
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
});
const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)
export default Note;