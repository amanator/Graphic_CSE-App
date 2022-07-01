import { View, StyleSheet, FlatList, Text, Modal, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import BoxFaculty from "../Utilities/BoxFaculty"
import facultyContext from '../../Context/Faculty/FacultyContext';
// import data from '../data'
import Load from '../Loading';
import adminContext from '../../Context/Admin/AdminContext'
// import {REACT_APP_NEWS_API} from '@env'


export default function News(props) {
    // const { category } = props
    const context = useContext(facultyContext)
    const { article, getfaculty, addFaculty } = context
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        getfaculty()
    }, [])

    const AdminCon = useContext(adminContext)
    let { admin, loading } = AdminCon

    const [detail, setdetail] = useState({ name: "", position: "", imgUrl: "" })

    const onChange = (e) => {
        setdetail({ ...detail, [e.target.name]: e.target.value })
    }


    // const [loading, setloading] = useState(false)


    return (
        <View style={styles.container}>
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
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.input} type="text" name='name' onChangeText={(text) => setdetail({ ...detail, 'name': text })} />
                        </View>
                        <View style={styles.intake}>
                            <Text style={styles.label}>Position</Text>
                            <TextInput style={styles.input} type="text" name='position' onChangeText={(text) => setdetail({ ...detail, 'position': text })} />
                        </View>
                        <View style={styles.intake}>
                            <Text style={styles.label}>Image URL</Text>
                            <TextInput style={styles.input} type="text" name='imgUrl' onChangeText={(text) => setdetail({ ...detail, 'imgUrl': text })} />
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() =>{ addFaculty(detail)
                                setModalVisible(!modalVisible)}}
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
                <Text style={styles.textStyle}>Add Faculty</Text>
            </Pressable>}
            {/* <Text style={styles.heading}>Faculty</Text> */}
            {loading ?
                <Load /> :
                <FlatList
                    style={styles.boxes}
                    data={article}
                    keyExtractor={(item) => { return item._id }}
                    renderItem={({ item }) => {
                        return <BoxFaculty id={item._id} name={item.name} position={item.position} imgUrl={item.urlToImage} />
                    }}
                    showsVerticalScrollIndicator={false}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 40,
        marginLeft: 10,
        // flex:1,
        // textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",

    },
    container: {

        margin: 10,
        marginTop: 20,
        marginBottom: 80

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
        marginTop:5,
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
