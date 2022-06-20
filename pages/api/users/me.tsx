
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import {client} from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    const profile = await client.user.findUnique({
        where: {id : req.session.user?.id},
    });
    res.json({
        ok:true,
        profile,
    })
}
export default withIronSessionApiRoute(withHandler("GET", handler),{
    cookieName : "jicarrotsession",
    password: "KJC5VfUh3M6FopWrxNdukCBWonWxJdmq",
}) 