import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import Account from "../app/models/Account.mjs";
import { configDotenv } from "dotenv";

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

      return done(null, account);
    } catch (error) {
      return done(error, null);
    }
  })
);
