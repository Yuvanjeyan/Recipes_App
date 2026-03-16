const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
      unique: true
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description cannot exceed 500 characters"]
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: "At least one ingredient is required"
      }
    },
    instructions: {
      type: [String],
      required: [true, "Instructions are required"],
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: "At least one instruction step is required"
      }
    },
    cookingTime: {
      type: Number,
      required: [true, "Cooking time is required"],
      min: [1, "Cooking time must be at least 1 minute"]
    },
    servings: {
      type: Number,
      required: [true, "Servings is required"],
      min: [1, "Servings must be at least 1"]
    },
    difficulty: {
      type: String,
      required: [true, "Difficulty is required"],
      enum: {
        values: ["Easy", "Medium", "Hard"],
        message: "Difficulty must be Easy, Medium, or Hard"
      }
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);

