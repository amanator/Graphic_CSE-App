import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
// import {ScrollView} from 'react-native-virtualized-view'
import notificationContext from '../../Context/Notifications/NotificationContext'
import NotificationBox from "../Utilities/NotificationBox"
import adminContext from '../../Context/Admin/AdminContext'

const Home = ({ navigation }) => {
  let gehuImgUrl = "https://www.globaleducollege.com/images/college/featured/10/Graphic-Era-Hill-University.png"
  let bhimtalImgUrl = "https://www.gehu.ac.in/content/dam/gehu/home/gehu-bhimtal.jpg"
  let haldwaniImgUrl = "https://www.gehu.ac.in/content/dam/gehu/Image-Galleries/hld/campus-hld-gehu.jpg"

  const context = useContext(notificationContext)
  const AdminCon = useContext(adminContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [detail, setdetail] = useState({ date: "", title: "", description: "" })
  let { notifications, addNotification, getnotification } = context
  let { admin } = AdminCon

  useEffect(() => {
    getnotification()
  }, [])

  const Headerflatlist = () => {
    return (
      <View>
        {/* <Image style={{height:90,width:350}} source={{uri:'https://th.bing.com/th/id/R.7480763e285dff4bc26594d142d0288d?rik=PpGlS38zINmF3Q&riu=http%3a%2f%2fbtechgeu.in%2fimages%2flogo_graphic_era.gif&ehk=kgBbETYBAjAAnqe86DcBbqA%2fXyD2Udl9peCEAKIIBsY%3d&risl=&pid=ImgRaw&r=0'}} /> */}
        {/* <Text style={styles.heading}>Graphic Era Hill Univerity  </Text> */}
        <View style={{alignItems:"center"}}>
        <Image style={{ height: 81, width: 320, marginTop: 10 }} source={{ uri: 'https://th.bing.com/th/id/R.5d6510c92e557197c15cd8530e0f9d5d?rik=uURIks69UyeG4A&riu=http%3a%2f%2fwweii.in%2fyahoo_site_admin%2fassets%2fimages%2flogo.12151937_std.jpg&ehk=iGU0fXhCc6DM8rCy4Wq4TpvK889hlnpD355erC9oKrM%3d&risl=&pid=ImgRaw&r=0' }} />
        <Text style={styles.heading2}>Transforming Dreams Into Reality</Text>

        </View>

        <View style={styles.container}>
          <Text style={styles.containerheading}>Our Campuses</Text>
          <View style={styles.boxview}>
            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${gehuImgUrl}`, name: 'gehu' })
            }} >
              <Image style={styles.img} source={{ uri: `${gehuImgUrl}` }} />
              <Text style={styles.textstyle}>Dehradun</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${bhimtalImgUrl}`, name: 'bhimtal' })
            }}>
              <Image style={styles.img} source={{ uri: `${bhimtalImgUrl}` }} />
              <Text style={styles.textstyle}>Bhimtal</Text></TouchableOpacity>

            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${haldwaniImgUrl}`, name: 'haldwani' })
            }}>
              <Image style={styles.img} source={{ uri: `${haldwaniImgUrl}` }} />
              <Text style={styles.textstyle}>Haldwani</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.containerheading}>Notifications</Text>
        </View>

        {admin && <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Add Notifications</Text>
        </Pressable>
        }
      </View>
    )
  }


  return (
    <View style={styles.root}>
      {/* <ScrollView> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text >Hello World!</Text> */}
            <View style={styles.intake}>
              <Text style={styles.label}>Date</Text>
              <TextInput style={styles.input} type="text" name='date' placeholder='Enter Date' onChangeText={(text) => setdetail({ ...detail, 'date': text })} />
            </View>
            <View style={styles.intake}>
              <Text style={styles.label}>Title</Text>
              <TextInput style={styles.input} type="text" name='title' onChangeText={(text) => setdetail({ ...detail, 'title': text })} />
            </View>
            <View style={styles.intake}>
              <Text style={styles.label}>Description</Text>
              <TextInput style={styles.input} type="text" name='description' multiline onChangeText={(text) => setdetail({ ...detail, 'description': text })} />
            </View>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                addNotification(detail)
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        // style={styles.boxes}
        data={notifications}
        keyExtractor={(key) => { return key._id }}
        renderItem={({ item }) => {
          // return <CompanyBox id={item._id} imgUrl={item.urlToImage} />
          return <NotificationBox data={item} />
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Headerflatlist />}
      />
      {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20
  },
  heading: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    // color:'blue'
    // fontFamily: 'arail'
  },
  heading2: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: "bold",
    color: 'red',
    // textAlign:"center"
    // fontFamily: 'T'
  },
  container: {
    marginTop: 30,
    marginHorizontal: 5,
  },
  containerheading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  boxview: {
    marginTop: 10,
    borderColor: 'black',
    // borderWidth: 2,
    // height:10,
    flexDirection: 'row',
    justifyContent:"center",
    // backgroundColor:'#cce6ff',
    borderColor: 'red',
    
  },
  textstyle: {
    fontWeight: "bold",
    textAlign:"center"
  },
  innerBody: {
    margin: 10,
    // marginLeft: 15,
    height: 110,
    // borderColor:'black',
    // borderWidth:1,
    width: 80,
    textAlign: 'center',

  },
  img: {

    height: 80,
    width: 80,
    marginBottom: 5,
    borderRadius: 10,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop: 5,
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#ff3333",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width:200,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  intake: {
    marginTop: 10,
    marginHorizontal: 20,

  },
})

export default Home