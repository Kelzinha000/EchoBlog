import { Router } from "express";

import { criarBlogs, getTodosBlogs } from "../Controllers/blogsControler.js";

const router = Router()
router.post("/postagens", criarBlogs)
router.get("/postagens",getTodosBlogs )

export default router;