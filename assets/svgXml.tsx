// symtem import
import React from "react";

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';

// ____________________END OF IMPORT_______________________

export const searchIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_367_83)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_367_83">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w?: any, h?: any, color?: any) => {
    const xml = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_62_4141)">
    <path d="M16.4 21.2788L11.1513 18.4162C10.466 19.1488 9.57624 19.6584 8.5976 19.8786C7.61896 20.0989 6.5967 20.0197 5.66366 19.6513C4.73063 19.2829 3.92996 18.6424 3.36572 17.8131C2.80148 16.9837 2.49976 16.0037 2.49976 15.0006C2.49976 13.9975 2.80148 13.0176 3.36572 12.1882C3.92996 11.3588 4.73063 10.7183 5.66366 10.35C6.5967 9.98159 7.61896 9.90239 8.5976 10.1226C9.57624 10.3429 10.466 10.8524 11.1513 11.585L16.4013 8.7225C16.1032 7.54259 16.2457 6.29449 16.8021 5.21213C17.3584 4.12977 18.2904 3.28748 19.4233 2.84313C20.5563 2.39878 21.8124 2.38288 22.9562 2.79842C24.1001 3.21395 25.0531 4.0324 25.6366 5.10033C26.2202 6.16826 26.3942 7.41236 26.1261 8.59943C25.858 9.7865 25.1662 10.835 24.1803 11.5485C23.1944 12.262 21.9822 12.5914 20.7708 12.475C19.5594 12.3586 18.432 11.8044 17.6 10.9162L12.35 13.7787C12.5515 14.5804 12.5515 15.4196 12.35 16.2212L17.5988 19.0837C18.4308 18.1956 19.5581 17.6414 20.7695 17.525C21.9809 17.4086 23.1932 17.738 24.1791 18.4515C25.1649 19.165 25.8568 20.2135 26.1249 21.4006C26.393 22.5876 26.219 23.8317 25.6354 24.8997C25.0518 25.9676 24.0988 26.786 22.955 27.2016C21.8112 27.6171 20.555 27.6012 19.4221 27.1569C18.2891 26.7125 17.3572 25.8702 16.8008 24.7879C16.2445 23.7055 16.102 22.4574 16.4 21.2775V21.2788ZM7.50001 17.5C8.16305 17.5 8.79894 17.2366 9.26778 16.7678C9.73662 16.2989 10 15.663 10 15C10 14.337 9.73662 13.7011 9.26778 13.2322C8.79894 12.7634 8.16305 12.5 7.50001 12.5C6.83697 12.5 6.20109 12.7634 5.73225 13.2322C5.26341 13.7011 5.00001 14.337 5.00001 15C5.00001 15.663 5.26341 16.2989 5.73225 16.7678C6.20109 17.2366 6.83697 17.5 7.50001 17.5ZM21.25 10C21.9131 10 22.5489 9.73661 23.0178 9.26777C23.4866 8.79893 23.75 8.16304 23.75 7.5C23.75 6.83696 23.4866 6.20107 23.0178 5.73223C22.5489 5.26339 21.9131 5 21.25 5C20.587 5 19.9511 5.26339 19.4822 5.73223C19.0134 6.20107 18.75 6.83696 18.75 7.5C18.75 8.16304 19.0134 8.79893 19.4822 9.26777C19.9511 9.73661 20.587 10 21.25 10ZM21.25 25C21.9131 25 22.5489 24.7366 23.0178 24.2678C23.4866 23.7989 23.75 23.163 23.75 22.5C23.75 21.837 23.4866 21.2011 23.0178 20.7322C22.5489 20.2634 21.9131 20 21.25 20C20.587 20 19.9511 20.2634 19.4822 20.7322C19.0134 21.2011 18.75 21.837 18.75 22.5C18.75 23.163 19.0134 23.7989 19.4822 24.2678C19.9511 24.7366 20.587 25 21.25 25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_62_4141">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const fbLogo = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" transform="translate(0.5)" fill="none"/>
