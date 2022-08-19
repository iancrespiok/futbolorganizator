import { Request, Response } from "express"
import { where } from "sequelize/types";
import { updateImportEqualsDeclaration } from "typescript";
import User from "../models/user"

export const getUsers = async(req: Request, res: Response) => {
    const users = await User.findAll();

    res.json({
        users
    })
}

export const getUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `There's no user with id ${id}`
        })
    }
}

export const postUser = async(req: Request, res: Response) => {
    const { body } = req;


    try {
        const existsEmail = await User.findOne({
            where: {
                email: body.email
            }
        })
        if(existsEmail) { 
            return res.status(400).json({
                msg: 'Error, already exists a user with this email'
            })
        }
        const user = User.build(body);
        user.save();
    } catch (error) {

    }



    res.json({
        msg: 'postUser',
        body
    })
}

export const putUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    
    try {
        const user = User.findByPk(id);
        if(!user){
            return res.status(404).json({
                msg: 'Error, there is not an user with id ' + id 
            })
        }

        await User.update(body, {
            where:{id:id}
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error, you should talk with administrator'
        })
    }
    res.json({
        msg: 'putUser',
        body
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const {id} = req.params;
    
    const user = User.findByPk(id);
    User.destroy({
        where: {id: id}
    });
    res.json({
        msg: 'putUser',
        id
    })
}
