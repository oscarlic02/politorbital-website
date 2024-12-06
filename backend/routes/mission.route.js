import express from "express";
import { validateMission } from "../middleware/mission.middleware.js";
import { getMissions,updateMission, deleteMission, createMission } from "../controllers/mission.controller.js";


const router = express.Router();

router.post("/", validateMission, createMission);
router.get("/", getMissions);
router.put("/:id", validateMission, updateMission);
router.delete("/:id", deleteMission);

export default router;