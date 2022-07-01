import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} >
    {/* <ImageBackground source={{uri:'https://www.gehu.ac.in/content/dam/gehu/Image-Galleries/HeaderFiles/bhimtal-03.jpg'}} style={{padding:20}}> */}
    <ImageBackground source={require("../../assets/bg.jpg")} style={{padding:20}}>
    <Image source={require("../../assets/gehu.png")} style={{height:90,width:90,borderRadius:40,marginBottom:10}}/>
    <Text style={{fontSize:20, fontWeight:'bold',color:'black',backgroundColor:'#ead2ff',borderRadius:10,paddingHorizontal:5,}}>GRAPHIC ERA HILL UNIVERSITY</Text>
    </ImageBackground>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer