import { get } from 'lodash';
import { Request, Response } from 'express';
import { createMember, listMembers } from '../services/member.service';

export async function createMemberHandler(req: Request, res: Response){
    console.log(req.body);

    const body = req.body;
    const file = req.files;

    const member = await createMember({ ...body, img: file});
    console.log("member added");
    return res.send(member);
}

export async function listMemberHandler(req: Request, res: Response){
    console.log("listing people")
    const members = await listMembers();
    console.log(members);
    return res.send(members);
}