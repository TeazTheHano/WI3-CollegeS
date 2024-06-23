import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../data/storageFunc'
import { BannerSliderWithCenter, Nunito14Bold, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
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

  const bannerList = [
    { id: 1, img: require('../assets/photos/homeBanner1.png') },
    { id: 2, img: require('../assets/photos/homeBanner2.png') },
    { id: 3, img: require('../assets/photos/homeBanner3.png') },
    { id: 4, img: require('../assets/photos/homeBanner4.png') },
    // { id: 5, img: null }
  ]

  function renderAnimation(itemIndex: number, currentIndex: number) {
    const animation = new Animated.Value(0); // Initialize animation value
    const scaleAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.25]
    });

    const zIndex = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    function runAnimation(isCurrent: boolean) {
      Animated.timing(animation, {
        toValue: isCurrent ? 1 : 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }

    if (itemIndex === currentIndex) {
      runAnimation(true); // Scale up for the current item
    } else {
      runAnimation(false)
    }

    return { scaleAnimation, zIndex };
  }

  const renderBanner = ({ item, index }: { item: any, index: number }) => {
    const { scaleAnimation, zIndex } = renderAnimation(index, currentBanner); // Pass the required arguments to the renderAnimation function
    return (
      <Animated.View key={item.id} style={[styles.borderRadius20, styles.overflowHidden,
      {
        width: itemWidth,
        height: itemHeight,
        marginLeft: index == 0 ? itemMargin : 0,
        marginRight: index == bannerList.length - 1 ? itemMargin : 0,
        opacity: index == currentBanner ? 1 : 0.5,
        transform: [{ scale: scaleAnimation }],
        zIndex: zIndex,
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
      <BannerSliderWithCenter
        data={bannerList}
        renderBanner={renderBanner}
        currentIndex={currentBanner}
        setCurrentIndex={setCurrentBanner}
        itemWidth={itemWidth}
        customStyle={[styles.paddingV10vw]}
      />

    </SaveViewWithColorStatusBar>
  )
}