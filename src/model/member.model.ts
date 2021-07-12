import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

export interface MemberDocument extends mongoose.Document {
    name: string;
    age: number;
    detail: string;
    club: string;
    img: any;
    createdAt: Date;
}

const MemberSchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(10),
    },
    name: { type: String, default: true },
    age: { type: Number },
    detail: { type: String, default: true },
    club: { type: String, default: true },
    img: { data: Buffer, contentType: String }    
}
,{timestamps: true}
)

const Member = mongoose.model<MemberDocument>("Member", MemberSchema);

export default Member;