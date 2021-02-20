import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { BrandData } from '../common/Brand';
import Icon from 'react-native-vector-icons/Ionicons';


export default BrandItem = (props) => {
    const renderBrandListItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('BrandListItem', { item:item })}>
                <View style={styles.brandWrapper}>
                    <View style={styles.imagewrapper}>
                        <Image source={item.logo} style={{ borderRadius: 20, backgroundColor: item.color, tintColor:'white'}} />
                    </View>

                    <View style={styles.textWrapper}>
                        <View style={styles.titleStyle}>
                            <Text style={styles.brandStyle}>{item.brand}</Text>
                        </View>
                        <View style={styles.productWrapper}>
                            <Text>{item.product} Products</Text>
                            <View style={styles.rateingWrapper}>
                                <Icon name="star" size={20} color="gold" />
                                <Text>{item.rating}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>

                <View style={styles.itemWrapper}>

                    <FlatList
                        data={BrandData}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        renderItem={renderBrandListItem}
                        // showsHorizontalScrollIndicator={false}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {

        marginLeft: 10
    },
    itemWrapper: {
        marginVertical: 5
    },
    brandWrapper: {
        paddingHorizontal: 20,


    },
    imagewrapper: {
        position: 'relative',
    },
    textWrapper: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        paddingVertical: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        elevation: 2,
        shadowRadius: 15,
        shadowColor: 'black',
        position: 'relative',
        bottom: 30,
    },
    titleStyle: {

    },
    brandStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'rgb(0,157,177)'
    },
    productWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rateingWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }

});