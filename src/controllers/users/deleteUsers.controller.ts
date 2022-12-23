import { deleteUsersService } from "../../services/users/deleteUsers.service"
import { Request, Response } from "express";


export const deleteUsersController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const users = await deleteUsersService(id)
    return res.status(204).json(users)
}