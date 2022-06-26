import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import placementContext from '../../Context/Placement/PlacementContext';
import adminContext from '../../Context/Admin/AdminContext'

export default function Box(props) {
    let { id, imgUrl } = props
    const context = useContext(placementContext)
    const { deletePlacement } = context

    const AdminCon = useContext(adminContext)
    let { admin } = AdminCon
    
    return (


        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={imgUrl != null ? { uri: `${imgUrl}` } : require('../../assets/bn.png')} />
            {admin && <TouchableOpacity style={styles.delete} onPress={()=>{
              deletePlacement(id)
            }}>
            <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}>Delete </Text>

            </TouchableOpacity>}
        </View>


    )
}

const styles = StyleSheet.create({

    leader: {
        paddingHorizontal: 30
    },
    container: {
        width: 350,
        heiht:"100%",
        marginTop: 20,
        borderColor: "black",
        borderWidth: 2,

    },
    image:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    delete: {
        // alignItems:'center',
        marginVertical: 10,
        marginHorizontal: 70,
        padding: 5,
        borderWidth: 2,
        backgroundColor: '#2196F3',
    
    
      }

    

})