import Debug from 'debug'
import { Question } from '../models'

const debug = new Debug('platzi-overflow:db-api:question')

export default {
  findAll: async () => {
    debug('Finding all questions')
    return await Question.find().populate('answers')
  },

  findById: async (_id) => {
    debug(`Find question with id ${id}`)
    return await Question
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
  }
}
