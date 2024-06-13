import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles, { vw } from '../assets/stylesheet'
import { LowBtn } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'

export default function Onboard() {
    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false)}
            <View style={[styles.flex1, styles.w100vw, styles.flexColCenter]}>
                <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
            </View>
            <LowBtn title='Get Started'
                onPress={() => { }}
                CustomStyle={[styles.marginBottom4vw]}
            />
        </SafeAreaView>
    )
}