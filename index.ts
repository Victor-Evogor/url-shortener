import Koa from "koa";
import { config } from "dotenv";
import { router } from "./routes";
import koaBodyParser from "koa-bodyparser";
import staticServer from "koa-static";
config();
const PORT = process.env.PORT;

const app = new Koa();
app.use(staticServer("views"))
app.use(koaBodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log("server listening on " + PORT);
});
