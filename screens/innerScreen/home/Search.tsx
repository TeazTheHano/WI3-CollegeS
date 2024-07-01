import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle from '../../../assets/componentStyleSheet'
import { adjustIcon, searchIcon, xIcon } from '../../../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'

export default function Search() {
  const navigation = useNavigation()

  const [searchText, setSearchText] = React.useState<string>('')
  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}
    >
      {/* HomeNameBar */}
      <View style={[styles.paddingH4vw, styles.paddingBottom4vw, styles.paddingTop2vw, styles.overflowHidden, styles.flexRowCenter, styles.gap4vw, { backgroundColor: clrStyle.main5, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
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
    </SaveViewWithColorStatusBar >
  )
}