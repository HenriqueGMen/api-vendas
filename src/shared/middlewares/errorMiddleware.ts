import { Request, Response, NextFunction } from 'express'
import AppError from '../errors/appError'

export default class ErrorMiddleware {
  handle(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  }
}
