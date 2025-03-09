import Mission from "../models/mission.model.js";
export const getMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    res.status(200).json(missions);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to retrieve missions." });
  }
};

export const updateMission = async (req, res) => {
  try {
    const updatedMission = await Mission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMission) {
      return res
        .status(404)
        .json({ success: false, error: "Mission not found" });
    }
    res.status(200).json(updatedMission);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to update mission." });
  }
};

export const deleteMission = async (req, res) => {
  try {
    const deletedMission = await Mission.findByIdAndDelete(req.params.id); // Delete mission by ID
    if (!deletedMission) {
      return res
        .status(404)
        .json({ success: false, error: "Mission not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Mission deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to delete mission." });
  }
};

export const createMission = async (req, res) => {
  try {
    const mission = new Mission(req.body);
    const savedMission = await mission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to create mission." });
  }
};
