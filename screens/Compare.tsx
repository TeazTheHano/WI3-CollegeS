import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles from '../assets/stylesheet'

export default function Compare() {
  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='Compare' />
      <ScrollView
        contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>
        <Text>Compare</Text>
      </ScrollView>
    </SaveViewWithColorStatusBar>
  )
}