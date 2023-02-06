import { MongoServerError } from "mongodb";
import UserModel, { User } from "../models/user.model";

const getUserByEmailDb = async (email: string) => {
  const user = await UserModel.findOne<User>({ email });
    if (!user) {
      return;
    }
    return user;
}