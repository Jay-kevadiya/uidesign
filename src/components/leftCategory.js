import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';


export default LeftCategory = (props) => {
    return (
        <View style={styles.catContainer}>
                    <View style={styles.leftWrapper}>
                        <View style={styles.imageTag}>
                            <ImageBackground style={{ height: 150, width: 170, flexDirection: 'column', alignItems: 'center', resizeMode: 'cover'}} source={require('../assets/image/back.jpg')}>
                                <Image style={styles.shoeStyle} source={props.imagedata} />
                                <Text style={styles.manText}>{props.text}</Text>
                            </ImageBackground>
                        </View>

                        <View style={styles.rightWrapper}>
                            <View style={styles.itemWrapper}>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert('sh')}>
                                        <Text style={styles.textdecor}>sh</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert('Sweater')}>
                                        <Text style={styles.textdecor}>Sweater</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={styles.itemWrapper}>
                                <View style={styles.itemStyle}>
                                    <TouchableOpacity onPress={() => alert('sh')}>
                                        <Text style={styles.textdecor}>Jacket</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert('Sweater')}>
                                        <Text style={styles.textdecor}>Socks</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
    )
};

const styles = StyleSheet.create({
    catContainer: {
        paddingHorizontal: 20,
    },
    leftWrapper: {
        flexDirection: 'row',

    },
    imageTag: {
        backgroundColor: 'pink',
    },
    shoeStyle: {
        height: 50,
        width: 50,
        marginTop: 20,
        tintColor: 'white'
    },
    manText: {
        color: 'white',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginTop: 10
    },
    rightWrapper: {
        backgroundColor: 'white',
        width: 195
    },
    itemWrapper: {
        backgroundColor: 'white'
    },
    itemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    textdecor: {
        borderWidth: 1,
        borderColor: 'rgb(34,168,187)',
        borderRadius: 10,
        padding: 5,
    }
});