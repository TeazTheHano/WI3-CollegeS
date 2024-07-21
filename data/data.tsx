import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'
import { bestOfEcoBu, bestOfEcoMo, bestOfEcoSo, bestOfScBiIcon, bestOfScCoIcon, bestOfScMaIcon, ENFJicon, ENFPicon, ENTJicon, ENTPicon, ESFJicon, ESFPicon, ESTJicon, ESTPicon, INFJicon, INFPicon, INTJicon, INTPicon, ISFJicon, ISFPicon, ISTJicon, ISTPicon } from '../assets/svgXml';
import clrStyle from '../assets/componentStyleSheet';

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
    createTime?: any;
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
export interface BestOfSubject {
    icon?: any,
    description: string,
    title: string,
    navTo: string,
}
export interface MBTI {
    mbti: string,
    name: string,
    description: string,
    personality: string[],
    favJob: string[],
    icon: any,
}

export interface MBTIGroup {
    gr: string,
    clr: string,
    data: MBTI[],
    desc: string
}

export interface RecentSearch {
    indexNum: number,
    uniName: string,
    uniShortName: string,
    field: string,
}

export interface Major {
    majorName?: string,
    examGroup?: {
        name: string,
        lowestStandardScore?: number | null,
        highestStandardScore?: number | null,
    }[] | null,
    degreeType?: 'College' | 'Doctor' | 'Master' | 'College Advanced Program',
    description?: string,
    afterGraduation?: boolean,
    addmission?: number | null,
    majorFee?: number | null,
    icon?: any,
    field?: string,
}

export interface University {
    id?: number,
    name?: string,
    shortName?: string | null,
    description?: string[],
    field?: string[],
    city?: string,
    location?: string,
    img?: any,
    admission?: number,
    refURL?: string[],
    // major
    major?: Major[],
    mainMajor?: string[],
    specialProgram?: string[],
    // score
    lowestStandardScore?: number,
    highestStandardScore?: number,
    scoreRefYear?: number,
    // fee
    minFee?: number,
    maxFee?: number,
    avgFee?: number,
    unitFee?: string,
    yearOrSemForFee?: string,
}

export interface CompareMajorItem {
    uniName: string,
    major: Major,
}

export let ListFavSubject: string[] = [`Math`, `Physics`, `Language`, `Biology`, `Geography`, `Literature`, `Music`, `History`, `Chemistry`];

export let listIntersts: string[] = [`Singing`, `Movie`, `Hangout`, `Cooking`, `Board game`, `Video game`, `Sports`, `Reading`, `Writing`]

export let bannerList: Banner[] = [
    { id: 1, img: require(`../assets/photos/homeBanner1.png`), title: `Shitttt1111 asdkjhfaskdjhf askfjhasdkjfh  kjashdfkjasf aksdjfh askj askj`, naviTo: `` },
    { id: 2, img: require(`../assets/photos/homeBanner2.png`), title: `Shitttt2222`, naviTo: `` },
    { id: 3, img: require(`../assets/photos/homeBanner3.png`), title: `Shitttt3333`, naviTo: `` },
    { id: 4, img: require(`../assets/photos/homeBanner4.png`), title: `Shitttt4444`, naviTo: `` },
]

