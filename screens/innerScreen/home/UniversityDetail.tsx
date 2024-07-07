import { View, Text, ImageBackground, ImageStyle, Image, ScrollView, TouchableOpacity, Animated, Easing, Alert } from 'react-native'
import React, { useRef } from 'react'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito16Reg, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle from '../../../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'
import { uniDetailPageHatIcon } from '../../../assets/svgXml'
import { marginBottomForScrollView } from '../../../assets/component'
import { University } from '../../../data/data'
import { SvgXml } from 'react-native-svg'

export default function UniversityDetail({ route }: any) {
    const uniItem = route.params.item
    const navigation = useNavigation()

    const [currentTab, setCurrentTab] = React.useState<number>(0)
    const [showSelector, setShowSelector] = React.useState<boolean>(false)
    const [currentDegreeType, setCurrentDegreeType] = React.useState<`All` | `College` | `Doctor` | `Master` | `College Advanced Program` | `After Graduation` | string>(`All`)
    const [showSort, setShowSort] = React.useState<boolean>(false)
    const [currentSort, setCurrentSort] = React.useState<`A-Z` | `Z-A` | `Highest score` | `Lowest score` | string>(`Highest score`)

    const tabSellectAnimate = useRef(new Animated.Value(0)).current
    const tabSellectAnimation = tabSellectAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    function renderAnimation(trigger: boolean) {
        Animated.timing(tabSellectAnimate, {
            toValue: trigger ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    renderAnimation(showSelector)

    const sortAnimate = useRef(new Animated.Value(0)).current
    const sortAnimation = sortAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    function renderSortAnimation(trigger: boolean) {
        Animated.timing(sortAnimate, {
            toValue: trigger ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    renderSortAnimation(showSort)

    const IMGanimation = useRef(new Animated.Value(0)).current
    const imageHeightAnimation = IMGanimation.interpolate({
        inputRange: [0, 1],
        outputRange: [vh(15), vh(30)]
    })
    function renderImgAnimation(trigger: number) {
        Animated.timing(IMGanimation, {
            toValue: trigger,
            duration: 300,
            useNativeDriver: false,
        }).start()
    }

    if (currentTab == 0) {
        renderImgAnimation(1)
    } else {
        renderImgAnimation(0)
    }

    function renderTabOption() {
        const tabOption = [`Introduce`, `Education`, `Community`]
        return (
            <View style={[styles.flexRowEvenlyCenter, styles.paddingH6vw, styles.marginTop4vw, styles.marginBottom2vw, { borderBottomColor: clrStyle.grey2, borderBottomWidth: 1 }]}>
                {tabOption.map((tabOptionItem: string, index: number) => (
                    <TouchableOpacity key={index} style={[styles.flex1, styles.paddingV3vw, styles.flexRowCenter, { borderBottomWidth: vw(0.75), borderBottomColor: currentTab == index ? clrStyle.main1 : `rgba(0,0,0,0)` }]} onPress={() => setCurrentTab(index)}>
                        {currentTab == index ?
                            <Nunito16Bold style={[{ color: clrStyle.main1 }]}>{tabOptionItem}</Nunito16Bold>
                            : <Nunito16Reg style={[{ color: clrStyle.grey2 }]}>{tabOptionItem}</Nunito16Reg>
                        }
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    function renderTab() {
        switch (currentTab) {
            case 1:
                return renderEducaion()
            case 2:
                return renderCommunity()
            default:
                return renderIntroduce()
        }

        function renderIntroduce() {
            return (
                <View style={[styles.flexColStartCenter, styles.gap4vw]}>
                    {uniDetailPageHatIcon(vw(29.5), vw(16.75))}
                    <View style={[styles.positionRelative, styles.w100, styles.flexRowCenter]}>
                        <View style={[styles.wfit, styles.paddingH4vw, { zIndex: 1, backgroundColor: clrStyle.white }]}>
                            <Nunito20Bold style={[{ color: clrStyle.main5 }]}>Story</Nunito20Bold>
                        </View>
                        <View style={[styles.w100, styles.positionAbsolute, { height: 2, backgroundColor: clrStyle.main6 }]}></View>
                    </View>

                    {uniItem.description.map((descriptionItem: string, index: number) => (
                        <Nunito16Reg key={index} style={[styles.paddingV2vw, styles.textJustify, { color: clrStyle.grey3 }]}>{descriptionItem}</Nunito16Reg>
                    ))}
                </View >
            )
        }

        function renderEducaion() {
            let degreeTypeList = [`All`, `College`, `Doctor`, `Master`, `College Advanced Program`, `After Graduation`,]
            let majorList = uniItem.major
            let collegeList = uniItem.major.filter((uniItem: any) => uniItem.degreeType === undefined || uniItem.degreeType === `College`)
            let doctorList = uniItem.major.filter((uniItem: any) => uniItem.degreeType == `Doctor`)
            let masterList = uniItem.major.filter((uniItem: any) => uniItem.degreeType == `Master`)
            let advancedList = uniItem.major.filter((uniItem: any) => uniItem.degreeType == `College Advanced Program`)
            let afterGraList = uniItem.major.filter((uniItem: any) => uniItem.afterGraduation == true)

            let sortTag = [`A-Z`, `Z-A`, `Highest score`, `Lowest score`]

            switch (currentDegreeType) {
                case `All`:
                    majorList = uniItem.major
                    break;
                case `College`:
                    majorList = collegeList

                    break;
                case `Doctor`:
                    majorList = doctorList

                    break;
                case `Master`:
                    majorList = masterList

                    break;
                case `College Advanced Program`:
                    majorList = advancedList

                    break;
                case `After Graduation`:
                    majorList = afterGraList

                    break;
            }

            switch (currentSort) {
                case `A-Z`:
                    majorList.sort((a: any, b: any) => a.majorName.localeCompare(b.majorName))
                    break;
                case `Z-A`:
                    majorList.sort((a: any, b: any) => b.majorName.localeCompare(a.majorName))
                    break;
                case `Lowest score`:
                    majorList.sort((a: any, b: any) => {
                        if (a.lowestStandardScore && b.lowestStandardScore) {
                            return a.lowestStandardScore - b.lowestStandardScore;
                        } else if (a.lowestStandardScore) {
                            return -1;
                        } else if (b.lowestStandardScore) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    break;
                case `Highest score`:
                    majorList.sort((a: any, b: any) => {
                        if (a.lowestStandardScore && b.lowestStandardScore) {
                            return b.lowestStandardScore - a.lowestStandardScore;
                        } else if (a.lowestStandardScore) {
                            return -1;
                        } else if (b.lowestStandardScore) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    break;
            }

            function selectorRender() {
                return (
                    <View style={[styles.flexRow, styles.flex1, styles.paddingH4vw, { zIndex: 1 }]}>
                        <View style={[styles.flex1, { zIndex: 1 }]}>
                            <TouchableOpacity
                                onPress={() => setShowSelector(!showSelector)}
                                style={[styles.flexRowStartCenter, styles.gap1vw, styles.paddingV2vw, styles.wfit]}>
                                <Nunito16Bold style={[{ color: clrStyle.black }]}>{currentDegreeType}</Nunito16Bold>
                                <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.92 8.17993H11.69H6.07999C5.11999 8.17993 4.63999 9.33993 5.31999 10.0199L10.5 15.1999C11.33 16.0299 12.68 16.0299 13.51 15.1999L15.48 13.2299L18.69 10.0199C19.36 9.33993 18.88 8.17993 17.92 8.17993Z" fill="#808797"/></svg>`} />
                            </TouchableOpacity>
                            <View style={[styles.positionRelative, showSelector ? styles.shadowW0H1Black : null, styles.borderRadius3vw, styles.wfit, { backgroundColor: clrStyle.white, display: showSelector ? undefined : 'none' }]}>
                                <Animated.View style={[styles.overflowHidden, styles.borderRadius3vw, styles.positionAbsolute, { opacity: tabSellectAnimation, backgroundColor: clrStyle.white }]}>
                                    {degreeTypeList.map((degreeTypeListItem, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => { setShowSelector(false); setCurrentDegreeType(degreeTypeListItem) }}
                                                style={[styles.padding3vw, { backgroundColor: clrStyle.white, borderBottomWidth: index < degreeTypeList.length - 1 ? 1 : 0, borderBlockColor: clrStyle.grey1 }]}>
                                                <Nunito14Bold style={[styles.paddingH2vw, { color: clrStyle.black }]}>{degreeTypeListItem}</Nunito14Bold>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </Animated.View>
                            </View>
                        </View>
                        <View style={[styles.w10, { zIndex: 1 }]}>
                            <TouchableOpacity
                                onPress={() => { setShowSort(!showSort) }}
                                style={[styles.flexRowStartCenter, styles.gap1vw, styles.paddingV2vw, styles.wfit]}>
                                <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4415 6.62732H22M13.4415 11.4421H19.5547M13.4415 16.2569H17.1094M5.80564 6V18M5.80564 18L2 14.3317M5.80564 18L9.7566 14.3317" stroke="#808797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                            </TouchableOpacity>
                            <View style={[styles.positionRelative, showSort ? styles.shadowW0H1Black : null, styles.borderRadius3vw, styles.wfit, { backgroundColor: clrStyle.white, display: showSort ? undefined : 'none' }]}>
                                <Animated.View style={[styles.overflowHidden, styles.borderRadius3vw, styles.positionAbsolute, { opacity: sortAnimation, backgroundColor: clrStyle.white, right: -24 }]}>
                                    {sortTag.map((sortTagItem, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => { setShowSort(false); setCurrentSort(sortTagItem) }}
                                                style={[styles.padding3vw, styles.w40vw, { backgroundColor: clrStyle.white, borderBottomWidth: index < degreeTypeList.length - 1 ? 1 : 0, borderBlockColor: clrStyle.grey1 }]}>
                                                <Nunito14Bold style={[styles.paddingH2vw, styles.textRight, { color: clrStyle.black }]}>{sortTagItem}</Nunito14Bold>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </Animated.View>
                            </View>
                        </View>
                    </View>
                )
            }

            return (
                <View style={[styles.flexColStartCenter, styles.gap4vw, styles.flex1]}>
                    <View style={[styles.flexRowStartCenter, styles.gap2vw, styles.w100]}>
                        {uniDetailPageHatIcon(vw(8), vw(8))}
                        <Nunito20Bold style={[{ color: clrStyle.main5 }]}>Study program</Nunito20Bold>
                    </View>

                    {selectorRender()}

                    {majorList.map((majorListItem: any, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.flexRowBetweenCenter, styles.padding10, styles.gap2vw, styles.w100, styles.borderRadius3vw, styles.shadowW0H05Black, { backgroundColor: clrStyle.white, }]}
                            onPress={() => {
                                navigation.navigate(`MajorDetail`, { major: majorListItem, uniItem: uniItem })
                            }}>
                            {majorListItem.icon ? majorListItem.icon(vw(16.5), vw(16.5)) : <View style={{ backgroundColor: clrStyle.grey2, width: vw(16.5), height: vw(16.5), borderRadius: vw(1) }} />}
                            <View style={[styles.flex1, styles.flexCol, styles.gap2vw]}>
                                <Nunito16Bold style={{ color: clrStyle.grey3, }}>{majorListItem.majorName}</Nunito16Bold>
                                <View style={[styles.flexRow, styles.gap1vw]}>
                                    <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(2), backgroundColor: clrStyle.main2 }]}>
                                        <Nunito12Bold key={index} style={[{ color: clrStyle.main1 }]}>{majorListItem.examGroup ? majorListItem.examGroup.join(', ') : `Recruitment`}</Nunito12Bold>
                                    </View>
                                    <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(2), backgroundColor: clrStyle.main8 }]}>
                                        {/* TODO: check recuit */}
                                        <Nunito12Bold key={index} style={[{ color: clrStyle.main7 }]}>{majorListItem.degreeType ? majorListItem.degreeType : `Eco?Bla?`}</Nunito12Bold>
                                    </View>
                                </View>
                            </View>
                            {majorListItem.lowestStandardScore || majorListItem.lowestStandardScore == 0 ?
                                <View style={[styles.flexColCenter, styles.padding1vw]}>
                                    <Nunito12Reg style={[styles.textRight, styles.w100, { color: clrStyle.grey2, }]}>Score</Nunito12Reg>
                                    <Nunito20Bold style={[styles.textRight, styles.w100, { color: clrStyle.main5 }]}>{majorListItem.lowestStandardScore ? majorListItem.lowestStandardScore.toFixed(2) : `N/A`}</Nunito20Bold>
                                </View>
                                : null
                            }
                        </TouchableOpacity>
                    ))}
                    {marginBottomForScrollView(5)}
                </View>
            )
        }

        function renderCommunity() {
            return (
                <View>
                    <Text>Community</Text>
                </View>
            )
        }
    }

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}
        >
            <TopNav
                returnPreScreen={true}
                returnPreScreenFnc={() => navigation.goBack()}
                title={uniItem.name}
            />
            <ScrollView
                style={[styles.flex1, { transform: [{ translateY: -vw(6) }] }]}>
                <Animated.Image source={uniItem.img} style={[styles.w100, { height: imageHeightAnimation, resizeMode: 'cover', borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }] as ImageStyle} />
                {renderTabOption()}
                <View style={[styles.padding4vw, styles.flex1]}>
                    {renderTab()}
                </View>
                {marginBottomForScrollView(2)}
            </ScrollView>
        </SaveViewWithColorStatusBar>
    )
}