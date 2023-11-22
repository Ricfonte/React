import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
  PetName: {
    type: String,
    required: [true, "PetName es obligatorio"],
    minlength: [3, "PetName debe tener al menos 3 caracteres"]
  },
  PetType: {
    type: String,
    required: [true, "PetType es obligatorio"],
    minlength: [3, "PetType debe tener al menos 3 caracteres"]
  },
  description: {
    type: String,
    required: [true, "Description es obligatorio"],
    minlength: [3, "Description debe tener al menos 3 caracteres"]
  },
  Skills: {
    type: [String],
    validate: {
      validator: function (value) {
        return value.length <= 3;
      },
      message: 'No se pueden proporcionar más de 3 skills.'
    }
  }
});

const New = mongoose.model("animales", newSchema);

export default New;