export let suitableForYou: SuitableForYou[] = [
    { id: 1, img: require(`../assets/photos/homeBanner1.png`), title: `National 1 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
    { id: 2, img: require(`../assets/photos/homeBanner1.png`), title: `National 2 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
    { id: 3, img: require(`../assets/photos/homeBanner1.png`), title: `National 3 Economics University`, minScore: 18, majorNum: 22, minFee: 1000, maxFee: 2200, unitFee: `$`, yearOrSemForFee: `Semester`, location: `Hanoi`, capacity: 1110 },
]

export let bestOfScience: BestOfSubject[] = [
    { icon: bestOfScCoIcon(vw(20), vw(20)), description: `Computer science`, title: `HUST`, navTo: `` },
    { icon: bestOfScBiIcon(vw(20), vw(20)), description: `Biology`, title: `HMU`, navTo: `` },
    { icon: bestOfScMaIcon(vw(20), vw(20)), description: `Mathematics`, title: `VNU`, navTo: `` },
]

export let bestOfEconomic: BestOfSubject[] = [
    { icon: bestOfEcoMo(vw(20), vw(20)), description: `Money analysis`, title: `FTU`, navTo: `` },
    { icon: bestOfEcoSo(vw(20), vw(20)), description: `Social marketing`, title: `AJC`, navTo: `` },
    { icon: bestOfEcoBu(vw(20), vw(20)), description: `Business analysis`, title: `NEU`, navTo: `` },
]

export let mbti: MBTI[] = [
    {
        mbti: `ISTJ`,
        name: `Inspector`,
        description: `Reserved and practical, they tend to be loyal, orderly, and traditional.`,
        personality: [
            `These individuals tend to be serious, matter-of-fact, and reserved. They appreciate order and organization and pay a great deal of attention to detail.`,
            `They like to plan things out in advance and place an emphasis on tradition and law. They are responsible and realistic and can be described as dependable and trustworthy`],
        favJob: [`Accountant`, `Auditor`, `Lawyer`, `Police`, `Military`, `Manager`, `Teacher`],
        icon: ISTJicon()
    },
    {
        mbti: `ISTP`,
        name: `Crafter`,
        description: `Highly independent, they enjoy new experiences that provide first-hand learning.`,
        personality: [
            `People with this personality type are fearless and independent. They love adventure, new experiences, and risk-taking.`,
            `They tend to be quiet observers and are not well attuned to the emotional states of others, sometimes coming across as insensitive or stoic.`,
            `They are results- oriented, acting quickly to find workable solutions and understand the underlying cause of practical problems`
        ],
        favJob: [`Engineer`, `Mechanic`, `Athletes`, `Pilot`, `Detective`, `Special Forces`, `Police`, `Firefighter`],
        icon: ISTPicon()
    },
    {
        mbti: `ISFJ`,
        name: `Protector`,
        description: `Warm-hearted and dedicated, they are always ready to protect the people they care about.`,
        personality: [
            `These individuals are friendly, responsible, and reserved. They are service and work-oriented, committing to meeting their obligations and duties.`,
            `They are loyal, considerate, and place a lot of focus on the care of others. They are non-confrontational and value an orderly and harmonious environment.`
        ],
        favJob: [`Nurse`, `Doctor`, `Preschool Teacher`, `Customer Service Representative`, `Administrative Staff`, `Secretary`],
        icon: ISFJicon()
    },
    {
        mbti: `ISFP`,
        name: `Artist`,
        description: `Easy-going and flexible, they tend to be reserved and artistic.`,
        personality: [
            `These individuals are quiet, friendly, easy going, and sensitive. They have a strong need for personal space and time alone to recharge.`,
            `They value deep connection and prefer to spend time with smaller groups of close friends and family.`,
            `They are highly considerate and accepting, avoiding confrontation and committed to their values and to people who are important to them.`
        ],
        favJob: [`Artist`, `Designer`, `Musician`, `Photographer`, `Makeup Artist`, `Veterinarian`, `Music Teacher`],
        icon: ISFPicon()
    },
    {
        mbti: `INFJ`,
        name: `Advocate`,
        description: `Creative and analytical, they are considered one of the rarest Myers-Briggs types.`,
        personality: [
            `People with this personality type are serious, logical and hardworking. They are also compassionate, conscientious, and reserved.`,
            `They value close, deep connections and are sensitive to the needs of others, but also need time and space alone to recharge.`
        ],
        favJob: [`Psychologist`, `Writer`, `Diplomat`, `Consultant`, `Social Activist`],
        icon: INFJicon()
    },
    {
        mbti: `INFP`,
        name: `Mediator`,
        description: `Idealistic with high values, they strive to make the world a better place.`,
        personality: [
            `These people are creative, idealistic, caring, and loyal. They have high values and morals, and are constantly seeking out ways to understand people and to best serve humanity.`,
            `They are family and home-oriented and prefer to interact with a select group of close friends.`
        ],
        favJob: [`Artist`, `Designer`, `Writer`, `Poet`, `Journalist`, `Philosopher`],
        icon: INFPicon()
    },
    {
        mbti: `INTJ`,
        name: `Architect`,
        description: `High logical, they are both very creative and analytical.`,
        personality: [
            `These people are highly independent, self-confident and prefer to work alone. They are analytical, creative, logical, and driven.`,
            `They place an emphasis on logic and fact rather than emotion and can be viewed as perfectionists.`,
            `They tend to have high expectations of competence and performance for themselves and others.`
        ],
        favJob: [`Engineer`, `Scientist`, `Programmer`, `Strategic Manager`, `Educator`],
        icon: INTJicon()
    },
    {
        mbti: `INTP`,
        name: `Thinker`,
        description: `Quiet and introverted, they are known for having a rich inner world.`,
        personality: [
            `People with this personality type are described as quiet, contained, and analytical. They are highly focused on how things work and on solving problems, and tend to be good at logic and math.`,
            `They are more interested in ideas and theoretical concepts than in social interaction. They are loyal and affectionate to their closest friends and family, but tend to be difficult to get to know.`
        ],
        favJob: [`Mathematics`, `Physics`, `Computer Science`, `Philosophy`, `Natural Sciences`, `Analyst`, `University Lecturer`],
        icon: INTPicon()
    },
    {
        mbti: `ESTP`,
        name: `Persuader`,
        description: `Out-going and dramatic, they enjoy spending time with others and focusing on the here-and-now`,
        personality: [
            `These individuals are action-oriented, taking pragmatic approaches to obtain results and solve problems quickly. They are often sophisticated, charming, and spontaneous.`,
            `They are outgoing and energetic, and enjoy spending time with a wide circle of friends and acquaintances. They focus on the here and now and prefer the practical over the abstract.`
        ],
        favJob: [`Business`, `Sales`, `Advertising`, `Entertainment`, `Stocks`],
        icon: ESTPicon()
    },
    {
        mbti: `ESTJ`,
        name: `Director`,
        description: `Assertive and rule-oriented, they have high principles and a tendency to take charge.`,
        personality: [
            `These people are responsible, practical, and organized. They are assertive and like to take charge, focused on getting results in the most efficient way possible. They have clear standards and place a high value on tradition and rules.`,
            `They can be seen as rigid, stubborn, or bossy as they are forceful in implementing their plans. However, they tend to excel at putting plans into action because they are hardworking, self-confident, and dependable.`
        ],
        favJob: [`Project Management`, `Executive Director`, `Banking`, `Finance`, `Military`],
        icon: ESTJicon()
    },
    {
        mbti: `ESFP`,
        name: `Performer`,
        description: `Outgoing and spontaneous, they enjoy taking center stage.`,
        personality: [
            `These people tend to be outgoing, friendly, and impulsive, seizing energy from other people. They love to be the center of attention and enjoy working with others in new environments.`,
            `They can be described as easy going, fun, and optimistic. They are spontaneous and focused on the present moment, and enjoy learning through hands-on experiences with other people.`
        ],
        favJob: [`Designer`, `Model`, `Actor`, `Singer`, `MC`, `Veterinarian`, `Preschool Teacher`, `Tourist guide`],
        icon: ESFPicon()
    },
    {
        mbti: `ESFJ`,
        name: `Caregiver`,
        description: `Soft-hearted and outgoing, they tend to believe the best about other people.`,
        personality: [
            `These individuals are warmhearted, conscientious, and harmonious. They wear their hearts on their sleeves and tend to see the best in others.`,
            `They enjoy helping others and providing the care that people need, but want to be appreciated and noticed for their contributions. They are careful observers of others and excel in situations involving personal contact and community.`
        ],
        favJob: [`Teacher`, `Doctor`, `Nurse`, `Customer Service Representative`, `Hotel Manager`],
        icon: ESFJicon()
    },
    {
        mbti: `ENFP`,
        name: `Campaigner`,
        description: `Charismatic and energetic, they enjoy situations where they can put their creativity to work.`,
        personality: [
            `These individuals are enthusiastic, creative, energetic, and highly imaginative. They have excellent people and communication skills and are good at giving others appreciation and support.`,
            `They do, however, seek approval from others. They value emotions and expression. They dislike routine and might struggle with disorganization and procrastination.`
        ],
        favJob: [`Journalist`, `Writer`, `Producer`, `Human Resources Manager`, `Consultant`, `Press`, `Communications`, `Performing Arts`, `Education`],
        icon: ENFPicon()
    },
    {
        mbti: `ENFJ`,
        name: `Giver`,
        description: `Loyal and sensitive, they are known for being understanding and generous.`,
        personality: [
            `These people are responsible, warm, and loyal. They are highly attuned to the emotions of others and capable of forging friendships with essentially anybody.`,
            `They have a desire to help others fulfill their potential, and they derive personal satisfaction from helping others. They tend to make good leaders as they are highly capable of facilitating agreement among diverse groups of people.`
        ],
        favJob: [`Careers related to education`, `Counseling`, `Health service`, `Society and arts`],
        icon: ENFJicon()
    },
    {
        mbti: `ENTP`,
        name: `Debater`,
        description: `Highly inventive, they love being surrounded by ideas and tend to start many projects (but may struggle to finish them).`,
        personality: [
            `People with this personality type can be described as innovative, outspoken, and lively. They are idea-oriented and are more focused on the future rather than on the present moment.`,
            `They enjoy interacting with a wide variety of people and love to engage with others in debates. They tend to be easy to get along with, but also can be argumentative at times. They are great conversationalists and make good entrepreneurs.`
        ],
        favJob: [`Lawyer`, `Software Engineer`, `Inventor`, `Scientist`, `Journalist`, `Politician`, `University Lecturer`],
        icon: ENTPicon()
    },
    {
        mbti: `ENTJ`,
        name: `Commander`,
        description: `Outspoken and confident, they are great at making plans and organizing projects.`,
        personality: [
            `These individuals like to take charge. They value organization and structure and appreciate long-term planning and goal setting.`,
            `They have strong people skills and enjoy interacting with others, but they are not necessarily attuned to their own emotions or the emotions of others.`,
            `They have strong leadership skills and tend to make good executives, captains, and administrators.`
        ],
        favJob: [`CEO`, `Lawyer`, `Politician`,],
        icon: ENTJicon()
    },
]

export const mbtiGroup = [
    { gr: 'Analyst', clr: clrStyle.main7, data: mbti.filter((item) => item.mbti.includes('N') && item.mbti.includes('T')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.` },
    { gr: 'Diplomats', clr: clrStyle.main3, data: mbti.filter((item) => item.mbti.includes('N') && item.mbti.includes('F')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.` },
    { gr: 'Sentinels', clr: clrStyle.main1, data: mbti.filter((item) => item.mbti.includes('S') && item.mbti.includes('J')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.` },
    { gr: 'Explorers', clr: clrStyle.main9, data: mbti.filter((item) => item.mbti.includes('S') && item.mbti.includes('P')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.` },
]

export const examGroupList: any = {
    A00: [`Math`, `Physics`, `Chemistry`,],
    A01: [`Math`, `Physics`, `English`,],
    A02: [`Math`, `Physics`, `Biology`,],
    A03: [`Math`, `Physics`, `History`,],
    A04: [`Math`, `Physics`, `Geography`,],
    A05: [`Math`, `Chemistry`, `History`,],
    A06: [`Math`, `Chemistry`, `Geography`,],
    A07: [`Math`, `History`, `Geography`,],
    A08: [`Math`, `History`, `Civic Education`,],
    A09: [`Math`, `Geography`, `Civic Education`,],
    A10: [`Math`, `Physics`, `Civic Education`,],
    A11: [`Math`, `Chemistry`, `Civic Education`,],
    A12: [`Math`, `Natural Science`, `Social Science`,],
    A14: [`Math`, `Natural Science`, `Geography`,],
    A15: [`Math`, `Natural Science`, `Civic Education`,],
    A16: [`Math`, `Natural Science`, `Literature`,],
    A17: [`Math`, `Physics`, `Social Science`,],
    A18: [`Math`, `Chemistry`, `Social Science`,],
    B00: [`Math`, `Chemistry`, `Biology`,],
    B01: [`Math`, `Biology`, `History`,],
    B02: [`Math`, `Biology`, `Geography`,],
    B03: [`Math`, `Biology`, `Literature`,],
    B04: [`Math`, `Biology`, `Civic Education`,],
    B05: [`Math`, `Biology`, `Social Science`,],
    B08: [`Math`, `Biology`, `English`,],
    C00: [`Literature`, `History`, `Geography`,],
    C01: [`Literature`, `Math`, `Physics`,],
    C02: [`Literature`, `Math`, `Chemistry`,],
    C03: [`Literature`, `Math`, `History`,],
    C04: [`Literature`, `Math`, `Geography`,],
    C05: [`Literature`, `Physics`, `Chemistry`,],
    C06: [`Literature`, `Physics`, `Biology`,],
    C07: [`Literature`, `Physics`, `History`,],
    C08: [`Literature`, `Chemistry`, `Biology`,],
    C09: [`Literature`, `Physics`, `Geography`,],
    C10: [`Literature`, `Chemistry`, `History`,],
    C12: [`Literature`, `Biology`, `History`,],
    C13: [`Literature`, `Biology`, `Geography`,],
    C14: [`Literature`, `Math`, `Civic Education`,],
    C15: [`Literature`, `Math`, `Social Science`,],
    C16: [`Literature`, `Physics`, `Civic Education`,],
    C17: [`Literature`, `Chemistry`, `Civic Education`,],
    C19: [`Literature`, `History`, `Civic Education`,],
    C20: [`Literature`, `Geography`, `Civic Education`,],
    D01: [`Literature`, `Math`, `English`,],
    D02: [`Literature`, `Math`, `Russian`,],
    D03: [`Literature`, `Math`, `French`,],
    D04: [`Literature`, `Math`, `Chinese`,],
    D05: [`Literature`, `Math`, `German`,],
    D06: [`Literature`, `Math`, `Japanese`,],
    D07: [`Math`, `Chemistry`, `English`,],
    D08: [`Math`, `Biology`, `English`,],
    D09: [`Math`, `History`, `English`,],
    D10: [`Math`, `Geography`, `English`,],
    D11: [`Literature`, `Physics`, `English`,],
    D12: [`Literature`, `Chemistry`, `English`,],
    D13: [`Literature`, `Biology`, `English`,],
    D14: [`Literature`, `History`, `English`,],
    D15: [`Literature`, `Geography`, `English`,],
    D16: [`Math`, `Geography`, `German`,],
    D17: [`Math`, `Geography`, `Russian`,],
    D18: [`Math`, `Geography`, `Japanese`,],
    D19: [`Math`, `Geography`, `French`,],
    D20: [`Math`, `Geography`, `Chinese`,],
    D21: [`Math`, `Chemistry`, `German`,],
    D22: [`Math`, `Chemistry`, `Russian`,],
    D23: [`Math`, `Chemistry`, `Japanese`,],
    D24: [`Math`, `Chemistry`, `French`,],
    D25: [`Math`, `Chemistry`, `Chinese`,],
    D26: [`Math`, `Physics`, `German`,],
    D27: [`Math`, `Physics`, `Russian`,],
    D28: [`Math`, `Physics`, `Japanese`,],
    D29: [`Math`, `Physics`, `French`,],
    D30: [`Math`, `Physics`, `Chinese`,],
    D31: [`Math`, `Biology`, `German`,],
    D32: [`Math`, `Biology`, `Russian`,],
    D33: [`Math`, `Biology`, `Japanese`,],
    D34: [`Math`, `Biology`, `French`,],
    D35: [`Math`, `Biology`, `Chinese`,],
    D41: [`Literature`, `Geography`, `German`,],
    D42: [`Literature`, `Geography`, `Russian`,],
    D43: [`Literature`, `Geography`, `Japanese`,],
    D44: [`Literature`, `Geography`, `French`,],
    D45: [`Literature`, `Geography`, `Chinese`,],
    D52: [`Literature`, `Physics`, `Russian`,],
    D54: [`Literature`, `Physics`, `French`,],
    D55: [`Literature`, `Physics`, `Chinese`,],
    D61: [`Literature`, `History`, `German`,],
    D62: [`Literature`, `History`, `Russian`,],
    D63: [`Literature`, `History`, `Japanese`,],
    D64: [`Literature`, `History`, `French`,],
    D65: [`Literature`, `History`, `Chinese`,],
    D66: [`Literature`, `Civic Education`, `English`,],
    D68: [`Literature`, `Civic Education`, `Russian`,],
    D69: [`Literature`, `Civic Education`, `Japanese`,],
    D70: [`Literature`, `Civic Education`, `French`,],
    D72: [`Literature`, `Natural Science`, `English`,],
    D73: [`Literature`, `Natural Science`, `German`,],
    D74: [`Literature`, `Natural Science`, `Russian`,],
    D75: [`Literature`, `Natural Science`, `Japanese`,],
    D76: [`Literature`, `Natural Science`, `French`,],
    D77: [`Literature`, `Natural Science`, `Chinese`,],
    D78: [`Literature`, `Social Science`, `English`,],
    D79: [`Literature`, `Social Science`, `German`,],
    D80: [`Literature`, `Social Science`, `Russian`,],
    D81: [`Literature`, `Social Science`, `Japanese`,],
    D82: [`Literature`, `Social Science`, `French`,],
    D83: [`Literature`, `Social Science`, `Chinese`,],
    D84: [`Math`, `Civic Education`, `English`,],
    D85: [`Math`, `Civic Education`, `German`,],
    D86: [`Math`, `Civic Education`, `Russian`,],
    D87: [`Math`, `Civic Education`, `French`,],
    D88: [`Math`, `Civic Education`, `Japanese`,],
    D90: [`Math`, `Natural Science`, `English`,],
    D91: [`Math`, `Natural Science`, `French`,],
    D92: [`Math`, `Natural Science`, `German`,],
    D93: [`Math`, `Natural Science`, `Russian`,],
    D94: [`Math`, `Natural Science`, `Japanese`,],
    D95: [`Math`, `Natural Science`, `Chinese`,],
    D96: [`Math`, `Social Science`, `English`,],
    D97: [`Math`, `Social Science`, `French`,],
    D98: [`Math`, `Social Science`, `German`,],
    D99: [`Math`, `Social Science`, `Russian`,],
    H00: [`Literature`, `Art Ability 1`, `Art Ability 2`,],
    H01: [`Math`, `Literature`, `Drawing`,],
    H02: [`Math`, `Drawing`, `Decorative Painting`,],
    H03: [`Math`, `Natural Science`, `Art Ability`,],
    H04: [`Math`, `English`, `Art Ability`,],
    H05: [`Literature`, `Social Science`, `Art Ability`,],
    H06: [`Literature`, `English`, `Art`,],
    H07: [`Math`, `Drawing`, `Decoration`,],
    H08: [`Literature`, `History`, `Art`,],
    K01: [`Math`, `English`, `Informatics`,],
    M00: [`Literature`, `Math`, `Elocution`, `Singing`,],
    M01: [`Literature`, `History`, `Ability`,],
    M02: [`Math`, `Ability 1`, `Ability 2`,],
    M03: [`Literature`, `Ability 1`, `Ability 2`,],
    M04: [`Math`, `Elocution`, `Singing and Dancing`,],
    M09: [`Math`, `Early Childhood Education Ability 1(storytelling, reading, expression)`, `Early Childhood Education Ability 2(Singing)`],
    M10: [`Math`, `English`, `Ability 1`],
    M11: [`Literature`, `Journalism Ability`, `English`],
    M13: [`Math`, `Biology`, `Ability`],
    M14: [`Literature`, `Journalism Ability`, `Math`],
    M15: [`Literature`, `Journalism Ability`, `English`],
    M16: [`Literature`, `Journalism Ability`, `Physics`],
    M17: [`Literature`, `Journalism Ability`, `History`],
    M18: [`Literature`, `Photojournalism Ability`, `Math`],
    M19: [`Literature`, `Photojournalism Ability`, `English`],
    M20: [`Literature`, `Photojournalism Ability`, `Physics`],
    M21: [`Literature`, `Photojournalism Ability`, `History`],
    M22: [`Literature`, `Television and Film Ability`, `Math`],
    M23: [`Literature`, `Television and Film Ability`, `English`],
    M24: [`Literature`, `Television and Film Ability`, `Physics`],
    M25: [`Literature`, `Television and Film Ability`, `History`],
    N00: [`Literature`, `Music Ability 1`, `Music Ability 2`],
    N01: [`Literature`, `Solfeggio`, `Performing Arts`],
    N02: [`Literature`, `Solfeggio`, `Singing or Playing an Instrument`],
    N03: [`Literature`, `Recording - Solfeggio`, `Specialization`],
    N04: [`Literature`, `Presentation Ability`, `Ability`],
    N05: [`Literature`, `Event Scripting`, `Ability`],
    N06: [`Literature`, `Recording, Solfeggio`, `Specialization`],
    N07: [`Literature`, `Recording, Solfeggio`, `Specialization`],
    N08: [`Literature`, `Harmony`, `Developing Themes and Popularizing Poetry`],
    N09: [`Literature`, `Harmony`, `Drawing Lots Conducting on the Spot`],
    R00: [`Literature`, `History`, `Journalism Ability`],
    R01: [`Literature`, `Geography`, `Performing Arts Ability`],
    R02: [`Literature`, `Math`, `Performing Arts Ability`],
    R03: [`Literature`, `English`, `Performing Arts Ability`],
    R04: [`Literature`, `Performing Arts Ability`, `Cultural - Social - Arts Knowledge Ability`],
    R05: [`Literature`, `English`, `Media Knowledge Ability`],
    S00: [`Literature`, `Stage and Cinema Ability 1`, `Stage and Cinema Ability 2`],
    S01: [`Math`, `Ability 1`, `Ability 2`],
    T00: [`Math`, `Biology`, `Sports Ability`],
    T01: [`Math`, `Literature`, `Sports Ability`],
    T02: [`Literature`, `Biology`, `Sports Ability`],
    T03: [`Literature`, `Geography`, `Sports Ability`],
    T04: [`Math`, `Physics`, `Sports Ability`],
    T05: [`Literature`, `Civic Education`, `Ability`],
    V00: [`Math`, `Physics`, `Drawing`],
    V01: [`Math`, `Literature`, `Drawing`],
    V02: [`Art`, `Math`, `English`],
    V03: [`Art`, `Math`, `Chemistry`],
    V05: [`Literature`, `Physics`, `Drawing`],
    V06: [`Math`, `Geography`, `Drawing`],
    V07: [`Math`, `German`, `Drawing`],
    V08: [`Math`, `Russian`, `Drawing`],
    V09: [`Math`, `Japanese`, `Drawing`],
    V10: [`Math`, `French`, `Drawing`],
    V11: [`Math`, `Chinese`, `Drawing`],
}

export const universityList: University[] = [
    {
        id: 1,
        name: `Hanoi Medical University`,
        shortName: `HMU`,
        description: [
            `Hanoi Medical University, which was established in 1902 under the name: Indochina Medico-Pharmaceutical University, was the first university of Indochina. Hanoi Medical University has been known as the leading education entity in the country in training and providing highly qualified human resources for the health sector in Vietnam.`,
            `Hanoi Medical University, one of the leading Universities in Vietnam with a history of more than one hundred Years, strives continuously to improve human health by reaching excellence in health worker training, science and technology, and providing senior experts for the health sector.`
        ],
        city: `Hanoi`,
        location: `No.1, Ton That Tung Street, Trung Tu Ward, Dong Da District, Hanoi`,
        img: require(`../assets/photos/homeBanner1.png`),
        admission: 1720,
        lowestStandardScore: 19,
        highestStandardScore: 27.73,
        scoreRefYear: 2023,
        minFee: 21000000,
        maxFee: 55000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://ielts-fighter.com/tin-tuc/dai-hoc-y-ha-noi_mt1641797363.html`,
            `https://www.healthcarestudies.com/institutions/hanoi-medical-university`,
            `https://image.tienphong.vn/Uploaded/2024/wpqrnvqdn/2024_06_09/de-an-tuyen-sinh-truong-dh-y-ha-noi-7826.pdf`,
            `https://hmu.edu.vn/p/dce06f92-b824-4f38-97b5-cb72a9fdd796/co-hoi-nghe-nghiep`,
            `https://sdh.hmu.edu.vn/images/2024/TUY%E1%BB%82N%20SINH/%C4%90%E1%BB%80%20%C3%81N%20TSS%C4%90H/2024_QD_776%20Q%C4%90%20ban%20h%C3%A0nh%20%C4%91%E1%BB%81%20%C3%A1n%20tuy%E1%BB%83n%20sinh%202024.pdf`,
            `https://sdh.hmu.edu.vn/images/2024/TUY%E1%BB%82N%20SINH/%C4%90%E1%BB%80%20%C3%81N%20TSS%C4%90H/2024_QD_776%20Q%C4%90%20ban%20h%C3%A0nh%20%C4%91%E1%BB%81%20%C3%A1n%20tuy%E1%BB%83n%20sinh%202024.pdf`,
        ],
        major: [
            {
                majorName: `General Medicine`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.25,
                    highestStandardScore: 27.73,
                }
                ],
            },
            {
                majorName: `Traditional Medicine`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.77,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Dentistry`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 25.5,
                    highestStandardScore: 27.5,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Preventive Medicine`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 22.3,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Nutrition`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 23.19,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Optometry`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 25.4,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Medical Laboratory Technology`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.85,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Rehabilitation Techniques`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 22.7,
                }
                ],
            },
            {
                majorName: `Nursing (Advanced Program)`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 21,
                    highestStandardScore: 24,
                }
                ],
                degreeType: `College Advanced Program`,
            },
            {
                majorName: `Public Health`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 20.7,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Psychology`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `C00`,
                    lowestStandardScore: 0,
                },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Birthing (Midwife)`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 0,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Dental restoration techniques`,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `General Medical (at Thanh Hoa Branch)`,
                examGroup: [{
                    name: `B00`,
                }, {
                    name: `B08`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Nursing (at Thanh Hoa Branch)`,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Rehabilitation Techniques (at Thanh Hoa Branch)`,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Medical Laboratory Technology (at Thanh Hoa Branch)`,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },

        ],
        mainMajor: [
            `General Medicine`,
            `Dentistry`,
            `Preventive Medicine`,
            `Traditional Medicine`,
            `Nursing`,
            `Bachelor of Medical Technology`,
            `Bachelor of Public Health`,
            `Bachelor of Nutrition`,
            `Bachelor of Optometry`,
        ],
    },
    {
        id: 2,
        name: `Vinh University`,
        shortName: null,
        description: [
            `Established in 1959, Vinh University was one of the first universities of the Vietnamese education system after the August Revolution. The school is situated on the hometown of Former President Ho Chi Minh - the land of talented people with thirsts for knowledge, bursts of nationalism and revolution.`
        ],
        city: `Vinh`,
        location: `182 Le Duan Street, Ben Thuy Ward, Vinh City, Nghe An Province`,
        img: require(`../assets/photos/homeBanner1.png`),
        admission: 5050,
        lowestStandardScore: 17,
        highestStandardScore: 28.12,
        scoreRefYear: 2023,
        avgFee: 12900000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://vinhuni.edu.vn/pages/assets/images/macdinh/anh01.png`,
            `https://www.thongtintuyensinh.vn/Truong-Dai-hoc-Vinh_C93_D688.htm`
        ],
        mainMajor: [],
        major: [
            {
                majorName: `Social Studies Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 0,
                }, {
                    name: `C19`,
                    lowestStandardScore: 0,
                }, {
                    name: `C20`,
                    lowestStandardScore: 0,
                }, {
                    name: `D14`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,
            },
            {
                majorName: `Natural Sciences Education`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A02`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,

            },
            {
                majorName: `Educational Psychology`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A01`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 50,

            },
            {
                majorName: `Architecture`,
                examGroup: [{
                    name: `V00`,
                    lowestStandardScore: 0,
                }, {
                    name: `V02`,
                    lowestStandardScore: 0,
                }, {
                    name: `H01`,
                    lowestStandardScore: 0,
                }, {
                    name: `H02`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 60,

            },
            {
                majorName: `Digital Economics`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A01`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,
            },
            {
                majorName: `International Relations`,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `D14`,
                    lowestStandardScore: 0,
                }, {
                    name: `D15`,
                    lowestStandardScore: 0,
                }, {
                    name: `D66`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 66,
            },
            {
                majorName: `Crop Sciences`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B08`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 80,
            },
            {
                majorName: `Veterinary Science`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B08`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Early Childhood Education`,
                examGroup: [{
                    name: `M00`,
                    lowestStandardScore: 21,
                }, {
                    name: `M01`,
                    lowestStandardScore: 21,
                }, {
                    name: `M10`,
                    lowestStandardScore: 21,
                }, {
                    name: `M13`,
                    lowestStandardScore: 21,
                }
                ],
                addmission: 170,
            },
            {
                majorName: `Primary Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `A00`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.65,
                }
                ],
                addmission: 200,
            },
            {
                majorName: `Education Management`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `A00`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 23.25,
                }
                ],
                addmission: 43,
            },
            {
                majorName: `Math Education`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25,
                }, {
                    name: `B00`,
                    lowestStandardScore: 25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25,
                },
                ],
                addmission: 100,
            },
            {
                majorName: `Math Education(advanced)`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `B00`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.5,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Informational Technology Education`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `D07`,
                    lowestStandardScore: 22.25,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Physics Education`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `A01`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `B00`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `D07`,
                    lowestStandardScore: 24.4,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Chemistry Education`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `B00`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `D07`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `C02`,
                    lowestStandardScore: 24.8,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Biology Education`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `B03`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `B08`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `A02`,
                    lowestStandardScore: 23.55,
                }
                ],
                addmission: 23,
            },
            {
                majorName: `Vietnamese Language Arts Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `D01`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `D15`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.7,
                }
                ],
                addmission: 120,
            },
            {
                majorName: `History Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `C19`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `C20`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `D14`,
                    lowestStandardScore: 28.12,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Geography Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `C04`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `D15`,
                    lowestStandardScore: 26.55,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Political Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `D66`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `C19`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.5,
                }
                ],
                addmission: 18,
            },
            {
                majorName: `Physical Education`,
                examGroup: [{
                    name: `T00`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T01`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T02`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T05`,
                    lowestStandardScore: 24.75,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Defense and Security Education`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `A00`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `C19`,
                    lowestStandardScore: 25.7,
                }
                ],
                addmission: 20,
            },
            {
                majorName: `English Education(advanced)`,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 27,
                }, {
                    name: `D14`,
                    lowestStandardScore: 27,
                }, {
                    name: `D15`,
                    lowestStandardScore: 27,
                }, {
                    name: `A01`,
                    lowestStandardScore: 27,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `English Education`,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `D14`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `D15`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.3,
                }
                ],
                addmission: 140,
            },
            {
                majorName: `English as a Language`,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `D14`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `D15`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `A01`,
                    lowestStandardScore: 23.75,
                }
                ],
                addmission: 250,
            },
            {
                majorName: `Accounting`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 500,
            },
            {
                majorName: `Business Administration`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 270,
            },
            {
                majorName: `Business Administration(advanced)`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 20,
                }, {
                    name: `A01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D07`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Finance and Banking`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 155,
            },
            {
                majorName: `Economics`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 150,
            },
            {
                majorName: `Law`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 120,
            },
            {
                majorName: `Economic Law`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 115,
            },
            {
                majorName: `Government Management`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Cultural Management`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Political Science`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `C19`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Public Relations`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Vietnamese Studies`,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Biotechnology`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }, {
                    name: `A02`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Food and Technology`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }, {
                    name: `D07`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Nursing`,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 20,
                }, {
                    name: `C08`,
                    lowestStandardScore: 20,
                }, {
                    name: `D08`,
                    lowestStandardScore: 20,
                }, {
                    name: `D13`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 85,
            },
            {
                majorName: `Construction Economics`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Construction Technology`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 110,
            },
            {
                majorName: `Transportation Engineering`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 65,
            },
            {
                majorName: `Electrical engineering technology`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 110,
            },
            {
                majorName: `Thermal Engineering`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 26,
                }, {
                    name: `B00`,
                    lowestStandardScore: 26,
                }, {
                    name: `D01`,
                    lowestStandardScore: 26,
                }, {
                    name: `A01`,
                    lowestStandardScore: 26,
                }
                ],
                addmission: 45,
            },
            {
                majorName: `Automobile Engineering`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 155,
            },
            {
                majorName: `Electronics and Telecommunication`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Control and Automation Engineering`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 105,
            },
            {
                majorName: `Information Technology`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 20,
                }, {
                    name: `A01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D07`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 270,
            },
            {
                majorName: `Information Technology(advanced)`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 21,
                }, {
                    name: `A01`,
                    lowestStandardScore: 21,
                }, {
                    name: `D01`,
                    lowestStandardScore: 21,
                }, {
                    name: `D07`,
                    lowestStandardScore: 21,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Computer Science`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Farming`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Agriculture`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 45,
            },
            {
                majorName: `Aquaculture`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Land Management`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Natural Resource Management`,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Doctorate - Calculus`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Algebra and Number Theory`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Topology`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Mathematics Education`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - The Theory of Probability and Mathematical Statistics`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Optics`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Physics Education`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Organic Chemistry`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Chemistry Education`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Botany`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Vietnamese as a Language`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Vietnamese Literature`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - World History`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Vietnamese History`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Education Management`,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 6,
            },
            {
                majorName: `Master - Calculus`,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Algebra and Number Theory`,
                addmission: 17,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese`,
                addmission: 19,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Mathematics Education`,
                addmission: 5,
                degreeType: `Master`,
            },
            {
                majorName: `Master - The Theory of Probability and Mathematical Statistics`,
                addmission: 16,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Optics`,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Physics Education`,
                addmission: 9,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Organic Chemistry`,
                addmission: 29,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Inorganic Chemistry`,
                addmission: 19,
                degreeType: `Master`,
            },
            {
                majorName: `Analytical Chemistry`,
                addmission: 11,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Chemistry Education`,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `Zoology`,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Botany`,
                addmission: 20,
                degreeType: `Master`,
            },
            {
                majorName: `Experimental Biology`,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Biology Education`,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `Information Technology`,
                addmission: 8,
                degreeType: `Master`,
            },
            {
                majorName: `Poltical Economy`,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Aquaculture`,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Crop Sciences`,
                addmission: 55,
                degreeType: `Master`,
            },
            {
                majorName: `Finance Management`,
                addmission: 32,
                degreeType: `Master`,
            },
            {
                majorName: `Literature Education`,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese Language of Arts`,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Construction Engineering`,
                addmission: 57,
                degreeType: `Master`,
            },
            {
                majorName: `World History`,
                addmission: 18,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese History`,
                addmission: 20,
                degreeType: `Master`,
            },
            {
                majorName: `Business Management`,
                addmission: 5,
                degreeType: `Master`,
            },
            {
                majorName: `Geography`,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Political Science`,
                addmission: 24,
                degreeType: `Master`,
            },
            {
                majorName: `Politics Education`,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `English Education`,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Government and Law History Education`,
                addmission: 93,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Primary Education`,
                addmission: 34,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Early Childhood Education`,
                addmission: 18,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Education Management`,
                addmission: 41,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Physical Education`,
                addmission: 9,
                degreeType: `Master`,

            },
        ],
    },
    {
        id: 3,
        name: `Hanoi Law University`,
        shortName: `HLU`,
        description: [
            `Hanoi Law University, established in 1979, is a prestigious institution located in Hanoi, Vietnam. The university is dedicated to providing high-quality legal education and producing competent legal professionals. It is a government-owned institution and is recognized for its comprehensive curriculum that focuses on both theoretical and practical aspects of law.`
        ],
        city: `Hanoi`,
        location: `No. 87, Nguyen Chi Thanh Street, Lang Thuong Ward, Dong Da District, Ha Noi`,
        img: require(`../assets/photos/homeBanner1.png`),
        admission: 2500,
        lowestStandardScore: 24,
        highestStandardScore: 27.36,
        scoreRefYear: 2023,
        minFee: 25000000,
        maxFee: 50000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://hlu.edu.vn/News/Details/26992?zoneid=zone2`,
            `https://laodong.vn/tuyen-sinh/diem-san-xet-tuyen-som-truong-dai-hoc-luat-dai-hoc-quoc-gia-ha-noi-2024-1339242.ldo#:~:text=N%C4%83m%202024%2C%20Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Lu%E1%BA%ADt%20%2D%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20gia,Lu%E1%BA%ADt%20Th%C6%B0%C6%A1ng%20m%E1%BA%A1i%20Qu%E1%BB%91c%20t%E1%BA%BF.`,
            `https://hlu.edu.vn/News/Details/26992?zoneid=zone2`,
            `https://tuyensinh.hlu.edu.vn/Images/Post/files/Tuyensinh/SDH/CH/TBTSCH_Dot1_2023%20(2).pdf`
        ],
        mainMajor: [
            `Law`,
            `Economic Law`,
            `English language major`,
            `Commercial Law`
        ],
        major: [],
    }
]