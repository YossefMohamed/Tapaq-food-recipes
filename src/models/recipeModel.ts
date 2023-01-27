import mongoose, { Schema } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  ingrediantes: string[];
  steps: string[];
  author: mongoose.Schema.Types.ObjectId;
}

const recipeSchema: Schema<IRecipe> = new mongoose.Schema<IRecipe>(
  {
    title: {
      type: String,
      required: true,
    },
    ingrediantes: [
      {
        type: String,
        required: true,
      },
    ],
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Recipe = mongoose.model<IRecipe>("Home", recipeSchema);
export default Recipe;