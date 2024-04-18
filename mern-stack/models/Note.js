const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const noteSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    titel: {
      type: String,
      require: true,
    },
    text: [
      {
        type: String,
        default: "Employee",
      },
    ],
    completed: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 500,
});
module.exports = mongoose.model("Note", noteSchema);
