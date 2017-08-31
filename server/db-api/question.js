import Debug from 'debug'
import { Question } from '../models'

const debug = new Debug('platzi-overflow:db-api:question')

export default {
  findAll: () => {
    debug('Finding all questions')
    return Question.find().populate('answers')
  },

  findById: (_id) => {
    debug(`Find question with id ${_id}`)
    return Question
      .findOne({ _id })
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },

  create: (q) => {
    debug(`Creating new question ${q}`)
    const question = new Question(q)
    return question.save()
  }
}
