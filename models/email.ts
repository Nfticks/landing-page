import mongoose, { Schema, Document, model } from "mongoose";

export interface IEmail extends Document {
  email: string;
}

const EmailSchema: Schema = new Schema(
  {
    email: {
      type: String,
      maxlength: [50, "Email cannot be longer than 50 characters"],
      validate: {
        validator: (v: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
        message: (props: { value: string }) =>
          `${props.value} is not a valid email address!`,
      },
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Email as mongoose.Model<IEmail>) ||
  model<IEmail>("Email", EmailSchema);