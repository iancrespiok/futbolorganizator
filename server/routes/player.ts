import { Router } from "express";
import { deletePlayer, getPlayer, getPlayers, postPlayer, putPlayer } from "../controllers/players";


const router = Router();

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.post('/', postPlayer);
router.put('/:id', putPlayer);
router.delete('/:id', deletePlayer);


export default router;