import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Salwks";
  res.locals.routes = routes;
  next();
};
