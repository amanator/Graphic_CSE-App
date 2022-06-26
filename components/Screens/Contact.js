import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useState } from 'react'


export default function Contact() {

  const handleEmail = async () => {

    alert(result.status);
  }

  const [detail, setdetail] = useState({ name: "", email: "", issue: "" })


  const handleClick = () => {
    alert(detail.name)
    // handleEmail()
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.imgBox} onPress={()=>{ Linking.openURL('https://www.instagram.com/graphicerahilluniversity/?hl=en') }}>
            <Image style={styles.img} source={{uri:"https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png"}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgBox} onPress={()=>{ Linking.openURL('https://www.linkedin.com/school/graphicerahilluniversity') }}>
            <Image style={styles.img} source={{uri:"https://www.citypng.com/public/uploads/preview/hd-blue-square-linkedin-drawing-icon-png-316242039163sxvku7vcw.png"}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgBox} onPress={()=>{ Linking.openURL('https://twitter.com/hashtag/gehu') }}>
            <Image style={styles.img} source={{uri:"https://www.citypng.com/public/uploads/preview/-51615050126grzv0fh0gj.png"}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgBox} onPress={()=>{ Linking.openURL('https://www.facebook.com/gehu.official/') }}>
            <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/5b/ac/75/5bac7554c5c6ce538a7dcf00b7de88c4.jpg"}}/>
          </TouchableOpacity>
      </View>
      <View style={styles.grevienceBox}>
      <Text style={styles.heading}> Grivence</Text>
        <View style={styles.intake}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} type="text" name='name' onChangeText={(text) => setdetail({ ...detail, 'name': text })} />
        </View>
        <View style={styles.intake}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} type="email" name='email' onChangeText={(text) => setdetail({ ...detail, 'email': text })} />
        </View>

        <View style={styles.intake}>
          <Text style={styles.label}>Issue</Text>
          <TextInput style={{ borderWidth: 2, borderColor: "black", height: 200, textAlignVertical: 'top', padding: 10 }} multiline={true} name='issue' onChangeText={(text) => setdetail({ ...detail, 'issue': text })} />
        </View>

        <View style={{ marginTop: 30, marginHorizontal: 120 }}>
          <Button title='Submit' onPress={handleClick} />
        </View>

      </View>


    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    // margin: 10,
    marginTop: 20,

  },
  iconContainer:{
      borderWidth:2,
      flexDirection:'row',
      // height:50
  },
  imgBox:{
      marginHorizontal:10,
  },
  img: {

    height: 60,
    width: 60,
    marginBottom: 5,
    borderRadius: 10,

  },
  grevienceBox : {
    marginTop:20
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  heading: {
    // marginTop: 40,
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  intake: {
    marginTop: 10,
    marginHorizontal: 20,

  },
})