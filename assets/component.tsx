// system imports
import React, { Component, ComponentType, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// style import
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from './stylesheet';
import Svg, { SvgXml } from 'react-native-svg';

// SVG import
import { searchIcon, leftArrow, shareIcon, rightArrow, backArrow, } from "./svgXml";
import clrStyle, { Gradient1, componentStyle } from "./componentStyleSheet";

// font import 
import { Nunito14Reg, Nunito16Bold, Nunito18Bold, Roboto20Med, Signika20Bold } from "./Class";
import { clearExerciseAllData } from "../data/storageFunc";

// ____________________END OF IMPORT_______________________

let { width, height } = Dimensions.get('window');


export const marginBottomForScrollView = (time?: number) => {
    return (
        <View style={{ height: vh(time ? 5 * time : 5), opacity: 0 }}></View>
    )
}

export const statusBarTransparency = (lightContent: boolean = true, margin: boolean = false) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
    return (
        <View>
            <StatusBar barStyle={lightContent ? 'light-content' : 'dark-content'}
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
            />
            {margin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
        </View>
    )
}

// share fnc 

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};

export const NavNavigation = (title: string) => {
    const navigation = useNavigation()

    return (
        <View style={[styles.flexRowStartCenter, styles.gap2vw, styles.padding3vw, styles.w90, styles.alignSelfCenter, styles.borderRadius100, styles.marginBottom4vw, styles.shadowW0H1Black, { backgroundColor: 'rgba(239, 239, 239, 0.2)' }]}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                {backArrow(vw(6), vw(6))}
            </TouchableOpacity>
            <Signika20Bold style={{ color: clrStyle.white }}>{title}</Signika20Bold>
        </View>
    )
}

export const ListGen = (data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, FontClass2nd: ComponentType<any> = FontClass1st, bullet1st: string = '1', bullet2nd: string = '-', textIndent2nd: any = 0) => {
    function bulletMark(bullet: string, index: number) {
        let i = index == 0 ? 0 : index % 2 == 0 ? index / 2 : index
        if (bullet === 'a') {
            function abullet(i: number) {
                let charNum = 26, charStart = 97
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return abullet(i)

        } else if (bullet === 'A') {
            function Abullet(i: number) {
                let charNum = 26, charStart = 65
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return Abullet(i)

        } else if (bullet === 'I') {
            // make bullet as a roman number
            function Ibullet(i: number) {
                let romanNum = {
                    1: 'I',
                    2: 'II',
                    3: 'III',
                    4: 'IV',
                    5: 'V',
                    6: 'VI',
                    7: 'VII',
                    8: 'VIII',
                    9: 'IX',
                    10: 'X',
                    100: 'C',
                    1000: 'M',
                    500: 'D',
                    50: 'L',
                    5000: 'V',
                }

                let roman = ''
                let num = i + 1
                let romanNumArr = Object.keys(romanNum).map(Number).sort((a, b) => b - a)

            }
            return Ibullet(i)

        } else if (bullet === '1') {
            return i + 1 + '.'

        } else {
            return bullet
        }

    }

    return (
        <View>
            {typeof data == 'string' ?

                <FontClass1st style={{ color: clrStyle.white }}>{data}</FontClass1st>

                : data.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <View key={index} style={[styles.flexRow, styles.w100]}>
                                <FontClass1st style={{ color: clrStyle.white }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                <FontClass1st style={{ color: clrStyle.white }}>{item}</FontClass1st>
                            </View>
                        )
                    } else if (Array.isArray(item)) {
                        return (
                            <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <View key={subIndex} style={[styles.flexRow]}>
                                            <FontClass2nd style={{ color: clrStyle.white }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: clrStyle.white }}>{subItem}</FontClass2nd>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
        </View>
    )
}

