import { NextFunction, Request, Response } from "express";
import UsersService from "#root/adapters/UsersService";

const injectSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userSessionId } = req.cookies;

  if (userSessionId) {
    const userSession = await UsersService.fetchUserSession({
      sessionId: userSessionId,
    });
    res.locals.userSession = userSession;
  }

  return next();
};

export default injectSession;
