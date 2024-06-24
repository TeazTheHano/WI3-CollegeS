import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../data/storageFunc'
import { BannerSliderWithCenter, Nunito12Bold, Nunito14Bold, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { searchIcon } from '../assets/svgXml'

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [currentBanner, setCurrentBanner] = useState<number>(0)

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])

  // Banner Section
  const itemWidth = vw(60);
  const itemHeight = vh(18);
  const itemMargin = vw(20);

  interface Banner {
    id: number,
    img: any,
    title: string,
    naviTo: string
  }
  const bannerList: Banner[] = [
    { id: 1, img: require('../assets/photos/homeBanner1.png'), title: 'Shitttt1111 asdkjhfaskdjhf askfjhasdkjfh  kjashdfkjasf aksdjfh askj askj', naviTo: '' },
    { id: 2, img: require('../assets/photos/homeBanner2.png'), title: 'Shitttt2222', naviTo: '' },
    { id: 3, img: require('../assets/photos/homeBanner3.png'), title: 'Shitttt3333', naviTo: '' },
    { id: 4, img: require('../assets/photos/homeBanner4.png'), title: 'Shitttt4444', naviTo: '' },
  ]

  function renderAnimation(itemIndex: number, currentIndex: number) {
    const animation = new Animated.Value(0); // Initialize animation value
    const scaleAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.25]
    });

    const scaleSliderDotAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [vw(1.5), vw(4)]
    });

    const bgSliderDotAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [clrStyle.grey2, clrStyle.main5]
    });

    function runAnimation(isCurrent: boolean) {
      Animated.timing(animation, {
        toValue: isCurrent ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }

    if (itemIndex === currentIndex) {
      runAnimation(true); // Scale up for the current item
    } else {
      runAnimation(false)
    }

    return { scaleAnimation, scaleSliderDotAnimation, bgSliderDotAnimation };
  }

  const renderBanner = ({ item, index }: { item: any, index: number }) => {
    const { scaleAnimation } = renderAnimation(index, currentBanner); // Pass the required arguments to the renderAnimation function
    return (
      <Animated.View key={item.id} style={[styles.borderRadius20, styles.overflowHidden, styles.shadowW0H1Black, styles.bgcolorBlack,
      {
        width: itemWidth,
        height: itemHeight,
        marginLeft: index == 0 ? itemMargin : 0,
        marginRight: index == bannerList.length - 1 ? itemMargin : 0,
        transform: [{ scale: scaleAnimation }],
      }
      ]}>
        <Animated.Image source={item.img} style={[styles.w100, styles.h100, { resizeMode: 'cover', transform: [{ translateX: 0 }] }] as ImageStyle} />
      </Animated.View>
    );
  };

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
    >
      {/* HomeNameBar */}
      <TopNav
        title='College Search'
        rightIcon={searchIcon(vw(6), vw(6), 'white')}
        rightFnc={() => console.log('search')}
      >
        <View style={[styles.flexRowBetweenCenter, styles.paddingBottom2vw, styles.paddingH2vw]}>
          <View style={[styles.flexCol, styles.gap1vw]}>
            <Nunito18Bold style={[{ color: 'white' }]}>Hello, {userInfo?.name}</Nunito18Bold>
            <Nunito14Bold style={[{ color: clrStyle.main6 }]}>Welcome back!</Nunito14Bold>
          </View>
          <View style={[styles.borderRadius100, styles.marginHorizontal2vw, { width: vw(12), height: vw(12), backgroundColor: 'black' }]}>
            {/* TODO: img goes here */}
          </View>
        </View>
      </TopNav>

      {/* banner */}
      <ScrollView style={[styles.flex1]}>
        <BannerSliderWithCenter
          data={bannerList}
          renderBanner={renderBanner}
          currentIndex={currentBanner}
          setCurrentIndex={setCurrentBanner}
          itemWidth={itemWidth}
          customStyle={[styles.marginTop8vw, { height: itemHeight * 1.25 }]}
        />
        <View style={[styles.w80vw, styles.borderRadius10, styles.alignSelfCenter, { paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: clrStyle.main5, transform: [{ translateY: -vw(2) }] }]}>
          <Nunito14Bold lineNumber={2} style={[styles.flex1, { color: clrStyle.white }]}>{bannerList[currentBanner].title}</Nunito14Bold>
        </View>
        <View style={[styles.flexRowCenter, styles.gap2vw]}>
          {bannerList.map((item, index) => {
            const { scaleSliderDotAnimation, bgSliderDotAnimation } = renderAnimation(index, currentBanner);
            return (
              <Animated.View key={index} style={[styles.marginTop2vw, styles.borderRadius100, { width: scaleSliderDotAnimation, height: vw(1.5), backgroundColor: bgSliderDotAnimation }]} />
            )
          })}
        </View>
      </ScrollView>

    </SaveViewWithColorStatusBar >
  )
}