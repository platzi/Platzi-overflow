import express from 'express'
import { required } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

// GET /api/questions
app.get('/', async (req, res) => {
  try {
    const questions = await question.findAll()
    res.status(200).json(questions)
  } catch (error) {
    handleError(error, res)
  }
})

// GET /api/questions/:id
app.get('/:id', async (req, res) => {
  try {
    const q = await question.findById(req.params.id)
    res.status(200).json(q)
  } catch (error) {
    handleError(error, res)
  }
})

// POST /api/questions
app.post('/', required, async (req, res) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    icon,
    user: req.user._id
  }

  try {
    const savedQuestion = await question.create(q)
    res.status(201).json(savedQuestion)
  } catch (error) {
    handleError(error, res)
  }
})

app.post('/:id/answers', required, (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app
