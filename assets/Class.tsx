// system import
import React, { Component, ComponentType, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, TextInput, } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh, vmax, vmin } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import { searchIcon, sharpLeftArrow, sharpRightArrow } from './svgXml';
import clrStyle from './componentStyleSheet';

// ____________________END OF IMPORT_______________________

// FONT SECTION
export class Nunito12Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito10Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(2.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito20Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito22Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika20Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika22Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika24Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika28Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class SonsieOne100 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SonsieOne-Regular', fontSize: vw(25), color: '#85C5C9' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika20SemiBold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika22SemiBold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika24SemiBold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto20Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Roboto-Medium', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto16Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Roboto-Bold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto20Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Roboto-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class SFproDisplay20Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SF-Pro-Display-Medium', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Helvetica19Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Helvetica', fontSize: vw(4.75), fontWeight: 'bold' }, style]}>
                {children}
            </Text>
        );
    }
}

// FNC COMPONENT SECTION
export class LowBtn extends Component<{
    title: string,
    onPress: () => void,
    bgColor?: string,
    fontColor?: string,
    icon?: any,
    round?: boolean,
    CustomStyle?: any,
    FontElement?: ComponentType<{ children: React.ReactNode }>,
}> {
    render() {
        const { title, onPress, bgColor, fontColor, icon, round, CustomStyle, FontElement } = this.props;
        const Font = FontElement ? FontElement : Roboto16Bold;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.flexRowCenter, styles.gap3vw, styles.borderRadius100, styles.shadowW0H1Black, styles.w90, styles.alignSelfCenter, { backgroundColor: bgColor ? bgColor : clrStyle.main5, padding: vw(3.75), borderRadius: round ? round : vw(1000) }, CustomStyle ? CustomStyle : null]}>
                {icon ? icon : null}
                <Font style={{ color: fontColor ? fontColor : clrStyle.white, }}>{title}</Font>
            </TouchableOpacity>
        );
    }
}

export class BoardingInput extends Component<{
    title: string,
    placeholder?: string,
    value: string | number,
    isNumber?: boolean,
    onChgText: (value: string | number) => void,
    secureTextEntry?: boolean,
    CustomStyle?: any,
}> {
    render() {
        const { title, placeholder, value, onChgText, secureTextEntry, CustomStyle } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;
        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }
        return (
            <View style={[styles.flexColCenter, styles.gap4vw,]}>
                <Nunito24Bold style={[{ color: clrStyle.main5 }]}>{title}</Nunito24Bold>
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={clrStyle.grey2}
                    secureTextEntry={secureTextEntry}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? clrStyle.main5 : clrStyle.grey2, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? clrStyle.main5 : clrStyle.grey2 }]} />
            </View>
        );
    }
}

export class ProcessBarSelfMade extends Component<{
    barLength: number,
    currentStep: number,
    setCurrentStep: (value: number) => void,
    totalStep: number,
    barHeight?: number,
    bgBarColor?: string,
    bgProcessColor?: string,
    customBarStyle?: any,
    customProcessStyle?: any,
    round?: number,
    onStartedProcess?: boolean,
}> {
    render() {
        const { barLength, currentStep, setCurrentStep, totalStep, bgBarColor, bgProcessColor, customBarStyle, customProcessStyle, barHeight, onStartedProcess, round } = this.props;
        const process = (currentStep + (onStartedProcess ? 1 : 0)) / totalStep - (onStartedProcess ? 0 : 1);
        const animation = new Animated.Value(process);
        const inputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i / (totalStep - 1));
        const outputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i * barLength / (totalStep - 1));

        const processAnimationRange = animation.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
        });

        function extendAnimate() {
            Animated.timing(animation, {
                toValue: process,
                duration: 500,
                useNativeDriver: false,
            }).start()
        }
        extendAnimate()

        return (
            <View style={[styles.overflowHidden, { width: barLength, backgroundColor: bgBarColor ? bgBarColor : 'gray', borderRadius: round }, customBarStyle]}>
                <Animated.View style={[styles.w100, { width: processAnimationRange, height: barHeight ? barHeight : vw(3), backgroundColor: bgProcessColor ? bgProcessColor : 'black', borderRadius: round, }, customProcessStyle]} ></Animated.View>
            </View>
        )
    }
}

export class BoardingNavigation extends Component<{
    fnc: (value: boolean) => void,
    leftTitle: string,
    rightTitle: string,
    showGoBack: boolean,
    currentStep: number,
    dataLength: number,
}> {
    render() {
        const { fnc, leftTitle, rightTitle, showGoBack, currentStep, dataLength } = this.props;

        return (
            <View style={[styles.flexRowBetweenCenter, styles.marginTop2vw, styles.marginBottom8vw]}>
                <TouchableOpacity
                    onPress={() => { fnc(false) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep > 0 ? clrStyle.main6 : clrStyle.grey1 }]}>
                        {showGoBack ?
                            <Nunito18Bold style={{ color: clrStyle.grey3 }}>{leftTitle}</Nunito18Bold>
                            :
                            sharpLeftArrow(vw(6), vw(6), currentStep > 0 ? clrStyle.main5 : clrStyle.grey2)}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { fnc(true) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep < dataLength - 1 ? clrStyle.main6 : clrStyle.main5 }]}>
                        {currentStep < dataLength - 1 ?
                            sharpRightArrow(vw(6), vw(6), currentStep < dataLength - 1 ? clrStyle.main5 : clrStyle.grey2)
                            :
                            <Nunito18Bold style={{ color: clrStyle.white }}>{rightTitle}</Nunito18Bold>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}