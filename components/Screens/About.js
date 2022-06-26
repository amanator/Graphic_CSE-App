import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function About({navigation, route}) {
    console.log(route.params.imgUrl)
    return (
        <View style={styles.container}>
            {route.params.name === 'gehu' &&

            <ScrollView>
            <Image source={{ uri: `${route.params.imgUrl}` }} style={styles.image} />

            <Text style={styles.about}>Established vide Act No 12 of 2011 of Uttarakhand State Legislature
                {'\n'}
                {'\n'}
                University under Section 2 of the UGC Act, 1956 set up under the aegis of Graphic Era Educational Society, Dehradun. Founded in 2011 Graphic Era Hill University is today widely known for its innovative and rigorous education which has nurtured professionals across industries and sectors in India and beyond. Graphic Era Hill University has adopted a global approach to education and research with focus on International perspectives and expertise. University has abiding commitment to excellence and pursues this relentlessly settling for nothing, but the best. Its faculty is the bedrock of the University and composed of academic luminaries across India and abroad. GEHU is on the cutting edge of using state-of-the art equipment and preparing students for globalized economy and at the same time promoting holistic learning, unbiased knowledge ,industry centric skills, ethics, a cosmopolitan outlook and accountability for actions. GEHU is making its presence at national and international platforms, through collaborations with premier universities of the world, study abroad programs and international internships and research. {'\n'}
                Graphic Era Hill University offers comprehensive curriculum over a large number of degree programs in engineering, law, management, computer applications, humanities, applied sciences, animation, fashion designing, journalism and mass communication, Agriculture. These programs offer the students multiple academic pathways. The University has an abiding commitment to create excellent education opportunities for the youth hailing from the hills, at affordable cost. Therefore 25% concession in the fee is offered to the students of hill areas, across the country. University also offers unstinting support for community services, through its social responsibility endeavors.
            </Text>           
            </ScrollView>
            }
            {route.params.name === 'bhimtal' &&

            <ScrollView>
            <Image source={{ uri: `${route.params.imgUrl}` }} style={styles.image} />

            <Text style={styles.about}>Established vide Act No 12 of 2011 of Uttarakhand State Legislature
                {'\n'}
                {'\n'}
                Bhimtal
            </Text>           
            </ScrollView>
            }
            {route.params.name === 'haldwani' &&

            <ScrollView>
            <Image source={{ uri: `${route.params.imgUrl}` }} style={styles.image} />

            <Text style={styles.about}>Established vide Act No 12 of 2011 of Uttarakhand State Legislature
                {'\n'}
                {'\n'}
                Haldwani
            </Text>           
            </ScrollView>
            }
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom:10,
        // width: '100%',
        // height:'100%'
    },
    heading: {
        marginTop: 40,
        marginLeft:10,
        // flex:1,
        // textAlign: 'center',
        fontSize: 30,
        fontWeight:"bold",


    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    about:{
        margin:10,
        marginTop:20,
        height:'100%',
        
    }
})