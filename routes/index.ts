import { getRoutes } from "./get"
import { postRoutes } from "./post";

export const routes = async (req:Request,reqBody:any) =>{
    if(req.method === 'GET'){
        return await getRoutes(req);
    }
    if(req.method === 'POST'){
        return await postRoutes(req,reqBody);
    }
    return new Response("404!");
}   