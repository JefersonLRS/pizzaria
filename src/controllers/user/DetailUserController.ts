import { Request, Response } from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailUserController {
    async handle(req: Request, res: Response) {
        const user = await new DetailUserService().execute()
        return res.json(user)
    }
}

export { DetailUserController }