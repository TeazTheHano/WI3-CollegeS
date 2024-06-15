import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'

export default function data() {
    let x = {};
    interface userInfo {
        name: string;
        age: number;
        loginMethod: string;
        email?: string;
        password?: string;
        dataCollect: boolean;
        data: {
            persona: string;
            interest: string[];
            favorite: string[];
            goal?: string;
        }
    }
    return { x }
}