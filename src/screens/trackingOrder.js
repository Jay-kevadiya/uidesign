import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { OrderData } from '../common/data';


export default TrackingOrder = (props) => {

    const STAR_IMAGE = require('../assets/image/STAR.png')

    const { item } = props.route.params;

    const renderProcessList = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.processWrapper}>
                    <Text style={[styles.trackingText, { backgroundColor: item.status === 'true' ? item.active : item.inactive }]}></Text>
                    <Text style={[styles.textName, { color: item.status === 'true' ? '#009db0' : 'lightblue' }]}>{item.name}</Text>
                </View>
                {item.id == '5'?
                    <></>
                    :
                    <View>
                        <View style={[styles.lineStyle, { borderColor: item.status === 'true' ? '#009db0' : 'gery'}]}></View>
                    </View>
                }

                

            </View>
        )
    };
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.orderIdWrapper}>
                    <Text style={styles.orderText}>Order Id: {item.orderid}</Text>
                </View>

                <View style={styles.mainTextWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.imageStyle} source={item.image} />
                    </View>

                    <View style={styles.nameWrapper}>
                        <View style={styles.Wrapper1}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>{item.status}</Text>
                            <Text style={styles.textStyle}>{item.date}</Text>

                        </View>
                        <View style={styles.Wrapper2}>
                            <Text style={styles.textStyle}>$ {item.price}</Text>
                            <View style={styles.timeWrapper}>
                                <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>$X{item.qty}</Text>
                            </View>
                            <Text style={styles.textStyle}>{item.time}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={OrderData}
                    keyExtractor={item => item.id}
                    renderItem={renderProcessList}
                    numColumns={1}
                />
            </View>

            <View style={styles.footerWrapper}>
                <View style={styles.rateText}>
                    <Text style={styles.textRate1}>How would you rate this store?</Text>
                    <Text style={styles.textRate2}>Click on the stars below to leave comments</Text>
                </View>

                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={50}
                />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    orderIdWrapper: {
        backgroundColor: '#EAEAEA',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    orderText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#009db0'
    },
    mainTextWrapper: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    imageWrapper: {
        paddingVertical: 10,
        width: '20%'
    },
    imageStyle: {
        height: 70,
        width: 40
    },
    nameWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'


    },
    Wrapper1: {
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        width: '40%',
        paddingVertical: 10


    },
    Wrapper2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '40%'

    },
    textStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#009db0',

    },
    processWrapper: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    mainContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    textName: {
        fontFamily: 'Roboto-Bold',
        paddingHorizontal: 20,
        fontSize: 18,
    },
    footerWrapper: {
        backgroundColor: 'white',
        padding: 10,
    },
    rateText: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10
    },
    textRate1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#009db0'
    },
    textRate2: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: 'black'

    },
    trackingText: {
        width: 25,
        height: 25,
        padding: 10,
        borderRadius: 20
    },
    lineStyle: {
        borderWidth: 1,
        width: 1,
        height: 40,
        marginLeft: 30,
        marginTop: 10
    },
    timeWrapper: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5
    }
});