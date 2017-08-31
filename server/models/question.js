import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  user: { type: ObjectId, ref: 'User', required: true },
  answers: [{ type: ObjectId, ref: 'Answer', default: [] }]
})

export default mongoose.model('Question', QuestionSchema)
