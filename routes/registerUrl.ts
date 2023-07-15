import { Context } from "koa";
import { url } from "../model";
import { generateRandomString } from "../utils/randomString";


interface RequestBody{
    url?: string
}

export const registerUrl = async ({ request, response }: Context) => {
  const body = request.body as RequestBody;
  if(!body.url){
    response.body = "Provide url field in request body";
    return;
  }

  const existingUrl = await url.findOne({
    where: {
      name: body.url
    },
    attributes: ["id", "name", "alias"]
  })
  
  if(existingUrl){
    response.status = 200;
    response.body = existingUrl.dataValues.alias;
    console.log(existingUrl);
    return;
  }

   await url.create({
    name: body.url,
    alias: generateRandomString(4),
  });

  const newUrl = await url.findOne({
    where: {
      name: body.url
    },
    attributes: ["id", "name", "alias"]
  });
  
  response.body = newUrl?.dataValues.alias; 
};
