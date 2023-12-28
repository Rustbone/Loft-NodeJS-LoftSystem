import { Schema, model } from "mongoose";
import { UserModel } from './index.js'

const newsSchema = new Schema({
    created_at: {
        type: Date,
      },
      text: {
        type: String,
      },
      title: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: UserModel
      }
})

export const NewsModel = model('news', newsSchema)