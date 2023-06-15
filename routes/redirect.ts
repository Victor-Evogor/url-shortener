import { Context } from "koa";
import { url } from "../model";

export const redirect = async ({ params, response}:Context) => {
    const alias = params.alias;
    const mappedUrl = await url.findOne({
        where: {
            alias
        }
    });

    if(!mappedUrl){
        response.status = 409;
        response.body = "Not found";
        return;
    }

    response.redirect(mappedUrl.dataValues.name);
    response.body = mappedUrl.dataValues.name;
}
