import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ColorData, SizeData } from '../common/data';


export default Product = (props) => {
    const { test } = props;

    const [colorselect, SetColor] = useState('1');
    const [sizeselect, SetSize] = useState('1');

    

    const renderColor = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => SetColor(item.id)}>
                <Text style={colorselect === item.id ?  {...styles.colorActive, backgroundColor: item.color } : {...styles.colorStyle, backgroundColor: item.color}}></Text>
            </TouchableOpacity>
        )
    };

    const renderSize = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => SetSize(item.id)}>
                <View style={ sizeselect === item.id ? styles.sizeActive : styles.sizeType}>
                <Text>{item.name}</Text>

                </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={styles.productContainer}>
            {/* text list */}

            <View style={styles.productborderOne}>
                <View style={styles.productTextWrapper}>
                    <View style={styles.productTextstyle}>
                        <Text style={styles.text}>{test.name}</Text>
                    </View>

                    <View style={styles.productRating}>
                        <Text style={styles.pText}>{test.rating}</Text>
                        <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
                    </View>
                </View>

                <View style={styles.priceWrapper}>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>$ {test.price}</Text>
                        <Text style={styles.mrpText}>$ {test.mrp}</Text>
                    </View>
                    <View style={styles.productSales}>
                        <Text style={styles.sales}>{test.sales} Sales</Text>
                    </View>
                </View>


            </View>

            <View style={styles.productborderTwo}>
                <View style={styles.selectColor}>
                    <Text style={styles.selectText}>Select Color</Text>
                    <Text style={styles.clearallText}>Clear All</Text>
                </View>

                <View style={styles.colors}>
                    <FlatList

                        data={ColorData}
                        renderItem={renderColor}
                        horizontal={true}
                        keyExtractor={item => item.id}
                    />

                </View>
            </View>

            <View style={styles.productborderThree}>
                <View style={styles.selectColor}>
                    <Text style={styles.selectText}>Select Color</Text>
                    <Text style={styles.clearallText}>Clear All</Text>
                </View>

                <View style={styles.colors}>
                    <FlatList

                        data={SizeData}
                        renderItem={renderSize}
                        horizontal={true}
                        keyExtractor={item => item.id}

                    />

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        backgroundColor: 'rgb(234,234,234)'
    },
    productborderOne: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    productTextWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productTextstyle: {

    },
    text: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
    productRating: {
        backgroundColor: 'rgb(37,94,113)',
        height: 40,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    pText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 16
    },
    priceWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    },
    mrpText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginLeft: 10

    },
    salesText: {
        color: 'rgb(37,94,113)'
    },
    productborderTwo: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    selectColor: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    selectText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 17
    },
    clearallText: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Medium',
        fontSize: 14
    },
    colors: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    productborderThree: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10

    },
    sizeActive:{
        borderColor:'#009db0',
        borderWidth:4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        height: 35,
        width: 35,
        marginRight:10
    },
    sizeType: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#009db0',
        borderRadius: 10,
        height: 35,
        width: 35,
        marginRight:10

    },
    colorActive:{
        borderColor:'#009db0',
        borderWidth:3,
        height: 35, 
        width: 35, 
        borderRadius: 20, 
        marginRight: 5 
    },
    colorStyle:{
        height: 35, 
        width: 35, 
        borderRadius: 20, 
        marginRight: 5 
    }
});