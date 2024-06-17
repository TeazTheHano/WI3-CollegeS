import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'

export interface UserInfo {
    userID: string;
    synced?: boolean;
    name?: string;
    age?: number;
    loginMethod: string;
    email?: string;
    password?: string;
    dataCollect?: boolean;
    data?: {
        persona: string;
        interest: string[];
        favorite: string[];
        goal?: string;
    }
}

export default function defaultData() {
    let ListFavSubject: string[] = ['Math', 'Physics', 'Language', 'Biology', 'Geography', 'Literature', 'Music', 'History', 'Chemistry'];
    let listIntersts: string[] = ['Singing', 'Movie', 'Hangout', 'Cooking', 'Board game', 'Video game', 'Sports', 'Reading', 'Writing']
    return { ListFavSubject, listIntersts, }
}