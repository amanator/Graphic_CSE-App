import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import adminContext from '../../Context/Admin/AdminContext'

export default function Box(props) {
    // console.log(props)
  let { _id, name, email, issue } = props.data
  const AdminCon = useContext(adminContext)
  let { admin, deleteContact } = AdminCon

  return (

      <View style={styles.container}>
    
          <Text style={styles.box_name}>Name : {name} </Text>
          <Text style={styles.box_email}>Email : {email}</Text>
          <Text style={styles.box_issue}>Issue : {issue}</Text>
 

        {admin && <TouchableOpacity style={styles.delete} onPress={() => {
          deleteContact(_id)
        }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Delete </Text>

        </TouchableOpacity>}
      </View>


  )
}

const styles = StyleSheet.create({

  container: {

    margin: 20,
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 5,
    paddingLeft:5

  },

  box_name: {
    marginVertical:3,
    fontWeight: "bold",
    padding: 1,
    fontSize: 15,
    // textAlign: "center"
  },
  box_email: {
    marginVertical:3,
    fontWeight:'bold',
    fontSize:15,
  },
  box_issue: {
    marginVertical:3,
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