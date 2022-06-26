import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Modal, Pressable, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import notificationContext from '../../Context/Notifications/NotificationContext'
import NotificationBox from "../Utilities/NotificationBox"
import adminContext from '../../Context/Admin/AdminContext'

const Home = ({ navigation }) => {
  let gehuImgUrl = "https://www.globaleducollege.com/images/college/featured/10/Graphic-Era-Hill-University.png"
  let bhimtalImgUrl = "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/347/2018/1/4/graphic-era-hill-(4).JPG"
  let haldwaniImgUrl = "https://images.shiksha.com/mediadata/images/1612415268phptDzpy4.jpeg"

  const context = useContext(notificationContext)
  const AdminCon = useContext(adminContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [detail, setdetail] = useState({ date: "", title: "", description:"" })
  let { notifications, addNotification } = context
  let { admin } = AdminCon

  console.log(admin)

  return (
    <View style={styles.root}>
      <ScrollView>

        <Text style={styles.heading}>Graphic Era Hill Univerity  </Text>
        <Text style={styles.heading2}>Transforming Dreams Into Reality</Text>

        <View style={styles.container}>
          <Text style={styles.containerheading}>Our Campuses</Text>
          <View style={styles.boxview}>
            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${gehuImgUrl}`, name: 'gehu' })
            }} >
              <Image style={styles.img} source={{ uri: `${gehuImgUrl}` }} />
              <Text>Dehradun</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${bhimtalImgUrl}`, name: 'bhimtal' })
            }}>
              <Image style={styles.img} source={{ uri: `${bhimtalImgUrl}` }} />
              <Text>Bhimtal</Text></TouchableOpacity>

            <TouchableOpacity style={styles.innerBody} onPress={() => {
              navigation.navigate('About', { imgUrl: `${haldwaniImgUrl}`, name: 'haldwani' })
            }}>
              <Image style={styles.img} source={{ uri: `${haldwaniImgUrl}` }} />
              <Text>Haldwani</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.containerheading}>Notifications</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text >Hello World!</Text> */}
              <View style={styles.intake}>
                <Text style={styles.label}>Date</Text>
                <TextInput style={styles.input} type="text" name='date' onChangeText={(text) => setdetail({ ...detail, 'date': text })} />
              </View>
              <View style={styles.intake}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} type="text" name='title' onChangeText={(text) => setdetail({ ...detail, 'title': text })} />
              </View>
              <View style={styles.intake}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} type="text" name='description' onChangeText={(text) => setdetail({ ...detail, 'description': text })} />
              </View>


              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => addNotification(detail)}
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
       {admin && <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Add Notifications</Text>
        </Pressable>
}
        <FlatList
          // style={styles.boxes}
          data={notifications}
          keyExtractor={(key) => { return key._id }}
          renderItem={({ item }) => {
            // return <CompanyBox id={item._id} imgUrl={item.urlToImage} />
            return <NotificationBox data={item} />
          }}
          showsVerticalScrollIndicator={true}

        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    margin: 20
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    // color:'blue'
    fontFamily: 'arial'
  },
  heading2: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'red'
  },
  container: {
    marginTop: 40,
    marginHorizontal: 5,
  },
  containerheading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  boxview: {
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    // height:10,
    flexDirection: 'row'
  },
  innerBody: {
    margin: 10,
    marginLeft: 15,
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
    backgroundColor: "#F194FF",
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
    paddingHorizontal: 10,
    borderRadius: 10
  },
  intake: {
    marginTop: 10,
    marginHorizontal: 20,

  },
})

export default Home