import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import placementContext from '../../Context/Placement/PlacementContext';
import adminContext from '../../Context/Admin/AdminContext'

export default function CompanyBox(props) {
  let {id, imgUrl } = props
  const context = useContext(placementContext)
    const { deleteRecruiter } = context

    const AdminCon = useContext(adminContext)
    let { admin } = AdminCon

  return (
    <View style={styles.leader}>

      <View style={styles.container}>
        <Image style={styles.image} source={imgUrl != null ? { uri: `${imgUrl}` } : require('../../assets/bn.png')} />
        {admin && <TouchableOpacity style={styles.delete} onPress={() => {
          deleteRecruiter(id)
        }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Delete </Text>

        </TouchableOpacity>
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  leader: {
    paddingHorizontal: 30
  },
  container: {

    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,

  },
  box: {
    marginVertical: 10,
    marginHorizontal: 4,
  },
  image: {
    // width: "100%",
    // height: undefined,
    // aspectRatio: 1,
    height: 243,
    width: 286
  },
  box_title: {
    fontWeight: "bold",
    padding: 1,
    fontSize: 18,
    textAlign: "center"
  },
  box_desc: {
    paddingHorizontal: 10,
    textAlign: "center",
    marginTop: 5
  },
  box_src: {
    paddingHorizontal: 10,
    textAlign: "left",
    marginTop: 5
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