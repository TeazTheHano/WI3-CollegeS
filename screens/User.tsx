import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BottomBar, Nunito14Bold, Nunito16Bold, Nunito16Reg, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import { getUserInfo } from '../data/storageFunc'
import styles, { vw } from '../assets/stylesheet'
import { bestOfScCoIcon, curveRightArrow, MBTIIcon, wishListIcon } from '../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import defaultData from '../data/data'
import { marginBottomForScrollView } from '../assets/component'

export default function User() {
  const navigation = useNavigation()
  const { bestOfEconomic } = defaultData()

  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])


  interface UserTarget {
    title: string,
    icon: any,
    data: string
    navTo: string
  }
  let userTarget: UserTarget[] = [
    { title: 'MBTI', icon: MBTIIcon(), data: userInfo?.data?.persona, navTo: 'Persona' },
    { title: 'Goal', icon: bestOfScCoIcon(), data: userInfo?.data?.goal, navTo: 'Persona' },
    { title: 'Wishlist', icon: wishListIcon(), data: userInfo?.data?.goal, navTo: 'Persona' },
  ]

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='User' />
      <ScrollView
        contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>

        <View style={[styles.flexRowStartCenter, styles.paddingV2vw, styles.w100]}>
          <View style={[styles.borderRadius100, styles.marginHorizontal2vw, { width: vw(12), height: vw(12), backgroundColor: 'black' }]}>
            {/* TODO: img goes here */}
          </View>
          <View style={[styles.flexCol, styles.gap1vw]}>
            <Nunito18Bold style={[{ color: clrStyle.grey3 }]}>Hello, {userInfo?.name}</Nunito18Bold>
            {/* <Nunito14Bold style={[{ color: clrStyle.grey2 }]}>Welcome back!</Nunito14Bold> */}
          </View>
        </View>

        <View style={[styles.w100, styles.flexRowBetweenCenter]}>
          {
            userTarget.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => { navigation.navigate(item.navTo, { data: userInfo }) }}
                  key={index} style={[styles.flexCol, styles.alignItemsCenter, styles.w30, styles.shadowW0H1Black, styles.borderRadius4vw, styles.padding2vw, { backgroundColor: clrStyle.white }]}>
                  <Nunito14Bold style={[styles.paddingTop2vw, styles.textCenter, { color: clrStyle.grey3 }]}>{item.title}</Nunito14Bold>
                  <View style={[{ width: '100%', height: vw(28), borderTopWidth: 2, borderTopColor: clrStyle.grey1 }]}>{item.icon}</View>
                  <Nunito14Bold style={[styles.paddingTop1vw, { color: clrStyle.grey2 }]}>{item.data}</Nunito14Bold>
                </TouchableOpacity>
              )
            })
          }
        </View>


        <View style={[styles.flexCol, styles.w100]}>
          <View style={[styles.flexRowBetweenCenter, styles.w100]}>
            <Nunito16Bold>Best fit</Nunito16Bold>
            <TouchableOpacity
              onPress={() => {
                console.log('see all');
                // TODO: do something
              }}>
              {curveRightArrow(vw(6), vw(6))}
            </TouchableOpacity>
          </View>
          {
            bestOfEconomic.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // TODO: nav to item.navTo
                    console.log('nav to ' + item.navTo);
                  }}
                  key={index} style={[styles.flexRowStartCenter, styles.w100, styles.padding4vw, styles.gap2vw, { backgroundColor: clrStyle.white, borderBottomWidth: 1, borderBottomColor: clrStyle.grey1 }]}>
                  {item.icon}
                  <View style={[styles.flexCol, styles.paddingLeft2vw]}>
                    <Nunito20Bold style={{ color: clrStyle.grey3, }}>{item.title}</Nunito20Bold>
                    <Nunito16Reg style={{ color: clrStyle.grey2, }}>{item.description}</Nunito16Reg>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>

        {marginBottomForScrollView()}
      </ScrollView>
      {/* <BottomBar navFnc={() => navigation} currentScreen='User' bgColor={clrStyle.white} shadow={true} /> */}
    </SaveViewWithColorStatusBar>
  )
}