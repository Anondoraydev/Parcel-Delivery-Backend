import { Router } from "express";

export const router = Router();

const moduleRoutes = [
  //   {
  //     path: "/user",
  //     route: UseRouter,
  //   },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});
