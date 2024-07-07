import { View, Text, ImageBackground, ImageStyle, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'
import { Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito16Reg, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle from '../../../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'
import { uniDetailPageHatIcon } from '../../../assets/svgXml'
import { marginBottomForScrollView } from '../../../assets/component'
import { University } from '../../../data/data'
import { SvgXml } from 'react-native-svg'

export default function UniversityDetail({ route }: any) {
    const item = route.params.item
    const navigation = useNavigation()

    const [currentTab, setCurrentTab] = React.useState<number>(0)
    const [showSelector, setShowSelector] = React.useState<boolean>(false)
    const [currentDegreeType, setCurrentDegreeType] = React.useState<`All` | `College` | `Doctor` | `Master` | `College Advanced Program` | `After Graduation` | string>(`All`)

    const animation = useRef(new Animated.Value(0)).current
    const opacityAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    function renderAnimation(trigger: boolean) {
        Animated.timing(animation, {
            toValue: trigger ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    renderAnimation(showSelector)

    const IMGanimation = useRef(new Animated.Value(0)).current
    const imageHeightAnimation = IMGanimation.interpolate({
        inputRange: [0, 1],
        outputRange: [vh(20), vh(30)]
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
                {tabOption.map((item: string, index: number) => (
                    <TouchableOpacity key={index} style={[styles.flex1, styles.paddingV3vw, styles.flexRowCenter, { borderBottomWidth: vw(0.75), borderBottomColor: currentTab == index ? clrStyle.main1 : `rgba(0,0,0,0)` }]} onPress={() => setCurrentTab(index)}>
                        {currentTab == index ?
                            <Nunito16Bold style={[{ color: clrStyle.main1 }]}>{item}</Nunito16Bold>
                            : <Nunito16Reg style={[{ color: clrStyle.grey2 }]}>{item}</Nunito16Reg>
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

                    {item.description.map((item: string, index: number) => (
                        <Nunito16Reg key={index} style={[styles.paddingV2vw, styles.textJustify, { color: clrStyle.grey3 }]}>{item}</Nunito16Reg>
                    ))}
                </View >
            )
        }

        function renderEducaion() {
            let degreeTypeList = [`All`, `College`, `Doctor`, `Master`, `College Advanced Program`, `After Graduation`,]

            let majorList: {}[] = []

            switch (currentDegreeType) {
                case `All`:
                    majorList = item.major
                    break;
                case `College`:
                    majorList = item.major.filter((item: any) => item.degreeType === undefined || item.degreeType === `College`)
                    break;
                case `Doctor`:
                    majorList = item.major.filter((item: any) => item.degreeType == `Doctor`)
                    break;
                case `Master`:
                    majorList = item.major.filter((item: any) => item.degreeType == `Master`)
                    break;
                case `College Advanced Program`:
                    majorList = item.major.filter((item: any) => item.degreeType == `College Advanced Program`)
                    break;
                case `After Graduation`:
                    majorList = item.major.filter((item: any) => item.afterGraduation == true)
                    break;
            }

            function selectorRender() {
                return (
                    <View style={[styles.w100, styles.marginLeft10vw, { zIndex: 1 }]}>
                        <TouchableOpacity
                            onPress={() => setShowSelector(!showSelector)}
                            style={[styles.flexRowStartCenter, styles.gap1vw, styles.paddingV2vw]}>
                            <Nunito16Bold style={[{ color: clrStyle.black }]}>{currentDegreeType}</Nunito16Bold>
                            <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.92 8.17993H11.69H6.07999C5.11999 8.17993 4.63999 9.33993 5.31999 10.0199L10.5 15.1999C11.33 16.0299 12.68 16.0299 13.51 15.1999L15.48 13.2299L18.69 10.0199C19.36 9.33993 18.88 8.17993 17.92 8.17993Z" fill="#808797"/></svg>`} />
                        </TouchableOpacity>
                        <View style={[styles.positionRelative, showSelector ? styles.shadowW0H05Black : null, styles.borderRadius3vw, styles.wfit, { backgroundColor: clrStyle.white, display: showSelector ? undefined : 'none' }]}>
                            <Animated.View style={[styles.w50vw, styles.overflowHidden, styles.borderRadius3vw, styles.positionAbsolute, { opacity: opacityAnimation, backgroundColor: clrStyle.white }]}>
                                {degreeTypeList.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => { setShowSelector(false), setCurrentDegreeType(item), console.log(item); }}
                                            style={[styles.padding3vw, { backgroundColor: clrStyle.main5, borderBottomWidth: index < degreeTypeList.length - 1 ? 1 : 0, borderBlockColor: clrStyle.grey1 }]}>
                                            <Nunito14Bold style={[styles.textCenter, { color: clrStyle.white }]}>{item}</Nunito14Bold>
                                        </TouchableOpacity>
                                    )
                                })}
                            </Animated.View>
                        </View>
                    </View>
                )
            }
            return (
                <View style={[styles.flexColStartCenter, styles.gap4vw]}>
                    <View style={[styles.flexRowStartCenter, styles.gap2vw, styles.w100]}>
                        {uniDetailPageHatIcon(vw(8), vw(8))}
                        <Nunito20Bold style={[{ color: clrStyle.main5 }]}>Study program</Nunito20Bold>
                    </View>

                    {selectorRender()}

                    {majorList.map((item: any, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.flexColStartCenter, styles.padding4vw, styles.gap2vw, styles.w100, { backgroundColor: clrStyle.white, borderBottomWidth: 1, borderBottomColor: clrStyle.grey1 }]}
                            onPress={() => {
                                console.log(item)
                            }
                            }>
                            <Nunito16Bold style={{ color: clrStyle.main1, }}>{item.majorName}</Nunito16Bold>
                            <Nunito14Reg style={{ color: clrStyle.grey2, }}>{item.examGroup}</Nunito14Reg>
                        </TouchableOpacity>
                    ))}
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
                title={item.name}
            />
            <ScrollView
                style={[styles.flex1, { transform: [{ translateY: -vw(6) }] }]}>
                <Animated.Image source={item.img} style={[styles.w100, { height: imageHeightAnimation, resizeMode: 'cover', borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }] as ImageStyle} />
                {renderTabOption()}
                <View style={[styles.padding4vw]}>
                    {renderTab()}
                </View>
                {marginBottomForScrollView(2)}
            </ScrollView>
        </SaveViewWithColorStatusBar>
    )
}