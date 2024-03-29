import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import Account from "../app/models/Account.mjs";
import { configDotenv } from "dotenv";
import User from "../app/models/User.mjs";

configDotenv();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

export default passport.use(
  new Strategy(options, async (jwt_payload, done) => {
    try {
      const account = await Account.findOne({ _id: jwt_payload.sub });
      if (!account) throw new Error("Unauthorized");

      const user = await User.findOne({ accountId: account._id });

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  })
);
