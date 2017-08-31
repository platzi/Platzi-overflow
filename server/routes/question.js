import express from 'express'
import { required, questionMiddleware } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'
import { User } from '../models'

const app = express.Router()

// GET /api/questions
app.get('/', async (req, res) => {
  try {
    const { sort } = req.query
    const questions = await question.findAll(sort)
    res.status(200).json(questions)
  } catch (error) {
    handleError(error, res)
  }
})

// GET /api/questions/:id
app.get('/:id', questionMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.question)
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

app.post('/:id/answers', required, questionMiddleware, async (req, res) => {
  const a = req.body
  const q = req.question
  a.createdAt = new Date()
  a.user = new User(req.user)
  try {
    const savedAnswer = await question.createAnswer(q, a)
    res.status(201).json(savedAnswer)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
