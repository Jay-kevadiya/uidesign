import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import myOrderData from '../common/myOrder';

export default MyOrders = () => {

    const renderMyOrders = ({ item }) => {

        return (
            <>

                <View style={styles.orderIdWrapper}>
                    <Text style={styles.orderText}>Order Id: {item.orderid}</Text>
                </View>

                <TouchableOpacity>

                    <View style={styles.mainTextWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.imageStyle} source={item.image} />
                        </View>

                        {/* <View style={styles.nameWrapper}>
                        <View style={styles.Wrapper1}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.textStyle}>$ {item.price}</Text>
                        </View>
                        <View style={styles.Wrapper2}>
                            <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>{item.status}</Text>
                            <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, paddingHorizontal: 5 }}>
                                <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>$X{item.qty}</Text>
                            </View>
                        </View>
                        <View style={styles.Wrapper3}>
                            <Text style={styles.textStyle}>{item.date}</Text>
                            <Text style={styles.textStyle}>{item.time}</Text>
                        </View>
                    </View> */}

                        <View style={styles.nameWrapper}>
                            <View style={styles.Wrapper1}>
                                <Text style={styles.textStyle}>{item.name}</Text>
                                <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>{item.status}</Text>
                                <Text style={styles.textStyle}>{item.date}</Text>
                                
                            </View>
                            <View style={styles.Wrapper2}>
                            <Text style={styles.textStyle}>$ {item.price}</Text>
                                <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, paddingHorizontal: 5 }}>
                                    <Text style={[styles.textStyle, { fontSize: 18, color: 'black' }]}>$X{item.qty}</Text>
                                </View>
                                <Text style={styles.textStyle}>{item.time}</Text>
                            </View>
                            
                        </View>

                    </View>
                </TouchableOpacity>

            </>
        )
    };
    return (
        <View style={styles.container}>


            <FlatList
                data={myOrderData}
                keyExtractor={item => item.id}
                renderItem={renderMyOrders}
            />

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
        width:'40%',
        paddingVertical:10


    },
    Wrapper2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'40%'

    },
    textStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#009db0',

    }
});