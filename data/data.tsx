import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'

export interface UserInfo {
    userID: string;
    synced?: boolean;
    name?: string;
    age?: number;
    loginMethod?: string;
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
export interface Banner {
    id: number,
    img: any,
    title: string,
    naviTo: string
}
export interface SuitableForYou {
    id: number,
    img: any,
    title: string,
    minScore: number,
    majorNum: number,
    minFee: number,
    maxFee: number,
    unitFee: string,
    yearOrSemForFee: string,
    location: string,
    capacity: number,
    // those above just for the home card, add more below
}


export default function defaultData() {
    let ListFavSubject: string[] = [`Math`, `Physics`, `Language`, `Biology`, `Geography`, `Literature`, `Music`, `History`, `Chemistry`];

    let listIntersts: string[] = [`Singing`, `Movie`, `Hangout`, `Cooking`, `Board game`, `Video game`, `Sports`, `Reading`, `Writing`]

    let bannerList: Banner[] = [
        { id: 1, img: require(`../assets/photos/homeBanner1.png`), title: `Shitttt1111 asdkjhfaskdjhf askfjhasdkjfh  kjashdfkjasf aksdjfh askj askj`, naviTo: `` },
        { id: 2, img: require(`../assets/photos/homeBanner2.png`), title: `Shitttt2222`, naviTo: `` },
        { id: 3, img: require(`../assets/photos/homeBanner3.png`), title: `Shitttt3333`, naviTo: `` },
        { id: 4, img: require(`../assets/photos/homeBanner4.png`), title: `Shitttt4444`, naviTo: `` },
    ]

    let suitableForYou: SuitableForYou[] = [
        { id: 1, img: require(`../assets/photos/homeBanner1.png`), title: `National 1 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
        { id: 2, img: require(`../assets/photos/homeBanner1.png`), title: `National 2 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
        { id: 3, img: require(`../assets/photos/homeBanner1.png`), title: `National 3 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
    ]
    return { ListFavSubject, listIntersts, bannerList, suitableForYou }
}