

export const ResponseSuccess = (data:any) =>{
    return new Response(JSON.stringify(data),
    {
        status: 200
    }) 
}


export const ResponseError = (data:any) => {
    return new Response(JSON.stringify(data),{
        status:400
    })
}