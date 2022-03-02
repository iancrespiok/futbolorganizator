import { Request, Response } from "express"
import { where } from "sequelize/types";
import { updateImportEqualsDeclaration } from "typescript";
import Player from "../models/player"

export const getPlayers = async(req: Request, res: Response) => {
    const players = await Player.findAll();

    res.json({
        players
    })
}

export const getPlayer = async(req: Request, res: Response) => {
    const {id} = req.params;
    const player = await Player.findByPk(id);
    
    if(player) {
        res.json(player);
    } else {
        res.status(404).json({
            msg: `There's no player with id ${id}`
        })
    }
}

export const postPlayer = async(req: Request, res: Response) => {
    const { body } = req;


    try {
        const existsEmail = await Player.findOne({
            where: {
                email: body.email
            }
        })
        if(existsEmail) { 
            return res.status(400).json({
                msg: 'Error, already exists a player with this email'
            })
        }
        const player = Player.build(body);
        player.save();
    } catch (error) {

    }



    res.json({
        msg: 'postPlayer',
        body
    })
}

export const putPlayer = async(req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req;
    
    try {
        const player = Player.findByPk(id);
        if(!player){
            return res.status(404).json({
                msg: 'Error, there is not an user with id ' + id 
            })
        }

        await Player.update(body, {
            where:{id:id}
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error, you should talk with administrator'
        })
    }
    res.json({
        msg: 'putPlayer',
        body
    })
}

export const deletePlayer = (req: Request, res: Response) => {
    const {id} = req.params;
    
    const player = Player.findByPk(id);
    Player.destroy({
        where: {id: id}
    });
    res.json({
        msg: 'putPlayer',
        id
    })
}
