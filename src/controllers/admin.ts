import { Request, Response } from 'express';
// import { PostAdmin, GetAdmin } from '../model/admin';
// import * as adminData from '../data/admin'; // 생성 후 insertId를 리턴하도록 설계 export async function createAdmin(req: Request, res: Response) { const newAdminInfo: PostAdmin = req.body; const insertId = await adminData.createAdmin(newAdminInfo); res.status(201).json({ inserId: insertId }); } //모든 admin user 들을 배열로 전송하도록 설계 export async function getAdmin(req: Request, res: Response) { const adminInfo: Array<GetAdmin> = await adminData.getAdmin(); res.send(adminInfo); }
