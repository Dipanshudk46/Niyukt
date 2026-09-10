const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            address: {
                type: String,
                required: true,
                trim: true
            },

            type: {
                type: String,
                enum: ["Point"],
                required: true,
                default: "Point"
            },

            coordinates: {
                type: [Number],
                required: true,
                validate: {
                    validator: function (value) {
                        if (value.length !== 2) return false

                        const [longitude, latitude] = value

                        return (
                            longitude >= -180 &&
                            longitude <= 180 &&
                            latitude >= -90 &&
                            latitude <= 90
                        )
                    },
                    message: "Invalid GeoJSON coordinates"
                }
            }
        },

        scheduledAt: {
            type: Date,
            required: true
        },

        packageId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        requesterId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        status: {
            type: String,
            enum: [
                "DRAFT",
                "PUBLISHED",
                "ASSIGNED",
                "ACCEPTED",
                "IN_PROGRESS",
                "SUBMITTED",
                "UNDER_REVIEW",
                "COMPLETED",
                "CANCELLED",
                "DISPUTED"
            ],
            default: "DRAFT"
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Task", taskSchema)