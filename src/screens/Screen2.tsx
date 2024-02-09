import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Screen2 = () => {
  return (
    <View>
        <Image
        source={{
          uri: 'https://w7.pngwing.com/pngs/434/121/png-transparent-hello-kitty-illustration-hello-kitty-hello-kitty-wall-stencils-white-logo-flower.png',
        }}
        style={styles.img}
      />
    </View>
  )
}
