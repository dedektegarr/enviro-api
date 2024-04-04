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

      const currentUser = {
        _id: user._id,
        username: account.username,
        email: account.email,
        work: user.work,
        point: user.point,
        password: account.password,
        avatarUrl: user.avatarUrl,
      };

      return done(null, currentUser);
    } catch (error) {
      return done(error, null);
    }
  })
);
