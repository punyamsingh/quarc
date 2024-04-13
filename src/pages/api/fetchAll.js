import db from "../../../prisma/prisma";

export default async function handler(req,res) {
    if(req.method === "GET") {
        const allSnips = await db.snippets.findMany({
    
        });

        res.status(200).json(allSnips);
    } else {
        res.status(405).json({message: "Method not allowed"});
    }
}