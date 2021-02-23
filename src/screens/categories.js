import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import HomeHeader from '../components/homeHeader';
import Search from '../components/search';
import LeftCategory from '../components/leftCategory';


export default Categories = (props) => {
    return (
        <View style={styles.container}>
            <HomeHeader {...props} name="Categories" />
            <ScrollView>
                <Search {...props} onPressFilterButton={() => props.navigation.navigate('RightSlider')} />

                <LeftCategory />

            </ScrollView>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    catContainer: {
        paddingHorizontal: 20,
    },
    leftWrapper: {
        flexDirection: 'row'

    },
    imageTag: {
        backgroundColor: 'pink'
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