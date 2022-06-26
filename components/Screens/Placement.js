import { View, StyleSheet, FlatList, Text, ScrollView, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import PlacementBox from '../Utilities/PlacementBox'
import CompanyBox from '../Utilities/CompanyBox';
// import data from '../data'
import Load from '../Loading';
import placementContext from '../../Context/Placement/PlacementContext';
import adminContext from '../../Context/Admin/AdminContext'
// import {REACT_APP_NEWS_API} from '@env'


export default function News(props) {
    // const { category } = props
    const context = useContext(placementContext)
    const { article, place, getplacement, addPlacement, addRecruiter } = context
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    useEffect(() => {
        setloading(true)
        getplacement()
        setloading(false)
    }, [])

    const AdminCon = useContext(adminContext)
    let { admin } = AdminCon

    const [loading, setloading] = useState(false)
    const [detail, setdetail] = useState({ name: "", imgUrl: "" })

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* <Text style={styles.heading}>Placements</Text> */}
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
                                <Text style={styles.label}>Name</Text>
                                <TextInput style={styles.input} type="text" name='name' onChangeText={(text) => setdetail({ ...detail, 'name': text })} />
                            </View>
                            <View style={styles.intake}>
                                <Text style={styles.label}>Image URL</Text>
                                <TextInput style={styles.input} type="text" name='imgUrl' onChangeText={(text) => setdetail({ ...detail, 'imgUrl': text })} />
                            </View>


                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => addPlacement(detail)}
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
                    <Text style={styles.textStyle}>Add Student</Text>
                </Pressable>}
                {loading ?
                    <Load /> :
                    <FlatList
                        style={styles.boxes}
                        data={article}
                        keyExtractor={(item) => { return item._id }}
                        renderItem={({ item }) => {
                            return <PlacementBox id={item._id} imgUrl={item.urlToImage} />
                        }}
                        showsHorizontalScrollIndicator={true}
                        horizontal={true}
                    />}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Corporate Resource Cell Team</Text>
                    <View style={styles.corporate}>
                        <Text style={{ fontWeight: 'bold' }}>Ms. Hemani Semwal </Text>
                        <Text>Mob: +91 9850068380 </Text>
                        <Text>Email: hemani.semwal@geu.ac.in </Text>
                    </View>
                    <View style={styles.corporate}>
                        <Text style={{ fontWeight: 'bold' }}>Dr. Rajesh Pokhriyal  </Text>
                        <Text>Mob: +91 7500674307 </Text>
                        <Text>Email: rajesh@geu.ac.in</Text>
                    </View>
                    <View style={styles.corporate}>
                        <Text style={{ fontWeight: 'bold' }}>Ms. Hemani Semwal </Text>
                        <Text>Mob: +91 9850068380 </Text>
                        <Text>Email: hemani.semwal@geu.ac.in </Text>
                    </View>
                    <View style={styles.corporate}>
                        <Text style={{ fontWeight: 'bold' }}>Ms. Hemani Semwal </Text>
                        <Text>Mob: +91 9850068380 </Text>
                        <Text>Email: hemani.semwal@geu.ac.in </Text>
                    </View>
                </View>
                <Text style={styles.heading}>Some of our Top Recruiters</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible2(!modalVisible2);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* <Text >Hello World!</Text> */}
                            
                            <View style={styles.intake}>
                                <Text style={styles.label}>Recruiter Image URL</Text>
                                <TextInput style={styles.input} type="text" name='imgUrl' onChangeText={(text) => setdetail({ ...detail, 'imgUrl': text })} />
                            </View>


                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => addRecruiter(detail)}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible2(!modalVisible2)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                {admin && <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible2(true)}
                >
                    <Text style={styles.textStyle}>Add Recruiter</Text>
                </Pressable>}
                {loading ?
                    <Load /> :
                    <FlatList
                        // style={styles.boxes}
                        data={place}
                        keyExtractor={(key) => { return key._id }}
                        renderItem={({ item }) => {
                            return <CompanyBox id={item._id} imgUrl={item.urlToImage} />
                        }}
                        showsVerticalScrollIndicator={true}
                    // horizontal={true}
                    />}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 40,
        marginLeft: 10,
        // width:"100%",
        // height:250,
        borderRadius: 5,
        borderColor: "red"

    },
    heading: {
        // flex:1,
        // textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: "bold",

    },
    boxes: {
        height: 200
    },
    corporate: {
        marginTop: 10,
        marginRight: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
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
