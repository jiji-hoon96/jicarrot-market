import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session"{
    interface IronSessionData{
        user?: {
            id: number;
        }
    }
}

const cookieOptions = {
    cookieName: "jicarrotsession",
    password: process.env.MY_PW!
}

export function withApiSession(fn:any){
    return withIronSessionApiRoute(fn, cookieOptions)
}