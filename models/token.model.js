import {model, Schema} from "mongoose";

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, red: 'User'},
    refreshToken: {type: String, required: true}
})

export default model('Token', TokenSchema)