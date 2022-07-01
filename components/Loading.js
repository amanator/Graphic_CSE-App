import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View >
      <Image style={styles.image} source={ require('../assets/loading.gif')} />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      marginLeft:60,
        width: 200,
        height:200
        // height: undefined,
        // aspectRatio: 1,
      },
})