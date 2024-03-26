import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import Account from "../app/models/Account.mjs";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

export default passport.use(
  new Strategy(options, (jwt_payload, done) => {
    Account.findOne({ _id: jwt_payload.sub }, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user);

      return done(null, false);
    });
  })
);
