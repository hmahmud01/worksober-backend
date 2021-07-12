import { filter } from 'lodash';
import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';
import Member, { MemberDocument } from '../model/member.model';

export function createMember(input: DocumentDefinition<MemberDocument>) {
    console.log(input)
    return Member.create(input);
}

export function findMember(
    query: FilterQuery<MemberDocument>,
    options: QueryOptions = { lean: true }
) {
    return Member.findOne(query, {}, options)
}

export function findAndUpdate (
    query: FilterQuery<MemberDocument>,
    update: UpdateQuery<MemberDocument>,
    options: QueryOptions
) {
    return Member.findOneAndUpdate(query, update, options)
}

export function deleteMember( query: FilterQuery<MemberDocument>){
    return Member.deleteOne(query);
}

export function listMembers () {
    return Member.find();
}