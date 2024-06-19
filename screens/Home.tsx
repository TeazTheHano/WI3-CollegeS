import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getUserInfo } from '../data/storageFunc'

export default function Home() {
  const [userInfo, setUserInfo] = React.useState<any>(null)
  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
    console.log(userInfo);
    
  }, [userInfo])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}