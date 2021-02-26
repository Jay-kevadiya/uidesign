import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { flashSaleData } from '../common/data';
import { useNavigation } from '@react-navigation/native';


export default FlashList = (props) => {

    const navigation = useNavigation();


    const renderFlashListItem = () => {
        return (
            <>
                {flashSaleData.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ProductScreen', { item: item })}>
                        <View style={styles.categoriesWrapper}>
                            <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.categoriesimageList} />
                            </View>

                            <View style={styles.textContainer}>
                                <View style={styles.textWrapper}>
                                    <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Bold', color: 'rgb(28,80,89)' }}>{item.name}</Text>
                                    <View style={styles.salesWrapper}>
                                        <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(28,80,89)' }}>{item.sales} Sales</Text>
                                        <View style={styles.iconText}>
                                            <Icon name="star" size={15} color="rgb(248,193,8)" />
                                            <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(28,80,89)' }}>{item.rating}</Text>
                                        </View>
                                    </View>

                                    <Text style={{ fontFamily: 'Roboto-Bold', color: 'rgb(28,80,89)' }}>{item.soldPercentage} % Sold</Text>

                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </>
        )
    }

    return (
        <View style={styles.container}>
            {/* Flash sales */}
             
                <View style={styles.flashWrapper}>
                <View style={styles.iconWrapper}>
                    <Icon name="megaphone-outline" size={25} color="rgb(96,144,161)" />
                    <Text style={styles.textStyle}>{props.titlename}</Text>
                </View>
            </View>
          
            
           

           

            {/* Items to be listed */}

            <View style={styles.itemContainer}>

                <View style={styles.itemWrapper}>

                    <FlatList
                        data={flashSaleData}
                        keyExtractor={item => item.id}
                         horizontal={props.horizontaltype}
                        renderItem={renderFlashListItem}
                        showsHorizontalScrollIndicator={false}
                        numColumns={props.lines}
                    />
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: "white",
        marginTop: 20
    },
    flashWrapper: {

    },
    iconWrapper: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        marginLeft: 20,
        fontFamily: 'Roboto-Bold',
        color: 'rgb(15,74,93)',
        fontSize: 20
    },
    itemContainer: {
        marginTop: 5
    },
    itemWrapper: {
        paddingTop: 15,
        marginBottom: 10
    },
    categoriesWrapper: {
        borderRadius: 20,
        position: 'relative',
    },
    imageContainer: {
        paddingHorizontal: 15
    },
    categoriesimageList: {
        height: 200,
        width: 150,
        marginLeft: 10,
        borderRadius: 10,
        paddingHorizontal: 50,

    },
    textContainer: {
        alignItems: 'center',
        position: 'relative',
        bottom: 50,
        left: 5,
        overflow: 'hidden',
        resizeMode: 'contain'



    },
    textWrapper: {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        width: 125,

    },
    salesWrapper: {
        flexDirection: 'row'
    },
    iconText: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
});