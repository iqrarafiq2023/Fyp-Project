import mongoose from "mongoose";

const { Schema } = mongoose;

const ShelterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shelterName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    currentLocation: {
        type: {
            type: String,
            enum: ['Point'], // Ensure type is 'Point'
            required: true
        },
        coordinates: {
            type: [Number], // Array of numbers
            required: true
        }
    }
});

// Create 2dsphere index on location field
ShelterSchema.index({ location: "2dsphere" });

export default mongoose.model("Shelter", ShelterSchema);
