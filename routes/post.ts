import { Controller } from "../controllers";
import { addUser } from "../services/user";

export const postRoutes = (req:Request,reqBody:any) =>{
    const url = new URL(req.url);
    switch (url.pathname) {
        case '/' : return new Response("Index!");
        case '/login' : {
           return Controller.login(reqBody);
        } ;
        case '/register' : return Controller.register(reqBody);
        case '/blog' : return new Response("Blog!");
        default :  return new Response("404!");
    }
}