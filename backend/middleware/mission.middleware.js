export const validateMission = (req, res, next) => {
  const { name, launchDate, spaceCraft, destination, status } = req.body;

  // Check required fields
  if (!name || !launchDate || !spaceCraft || !destination) {
    return res.status(400).json({
      success: false,
      error:
        "Please provide all mandatory fields: Name, Launch Date, SpaceCraft, and Destination",
    });
  }

  // Validate name
  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Name must be a valid string.",
    });
  }

  // Validate launchDate
  const date = new Date(launchDate);
  if (isNaN(date.getTime())) {
    return res.status(400).json({
      success: false,
      error: "Launch Date must be a valid date.",
    });
  }

  // Validate space craft
  if (typeof spaceCraft !== "string" || spaceCraft.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "SpaceCraft must be a valid string.",
    });
  }

  // Validate destination
  if (typeof destination !== "string" || destination.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Destination must be a valid string.",
    });
  }

  // Validate status
  const validStatuses = [
    "Planned",
    "Launched",
    "In Progress",
    "Completed",
    "Failed",
  ];
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Status must be one of the following values: ${validStatuses.join(
        ", "
      )}`,
    });
  }

  next();
};
