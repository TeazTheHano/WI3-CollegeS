import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Nunito12Bold, Nunito14Bold, Nunito14Reg, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle from '../../../assets/componentStyleSheet'
import { adjustIcon, searchIcon, sharpLeftArrow, xIcon } from '../../../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'
import defaultData from '../../../data/data'

const universitiesData = defaultData().universityList

export default function Search() {
  const navigation = useNavigation()

  const [searchText, setSearchText] = React.useState<string>('')
  const [result, setResult] = React.useState<any[]>([])

  useEffect(() => {
    setResult(searchUniFnc(searchText))
  }, [searchText])

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}
    >
      {/* HomeNameBar */}
      <View style={[styles.paddingH4vw, styles.paddingBottom4vw, styles.paddingTop2vw, styles.overflowHidden, styles.flexRowCenter, styles.gap4vw, { backgroundColor: clrStyle.main5, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
        <TouchableOpacity
          style={[styles.padding2vw]}
          onPress={() => navigation.goBack()}>
          {sharpLeftArrow(vw(6), vw(6), 'white')}
        </TouchableOpacity>
        <View style={[styles.borderRadius10, styles.flex1, styles.overflowHidden, styles.flexRowStartCenter, styles.paddingLeft2vw, { backgroundColor: clrStyle.white }]}>
          {searchIcon(vw(6), vw(6), clrStyle.grey2)}
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor={clrStyle.grey2}
            style={[styles.flex1, styles.padding2vw, { backgroundColor: clrStyle.white, fontFamily: 'Nunito-Thin', fontSize: vw(4) }]} />
          <TouchableOpacity
            style={[styles.padding2vw]}
            onPress={() => setSearchText('')}>
            {xIcon(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.padding2vw, styles.borderRadius10, { backgroundColor: clrStyle.white }]}>
          {adjustIcon(vw(6), vw(6))}
        </TouchableOpacity>
      </View>

      {/* Search Result */}
      <ScrollView style={[styles.paddingH6vw, styles.paddingTop2vw, styles.flex1]}>
        {result.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paddingV2vw, styles.marginVertical2vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}
            onPress={() => navigation.navigate('UniversityDetail', { item })}
          >
            <Nunito14Bold style={[{ color: clrStyle.main1 }]}>{item.name.toUpperCase()} {item.shortName ? <Nunito14Reg style={[{ color: clrStyle.grey3 }]}>({item.shortName})</Nunito14Reg> : null}</Nunito14Bold>
            <Nunito12Bold style={{ color: clrStyle.grey2 }}>{item.city} - {item.major.length > 0 ? <Nunito12Bold>{item.major.length} Major(s) and Program(s) - </Nunito12Bold> : null}score: {item.lowestStandardScore}+</Nunito12Bold>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SaveViewWithColorStatusBar >
  )
}

export const searchUniFnc = (searchText: string) => {
  if (searchText.trim() === '') { return [] }
  const filteredData = universitiesData.filter((item) => {
    if (item.name) { return item.name.toLowerCase().includes(searchText.trim().toLowerCase()) }
    else { return false }
  })
  return filteredData
}