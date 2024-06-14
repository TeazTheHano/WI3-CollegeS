
import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, TextInput, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles, { vw } from '../assets/stylesheet'
import { BoardingInput, BoardingNavigation, LowBtn, Nunito18Bold, Nunito24Bold, Nunito24Reg, ProcessBarSelfMade } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, sharpLeftArrow, sharpRightArrow } from '../assets/svgXml'

export default function DataCollect() {
    const navigation = useNavigation();

    const [currentStep, setCurrentStep] = React.useState(0)
    const [accountName, setAccountName] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const [showGoBack, setShowGoBack] = React.useState(false)

    const list = [accountName, email, password, confirmPassword]

    function currentStepAdjust(act: boolean) {
        if (act && currentStep < list.length - 1) {
            setShowGoBack(false);
            setCurrentStep(currentStep + 1);
        } else if (!act && currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else if (act && currentStep === list.length - 1) {
            // TODO: firebase auth
            // TODO: after auth, navigate to Onboard
            // TODO: check if have other data to collect
            navigation.navigate('Home');
        } else if (!act && currentStep === 0) {
            setShowGoBack(true);
            if (!act && showGoBack) {
                navigation.goBack();
            }
        }
    }

    // TODO: firebase auth

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <BoardingInput
                        title='Your Name'
                        value={accountName}
                        onChgText={setAccountName as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 1:
                return (
                    <BoardingInput
                        title='Email'
                        value={email}
                        onChgText={setEmail as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 2:
                return (
                    <BoardingInput
                        title='Password'
                        value={password}
                        onChgText={setPassword as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 3:
                return (
                    <BoardingInput
                        title='Confirm Password'
                        value={confirmPassword}
                        onChgText={setConfirmPassword as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
        }
    }

    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false)}
            <View style={[styles.flexCol, styles.flex1, styles.justifyContentSpaceBetween, styles.paddingH5vw]}>
                <Nunito24Reg style={[styles.w60vw, { color: clrStyle.main5 }]}>Before jumping in, let's know each orther</Nunito24Reg>

                {/* input box */}
                {inputBox()}

                <View style={[styles.flexCol, styles.gap2vw]}>
                    <ProcessBarSelfMade
                        barLength={vw(90)}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        totalStep={list.length}
                        round={vw(100)}
                        barHeight={vw(2)}
                        onStartedProcess={true}
                        bgBarColor={clrStyle.grey1}
                        bgProcessColor={clrStyle.main5} />

                    <BoardingNavigation
                        fnc={currentStepAdjust}
                        currentStep={currentStep}
                        dataLength={list.length}
                        showGoBack={showGoBack}
                        leftTitle='Go back?'
                        rightTitle='Jump to our journey'
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}