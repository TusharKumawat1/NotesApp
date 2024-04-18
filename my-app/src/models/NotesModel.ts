import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },
    content: {
        require: true,
        type: String,
    },
    color:{
        require:true,
        type:String
    }
},{timestamps:true});
const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)
export default Note;