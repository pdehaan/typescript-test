import express from "express";

const router = express.Router();
router.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.send("Hello the world!!");
  },
);

export default router;