<path d="M24 12.0698C24 5.71857 18.8513 0.569849 12.5 0.569849C6.14872 0.569849 1 5.71857 1 12.0698C1 17.8098 5.20538 22.5674 10.7031 23.4301V15.3941H7.7832V12.0698H10.7031V9.53626C10.7031 6.65407 12.42 5.06204 15.0468 5.06204C16.305 5.06204 17.6211 5.28665 17.6211 5.28665V8.11672H16.171C14.7424 8.11672 14.2969 9.00319 14.2969 9.91263V12.0698H17.4863L16.9765 15.3941H14.2969V23.4301C19.7946 22.5674 24 17.8098 24 12.0698Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const googleLogo = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8283C14.8645 18.5183 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const appleLogo = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="black"/>
<path d="M21.2806 18.424C20.9327 19.2275 20.521 19.9672 20.044 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.815 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2482 23.3248 14.5128 23.0224C13.775 22.7214 13.0969 22.5724 12.4769 22.5724C11.8267 22.5724 11.1293 22.7214 10.3834 23.0224C9.63638 23.3248 9.03456 23.4824 8.57444 23.498C7.87466 23.5278 7.17716 23.2197 6.48093 22.5724C6.03656 22.1848 5.48075 21.5204 4.8149 20.5791C4.10051 19.5739 3.51317 18.4084 3.05304 17.0795C2.56026 15.6442 2.31323 14.2543 2.31323 12.9087C2.31323 11.3673 2.6463 10.0379 3.31342 8.92385C3.83772 8.029 4.53522 7.32312 5.4082 6.80493C6.28118 6.28674 7.22443 6.02267 8.24024 6.00578C8.79605 6.00578 9.52493 6.1777 10.4307 6.51559C11.3339 6.85462 11.9139 7.02655 12.1681 7.02655C12.3582 7.02655 13.0025 6.82552 14.0947 6.42473C15.1275 6.05305 15.9992 5.89916 16.7133 5.95978C18.6484 6.11595 20.1022 6.87876 21.069 8.25303C19.3384 9.30163 18.4823 10.7703 18.4993 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0974 17.1107 21.6866 17.3578C21.5588 17.7283 21.4239 18.0832 21.2806 18.424ZM16.8425 0.960131C16.8425 2.11039 16.4223 3.18439 15.5847 4.17847C14.5738 5.36023 13.3512 6.04311 12.0253 5.93536C12.0084 5.79736 11.9986 5.65213 11.9986 5.49951C11.9986 4.39526 12.4793 3.21349 13.333 2.24724C13.7592 1.75801 14.3013 1.35122 14.9586 1.02671C15.6145 0.707053 16.2349 0.530273 16.8184 0.5C16.8354 0.653772 16.8425 0.807554 16.8425 0.960116V0.960131Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpLeftArrow = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4L7 12L15 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpRightArrow = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L17 12L9 4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const homeIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50008 6.99991C7.96143 5.53856 9.59363 4.4189 10.6976 3.74078C11.5022 3.24656 12.498 3.24656 13.3026 3.74078C14.4065 4.4189 16.0387 5.53856 17.5001 6.99991C20.6685 10.1683 20.5001 11.9999 20.5001 14.9999C20.5001 16.4097 20.3897 17.5987 20.2726 18.4631C20.1494 19.3725 19.3563 19.9999 18.4385 19.9999H17.0001C15.8955 19.9999 15.0001 19.1045 15.0001 17.9999V15.9999C15.0001 15.2043 14.684 14.4412 14.1214 13.8786C13.5588 13.316 12.7957 12.9999 12.0001 12.9999C11.2044 12.9999 10.4414 13.316 9.87877 13.8786C9.31616 14.4412 9.00009 15.2043 9.00009 15.9999V17.9999C9.00009 19.1045 8.10466 19.9999 7.00009 19.9999H5.56164C4.64391 19.9999 3.85074 19.3725 3.72757 18.4631C3.61051 17.5987 3.50009 16.4097 3.50009 14.9999C3.50009 11.9999 3.33169 10.1683 6.50008 6.99991Z" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const userIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const compareIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const settingIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z" stroke="#808797" stroke-width="1.5"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#808797" stroke-width="1.5"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const homeIconActive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#3E3792"/>
<path d="M6.50008 6.99991C7.96143 5.53856 9.59363 4.4189 10.6976 3.74078C11.5022 3.24656 12.498 3.24656 13.3026 3.74078C14.4065 4.4189 16.0387 5.53856 17.5001 6.99991C20.6685 10.1683 20.5001 11.9999 20.5001 14.9999C20.5001 16.4097 20.3897 17.5987 20.2726 18.4631C20.1494 19.3725 19.3563 19.9999 18.4385 19.9999H17.0001C15.8955 19.9999 15.0001 19.1045 15.0001 17.9999V15.9999C15.0001 15.2043 14.684 14.4412 14.1214 13.8786C13.5588 13.316 12.7957 12.9999 12.0001 12.9999C11.2044 12.9999 10.4414 13.316 9.87877 13.8786C9.31616 14.4412 9.00009 15.2043 9.00009 15.9999V17.9999C9.00009 19.1045 8.10466 19.9999 7.00009 19.9999H5.56164C4.64391 19.9999 3.85074 19.3725 3.72757 18.4631C3.61051 17.5987 3.50009 16.4097 3.50009 14.9999C3.50009 11.9999 3.33169 10.1683 6.50008 6.99991Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const userIconActive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#3E3792"/>
<path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const compareIconActive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#3E3792"/>
<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const settingIconActive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#3E3792"/>
<path d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z" stroke="#FCFCFC" stroke-width="1.5"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#FCFCFC" stroke-width="1.5"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}