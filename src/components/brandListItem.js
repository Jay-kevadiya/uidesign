import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../components/detail';
import Review from '../components/review';
import HomeBrand from '../components/homeBarnd';



export default BrandListItem = (props) => {
    const item = props.route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={35} color="white" />
                </TouchableOpacity>
                <Image style={styles.imageStyle} source={item.item.logo} />
            </View>
            <MenuTabs {...props} title1="Home" title2="Detail" title3="Review" Tag1= {<HomeBrand test={item.item}/>} Tag2={<Detail />} Tag3={<Review {...props} />} />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageWrapper: {
        backgroundColor: 'rgb(85,210,225)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical:15
    },
    imageStyle: {
        // height:
        alignSelf: 'center',
        marginLeft: '25%',
        tintColor:'white'
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textStyle: {
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        backgroundColor: '#009DB0',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 20
    },
});