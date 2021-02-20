import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { flashSaleData } from '../common/data';
import ProductScreen from '../screens/productScreen';
import { useNavigation } from '@react-navigation/native';



export default TrendingList = (props) => {

    const navigation = useNavigation();

    const renderTrendListItem = () => {
        return (
            flashSaleData.map(item => (
                <TouchableOpacity key={item.id} onPress={() =>navigation.navigate('ProductScreen', { item:item })}>
                <View style={styles.categoriesWrapper}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.categoriesimageList} />

                        <View style={styles.textWrapper}>
                        <Text  style={{fontFamily:'Roboto-Bold', color:'rgb(28,80,89)'}}>{item.name}</Text>
                        <Text  style={{fontFamily:'Roboto-Bold', color:'rgb(28,80,89)'}}>$ {item.price}</Text>
                    </View>
                    </View>

                    
                </View>


            </TouchableOpacity>
            ))
        )
    }

    return (

        <View style={styles.container}>

            {/* Trend text */}
            <View style={styles.trendContainer}>
                <View style={styles.iconWrapper}>
                    <Icon name="flash-outline" size={25} color="rgb(26,79,94)" />
                </View>
                <View>
                    <Text style={styles.textStyle}>Trending Now</Text>
                </View>
            </View>

            {/* Trend Items */}

            <View style={styles.itemContainer}>

                <View style={styles.itemWrapper}>

                    <FlatList
                        data={flashSaleData}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={renderTrendListItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    trendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
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
        paddingHorizontal: 15,
        position:'relative'
        
    },
    categoriesimageList: {
        height: 200,
        width: 150,
        marginLeft: 10,
        borderRadius: 10,
        paddingHorizontal: 50,

    },
    textWrapper:{
        backgroundColor:'white',
        // alignItems: 'center',
        marginLeft: 10,
        position: 'relative',
        bottom: 35
    }
});