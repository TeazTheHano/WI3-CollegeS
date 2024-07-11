import { View, Text, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Nunito12Bold, Nunito12Med, Nunito14Bold, Nunito14Med, Nunito14Reg, Nunito16Bold, Nunito18Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle, { componentStyle } from '../../../assets/componentStyleSheet'
import { adjustIcon, searchIcon, sharpLeftArrow, sharpXIcon, xIcon } from '../../../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'
import { RecentSearch, universityList } from '../../../data/data'
import { Slider } from '@miblanchard/react-native-slider';
import { formatNumber } from '../../../assets/component'
import { getRecentSearch, saveRecentSearch } from '../../../data/storageFunc'

export default function Search() {
  const navigation = useNavigation()

  const [searchText, setSearchText] = React.useState<string>('')
  const [result, setResult] = React.useState<any[]>([])

  // recent search
  const [recentSearch, setRecentSearch] = React.useState<RecentSearch[]>()

  // filter
  const [showFilter, setShowFilter] = React.useState<boolean>(true)
  const [minSlide1, setMinSlide1] = React.useState<number>(0)
  const [maxSlide1, setMaxSlide1] = React.useState<number>(1)
  const [minSlide2, setMinSlide2] = React.useState<number>(0.003)
  const [maxSlide2, setMaxSlide2] = React.useState<number>(1)
  const [maxScore, setMaxScore] = React.useState<number>(0)
  const [minScore, setMinScore] = React.useState<number>(0)
  const [maxFee, setMaxFee] = React.useState<number>(0)
  const [minFee, setMinFee] = React.useState<number>(0)

  useEffect(() => {
    setResult(searchUniFnc(searchText))
  }, [searchText])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getRecentSearch().then((ren) => {
        if (ren) { setRecentSearch(ren) }
      });
    })

    return unsubscribe
  }, [navigation])

  // show filter animation
  useEffect(() => {
    renderShowFilterAnimation(showFilter)
  }, [showFilter])

  useEffect(() => {
    setMaxScore(Math.round(maxSlide1 * 60))
    setMinScore(Math.round(minSlide1 * 60))
  }, [minSlide1, maxSlide1, minScore, maxScore])

  useEffect(() => {
    setMaxFee(maxSlide2 * 500000000)
    setMinFee(minSlide2 * 500000000)
  }, [minSlide2, maxSlide2, minFee, maxFee])

  const showFilterAnimate = useRef(new Animated.Value(0)).current
  const showFilterAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [vh(0), vh(70)]
  })
  const scrollViewOpaAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5]
  })
  const showFilterOpaAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })
  function renderShowFilterAnimation(trigger: boolean) {
    Animated.timing(showFilterAnimate, {
      toValue: trigger ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

  class SliderInput extends React.Component<
    {
      minvalue: number,
      maxvalue: number,
      onchangeMax: (value: number) => void,
      onchangeMin: (value: number) => void
      step: number
      thumbTintColor?: string
      minimumTrackTintColor?: string
    }> {
    state = {
      value: [this.props.minvalue, this.props.maxvalue]
    };
    render() {
      return (
        <Slider
          thumbTintColor={this.props.thumbTintColor}
          minimumTrackTintColor={this.props.minimumTrackTintColor}
          value={this.state.value}
          step={this.props.step}
          onValueChange={value => {
            this.setState({ value })
          }}
          onSlidingComplete={(value) => {
            this.props.onchangeMin(value[0])
            this.props.onchangeMax(value[1])
          }}
        />
      );
    }
  }

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
          onPress={() => { setShowFilter(!showFilter) }}
          style={[styles.padding2vw, styles.borderRadius10, { backgroundColor: clrStyle.white }]}>
          {adjustIcon(vw(6), vw(6))}
        </TouchableOpacity>
      </View>

      {/* Search Result */}
      <Animated.ScrollView style={[styles.paddingH6vw, styles.paddingTop2vw, styles.flex1, { opacity: scrollViewOpaAnimation }]}>
        {
          searchText.trim() === '' ?
            // if no search
            <View style={[styles.flexCol, styles.paddingV2vw]}>
              <Nunito16Bold style={[styles.marginVertical2vw, { color: clrStyle.black }]}>Recent search</Nunito16Bold>
              {Array.isArray(recentSearch) ?
                recentSearch.map((item: RecentSearch, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.paddingTop1vw, styles.marginTop4vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}
                    onPress={() => {
                      setSearchText(item.uniName)
                    }}
                  >
                    <Nunito14Med style={[{ color: clrStyle.main1 }]}>{item.uniName.toUpperCase()} {item.uniShortName ? <Nunito12Med style={[{ color: clrStyle.grey3 }]}>({item.uniShortName})</Nunito12Med> : null}</Nunito14Med>
                    <Nunito12Bold style={{ color: clrStyle.grey2 }}>{item.field}</Nunito12Bold>
                  </TouchableOpacity>
                )) : null
              }
            </View> :
            // if no result
            result.length === 0 ?
              <View style={[styles.flexColCenter, styles.paddingV2vw]}>
                <Text style={[{ color: clrStyle.grey2 }]}>No result found</Text>
              </View> :
              // if have result
              result.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.paddingV2vw, styles.marginVertical2vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}
                  onPress={() => {
                    let recent: RecentSearch = {
                      indexNum: 1,
                      uniName: item.name,
                      uniShortName: item.shortName,
                      field: item.field,
                    }
                    saveRecentSearch(recentSearch ? [...recentSearch, recent] : [recent])
                    navigation.navigate('UniversityDetail', { item });
                  }}
                >
                  <Nunito14Bold style={[{ color: clrStyle.main1 }]}>{item.name.toUpperCase()} {item.shortName ? <Nunito14Reg style={[{ color: clrStyle.grey3 }]}>({item.shortName})</Nunito14Reg> : null}</Nunito14Bold>
                  <Nunito12Bold style={{ color: clrStyle.grey2 }}>{item.city} - {item.major.length > 0 ? <Nunito12Bold>{item.major.length} Major(s) and Program(s) - </Nunito12Bold> : null}score: {item.lowestStandardScore}+</Nunito12Bold>
                </TouchableOpacity>
              ))}
      </Animated.ScrollView>

      {/* Filter */}
      <Animated.View style={[styles.w100, styles.zIndex1, componentStyle.filterShadow, styles.padding4vw, { height: showFilterAnimation, borderTopRightRadius: vw(6), borderTopLeftRadius: vw(6), backgroundColor: clrStyle.white, opacity: showFilterOpaAnimation }]}>
        <View style={[styles.flexRowBetweenCenter, styles.paddingH2vw, { borderBottomWidth: 1, borderBlockColor: clrStyle.grey2 }]}>
          <Nunito18Bold style={{ color: clrStyle.main5 }}>Filter</Nunito18Bold>
          <TouchableOpacity
            onPress={() => setShowFilter(false)}
            style={[styles.padding3vw, styles.borderRadius10,]}>
            {sharpXIcon(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
        <View style={[styles.flexCol, styles.gap2vw, styles.paddingV4vw]}>
          <Nunito16Bold>Score range</Nunito16Bold>
          <SliderInput
            step={1 / 60}
            minvalue={minSlide1}
            maxvalue={maxSlide1}
            onchangeMax={(value) => setMaxSlide1(value)}
            onchangeMin={(value) => setMinSlide1(value)}
            thumbTintColor={clrStyle.main1}
            minimumTrackTintColor={clrStyle.main5}
          />
          <SliderInput
            step={0.001}
            minvalue={minSlide2}
            maxvalue={maxSlide2}
            onchangeMax={(value) => setMaxSlide2(value)}
            onchangeMin={(value) => setMinSlide2(value)}
            thumbTintColor={clrStyle.main3}
            minimumTrackTintColor={clrStyle.main4}
          />
        </View>
        <TouchableOpacity
          onPress={() => setResult(filterUniFnc(result, minScore, maxScore, minFee, maxFee))}
          style={[styles.padding2vw, styles.borderRadius10, { backgroundColor: clrStyle.main5 }]}>
          <Nunito16Bold style={[{ color: clrStyle.white }]}>Apply Filter</Nunito16Bold>
        </TouchableOpacity>
      </Animated.View>
    </SaveViewWithColorStatusBar >
  )
}

export const searchUniFnc = (searchText: string) => {
  if (searchText.trim() === '') { return [] }
  const filteredData = universityList.filter((item) => {
    if (item.name) { return item.name.toLowerCase().includes(searchText.trim().toLowerCase()) }
    else { return false }
  })
  return filteredData
}

export const filterUniFnc = (data: any[], minScore: number, maxScore: number, minFee: number, maxFee: number) => {
  const filteredData = data.filter((item) => {
    if (item.lowestStandardScore) {
      if (item.lowestStandardScore >= minScore && item.lowestStandardScore <= maxScore) {
        return true
      }
      else { return false }
    }
    else { return false }
  })
  return filteredData
}

