import { View, Text, TouchableOpacity, Image, ImageStyle, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles, { vw } from '../assets/stylesheet'

export default function Onboard() {
    return (
        <SafeAreaView style={[styles.flex1]}>
            <View style={[styles.flex1, styles.w100vw, styles.flexColCenter]}>
                <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
            </View>
            <TouchableOpacity>
                <Text>heehhe</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}