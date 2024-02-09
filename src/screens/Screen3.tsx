import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Screen3 = () => {
  return (
    <View>
        <Image
        source={{
          uri: 'https://i.pinimg.com/474x/07/30/f6/0730f65c1db2c0f30aa2f0eeb3a99c4f.jpg',
        }}
        style={styles.img}
      />
    </View>
  )
}