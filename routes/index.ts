import Router from "koa-router";
import { registerUrl } from "./registerUrl";
import { redirect } from "./redirect";


export const router = new Router();

router.get("/hello", async (ctx) => {
    ctx.body = "Hello World"
})

router.post("/api/register", registerUrl);

router.get("/:alias",redirect);
