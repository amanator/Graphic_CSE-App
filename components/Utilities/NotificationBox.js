import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import notificationContext from '../../Context/Notifications/NotificationContext'
import adminContext from '../../Context/Admin/AdminContext'

export default function Box(props) {
    // console.log(props)
  let { _id, date, title, description } = props.data
  const context = useContext(notificationContext)
  const { deleteNotification } = context
  const AdminCon = useContext(adminContext)
  let { admin } = AdminCon

  return (

      <View style={styles.container}>
    
          <Text style={styles.box_date}>Date : {date} </Text>
          <Text style={styles.box_title}> {title}</Text>
          <Text style={styles.box_desc}> {description}</Text>
 

        {admin && <TouchableOpacity style={styles.delete} onPress={() => {
          deleteNotification(_id)
        }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Delete </Text>

        </TouchableOpacity>}
      </View>


  )
}

const styles = StyleSheet.create({

  container: {

    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,

  },

  box_date: {
    fontWeight: "bold",
    padding: 1,
    marginTop:5,
    marginLeft:5,
    fontSize: 15,
    // textAlign: "center"
  },
  box_title: {
    paddingHorizontal: 10,
    textAlign: "center",
    marginTop: 10,
    fontWeight:'bold',
    fontSize:20,
  },
  box_desc: {
    paddingHorizontal: 10,
    textAlign: "center",
    marginVertical: 10,
    fontWeight:'bold',
    fontSize:15,
   
  },
 
  delete: {
    // alignItems:'center',
    marginVertical: 10,
    marginHorizontal: 70,
    padding: 5,
    borderWidth: 2,
    backgroundColor: '#2196F3'
  }
})