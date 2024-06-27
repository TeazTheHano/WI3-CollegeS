import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'
import { bestOfEcoBu, bestOfEcoMo, bestOfEcoSo, bestOfScBiIcon, bestOfScCoIcon, bestOfScMaIcon } from '../assets/svgXml';

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

    let bestOfScience: BestOfSubject[] = [
        { icon: bestOfScCoIcon(vw(20), vw(20)), description: `Computer science`, title: `HUST`, navTo: `` },
        { icon: bestOfScBiIcon(vw(20), vw(20)), description: `Biology`, title: `HMU`, navTo: `` },
        { icon: bestOfScMaIcon(vw(20), vw(20)), description: `Mathematics`, title: `VNU`, navTo: `` },
    ]

    let bestOfEconomic: BestOfSubject[] = [
        { icon: bestOfEcoMo(vw(20), vw(20)), description: `Money analysis`, title: `FTU`, navTo: `` },
        { icon: bestOfEcoSo(vw(20), vw(20)), description: `Social marketing`, title: `AJC`, navTo: `` },
        { icon: bestOfEcoBu(vw(20), vw(20)), description: `Business analysis`, title: `NEU`, navTo: `` },
    ]

    let mbti: MBTI[] = [
        {
            mbti: `ISTJ`,
            name: `The Inspector`,
            description: `Reserved and practical, they tend to be loyal, orderly, and traditional.`,
            personality: [
                `These individuals tend to be serious, matter-of-fact, and reserved. They appreciate order and organization and pay a great deal of attention to detail.`,
                `They like to plan things out in advance and place an emphasis on tradition and law. They are responsible and realistic and can be described as dependable and trustworthy`],
            favJob: [`Accountant`, `Auditor`, `Lawyer`, `Police`, `Military`, `Manager`, `Teacher`],
        },
        {
            mbti: `ISTP`,
            name: `The Crafter`,
            description: `Highly independent, they enjoy new experiences that provide first-hand learning.`,
            personality: [
                `People with this personality type are fearless and independent. They love adventure, new experiences, and risk-taking.`,
                `They tend to be quiet observers and are not well attuned to the emotional states of others, sometimes coming across as insensitive or stoic.`,
                `They are results- oriented, acting quickly to find workable solutions and understand the underlying cause of practical problems`
            ],
            favJob: [`Engineer`, `Mechanic`, `Athletes`, `Pilot`, `Detective`, `Special Forces`, `Police`, `Firefighter`],
        },
        {
            mbti: `ISFJ`,
            name: `The Protector`,
            description: `Warm-hearted and dedicated, they are always ready to protect the people they care about.`,
            personality: [
                `These individuals are friendly, responsible, and reserved. They are service and work-oriented, committing to meeting their obligations and duties.`,
                `They are loyal, considerate, and place a lot of focus on the care of others. They are non-confrontational and value an orderly and harmonious environment.`
            ],
            favJob: [`Nurse`, `Doctor`, `Preschool Teacher`, `Customer Service Representative`, `Administrative Staff`, `Secretary`],
        },
        {
            mbti: `ISFP`,
            name: `The Artist`,
            description: `Easy-going and flexible, they tend to be reserved and artistic.`,
            personality: [
                `These individuals are quiet, friendly, easy going, and sensitive. They have a strong need for personal space and time alone to recharge.`,
                `They value deep connection and prefer to spend time with smaller groups of close friends and family.`,
                `They are highly considerate and accepting, avoiding confrontation and committed to their values and to people who are important to them.`
            ],
            favJob: [`Artist`, `Designer`, `Musician`, `Photographer`, `Makeup Artist`, `Veterinarian`, `Music Teacher`],
        },
        {
            mbti: `INFJ`,
            name: `The Advocate`,
            description: `Creative and analytical, they are considered one of the rarest Myers-Briggs types.`,
            personality: [
                `People with this personality type are serious, logical and hardworking. They are also compassionate, conscientious, and reserved.`,
                `They value close, deep connections and are sensitive to the needs of others, but also need time and space alone to recharge.`
            ],
            favJob: [`Psychologist`, `Writer`, `Diplomat`, `Consultant`, `Social Activist`],
        },
        {
            mbti: `INFP`,
            name: `The Mediator`,
            description: `Idealistic with high values, they strive to make the world a better place.`,
            personality: [
                `These people are creative, idealistic, caring, and loyal. They have high values and morals, and are constantly seeking out ways to understand people and to best serve humanity.`,
                `They are family and home-oriented and prefer to interact with a select group of close friends.`
            ],
            favJob: [`Artist`, `Designer`, `Writer`, `Poet`, `Journalist`, `Philosopher`],
        },
        {
            mbti: `INTJ`,
            name: `The Architect`,
            description: `High logical, they are both very creative and analytical.`,
            personality: [
                `These people are highly independent, self-confident and prefer to work alone. They are analytical, creative, logical, and driven.`,
                `They place an emphasis on logic and fact rather than emotion and can be viewed as perfectionists.`,
                `They tend to have high expectations of competence and performance for themselves and others.`
            ],
            favJob: [`Engineer`, `Scientist`, `Programmer`, `Strategic Manager`, `Educator`],
        },
        {
            mbti: `INTP`,
            name: `The Thinker`,
            description: `Quiet and introverted, they are known for having a rich inner world.`,
            personality: [
                `People with this personality type are described as quiet, contained, and analytical. They are highly focused on how things work and on solving problems, and tend to be good at logic and math.`,
                `They are more interested in ideas and theoretical concepts than in social interaction. They are loyal and affectionate to their closest friends and family, but tend to be difficult to get to know.`
            ],
            favJob: [`Mathematics`, `Physics`, `Computer Science`, `Philosophy`, `Natural Sciences`, `Analyst`, `University Lecturer`],
        },
        {
            mbti: `ESTP`,
            name: `The Persuader`,
            description: `Out-going and dramatic, they enjoy spending time with others and focusing on the here-and-now`,
            personality: [
                `These individuals are action-oriented, taking pragmatic approaches to obtain results and solve problems quickly. They are often sophisticated, charming, and spontaneous.`,
                `They are outgoing and energetic, and enjoy spending time with a wide circle of friends and acquaintances. They focus on the here and now and prefer the practical over the abstract.`
            ],
            favJob: [`Business`, `Sales`, `Advertising`, `Entertainment`, `Stocks`],
        },
        {
            mbti: `ESTJ`,
            name: `The Director`,
            description: `Assertive and rule-oriented, they have high principles and a tendency to take charge.`,
            personality: [
                `These people are responsible, practical, and organized. They are assertive and like to take charge, focused on getting results in the most efficient way possible. They have clear standards and place a high value on tradition and rules.`,
                `They can be seen as rigid, stubborn, or bossy as they are forceful in implementing their plans. However, they tend to excel at putting plans into action because they are hardworking, self-confident, and dependable.`
            ],
            favJob: [`Project Management`, `Executive Director`, `Banking`, `Finance`, `Military`],
        },
        {
            mbti: `ESFP`,
            name: `The Performer`,
            description: `Outgoing and spontaneous, they enjoy taking center stage.`,
            personality: [
                `These people tend to be outgoing, friendly, and impulsive, seizing energy from other people. They love to be the center of attention and enjoy working with others in new environments.`,
                `They can be described as easy going, fun, and optimistic. They are spontaneous and focused on the present moment, and enjoy learning through hands-on experiences with other people.`
            ],
            favJob: [`Designer`, `Model`, `Actor`, `Singer`, `MC`, `Veterinarian`, `Preschool Teacher`, `Tourist guide`],
        },
        {
            mbti: `ESFJ`,
            name: `The Caregiver`,
            description: `Soft-hearted and outgoing, they tend to believe the best about other people.`,
            personality: [
                `These individuals are warmhearted, conscientious, and harmonious. They wear their hearts on their sleeves and tend to see the best in others.`,
                `They enjoy helping others and providing the care that people need, but want to be appreciated and noticed for their contributions. They are careful observers of others and excel in situations involving personal contact and community.`
            ],
            favJob: [`Teacher`, `Doctor`, `Nurse`, `Customer Service Representative`, `Hotel Manager`],
        },
        {
            mbti: `ENFP`,
            name: `The Campaigner`,
            description: `Charismatic and energetic, they enjoy situations where they can put their creativity to work.`,
            personality: [
                `These individuals are enthusiastic, creative, energetic, and highly imaginative. They have excellent people and communication skills and are good at giving others appreciation and support.`,
                `They do, however, seek approval from others. They value emotions and expression. They dislike routine and might struggle with disorganization and procrastination.`
            ],
            favJob: [`Journalist`, `Writer`, `Producer`, `Human Resources Manager`, `Consultant`, `Press`, `Communications`, `Performing Arts`, `Education`],
        },
        {
            mbti: `ENFJ`,
            name: `The Giver`,
            description: `Loyal and sensitive, they are known for being understanding and generous.`,
            personality: [
                `These people are responsible, warm, and loyal. They are highly attuned to the emotions of others and capable of forging friendships with essentially anybody.`,
                `They have a desire to help others fulfill their potential, and they derive personal satisfaction from helping others. They tend to make good leaders as they are highly capable of facilitating agreement among diverse groups of people.`
            ],
            favJob: [`Careers related to education`, `Counseling`, `Health service`, `Society and arts`],
        },
        {
            mbti: `ENTP`,
            name: `The Debater`,
            description: `Highly inventive, they love being surrounded by ideas and tend to start many projects (but may struggle to finish them).`,
            personality: [
                `People with this personality type can be described as innovative, outspoken, and lively. They are idea-oriented and are more focused on the future rather than on the present moment.`,
                `They enjoy interacting with a wide variety of people and love to engage with others in debates. They tend to be easy to get along with, but also can be argumentative at times. They are great conversationalists and make good entrepreneurs.`
            ],
            favJob: [`Lawyer`, `Software Engineer`, `Inventor`, `Scientist`, `Journalist`, `Politician`, `University Lecturer`],
        },
        {
            mbti: `ENTJ`,
            name: `The Commander`,
            description: `Outspoken and confident, they are great at making plans and organizing projects.`,
            personality: [
                `These individuals like to take charge. They value organization and structure and appreciate long-term planning and goal setting.`,
                `They have strong people skills and enjoy interacting with others, but they are not necessarily attuned to their own emotions or the emotions of others.`,
                `They have strong leadership skills and tend to make good executives, captains, and administrators.`
            ],
            favJob: [`CEO`, `Lawyer`, `Politician`,],
        },
    ]

    return { ListFavSubject, listIntersts, bannerList, suitableForYou, bestOfScience, bestOfEconomic, mbti }
}