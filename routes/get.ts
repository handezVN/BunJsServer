export const getRoutes = (req:Request) =>{
    const url = new URL(req.url);
    switch (url.pathname) {
        case '/' : return new Response("Home page!");
        break;
        case '/blog' : return new Response("Blog!");
        break;
        default :  return new Response("404!");
    }
}