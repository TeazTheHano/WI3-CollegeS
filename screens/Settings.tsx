import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles from '../assets/stylesheet'
import { removeAllUserInfo } from '../data/storageFunc'

export default function Settings() {
  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='Settings' />
      <ScrollView
        contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>
        <Text>Settings</Text>
        <TouchableOpacity
          onPress={() => {
            removeAllUserInfo()
            console.log('clear userData')
          }}>
          <Text>Clear userData</Text>
        </TouchableOpacity>
      </ScrollView>
    </SaveViewWithColorStatusBar>
  )
}