import { View, Text, StyleSheet, TextInput, Button,  } from 'react-native'
import React, {useState, useContext} from 'react'
import adminContext from '../../Context/Admin/AdminContext'

const Admin = () => {
    const [detail, setdetail] = useState({ username: "", password: "" })

    const adminCon = useContext(adminContext)
    let {admin, login, logout} = adminCon

    const handleClick = () => {
        console.log(detail)
        if(!admin)
        {
            login(detail)
        }
        else
        {
            logout()
        }
      }
  return (
    <View style={styles.grevienceBox}>
      <Text style={styles.heading}>{admin? "Logout": "Login"}</Text>
        {!admin && <View style={styles.intake}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} type="text" name='username' onChangeText={(text) => setdetail({ ...detail, 'username': text })} />
        </View>}
       {!admin && <View style={styles.intake}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} type="password" name='password' onChangeText={(text) => setdetail({ ...detail, 'password': text })} />
        </View>}
        <View style={{ marginTop: 30, marginHorizontal: 120 }}>
          <Button title={admin?"Logout":"Login"} onPress={handleClick} />
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

export default Admin