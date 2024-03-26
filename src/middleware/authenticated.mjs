import passport from "passport";
import "../strategies/jwt.mjs";

export const isAuthenticated = passport.authenticate("jwt", { session: false });
