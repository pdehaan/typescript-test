import express from "express";

const router = express.Router();
router.get(
  "/:name/:age?",
  (req: express.Request, res: express.Response): void => {
    const { name, age = 999 } = req.params as { name: string; age: number };
    res.send(`Allo, ${name}. You are ${age} years old today!`);
  },
);

export default router;
