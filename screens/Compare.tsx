import { View, Text, ScrollView, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { getCompareData } from '../data/storageFunc'

export default function Compare() {
  const navigation = useNavigation();

  const [compare, setCompare] = React.useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCompareData().then((data) => {
        if (data) {
          console.log(data);

        } else {
        }
      });
    });
    return unsubscribe;
  }, [navigation]);


  function pendingCompare() {

    return (
      <View>

      </View>
    )
  }

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='Compare'
        returnPreScreen={compare}
        returnPreScreenFnc={() => { setCompare(false) }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.flexColStartCenter, styles.gap4vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>
        <View style={[styles.flexRowStartCenter, styles.w100, styles.gap2vw,]}>
          <SvgXml xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.17855L28.7721 24.5936L32 19.4383L3.25107 1L0 6.17855Z" fill="#94CDED"/><path d="M1.62549 3.60093L30.3977 22.0393L32 19.4383L3.25106 1L1.62549 3.60093Z" fill="#DBDBDB"/><path d="M18.2061 10.3583L16.7198 9.40625L15.1407 11.8678L13.2598 14.7937L15.373 16.1406L18.2061 10.3583Z" fill="#850000"/><path d="M15.3267 13.447C15.5357 14.5849 15.4892 15.1887 14.0727 20.6923C12.6793 26.2191 14.003 28.5181 14.003 28.5181L15.8607 28.193C15.8607 28.193 14.9319 20.8549 15.5124 18.3237C16.093 15.7925 16.0001 13.7024 16.0001 13.7024L15.3267 13.4703V13.447Z" fill="#850000"/><path d="M16.6733 13.2844C18.2524 14.4455 23.0826 17.743 22.6878 21.3192C22.2698 24.8954 21.9447 31.7227 21.9447 31.7227L19.4135 30.6777C20.3424 24.64 20.8533 19.1596 19.1581 17.2554C17.1842 15.0493 16.1392 14.4223 16.1392 14.4223L16.6965 13.2844H16.6733Z" fill="#B80000"/></svg>`} width={vw(8)} height={vw(8)} />
          <Nunito20Bold style={{ color: clrStyle.main5 }}>Choose your option</Nunito20Bold>

          <Animated.View>
            {compare ? pendingCompare() : null}
          </Animated.View>

        </View>
      </ScrollView>
    </SaveViewWithColorStatusBar>
  )
}