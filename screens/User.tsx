import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Nunito14Bold, Nunito18Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import { getUserInfo } from '../data/storageFunc'
import styles, { vw } from '../assets/stylesheet'

export default function User() {
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])


  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='User' />
      <ScrollView style={[styles.flex1]}>
        <View style={[styles.flexRowStartCenter, styles.paddingBottom2vw, styles.paddingH2vw]}>
          <View style={[styles.borderRadius100, styles.marginHorizontal2vw, { width: vw(12), height: vw(12), backgroundColor: 'black' }]}>
            {/* TODO: img goes here */}
          </View>
          <View style={[styles.flexCol, styles.gap1vw]}>
            <Nunito18Bold style={[{ color: clrStyle.grey3 }]}>Hello, {userInfo?.name}</Nunito18Bold>
            <Nunito14Bold style={[{ color: clrStyle.grey2 }]}>Welcome back!</Nunito14Bold>
          </View>
        </View>
        <View style={[styles.border1, styles.h100vh]}></View>
      </ScrollView>
    </SaveViewWithColorStatusBar>
  )
}