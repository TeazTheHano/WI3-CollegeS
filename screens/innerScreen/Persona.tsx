import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LowBtn, Nunito14Bold, SaveViewWithColorStatusBar, TopNav } from '../../assets/Class'
import clrStyle from '../../assets/componentStyleSheet'
import styles from '../../assets/stylesheet'
import defaultData, { MBTI } from '../../data/data'
import { getUserInfo } from '../../data/storageFunc'

export default function Persona({ navigation, route }) {
    const { data } = route.params
    const { mbti } = defaultData()
    const [personaData, setPersonaData] = useState<MBTI>()

    useEffect(() => {
        mbti.filter((item) => {
            if (item.mbti === data.data.persona) {
                setPersonaData(item)
            }
        })
    }, [])

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}>
            <TopNav
                returnPreScreen={true}
                returnPreScreenFnc={navigation.goBack}
                title='Persona'>
                <Nunito14Bold style={[styles.textCenter, { color: clrStyle.grey2 }]}>{data.data.persona}</Nunito14Bold>
            </TopNav>
            <ScrollView
                contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
                style={[styles.flex1]}>
                <Text>{personaData?.description}</Text>
                <Text>{personaData?.name}</Text>

            </ScrollView>
            <View>
                <LowBtn
                    round={false}
                    title='Explore other personalities'
                    onPress={() => {
                        navigation.navigate('Test')
                    }}
                />
            </View>
        </SaveViewWithColorStatusBar>
    )
}