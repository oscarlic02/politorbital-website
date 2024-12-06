import mongoose from "mongoose";

const missionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    launchDate: {
      type: Date,
      required: true,
    },
    spaceCraft: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Planned", "Started", "Completed", "Failed"],
      default: "Planned",
      required: false,
    },
  },
  {
    timestamp: true, // createdAt, updatedAt
  }
);

const Mission = mongoose.model('Mission', missionSchema)

export default Mission