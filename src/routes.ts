import { Express, Request, Response } from "express";
import { createMemberHandler, listMemberHandler } from "./controller/member.controller";

export default function(app: Express){
    app.get("/helthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/api/member", createMemberHandler);

    app.get("/api/members", listMemberHandler);
}